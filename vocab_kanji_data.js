// kanji_data.js
// Kanji vocabulary flashcard data.
// Each entry: { front, answers[], type }
// front = the kanji word (may include hiragana/katakana okurigana);
// answers[] = accepted romaji readings.
// The user is quizzed on the READING (romaji), not the meaning.

const KANJI = [
  // matahari / hari
  { front: "日", answers: ["hi"] },
  { front: "日本", answers: ["nihon"] },

  // hari dalam seminggu
  { front: "月曜日", answers: ["getsuyoubi"] },
  { front: "火曜日", answers: ["kayoubi"] },
  { front: "水曜日", answers: ["suiyoubi"] },
  { front: "木曜日", answers: ["mokuyoubi"] },
  { front: "金曜日", answers: ["kinyoubi"] },
  { front: "土曜日", answers: ["doyoubi"] },
  { front: "日曜日", answers: ["nichiyoubi"] },

  // bulan dalam setahun
  { front: "一月", answers: ["ichigatsu"] },
  { front: "二月", answers: ["nigatsu"] },
  { front: "三月", answers: ["sangatsu"] },
  { front: "四月", answers: ["shigatsu"] },
  { front: "五月", answers: ["gogatsu"] },
  { front: "六月", answers: ["rokugatsu"] },
  { front: "七月", answers: ["shichigatsu"] },
  { front: "八月", answers: ["hachigatsu"] },
  { front: "九月", answers: ["kugatsu"] },
  { front: "十月", answers: ["juugatsu"] },
  { front: "十一月", answers: ["juuichigatsu"] },
  { front: "十二月", answers: ["juunigatsu"] },

  // alam
  { front: "木", answers: ["ki"] },
  { front: "山", answers: ["yama"] },
  { front: "火山", answers: ["kazan"] },
  { front: "川", answers: ["kawa"] },
  { front: "田んぼ", answers: ["tanbo"] },
  { front: "小川", answers: ["ogawa"] },

  // orang
  { front: "人", answers: ["hito"] },
  { front: "日本人", answers: ["nihonjin"] },
  { front: "口", answers: ["kuchi"] },
  { front: "入口", answers: ["iriguchi"] },
  { front: "出口", answers: ["deguchi"] },
  { front: "人口", answers: ["jinkou"] },

  // kendaraan & bangunan
  { front: "車", answers: ["kuruma"] },
  { front: "電車", answers: ["densha"] },
  { front: "門", answers: ["mon"] },
  { front: "専門", answers: ["senmon"] },

  // unsur
  { front: "火", answers: ["hi"] },
  { front: "水", answers: ["mizu"] },
  { front: "お金", answers: ["okane"] },
  { front: "金", answers: ["kin"] },
  { front: "土", answers: ["tsuchi"] },
  { front: "土木", answers: ["doboku"] },

  // orang & keluarga (perempuan)
  { front: "子供", answers: ["kodomo"] },
  { front: "女子学生", answers: ["joshigakusei"] },
  { front: "女の子", answers: ["onnanoko"] },
  { front: "女", answers: ["onna"] },
  { front: "彼女", answers: ["kanojo"] },
  { front: "女の人", answers: ["onnanohito"] },

  // sekolah
  { front: "学生", answers: ["gakusei"] },
  { front: "学校", answers: ["gakkou"] },
  { front: "大学", answers: ["daigaku"] },
  { front: "私立大学", answers: ["shiritsudaigaku"] },
  { front: "小学校", answers: ["shougakkou"] },

  // kata kerja & lainnya
  { front: "生きる", answers: ["ikiru"] },
  { front: "先生", answers: ["sensei"] },
  { front: "生まれる", answers: ["umareru"] },
  { front: "先", answers: ["saki"] },
  { front: "先月", answers: ["sengetsu"] },
  { front: "私", answers: ["watashi"] },

  // angka 1–10
  { front: "一", answers: ["ichi"] },
  { front: "二", answers: ["ni"] },
  { front: "三", answers: ["san"] },
  { front: "四", answers: ["yon", "shi"] },
  { front: "五", answers: ["go"] },
  { front: "六", answers: ["roku"] },
  { front: "七", answers: ["nana", "shichi"] },
  { front: "八", answers: ["hachi"] },
  { front: "九", answers: ["kyuu", "ku"] },
  { front: "十", answers: ["juu"] },

  // bilangan besar & satuan
  { front: "百", answers: ["hyaku"] },
  { front: "千", answers: ["sen"] },
  { front: "万", answers: ["man"] },
  { front: "円", answers: ["en"] },
  { front: "年", answers: ["toshi"] },

  // atas - bawah
  { front: "上", answers: ["ue"] },
  { front: "上へ", answers: ["ue e"] },
  { front: "上手", answers: ["jouzu"] },
  { front: "下", answers: ["shita"] },
  { front: "年下", answers: ["toshishita"] },
  { front: "下へ", answers: ["shita e"] },

  // dalam - tengah - besar - kecil
  { front: "中", answers: ["naka"] },
  { front: "一日中", answers: ["ichinichijuu"] },
  { front: "大きい", answers: ["ookii"] },
  { front: "大切", answers: ["taisetsu"] },
  { front: "大人", answers: ["otona"] },
  { front: "小さい", answers: ["chiisai"] },

  // hon (buku / pokok)
  { front: "本日", answers: ["honjitsu"] },
  { front: "本", answers: ["hon"] },
  { front: "本店", answers: ["honten"] },

  // han (setengah / bagi)
  { front: "半ば", answers: ["nakaba"] },
  { front: "半年", answers: ["hantoshi"] },
  { front: "半分", answers: ["hanbun"] },
  { front: "分ける", answers: ["wakeru"] },
  { front: "分かる", answers: ["wakaru"] },
  { front: "分", answers: ["fun"] },

  // chikara (kekuatan)
  { front: "力", answers: ["chikara"] },
  { front: "力学", answers: ["rikigaku"] },

  // apa
  { front: "何", answers: ["nani", "nan"] },
].map(c => ({ ...c, type: "kanji" }));

export { KANJI };