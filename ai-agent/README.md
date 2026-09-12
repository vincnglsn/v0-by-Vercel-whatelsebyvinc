# Agent autonome

Agent basé sur [Ollama](https://ollama.com) en local par défaut — gratuit,
illimité, tourne sur ta propre machine — avec appel d'outils : recherche web,
exécution de code, lecture de fichiers locaux (`knowledge/`) et appels à des
API externes. Deux façons de l'utiliser : en ligne de commande, ou via une
petite interface web. Peut aussi être reconfiguré vers un fournisseur cloud
(OpenRouter, etc.) — voir "Modèle" plus bas.

## Démarrage

```bash
# 1. Installe Ollama : https://ollama.com/download, puis :
ollama pull qwen3:4b-instruct

# 2. Installe et lance l'agent
cd ai-agent
npm install
npm run chat   # en ligne de commande
npm run web    # ou : interface web sur http://127.0.0.1:3939
```

Rien à configurer dans `.env` pour ce cas d'usage — Ollama ne demande pas de
clé. Au démarrage, l'agent vérifie qu'Ollama tourne et que le modèle est bien
téléchargé, et te dit quoi faire sinon plutôt que de planter avec une erreur
obscure.

### En ligne de commande (`npm run chat`)

Tape ta demande dans le prompt `>`. `reset` pour effacer la mémoire, `exit`
pour quitter. Une seule conversation (`cli`) — pas de panneau latéral en
terminal, réservé à l'interface web.

### Raccourci Bureau (Windows, 1 clic)

Une fois `npm install` fait (étape ci-dessus), crée le raccourci une seule
fois :

```powershell
cd ai-agent
powershell -ExecutionPolicy Bypass -File create-desktop-shortcut.ps1
```

Un raccourci "Agent autonome" apparaît sur ton Bureau. Double-clic dessus :
ça installe les dépendances si besoin, lance le serveur dans une fenêtre
(à laisser ouverte — la fermer arrête l'agent), et ouvre l'interface dans ton
navigateur par défaut. Si tu as personnalisé `PORT`/`HOST` dans `.env`,
modifie l'adresse en dur dans `start-web.bat`.

### Interface web (`npm run web`)

Ouvre http://127.0.0.1:3939 dans ton navigateur. Panneau latéral gauche façon
plateforme de chat : "+ Nouvelle discussion" pour en démarrer une, clic sur
une entrée pour y revenir, `×` pour la supprimer. Chaque conversation garde
son propre historique et un titre auto-généré à partir de ton premier
message. Le serveur n'écoute que sur `127.0.0.1` par défaut (pas accessible
depuis le réseau) — normal, puisque l'agent peut exécuter du code et appeler
des API avec les droits de ta machine ; ne l'expose pas sur une interface
réseau publique/partagée sans ajouter une vraie authentification. Port et
adresse configurables via les variables d'env `PORT` / `HOST`.

Chaque conversation est sauvegardée dans son propre fichier sous
`memory/conversations/` (limité aux 60 derniers messages pour rester borné).
Un ancien `memory/history.json` (format à une seule conversation) est migré
automatiquement au premier lancement, sous l'id `cli`.

**Pièces jointes** — bouton 📎 à côté du champ de saisie (interface web
uniquement) :
- **Images** (png, jpg, webp...) : envoyées telles quelles au modèle pour
  analyse visuelle — ne fonctionne que si le modèle actif supporte la vision.
  `qwen3:4b-instruct` (par défaut) ne la supporte pas ; pour analyser des
  images, installe un modèle vision (ex. `ollama pull qwen3-vl:4b-instruct`)
  et configure-le via `LLM_MODEL` (voir "Modèle" plus bas).
- **PDF** : texte extrait automatiquement (`pdf-parse`) et transmis au modèle
  — extraction basique, sans mise en page ni OCR sur du PDF scanné en image.
- **Texte / code** (.txt, .md, .csv, .json, .py, .js, .html...) : contenu
  inséré tel quel dans le message.
- Autres formats (docx, zip...) : rejetés avec un message clair.
- Taille max : 8 Mo. Contenu texte/PDF tronqué à 12 000 caractères.

En ligne de commande, dépose plutôt le fichier dans `knowledge/` et demande à
l'agent de le lire avec `read_file` — pas de bouton pièce jointe en terminal.

## Sur iPhone (PWA + Tailscale)

Pas d'app iOS native (ça demande Xcode + Mac + compte développeur Apple).
À la place : l'interface web s'installe comme une app sur l'écran d'accueil
(icône dédiée, plein écran), et [Tailscale](https://tailscale.com) (gratuit)
lui donne un accès privé et sécurisé depuis n'importe où, sans exposer ton PC
sur l'internet public.

**1. Installer Tailscale** sur ton PC (tailscale.com/download) et sur ton
iPhone (App Store), se connecter avec le même compte sur les deux. Une fois
connectés, ton PC a une adresse Tailscale stable du genre `pc-family.tail1234.ts.net`
(visible dans l'appli Tailscale sur PC, ou avec `tailscale status`).

**2. Autoriser l'accès Tailscale au serveur** — dans `ai-agent/.env`, ajoute :

```
HOST=0.0.0.0
```

`0.0.0.0` écoute sur toutes les interfaces réseau de ta machine, Tailscale
inclus — mais reste inatteignable depuis l'internet public tant que tu ne
fais pas de redirection de port sur ta box, donc l'accès reste limité aux
appareils connectés à ton compte Tailscale. Relance `npm run web` (ou
`start-web.bat`) après ce changement.

**3. Sur l'iPhone**, dans Safari (pas Chrome — "Ajouter à l'écran d'accueil"
plein écran ne marche que dans Safari), va sur
`http://<nom-tailscale-du-pc>:3939`, puis bouton Partager → **Ajouter à
l'écran d'accueil**. Une icône "Agent" apparaît, s'ouvre en plein écran sans
barre d'adresse.

Ton PC doit rester allumé avec le serveur lancé pour que ça réponde — ce
n'est pas un service hébergé en permanence quelque part.

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
- `src/memory.ts` — persistance des conversations, une par fichier sous
  `memory/conversations/` (non versionné — données personnelles)
- `src/index.ts` — REPL en ligne de commande (conversation unique `cli`)
- `src/server.ts` + `public/index.html` — serveur HTTP minimal (sans
  framework) et interface web à panneau latéral (HTML/CSS/JS inline, sans
  build), multi-conversations
- `src/attachments.ts` — traitement des pièces jointes (image → vision,
  PDF → extraction de texte, texte/code → inséré tel quel)
- `start-web.bat` + `create-desktop-shortcut.ps1` — lancement en 1 clic sous
  Windows (voir "Raccourci Bureau" ci-dessus)
- `public/manifest.json` + `public/icons/` — installation en PWA sur iPhone
  (voir "Sur iPhone" ci-dessus)

## Étendre l'agent

Ajoute un nouvel outil dans `src/tools.ts` (objet `ToolDef` avec `name`,
`description`, `parameters` en JSON Schema, et `run`), puis ajoute-le au
tableau `allTools`.

## Modèle

Par défaut : Ollama en local, modèle `qwen3:4b-instruct` (~2,5 Go, bon
compromis vitesse/qualité pour l'appel d'outils, tourne correctement même
sans carte graphique dédiée). Le modèle actif s'affiche au démarrage
(`npm run chat` / `npm run web`).

**Changer de modèle Ollama** (plus capable si ta machine suit, ou avec
vision) — télécharge-le d'abord, puis configure `.env` :

```
ollama pull llama3.1:8b
```
```
LLM_MODEL=llama3.1:8b
```

**Utiliser un fournisseur cloud à la place** (OpenRouter, etc.), par exemple
si tu préfères la rapidité du cloud à la gratuité locale :

```
LLM_BASE_URL=https://openrouter.ai/api/v1
LLM_API_KEY=sk-or-v1-...
LLM_MODEL=openrouter/free
```

Vérifie l'ID exact et le tarif actuels du modèle choisi avant de l'activer —
les prix/IDs affichés ailleurs datent vite.
