# 日本語 Japanese Flashcards

A single-page flashcard app for learning Japanese kana and vocabulary,
with Bahasa Indonesia translations. No build step, no dependencies — just
open `index.html` in a browser, or host it on GitHub Pages.

## Features

- **143 cards** — 71 Hiragana, 71 Katakana, + vocab words
- **Card flip** — tap/click the card to reveal the answer
- **Answer checking** — type your answer, press Enter or click Check
- **Multiple accepted answers** — e.g. わたし accepts both `saya` and `aku`
- **Case-insensitive** — `Saya`, `SAYA`, `saya` all count as correct
- **Deck modes** — filter to All cards / Kana only / Vocab only
- **Shuffle** — randomise the deck order at any time
- **Keyboard shortcuts** — `→` next, `←` prev, `Space` flip, `Enter` check
- **Mobile-friendly** — responsive layout, works on phone and desktop
- **Respects reduced-motion** — disables card flip animation if preferred

## Hosting on GitHub Pages

1. Push this repo (or branch) to GitHub
2. Go to **Settings → Pages**
3. Set source to the branch and root `/`
4. GitHub will publish it at `https://<username>.github.io/<repo>/`

## Adding vocabulary

Open `index.html` and find the `VOCAB` array in the `<script>` block.
Each card is an object with a `front` (Japanese, in kana) and `answers`
(array of accepted Indonesian translations):

```javascript
const VOCAB = [
  {
    front:   "わたし",
    answers: ["saya", "aku"],
    label:   "artinya",
  },
  // add more cards here:
  {
    front:   "ありがとう",
    answers: ["terima kasih"],
    label:   "artinya",
  },
];
```

The `label` field is the small text shown on the back of the card above
the answer (e.g. "artinya" for vocab, "reading" for kana).