@echo off
chcp 65001 >nul
cls

echo 🚀 Release Les Héritiers - Build + Google Docs AUTO

REM ===========================================
REM 1/ BUILD ET LIVRAISON APP (npm prebuild)
REM ===========================================
echo 📦 1. Build et livraison app...
npm run prebuild > temp_build.log 2>&1
if %ERRORLEVEL% neq 0 echo ❌ Build échoué & type temp_build.log & pause & exit /b 1

REM Récupère version = NPM PREBUILD d'abord, puis metadata.json
set "version="
for /f "tokens=*" %%i in ('findstr /i "v[0-9]*" temp_build.log') do set "version=%%i"
if "%version%"=="" (
    for /f "tokens=2 delims=:," %%v in ('powershell -c "(Get-Content 'src/metadata.json' | ConvertFrom-Json).version" 2^>nul') do set "version=%%v"
)
if "%version%"=="" set "version=v%date:~10,4%.%date:~4,2%"

echo 📤 Build OK - Version: %version%

REM Git commit/push
git add .
git commit -m "Les Héritiers %version%" || echo "Aucun changement"
git push -u origin main

echo ✅ 1/ App déployée v%version%

REM ===========================================
REM 2/ JS MODIFIÉS → SourcesTxt (copie directe)
REM ===========================================
echo ☁️ 2. JS modifiés → SourcesTxt...
if not exist SourcesTxt mkdir SourcesTxt
del SourcesTxt\*.txt 2>nul

REM Trouve JS modifiés (git diff depuis dernier commit)
for /f %%f in ('git diff --name-only HEAD~1 ^| findstr /i "\.js$"') do (
    if exist "%%f" (
        for /f %%t in ('powershell -c "Get-Date -f yyyyMMdd_HHmmss"') do (
            copy "%%f" "SourcesTxt\%%~nxf_%%t.txt" /Y
            echo ✅ %%~nxf → SourcesTxt/
        )
    )
)

echo ✅ 2/ SourcesTxt OK

REM ===========================================
REM 3+4/ SourcesTxt + Drive G: (TON CHEMIN EXACT)
REM ===========================================
echo 💾 3+4. SourcesTxt + Drive G:...
set "drive_path=G:\Mon Drive\-=- JdR -=-\-=- Les héritiers -=-\-=- App -=-\"

if exist SourcesTxt\*.txt (
    for %%f in (SourcesTxt\*.txt) do (
        REM Nom SANS timestamp pour Drive
        for /f "tokens=1 delims=_" %%n in ("%%~nf") do (
            set "cleanname=%%n.txt"
            copy "%%f" "SourcesTxt\!cleanname!" /Y
            
            REM TON CHEMIN DRIVE EXACT
            if exist "!drive_path!" (
                copy "SourcesTxt\!cleanname!" "!drive_path!\!cleanname!" /Y
                echo ✅ !cleanname! → !drive_path!
            ) else (
                echo ⚠️ Drive G:\ non trouvé
            )
        )
    )
    git add SourcesTxt/
    git commit -m "📚 SourcesTxt backup - v%version%" || echo "Pas de backup"
    git push
)

del temp_build.log 2>nul

echo 🎉 RELEASE TERMINÉ v%version% !
echo 📱 App: GitHub v%version%
echo 📚 SourcesTxt/ + G:\Mon Drive\-=- JdR -=-\-=- Les héritiers -=-\-=- App -=-\
echo 🔗 NotebookLM voit tes fichiers automatiquement !

REM ════════════════════════════════════════════
REM FIX DOUBLE-CLIC : FENÊTRE RESTE OUVERTE !
REM ════════════════════════════════════════════
if "%cmdcmdline%"=="/c release.bat" pause
cmd /k