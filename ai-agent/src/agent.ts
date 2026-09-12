import OpenAI from "openai";
import type { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index.js";
import { allTools, type ToolDef } from "./tools.js";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    // Optional but recommended by OpenRouter for attribution/rate-limit fairness.
    "HTTP-Referer": "https://github.com/",
    "X-Title": "ai-agent-cli",
  },
});

// Auto-router to a zero-cost model that supports tool calling — avoids
// hardcoding one specific free model, which OpenRouter's free lineup churns.
const MODEL = "openrouter/free";
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
 * Runs one agent turn as a manual ReAct loop: ask the model, execute any
 * requested tools, feed results back, repeat until it stops calling tools
 * (or MAX_TOOL_ITERATIONS is hit, to avoid runaway loops on a flaky free model).
 */
export async function runAgentTurn(
  history: ChatMessage[],
  userInput: string,
): Promise<{ text: string; history: ChatMessage[] }> {
  const messages: ChatMessage[] = [
    ...(history.length === 0 ? [{ role: "system", content: buildSystemPrompt() } as ChatMessage] : history),
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
      return { text: message.content ?? "", history: messages };
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
    history: messages,
  };
}
