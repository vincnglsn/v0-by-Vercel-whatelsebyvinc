# Agent autonome — CLI

Agent en ligne de commande basé sur [OpenRouter](https://openrouter.ai) (API
compatible OpenAI, passerelle vers de nombreux modèles — dont des modèles
gratuits), avec appel d'outils : recherche web, exécution de code, lecture de
fichiers locaux (`knowledge/`) et appels à des API externes.

## Démarrage

```bash
cd ai-agent
npm install
cp .env.example .env
# renseigne OPENROUTER_API_KEY dans .env (clé sur openrouter.ai/keys)
npm run chat
```

Tape ta demande dans le prompt `>`. `reset` pour effacer la mémoire, `exit`
pour quitter. La conversation est sauvegardée dans `memory/history.json` et
rechargée au prochain lancement — l'agent se souvient d'une session à
l'autre (limité aux 60 derniers messages pour rester borné).

## Architecture

- `src/tools.ts` — définition des 4 outils (format JSON Schema, appel de
  fonction OpenAI-compatible) :
  - `list_files` / `read_file` : lecture restreinte au dossier `knowledge/`
  - `call_api` : appel HTTP générique (bloque les hôtes privés/locaux)
  - `web_search` : recherche best-effort via DuckDuckGo (scraping HTML, sans
    clé — fragile, à remplacer par une vraie API de recherche si besoin de
    fiabilité : Tavily, Brave Search, SerpAPI...)
  - `code_execution` : exécute du JavaScript dans `node:vm` — **pas un vrai
    sandbox de sécurité**, adapté à un usage local mono-utilisateur, jamais à
    un agent exposé à des entrées non fiables
- `src/agent.ts` — boucle agentique (ReAct) manuelle : appelle le modèle,
  exécute les outils demandés, renvoie les résultats, jusqu'à ce qu'il n'y
  ait plus d'appel d'outil (ou 8 itérations max, garde-fou anti-boucle).
  Le prompt système (avec la date du jour) est régénéré à chaque tour, même
  avec un historique chargé depuis le disque.
- `src/memory.ts` — persistance de l'historique de conversation
  (`memory/history.json`, non versionné — données personnelles)
- `src/index.ts` — REPL en ligne de commande

## Étendre l'agent

Ajoute un nouvel outil dans `src/tools.ts` (objet `ToolDef` avec `name`,
`description`, `parameters` en JSON Schema, et `run`), puis ajoute-le au
tableau `allTools`.

## Modèle

Utilise `openrouter/free` par défaut : le routeur d'OpenRouter qui sélectionne
automatiquement un modèle gratuit compatible avec l'appel d'outils (évite de
coder en dur un modèle précis, la liste des modèles gratuits change souvent).
Pour fixer un modèle précis, remplace la constante `MODEL` dans
`src/agent.ts` par un ID exact, ex. `"meta-llama/llama-3.3-70b-instruct:free"`
(voir [openrouter.ai/models](https://openrouter.ai/models) pour la liste à
jour).
