@echo off
chcp 65001
echo 🚀 Release Les Héritiers - GOOGLE DOCS DIRECT !

echo 📦 Skip build → direct Google Docs
echo ☁️ Test gcloud...
gcloud auth print-access-token >nul
if errorlevel 1 (
    echo ❌ gcloud auth échoué
    pause
    exit /b 1
)
echo ✅ gcloud OK

echo 📄 Création Google Docs src/*.js...
for %%f in (src\*.js) do (
    if exist "%%f" (
        echo 📄 %%~nf...
        
        REM TOKEN
        for /f %%t in ('gcloud auth print-access-token') do set "TOKEN=%%t"
        
        REM CRÉATION Google Doc SIMPLE
        echo Création %%~nf...
        powershell -command "Write-Host 'Test PowerShell OK'"
        echo PowerShell OK
        
        REM Pause pour voir
        pause
        goto :eof
    )
)

echo ✅ TERMINÉ !
pause
