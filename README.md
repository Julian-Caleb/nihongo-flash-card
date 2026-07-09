# Kana & Vocab Quiz Popup

A lightweight Windows tool that quizzes you on **Hiragana, Katakana, AND
Japanese vocabulary** every 10 minutes, as long as Google Chrome is
running. It keeps quizzing (mixing question types randomly) until you get
**10 correct answers in a row**, then closes — and the cycle repeats every
10 minutes for as long as Chrome stays open.

## Files

| File                 | Purpose                                                               |
|----------------------|--------------------------------------------------------------------- |
| `kana_data.py`       | Hiragana + Katakana characters → romaji readings, tagged by script   |
| `vocab_data.py`      | Japanese words/sentences (in kana) → Bahasa Indonesia translations   |
| `quiz_popup.py`      | The Tkinter popup quiz window — mixes both question types            |
| `chrome_watcher.py`  | Background loop: checks every 10 min if Chrome is open, triggers quiz |
| `start_watcher.bat`  | Silently launches `chrome_watcher.py` (no console window)             |
| `register_task.ps1`  | One-time setup: registers the watcher to auto-start at Windows login  |

## What's new in this version

**Two question types, mixed randomly each round:**

1. **Kana reading** (as before) — shows a Hiragana/Katakana character,
   asks for the romaji reading, states which script it is.
2. **Vocabulary translation** (new) — shows a Japanese word or sentence
   written in kana, asks for the **Bahasa Indonesia** translation.
   Example: shown `わたし`, the correct answer is `saya`.

Both count toward the same 10-streak goal.

**Case-insensitive answers for vocab translations** — `saya`, `Saya`,
and `SAYA` are all accepted as correct. (Kana readings were already
lowercase-normalized in the same way.)

## Adding more vocabulary

Open `vocab_data.py` and add more entries to the `VOCAB` dictionary:

```python
VOCAB = {
    "わたし": "saya",
    "あなた": "kamu",
    "ありがとう": "terima kasih",
}
```

Each key is the Japanese word/sentence in kana, each value is the
Bahasa Indonesia translation. Nothing else needs to change — the quiz
automatically picks randomly from whatever's in there. If you ever
clear `VOCAB` back to empty, the quiz safely falls back to kana-only
questions (no errors).

## Requirements

- **Windows 10/11**
- **Python 3.8+** installed and on your PATH, with `pythonw.exe` available
  (this comes bundled with the standard Python installer from python.org —
  just make sure "Add Python to PATH" was checked during install)
- Tkinter (included by default with standard Python installs on Windows —
  no extra `pip install` needed)

## Setup (one-time)

> **Important: Task Scheduler registration needs an Administrator
> PowerShell window**, even though the task itself just runs as your
> normal user. If you run `register_task.ps1` from a *non-admin*
> PowerShell, you'll see `Access is denied` — that's expected, and the
> "registered" confirmation message that prints anyway is misleading
> (it prints regardless of whether registration actually succeeded).

1. Put all 6 files in the same folder, e.g. `D:\My Program\Japanese\Project\`
2. Press **Start**, type `PowerShell`, **right-click** → **Run as administrator**
3. `cd` into your folder, e.g.:
   ```powershell
   cd "D:\My Program\Japanese\Project"
   ```
4. Run:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   .\register_task.ps1
   ```
5. Confirm it actually registered this time:
   ```powershell
   Get-ScheduledTask -TaskName "HiraganaQuizWatcher"
   ```
   If that returns task details (not an error), you're good.

That's it. From now on, every time you log into Windows, the watcher starts
automatically in the background (no window, no console — totally silent
until it's quiz time). You do **not** need admin rights for it to *run* —
only the one-time registration step needs it.

> Already had the task registered from before? Just replace the old files
> with these updated ones in the same folder — the task points at the
> scripts by path, not by content, so it picks up changes automatically.

## Test it immediately (don't want to log out/in?)

Run this in PowerShell to start the watcher right now:
```powershell
Start-ScheduledTask -TaskName 'HiraganaQuizWatcher'
```

Or just double-click `start_watcher.bat` directly (no admin needed for this).

## How it behaves

- Every 10 minutes, the watcher checks if `chrome.exe` is running.
- If yes → a quiz popup appears with either:
  - a random kana character + script label, or
  - a random vocabulary word/sentence + "Translate to Bahasa Indonesia" prompt
- Type your answer and press Enter or click "Check".
- Correct → green "Correct!" message, streak goes up, next question appears.
- Wrong → red message showing the correct answer, **streak resets to 0**.
- Once your streak hits **10 in a row**, the popup closes automatically.
- 10 minutes later, if Chrome is still open, it happens again.
- If Chrome is closed, that cycle is skipped — no popup.

## Customizing

- **Change the quiz interval**: edit `CHECK_INTERVAL_SECONDS` in `chrome_watcher.py`.
- **Change the streak goal**: edit `STREAK_GOAL` in `quiz_popup.py`.
- **Add vocabulary**: edit `VOCAB` in `vocab_data.py` (see above).
- **Add more kana**: edit `HIRAGANA_ENTRIES` / `KATAKANA_ENTRIES` in `kana_data.py`.
- **Quiz only vocab, no kana**: in `quiz_popup.py`, change
  `self.question_types = ["kana"]` to `self.question_types = []` — combined
  with the existing `if VOCAB: self.question_types.append("vocab")` line,
  this makes vocab the only question type (as long as `VOCAB` isn't empty).

## Stopping / uninstalling

To stop the background watcher immediately:
```powershell
Get-Process pythonw | Stop-Process
```
(Note: this stops *all* pythonw processes, so only use it if you don't have
other pythonw-based tools running.)

To remove the auto-start permanently (run as Administrator):
```powershell
Unregister-ScheduledTask -TaskName 'HiraganaQuizWatcher' -Confirm:$false
```

## Troubleshooting

- **`Access is denied` when registering**: run PowerShell as Administrator
  (see Setup step 2 above).
- **Nothing happens after setup**: Make sure Python's `pythonw.exe` is on your
  PATH. Test with `python --version` in a regular (non-admin) PowerShell to
  confirm Python itself is installed correctly.
- **Task registered but doesn't start**: Open Task Scheduler (search "Task
  Scheduler" in Start Menu), find `HiraganaQuizWatcher` under the Task
  Scheduler Library, right-click → Run, and check the "History" tab for errors.
- **Popup font looks wrong / boxes instead of characters**: change
  `"MS Gothic"` in `quiz_popup.py` to `"Yu Gothic"` or `"Meiryo"`.