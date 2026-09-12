import "dotenv/config";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { runAgentTurn, MODEL } from "./agent.js";
import {
  listConversations,
  loadConversation,
  saveConversation,
  deleteConversation,
  newConversationId,
} from "./memory.js";

if (!process.env.OPENROUTER_API_KEY) {
  console.error("OPENROUTER_API_KEY manquante. Copie .env.example vers .env et renseigne ta clé.");
  process.exit(1);
}

// Bound to localhost by default: this exposes tools (call_api, code_execution)
// that run with your local machine's privileges — don't put it on a public
// or shared network interface without adding real authentication first.
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = Number(process.env.PORT ?? 3939);

const PUBLIC_DIR = path.resolve(import.meta.dirname, "../public");

async function readJsonBody(req: import("node:http").IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
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
      const body = (await readJsonBody(req)) as { conversationId?: string; message?: string };
      const conversationId = body.conversationId;
      const message = (body.message ?? "").trim();
      if (!conversationId) {
        sendJson(res, 400, { error: "conversationId manquant." });
        return;
      }
      if (!message) {
        sendJson(res, 400, { error: "Message vide." });
        return;
      }
      const history = await loadConversation(conversationId);
      const { text, history: updated } = await runAgentTurn(history, message);
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
