@echo off
setlocal
set SCRIPT_DIR=%~dp0
set PYTHON_EXE=C:\Users\amara\AppData\Local\Programs\Python\Python312\python.exe
set LOG_FILE=%SCRIPT_DIR%logs\batch_missing_dates.log

if not exist "%SCRIPT_DIR%logs" mkdir "%SCRIPT_DIR%logs"

echo. >> "%LOG_FILE%"
echo ===== %date% %time% ===== >> "%LOG_FILE%"
"%PYTHON_EXE%" "%SCRIPT_DIR%batch_missing_dates.py" >> "%LOG_FILE%" 2>&1

endlocal
