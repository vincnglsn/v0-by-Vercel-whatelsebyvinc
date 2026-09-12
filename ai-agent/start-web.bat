@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Installation des dependances (premiere execution)...
  call npm install
)

if not exist .env (
  echo.
  echo ATTENTION : fichier .env manquant.
  echo Copie .env.example vers .env et renseigne ta cle OPENROUTER_API_KEY.
  echo.
  pause
  exit /b 1
)

echo Demarrage de l'agent...
start "Agent autonome - serveur" cmd /k "npm run web"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3939"
