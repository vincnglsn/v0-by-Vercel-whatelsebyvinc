import { readFile, writeFile, mkdir, rm, readdir } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import type { ChatMessage } from "./agent.js";

const MEMORY_DIR = path.resolve(import.meta.dirname, "../memory");
const CONV_DIR = path.join(MEMORY_DIR, "conversations");
const LEGACY_HISTORY_PATH = path.join(MEMORY_DIR, "history.json"); // pre-multi-conversation format

// Bound growth: keep the most recent messages only, so both each on-disk
// file and the context sent to the model stay a fixed, predictable size.
const MAX_MESSAGES = 60;

export interface ConversationMeta {
  id: string;
  title: string;
  updatedAt: string;
}

interface ConversationFile extends ConversationMeta {
  messages: ChatMessage[];
}

function convPath(id: string): string {
  return path.join(CONV_DIR, `${id}.json`);
}

function textOf(content: ChatMessage["content"]): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map((part) => ("text" in part ? part.text : "")).join("");
  }
  return "";
}

function deriveTitle(messages: ChatMessage[]): string {
  const firstUser = messages.find((m) => m.role === "user");
  const text = firstUser ? textOf(firstUser.content).trim() : "";
  if (!text) return "Nouvelle discussion";
  return text.length > 50 ? text.slice(0, 50) + "…" : text;
}

async function readConversationFile(id: string): Promise<ConversationFile | null> {
  try {
    const raw = await readFile(convPath(id), "utf-8");
    return JSON.parse(raw) as ConversationFile;
  } catch {
    return null;
  }
}

/** One-time move of the old single-history format into conversations/cli.json. */
async function migrateLegacyHistory(): Promise<void> {
  try {
    const raw = await readFile(LEGACY_HISTORY_PATH, "utf-8");
    const messages = JSON.parse(raw) as ChatMessage[];
    const alreadyMigrated = await readConversationFile("cli");
    if (!alreadyMigrated) {
      await saveConversation("cli", messages);
    }
    await rm(LEGACY_HISTORY_PATH, { force: true });
  } catch {
    // No legacy file, or already handled — nothing to do.
  }
}

export async function listConversations(): Promise<ConversationMeta[]> {
  await mkdir(CONV_DIR, { recursive: true });
  await migrateLegacyHistory();
  const files = await readdir(CONV_DIR);
  const metas: ConversationMeta[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = await readConversationFile(path.basename(file, ".json"));
    if (data) metas.push({ id: data.id, title: data.title, updatedAt: data.updatedAt });
  }
  metas.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  return metas;
}

export async function loadConversation(id: string): Promise<ChatMessage[]> {
  await migrateLegacyHistory();
  const data = await readConversationFile(id);
  return data?.messages ?? [];
}

export async function saveConversation(id: string, messages: ChatMessage[]): Promise<void> {
  await mkdir(CONV_DIR, { recursive: true });
  const existing = await readConversationFile(id);
  const trimmed = messages.slice(-MAX_MESSAGES);
  const data: ConversationFile = {
    id,
    title: existing?.title ?? deriveTitle(trimmed),
    updatedAt: new Date().toISOString(),
    messages: trimmed,
  };
  await writeFile(convPath(id), JSON.stringify(data, null, 2), "utf-8");
}

export async function deleteConversation(id: string): Promise<void> {
  await rm(convPath(id), { force: true });
}

export function newConversationId(): string {
  return randomUUID();
}
