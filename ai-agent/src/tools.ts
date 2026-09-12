import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { lookup } from "node:dns/promises";
import { betaZodTool } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod/v4";

// Sandbox root for the file/RAG tool: the agent can only read files under
// this directory, never anywhere else on disk.
const KNOWLEDGE_DIR = path.resolve(import.meta.dirname, "../knowledge");

function resolveInsideKnowledgeDir(relativePath: string): string {
  const resolved = path.resolve(KNOWLEDGE_DIR, relativePath);
  if (resolved !== KNOWLEDGE_DIR && !resolved.startsWith(KNOWLEDGE_DIR + path.sep)) {
    throw new Error("Chemin refusé : en dehors du dossier knowledge/.");
  }
  return resolved;
}

export const listFiles = betaZodTool({
  name: "list_files",
  description:
    "Liste les fichiers disponibles dans la base de connaissances locale (dossier knowledge/).",
  inputSchema: z.object({}),
  run: async () => {
    const entries = await readdir(KNOWLEDGE_DIR, { recursive: true, withFileTypes: true });
    const files = entries.filter((e) => e.isFile()).map((e) => path.join(e.parentPath ?? "", e.name));
    return files.length > 0 ? files.join("\n") : "(dossier knowledge/ vide)";
  },
});

export const readLocalFile = betaZodTool({
  name: "read_file",
  description:
    "Lit le contenu d'un fichier texte de la base de connaissances locale (dossier knowledge/). Utilise list_files d'abord pour connaître les chemins disponibles.",
  inputSchema: z.object({
    path: z.string().describe("Chemin relatif au dossier knowledge/, ex: notes/produit.md"),
  }),
  run: async (input) => {
    const filePath = resolveInsideKnowledgeDir(input.path);
    try {
      return await readFile(filePath, "utf-8");
    } catch {
      return `Erreur : impossible de lire "${input.path}".`;
    }
  },
});

// Basic SSRF guard: the agent picks the URL autonomously, so block requests
// aimed at loopback/private/link-local addresses before they leave the box.
const BLOCKED_IP_RANGES = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^169\.254\./,
  /^0\./,
  /^::1$/,
  /^fe80:/i,
  /^fc00:/i,
  /^fd/i,
];

async function assertPublicHost(hostname: string): Promise<void> {
  if (hostname === "localhost") {
    throw new Error("Hôte refusé (localhost).");
  }
  const { address } = await lookup(hostname);
  if (BLOCKED_IP_RANGES.some((re) => re.test(address))) {
    throw new Error(`Hôte refusé (adresse privée/locale résolue : ${address}).`);
  }
}

export const callApi = betaZodTool({
  name: "call_api",
  description:
    "Appelle une API HTTP(S) externe et renvoie la réponse (statut + corps tronqué à 4000 caractères). N'accepte que http/https et refuse les hôtes privés/locaux.",
  inputSchema: z.object({
    url: z.string().url(),
    method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).default("GET"),
    headers: z.record(z.string(), z.string()).optional().describe("En-têtes HTTP additionnels"),
    body: z.string().optional().describe("Corps de la requête (JSON déjà sérialisé en string, si besoin)"),
  }),
  run: async (input) => {
    const url = new URL(input.url);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "Erreur : seuls les protocoles http/https sont autorisés.";
    }
    try {
      await assertPublicHost(url.hostname);
    } catch (err) {
      return `Erreur : ${(err as Error).message}`;
    }

    const res = await fetch(url, {
      method: input.method,
      headers: input.headers,
      body: input.body,
    });
    const text = await res.text();
    const truncated = text.length > 4000 ? text.slice(0, 4000) + "\n...(tronqué)" : text;
    return `Statut HTTP: ${res.status}\n${truncated}`;
  },
});

// Server-side tools: run on Anthropic's infrastructure, no `run` function.
export const webSearch = { type: "web_search_20260209", name: "web_search" } as const;
export const codeExecution = { type: "code_execution_20260120", name: "code_execution" } as const;

export const allTools = [listFiles, readLocalFile, callApi, webSearch, codeExecution];
