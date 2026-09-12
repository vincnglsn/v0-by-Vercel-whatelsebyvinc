import "dotenv/config";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ChatCompletionContentPart } from "openai/resources/index.js";
import { runAgentTurn, checkBackendReady, MODEL } from "./agent.js";
import {
  listConversations,
  loadConversation,
  saveConversation,
  deleteConversation,
  newConversationId,
} from "./memory.js";
import { buildAttachmentParts, type AttachmentInput } from "./attachments.js";

const backendProblem = await checkBackendReady();
if (backendProblem) {
  console.error(backendProblem);
  process.exit(1);
}

// Bound to localhost by default: this exposes tools (call_api, code_execution)
// that run with your local machine's privileges — don't put it on a public
// or shared network interface without adding real authentication first.
// To reach it from another device (e.g. a phone) without exposing it to the
// public internet, set HOST=0.0.0.0 and connect over a private network such
// as Tailscale (see README) rather than port-forwarding on your router.
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = Number(process.env.PORT ?? 3939);

const PUBLIC_DIR = path.resolve(import.meta.dirname, "../public");

// Small explicit allowlist for PWA assets — avoids resolving arbitrary
// request paths against the filesystem.
const STATIC_FILES: Record<string, string> = {
  "/manifest.json": "application/json",
  "/icons/apple-touch-icon.png": "image/png",
  "/icons/icon-192.png": "image/png",
  "/icons/icon-512.png": "image/png",
};

// Generous enough for a base64-encoded attachment (attachments.ts caps the
// decoded file at 8 MB; base64 adds ~33% overhead) plus JSON framing.
const MAX_BODY_BYTES = 12 * 1024 * 1024;

async function readJsonBody(req: import("node:http").IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of req) {
    total += (chunk as Buffer).length;
    if (total > MAX_BODY_BYTES) {
      throw new Error(`Requête trop volumineuse (max ${MAX_BODY_BYTES / (1024 * 1024)} Mo).`);
    }
    chunks.push(chunk as Buffer);
  }
  const raw = Buffer.concat(chunks).toString("utf-8");
  return raw ? JSON.parse(raw) : {};
}

function sendJson(res: import("node:http").ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");

    if (req.method === "GET" && url.pathname === "/") {
      const html = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf-8");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }

    const staticContentType = STATIC_FILES[url.pathname];
    if (req.method === "GET" && staticContentType) {
      const data = await readFile(path.join(PUBLIC_DIR, url.pathname));
      res.writeHead(200, { "Content-Type": staticContentType });
      res.end(data);
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/conversations") {
      sendJson(res, 200, { conversations: await listConversations() });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/conversations") {
      sendJson(res, 200, { id: newConversationId() });
      return;
    }

    const convMatch = url.pathname.match(/^\/api\/conversations\/([^/]+)$/);
    if (convMatch) {
      const id = decodeURIComponent(convMatch[1]);
      if (req.method === "GET") {
        sendJson(res, 200, { messages: await loadConversation(id) });
        return;
      }
      if (req.method === "DELETE") {
        await deleteConversation(id);
        sendJson(res, 200, { ok: true });
        return;
      }
    }

    if (req.method === "POST" && url.pathname === "/api/chat") {
      const body = (await readJsonBody(req)) as {
        conversationId?: string;
        message?: string;
        attachment?: AttachmentInput;
      };
      const conversationId = body.conversationId;
      const message = (body.message ?? "").trim();
      if (!conversationId) {
        sendJson(res, 400, { error: "conversationId manquant." });
        return;
      }
      if (!message && !body.attachment) {
        sendJson(res, 400, { error: "Message ou pièce jointe requis." });
        return;
      }

      let userContent: string | ChatCompletionContentPart[] = message;
      if (body.attachment) {
        const built = await buildAttachmentParts(body.attachment);
        if ("error" in built) {
          sendJson(res, 400, { error: built.error });
          return;
        }
        const parts: ChatCompletionContentPart[] = [];
        if (message) parts.push({ type: "text", text: message });
        parts.push(...built.parts);
        userContent = parts;
      }

      const history = await loadConversation(conversationId);
      const { text, history: updated } = await runAgentTurn(history, userContent);
      await saveConversation(conversationId, updated);
      sendJson(res, 200, { text });
      return;
    }

    sendJson(res, 404, { error: "Not found" });
  } catch (err) {
    console.error(err);
    sendJson(res, 500, { error: (err as Error).message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Modèle : ${MODEL}`);
  console.log(`Agent autonome disponible sur http://${HOST}:${PORT}`);
});
