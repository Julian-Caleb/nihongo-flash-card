// kanji_data.js
// Basic kanji flashcard data.
// Each entry: { front, answers[], type }
// front = the kanji character; answers[] = accepted hiragana readings.
// The user is quizzed on the READING (hiragana), not the meaning.

const KANJI = [
  { front: "木", answers: ["ki"] },      // tree
  { front: "人", answers: ["hito"] },    // a man / person
  { front: "口", answers: ["kuchi"] },    // mouth
  { front: "日", answers: ["hi"] },      // the sun
  { front: "月", answers: ["tsuki"] },    // the moon
  { front: "川", answers: ["kawa"] },    // river
  { front: "山", answers: ["yama"] },    // mountain
  { front: "田", answers: ["da"] },      // rice field
  { front: "車", answers: ["kuruma"] },  // car
  { front: "門", answers: ["mon"] },    // gate
].map(c => ({ ...c, type: "kanji" }));

export { KANJI };