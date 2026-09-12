@echo off
setlocal
cd /d "%~dp0"

if exist node_modules goto :after_install
echo Installation des dependances - premiere execution...
call npm install
:after_install

echo Demarrage de l'agent...
start "Agent autonome - serveur" cmd /k "npm run web"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3939"
