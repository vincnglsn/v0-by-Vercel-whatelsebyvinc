import OpenAI from "openai";
import type { ChatCompletionMessageParam, ChatCompletionTool, ChatCompletionContentPart } from "openai/resources/index.js";
import { allTools, type ToolDef } from "./tools.js";

// Defaults to OpenRouter's free-model router (needs LLM_API_KEY). A local
// Ollama install is free and uncapped but needs real CPU/GPU headroom — set
// LLM_BASE_URL=http://localhost:11434/v1 (no key needed) if your machine can
// handle it; it choked and froze on a modest PC, hence not the default.
export const BASE_URL = process.env.LLM_BASE_URL ?? "https://openrouter.ai/api/v1";
export const MODEL = process.env.LLM_MODEL ?? "openrouter/free";
const client = new OpenAI({
  apiKey: process.env.LLM_API_KEY ?? "ollama", // ignored by Ollama; required by the SDK regardless.
  baseURL: BASE_URL,
});

const MAX_TOOL_ITERATIONS = 8;

function buildSystemPrompt(): string {
  const today = new Date().toISOString().slice(0, 10);
  return `Tu es un agent autonome. Nous sommes le ${today}.
Tu peux chercher sur le web, exécuter du code JavaScript, lire des fichiers dans la base de
connaissances locale (knowledge/) et appeler des API externes.
Décompose les tâches complexes en étapes, utilise les outils quand c'est utile, et donne une
réponse finale claire et directe une fois le travail terminé.
Si un outil échoue ou ne renvoie aucun résultat exploitable, dis-le explicitement plutôt que de
répondre à partir de tes connaissances d'entraînement (surtout pour des faits datés ou récents) —
elles peuvent être obsolètes ou antérieures à la date du jour ci-dessus.`;
}

const toolsByName = new Map<string, ToolDef>(allTools.map((t) => [t.name, t]));

const toolSchemas: ChatCompletionTool[] = allTools.map((t) => ({
  type: "function",
  function: { name: t.name, description: t.description, parameters: t.parameters },
}));

export type ChatMessage = ChatCompletionMessageParam;

/**
 * Best-effort startup check: for a local Ollama URL, is Ollama actually
 * running and is the configured model pulled? For anything else (a cloud
 * provider), is an API key set? Returns a human-readable problem
 * description, or null if everything looks fine.
 */
export async function checkBackendReady(): Promise<string | null> {
  const isLocalOllama = /^https?:\/\/(localhost|127\.0\.0\.1):11434\//.test(BASE_URL);
  if (!isLocalOllama) {
    return process.env.LLM_API_KEY
      ? null
      : "LLM_API_KEY manquante dans .env pour ce fournisseur cloud.";
  }

  const tagsUrl = BASE_URL.replace(/\/v1\/?$/, "/api/tags");
  let names: string[];
  try {
    const res = await fetch(tagsUrl);
    if (!res.ok) return null;
    const data = (await res.json()) as { models?: { name: string }[] };
    names = (data.models ?? []).map((m) => m.name);
  } catch {
    return "Impossible de joindre Ollama sur localhost:11434. Installe/lance-le depuis https://ollama.com/download.";
  }

  const modelBase = MODEL.split(":")[0];
  if (!names.some((n) => n === MODEL || n.startsWith(`${modelBase}:`))) {
    return `Le modèle "${MODEL}" n'est pas installé. Lance : ollama pull ${MODEL}`;
  }
  return null;
}

/**
 * Runs one agent turn as a manual ReAct loop: ask the model, execute any
 * requested tools, feed results back, repeat until it stops calling tools
 * (or MAX_TOOL_ITERATIONS is hit, to avoid runaway loops on a flaky free model).
 */
export async function runAgentTurn(
  history: ChatMessage[],
  userInput: string | ChatCompletionContentPart[],
): Promise<{ text: string; history: ChatMessage[] }> {
  // Rebuild the system message fresh every turn (it carries today's date) —
  // never trust a persisted copy, which could be days stale.
  const messages: ChatMessage[] = [
    { role: "system", content: buildSystemPrompt() },
    ...history.filter((m) => m.role !== "system"),
    { role: "user", content: userInput },
  ];

  for (let i = 0; i < MAX_TOOL_ITERATIONS; i++) {
    const response = await client.chat.completions.create({
      model: MODEL,
      messages,
      tools: toolSchemas,
    });

    const choice = response.choices[0];
    if (!choice) {
      throw new Error("L'agent n'a renvoyé aucune réponse.");
    }
    const message = choice.message;
    messages.push(message);

    if (!message.tool_calls || message.tool_calls.length === 0) {
      return { text: message.content ?? "", history: messages.filter((m) => m.role !== "system") };
    }

    for (const call of message.tool_calls) {
      if (call.type !== "function") continue;
      const tool = toolsByName.get(call.function.name);
      let result: string;
      if (!tool) {
        result = `Erreur : outil inconnu "${call.function.name}".`;
      } else {
        try {
          const args = call.function.arguments ? JSON.parse(call.function.arguments) : {};
          result = await tool.run(args);
        } catch (err) {
          result = `Erreur : ${(err as Error).message}`;
        }
      }
      console.error(
        `[debug] iter ${i + 1}: ${call.function.name}(${call.function.arguments}) -> ${result.slice(0, 300)}${result.length > 300 ? "…" : ""}`,
      );
      messages.push({ role: "tool", tool_call_id: call.id, content: result });
    }
  }

  return {
    text: "L'agent a atteint la limite d'itérations d'outils sans conclure.",
    history: messages.filter((m) => m.role !== "system"),
  };
}
