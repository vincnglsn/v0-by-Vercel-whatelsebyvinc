@echo off
setlocal
cd /d "%~dp0"

if exist node_modules goto :after_install
echo Installation des dependances - premiere execution...
call npm install
:after_install

findstr /C:"20128" .env >nul 2>&1
if errorlevel 1 goto :after_omniroute
echo Demarrage d'Omniroute...
start "Omniroute" cmd /k "omniroute"
timeout /t 8 /nobreak >nul
:after_omniroute

echo Demarrage de l'agent...
start "Agent autonome - serveur" cmd /k "npm run web"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3939"
