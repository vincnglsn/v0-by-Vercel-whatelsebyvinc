# Agent autonome

Agent basé sur [OpenRouter](https://openrouter.ai) (API compatible OpenAI,
passerelle vers de nombreux modèles — dont des modèles gratuits), avec appel
d'outils : recherche web, exécution de code, lecture de fichiers locaux
(`knowledge/`) et appels à des API externes. Deux façons de l'utiliser : en
ligne de commande, ou via une petite interface web.

## Démarrage

```bash
cd ai-agent
npm install
cp .env.example .env
# renseigne OPENROUTER_API_KEY dans .env (clé sur openrouter.ai/keys)
npm run chat   # en ligne de commande
npm run web    # ou : interface web sur http://127.0.0.1:3939
```

### En ligne de commande (`npm run chat`)

Tape ta demande dans le prompt `>`. `reset` pour effacer la mémoire, `exit`
pour quitter.

### Interface web (`npm run web`)

Ouvre http://127.0.0.1:3939 dans ton navigateur. Bouton "Oublier (reset)"
pour effacer la mémoire. Le serveur n'écoute que sur `127.0.0.1` par défaut
(pas accessible depuis le réseau) — normal, puisque l'agent peut exécuter du
code et appeler des API avec les droits de ta machine ; ne l'expose pas sur
une interface réseau publique/partagée sans ajouter une vraie authentification.
Port et adresse configurables via les variables d'env `PORT` / `HOST`.

Les deux modes partagent la même mémoire : sauvegardée dans
`memory/history.json` et rechargée au lancement suivant — l'agent se souvient
d'une session à l'autre (limité aux 60 derniers messages pour rester borné).

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
- `src/server.ts` + `public/index.html` — serveur HTTP minimal (sans
  framework) et interface web à une page (HTML/CSS/JS inline, sans build)

## Étendre l'agent

Ajoute un nouvel outil dans `src/tools.ts` (objet `ToolDef` avec `name`,
`description`, `parameters` en JSON Schema, et `run`), puis ajoute-le au
tableau `allTools`.

## Modèle

Utilise `openrouter/free` par défaut : le routeur d'OpenRouter qui sélectionne
automatiquement un modèle gratuit compatible avec l'appel d'outils (évite de
coder en dur un modèle précis, la liste des modèles gratuits change souvent).
Le modèle actif s'affiche au démarrage (`npm run chat` / `npm run web`).

Pour passer sur un modèle payant plus capable, ajoute dans `.env` :

```
OPENROUTER_MODEL=openai/gpt-4o-mini
```

Vérifie l'ID exact et le tarif actuels sur
[openrouter.ai/models](https://openrouter.ai/models) avant d'activer un
modèle payant — les prix évoluent et un ID mal orthographié échoue à l'appel.
Sans cette variable, le gratuit reste utilisé.
