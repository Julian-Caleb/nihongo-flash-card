@echo off
REM start_watcher.bat
REM Launches chrome_watcher.py silently in the background using pythonw.exe
REM (pythonw has no console window, unlike python.exe)

set SCRIPT_DIR=%~dp0
start "" pythonw.exe "%SCRIPT_DIR%chrome_watcher.py"