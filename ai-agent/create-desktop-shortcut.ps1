# À exécuter une seule fois pour créer le raccourci Bureau.
# Usage : clic droit sur ce fichier > "Exécuter avec PowerShell",
# ou depuis un terminal PowerShell :
#   powershell -ExecutionPolicy Bypass -File create-desktop-shortcut.ps1

$targetBat = Join-Path $PSScriptRoot "start-web.bat"
$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Agent autonome.lnk"

$WshShell = New-Object -ComObject WScript.Shell
$shortcut = $WshShell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetBat
$shortcut.WorkingDirectory = $PSScriptRoot
$shortcut.Description = "Lance l'agent autonome (interface web)"
$shortcut.Save()

Write-Host "Raccourci cree sur le Bureau : $shortcutPath"
