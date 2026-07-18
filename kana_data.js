// kana_data.js
// Hiragana and Katakana flashcard data.
// Each entry: { front, answers[], type, label }

const HIRAGANA = [
  // Vowels
  { front:"あ", answers:["a"] },
  { front:"い", answers:["i"] },
  { front:"う", answers:["u"] },
  { front:"え", answers:["e"] },
  { front:"お", answers:["o"] },
  // K
  { front:"か", answers:["ka"] }, { front:"き", answers:["ki"] },
  { front:"く", answers:["ku"] }, { front:"け", answers:["ke"] },
  { front:"こ", answers:["ko"] },
  // G
  { front:"が", answers:["ga"] }, { front:"ぎ", answers:["gi"] },
  { front:"ぐ", answers:["gu"] }, { front:"げ", answers:["ge"] },
  { front:"ご", answers:["go"] },
  // S
  { front:"さ", answers:["sa"] }, { front:"し", answers:["shi"] },
  { front:"す", answers:["su"] }, { front:"せ", answers:["se"] },
  { front:"そ", answers:["so"] },
  // Z
  { front:"ざ", answers:["za"] }, { front:"じ", answers:["ji"] },
  { front:"ず", answers:["zu"] }, { front:"ぜ", answers:["ze"] },
  { front:"ぞ", answers:["zo"] },
  // T
  { front:"た", answers:["ta"] }, { front:"ち", answers:["chi"] },
  { front:"つ", answers:["tsu"] }, { front:"て", answers:["te"] },
  { front:"と", answers:["to"] },
  // D
  { front:"だ", answers:["da"] }, { front:"ぢ", answers:["ji"] },
  { front:"づ", answers:["zu"] }, { front:"で", answers:["de"] },
  { front:"ど", answers:["do"] },
  // N
  { front:"な", answers:["na"] }, { front:"に", answers:["ni"] },
  { front:"ぬ", answers:["nu"] }, { front:"ね", answers:["ne"] },
  { front:"の", answers:["no"] },
  // H
  { front:"は", answers:["ha"] }, { front:"ひ", answers:["hi"] },
  { front:"ふ", answers:["fu"] }, { front:"へ", answers:["he"] },
  { front:"ほ", answers:["ho"] },
  // B
  { front:"ば", answers:["ba"] }, { front:"び", answers:["bi"] },
  { front:"ぶ", answers:["bu"] }, { front:"べ", answers:["be"] },
  { front:"ぼ", answers:["bo"] },
  // P
  { front:"ぱ", answers:["pa"] }, { front:"ぴ", answers:["pi"] },
  { front:"ぷ", answers:["pu"] }, { front:"ぺ", answers:["pe"] },
  { front:"ぽ", answers:["po"] },
  // M
  { front:"ま", answers:["ma"] }, { front:"み", answers:["mi"] },
  { front:"む", answers:["mu"] }, { front:"め", answers:["me"] },
  { front:"も", answers:["mo"] },
  // Y
  { front:"や", answers:["ya"] }, { front:"ゆ", answers:["yu"] },
  { front:"よ", answers:["yo"] },
  // R
  { front:"ら", answers:["ra"] }, { front:"り", answers:["ri"] },
  { front:"る", answers:["ru"] }, { front:"れ", answers:["re"] },
  { front:"ろ", answers:["ro"] },
  // W
  { front:"わ", answers:["wa"] }, { front:"を", answers:["wo"] },
  // N
  { front:"ん", answers:["n"] },
].map(c => ({ ...c, type: "hiragana", label: "reading" }));

const KATAKANA = [
  // Vowels
  { front:"ア", answers:["a"] }, { front:"イ", answers:["i"] },
  { front:"ウ", answers:["u"] }, { front:"エ", answers:["e"] },
  { front:"オ", answers:["o"] },
  // K
  { front:"カ", answers:["ka"] }, { front:"キ", answers:["ki"] },
  { front:"ク", answers:["ku"] }, { front:"ケ", answers:["ke"] },
  { front:"コ", answers:["ko"] },
  // G
  { front:"ガ", answers:["ga"] }, { front:"ギ", answers:["gi"] },
  { front:"グ", answers:["gu"] }, { front:"ゲ", answers:["ge"] },
  { front:"ゴ", answers:["go"] },
  // S
  { front:"サ", answers:["sa"] }, { front:"シ", answers:["shi"] },
  { front:"ス", answers:["su"] }, { front:"セ", answers:["se"] },
  { front:"ソ", answers:["so"] },
  // Z
  { front:"ザ", answers:["za"] }, { front:"ジ", answers:["ji"] },
  { front:"ズ", answers:["zu"] }, { front:"ゼ", answers:["ze"] },
  { front:"ゾ", answers:["zo"] },
  // T
  { front:"タ", answers:["ta"] }, { front:"チ", answers:["chi"] },
  { front:"ツ", answers:["tsu"] }, { front:"テ", answers:["te"] },
  { front:"ト", answers:["to"] },
  // D
  { front:"ダ", answers:["da"] }, { front:"ヂ", answers:["ji"] },
  { front:"ヅ", answers:["zu"] }, { front:"デ", answers:["de"] },
  { front:"ド", answers:["do"] },
  // N
  { front:"ナ", answers:["na"] }, { front:"ニ", answers:["ni"] },
  { front:"ヌ", answers:["nu"] }, { front:"ネ", answers:["ne"] },
  { front:"ノ", answers:["no"] },
  // H
  { front:"ハ", answers:["ha"] }, { front:"ヒ", answers:["hi"] },
  { front:"フ", answers:["fu"] }, { front:"ヘ", answers:["he"] },
  { front:"ホ", answers:["ho"] },
  // B
  { front:"バ", answers:["ba"] }, { front:"ビ", answers:["bi"] },
  { front:"ブ", answers:["bu"] }, { front:"ベ", answers:["be"] },
  { front:"ボ", answers:["bo"] },
  // P
  { front:"パ", answers:["pa"] }, { front:"ピ", answers:["pi"] },
  { front:"プ", answers:["pu"] }, { front:"ペ", answers:["pe"] },
  { front:"ポ", answers:["po"] },
  // M
  { front:"マ", answers:["ma"] }, { front:"ミ", answers:["mi"] },
  { front:"ム", answers:["mu"] }, { front:"メ", answers:["me"] },
  { front:"モ", answers:["mo"] },
  // Y
  { front:"ヤ", answers:["ya"] }, { front:"ユ", answers:["yu"] },
  { front:"ヨ", answers:["yo"] },
  // R
  { front:"ラ", answers:["ra"] }, { front:"リ", answers:["ri"] },
  { front:"ル", answers:["ru"] }, { front:"レ", answers:["re"] },
  { front:"ロ", answers:["ro"] },
  // W
  { front:"ワ", answers:["wa"] }, { front:"ヲ", answers:["wo"] },
  // N
  { front:"ン", answers:["n"] },
].map(c => ({ ...c, type: "katakana", label: "reading" }));

export { HIRAGANA, KATAKANA };