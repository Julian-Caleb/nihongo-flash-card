"""
chrome_watcher.py

Runs quietly in the background (started at Windows login via Task
Scheduler). Every 10 minutes, it checks whether Google Chrome is
currently running. If it is, it launches a quiz_popup.py session.

If Chrome is not running, it just waits and checks again next cycle.
This script runs indefinitely until you log off / stop it manually.

It will NOT launch a new quiz while one is already open (it waits for
the current quiz_popup.py process to finish first).
"""

import subprocess
import sys
import time
from pathlib import Path

CHECK_INTERVAL_SECONDS = 10 * 60  # 10 minutes
CHROME_PROCESS_NAME = "chrome.exe"

SCRIPT_DIR = Path(__file__).resolve().parent
QUIZ_SCRIPT = SCRIPT_DIR / "quiz_popup.py"
PYTHON_EXE = sys.executable  # use the same python that's running this script


def is_chrome_running() -> bool:
    """Check Windows process list for chrome.exe using tasklist."""
    try:
        result = subprocess.run(
            ["tasklist", "/FI", f"IMAGENAME eq {CHROME_PROCESS_NAME}"],
            capture_output=True,
            text=True,
            creationflags=subprocess.CREATE_NO_WINDOW,
        )
        return CHROME_PROCESS_NAME.lower() in result.stdout.lower()
    except Exception as e:
        print(f"[chrome_watcher] Error checking process list: {e}")
        return False


def run_quiz_session():
    """Launch quiz_popup.py and block until the user finishes it."""
    print("[chrome_watcher] Chrome detected. Launching quiz...")
    subprocess.run([PYTHON_EXE, str(QUIZ_SCRIPT)])
    print("[chrome_watcher] Quiz session complete.")


def main():
    print("[chrome_watcher] Watcher started. Checking every "
          f"{CHECK_INTERVAL_SECONDS // 60} minutes for Chrome...")
    while True:
        if is_chrome_running():
            run_quiz_session()
        else:
            print("[chrome_watcher] Chrome not running. Skipping this cycle.")

        time.sleep(CHECK_INTERVAL_SECONDS)


if __name__ == "__main__":
    main()