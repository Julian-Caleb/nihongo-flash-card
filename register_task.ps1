# register_task.ps1
#
# Registers chrome_watcher.py to run automatically every time you log into
# Windows, via Task Scheduler.
#
# IMPORTANT: This must be run from an Administrator PowerShell window, even
# though the resulting task runs as your normal user. Task Scheduler's
# registration step requires elevation; without it you'll get
# "Access is denied" from Register-ScheduledTask.
#
# Usage:
#   1. Right-click PowerShell -> "Run as administrator"
#   2. cd into this folder
#   3. Run: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#   4. Run: .\register_task.ps1

# --- Check for admin rights up front, so we fail with a clear message
#     instead of a confusing "Access is denied" mid-script. ---
$currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
$isAdmin = (New-Object Security.Principal.WindowsPrincipal($currentUser)).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator
)

if (-not $isAdmin) {
    Write-Host ""
    Write-Host "ERROR: This script must be run from an Administrator PowerShell window." -ForegroundColor Red
    Write-Host "Right-click PowerShell -> 'Run as administrator', then re-run this script." -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$batPath = Join-Path $scriptDir "start_watcher.bat"

if (-not (Test-Path $batPath)) {
    Write-Host "ERROR: Could not find start_watcher.bat in $scriptDir" -ForegroundColor Red
    exit 1
}

$action = New-ScheduledTaskAction -Execute $batPath
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable
$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive

try {
    Register-ScheduledTask -TaskName "HiraganaQuizWatcher" `
        -Action $action `
        -Trigger $trigger `
        -Settings $settings `
        -Principal $principal `
        -Description "Watches for Chrome and pops up a kana/vocab quiz every 10 minutes." `
        -Force `
        -ErrorAction Stop | Out-Null

    # Double-check it actually exists now, rather than trusting the call
    # didn't throw.
    $task = Get-ScheduledTask -TaskName "HiraganaQuizWatcher" -ErrorAction Stop

    Write-Host ""
    Write-Host "SUCCESS: Task 'HiraganaQuizWatcher' registered." -ForegroundColor Green
    Write-Host "It will start automatically next time you log in."
    Write-Host "To start it right now without logging out, run:"
    Write-Host "    Start-ScheduledTask -TaskName 'HiraganaQuizWatcher'"
    Write-Host ""
}
catch {
    Write-Host ""
    Write-Host "FAILED to register the task." -ForegroundColor Red
    Write-Host "Error details: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    exit 1
}