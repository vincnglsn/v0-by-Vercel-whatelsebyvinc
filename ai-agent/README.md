# Agent autonome — CLI

Agent en ligne de commande basé sur l'API Claude (Anthropic), avec appel
d'outils : recherche web, exécution de code, lecture de fichiers locaux
(`knowledge/`) et appels à des API externes.

## Démarrage

```bash
cd ai-agent
pnpm install   # ou npm install / yarn
cp .env.example .env
# renseigne ANTHROPIC_API_KEY dans .env
pnpm chat      # ou npm run chat
```

Tape ta demande dans le prompt `>`. `exit` pour quitter. La conversation
garde son historique tant que tu ne relances pas le process.

## Architecture

- `src/tools.ts` — définition des 4 outils :
  - `list_files` / `read_file` : lecture restreinte au dossier `knowledge/`
  - `call_api` : appel HTTP générique (bloque les hôtes privés/locaux)
  - `web_search`, `code_execution` : outils serveur Anthropic (aucun code à héberger)
- `src/agent.ts` — boucle agentique (ReAct) via le *tool runner* du SDK Anthropic
- `src/index.ts` — REPL en ligne de commande

## Étendre l'agent

Ajoute un nouvel outil dans `src/tools.ts` avec `betaZodTool({...})`, puis
ajoute-le au tableau `allTools`. Le schéma Zod définit automatiquement le
schéma JSON envoyé au modèle — pas besoin de l'écrire à la main.

## Modèle

Utilise `claude-opus-5` par défaut (le plus capable). Pour changer de modèle,
modifie la constante `model` dans `src/agent.ts`.
