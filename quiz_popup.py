"""
quiz_popup.py

A small Tkinter popup quiz with TWO question types, mixed randomly:

1. KANA READING -- shows a single Hiragana/Katakana character, asks for
   its romaji reading (e.g. か -> "ka"). States which script it is.

2. VOCAB TRANSLATION -- shows a Japanese word/sentence written in kana
   (from vocab_data.py), asks for its Bahasa Indonesia translation
   (e.g. わたし -> "saya"). Answer checking is CASE-INSENSITIVE, so
   "saya", "Saya", and "SAYA" all count as correct.

Both question types count toward the same streak. The window keeps
quizzing (new question each time) until the user gets 10 CORRECT
ANSWERS IN A ROW, then it closes automatically.

This script is meant to be launched once per quiz "session" by
chrome_watcher.py. It is self-contained and exits when done.
"""

import random
import sys
import tkinter as tk
from tkinter import font as tkfont

from kana_data import KANA
from vocab_data import VOCAB

STREAK_GOAL = 20


class KanaQuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Kana & Vocab Quiz")
        self.root.geometry("400x360")
        self.root.resizable(False, False)

        # Keep the popup on top so it actually grabs attention
        self.root.attributes("-topmost", True)

        self.streak = 0
        self.current_question_type = None  # "kana" or "vocab"
        self.current_prompt = None         # the character or word/sentence shown
        self.current_answer = None         # the expected answer (reading or translation)
        self.current_meta = None           # script name (kana) -- unused for vocab

        # Build the pool of question types we can actually ask.
        # Vocab questions only get included if VOCAB has entries, so this
        # stays safe even if vocab_data.py is ever emptied out.
        self.question_types = ["kana"]
        if VOCAB:
            self.question_types.append("vocab")

        # --- Fonts ---
        self.prompt_font = tkfont.Font(family="MS Gothic", size=56)
        self.meta_font = tkfont.Font(family="Segoe UI", size=13, weight="bold")
        self.label_font = tkfont.Font(family="Segoe UI", size=11)
        self.feedback_font = tkfont.Font(family="Segoe UI", size=12, weight="bold")

        # --- Widgets ---
        self.streak_label = tk.Label(
            root, text=f"Streak: {self.streak} / {STREAK_GOAL}",
            font=self.label_font
        )
        self.streak_label.pack(pady=(15, 0))

        self.meta_label = tk.Label(root, text="", font=self.meta_font, fg="#444")
        self.meta_label.pack(pady=(5, 0))

        self.prompt_label = tk.Label(
            root, text="", font=self.prompt_font, wraplength=360, justify="center"
        )
        self.prompt_label.pack(pady=8)

        self.entry = tk.Entry(root, font=self.label_font, justify="center")
        self.entry.pack(pady=5, ipady=4, fill="x", padx=40)
        self.entry.bind("<Return>", self.check_answer)

        self.submit_btn = tk.Button(root, text="Check", command=self.check_answer)
        self.submit_btn.pack(pady=8)

        self.feedback_label = tk.Label(
            root, text="", font=self.feedback_font, wraplength=360, justify="center"
        )
        self.feedback_label.pack(pady=10)

        self.next_question()
        self.entry.focus_set()

    def next_question(self):
        self.current_question_type = random.choice(self.question_types)

        if self.current_question_type == "kana":
            char, reading, script = random.choice(KANA)
            self.current_prompt = char
            self.current_answer = reading
            self.current_meta = script
            self.meta_label.config(text=f"This is {script} — type the reading")
            # Bigger font suits a single character
            self.prompt_label.config(font=self.prompt_font, text=self.current_prompt)

        else:  # "vocab"
            word, translation = random.choice(list(VOCAB.items()))
            self.current_prompt = word
            self.current_answer = translation
            self.current_meta = None
            self.meta_label.config(text="Translate to Bahasa Indonesia")
            # Words/sentences can be longer, so use a slightly smaller font
            vocab_font = tkfont.Font(family="MS Gothic", size=36)
            self.prompt_label.config(font=vocab_font, text=self.current_prompt)

        self.entry.delete(0, tk.END)
        self.feedback_label.config(text="")
        self.streak_label.config(text=f"Streak: {self.streak} / {STREAK_GOAL}")

    def check_answer(self, event=None):
        guess = self.entry.get().strip().lower()
        correct_answer = self.current_answer.strip().lower()

        if guess == correct_answer:
            self.streak += 1
            self.feedback_label.config(text="Correct!", fg="green")
        else:
            self.streak = 0
            self.feedback_label.config(
                text=f"Wrong. It was '{self.current_answer}'.", fg="red"
            )

        if self.streak >= STREAK_GOAL:
            self.feedback_label.config(
                text="10 in a row! Nice work.", fg="green"
            )
            self.root.after(1200, self.root.destroy)
            return

        # Show next question after a short pause so feedback is readable
        self.root.after(900, self.next_question)


def main():
    root = tk.Tk()
    app = KanaQuizApp(root)
    root.mainloop()
    # Exit code 0 signals "session complete" to the watcher, if needed later
    sys.exit(0)


if __name__ == "__main__":
    main()