import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import type { ChatMessage } from "./agent.js";

const MEMORY_DIR = path.resolve(import.meta.dirname, "../memory");
const HISTORY_PATH = path.join(MEMORY_DIR, "history.json");

// Bound growth: keep the most recent messages only, so both the on-disk
// file and the context sent to the model stay a fixed, predictable size.
const MAX_MESSAGES = 60;

export async function loadHistory(): Promise<ChatMessage[]> {
  try {
    const raw = await readFile(HISTORY_PATH, "utf-8");
    return JSON.parse(raw) as ChatMessage[];
  } catch {
    return [];
  }
}

export async function saveHistory(history: ChatMessage[]): Promise<void> {
  await mkdir(MEMORY_DIR, { recursive: true });
  const trimmed = history.slice(-MAX_MESSAGES);
  await writeFile(HISTORY_PATH, JSON.stringify(trimmed, null, 2), "utf-8");
}

export async function clearHistory(): Promise<void> {
  await rm(HISTORY_PATH, { force: true });
}
