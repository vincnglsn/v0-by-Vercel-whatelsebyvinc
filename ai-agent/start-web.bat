@echo off
setlocal
cd /d "%~dp0"

if exist node_modules goto :after_install
echo Installation des dependances - premiere execution...
call npm install
:after_install

if exist .env goto :after_env_check
echo.
echo ATTENTION : fichier .env manquant.
echo Copie .env.example vers .env et renseigne ta cle OPENROUTER_API_KEY.
echo.
pause
exit /b 1
:after_env_check

echo Demarrage de l'agent...
start "Agent autonome - serveur" cmd /k "npm run web"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3939"
