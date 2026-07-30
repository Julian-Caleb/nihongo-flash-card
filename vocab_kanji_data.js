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

  // 明 — terang / fajar
  { front: "明るい",   answers: ["akarui"] },
  { front: "明ける",   answers: ["akeru"] },

  // 休 — istirahat / hari libur / gunung berapi tidak aktif
  { front: "休む",     answers: ["yasumu"] },
  { front: "休み",     answers: ["yasumi"] },
  { front: "休日",     answers: ["kyuujitsu"] },
  { front: "休火山",   answers: ["kyuukazan"] },

  // 体 — tubuh / kekuatan fisik / olahraga
  { front: "体",       answers: ["karada"] },
  { front: "体力",     answers: ["tairyoku"] },
  { front: "体育",     answers: ["taiiku"] },

  // 好 — suka / disukai
  { front: "好き",     answers: ["suki"] },
  { front: "好きな",   answers: ["sukina"] },
  { front: "好かれる", answers: ["sukareru"] },

  // 男 — laki-laki
  { front: "男",       answers: ["otoko"] },
  { front: "男子学生", answers: ["danshigakusei"] },
  { front: "男の子",   answers: ["otokonoko"] },

  // 林 — hutan kecil / kehutanan
  { front: "林",       answers: ["hayashi"] },
  { front: "林業",     answers: ["ringyou"] },

  // 森 — hutan
  { front: "森",       answers: ["mori"] },
  { front: "森林",     answers: ["shinrin"] },

  // 間 — waktu / jarak
  { front: "間",       answers: ["aida"] },
  { front: "一年間",   answers: ["ichinenkan"] },
  { front: "間に合う", answers: ["maniau"] },
  { front: "時間",     answers: ["jikan"] },

  // 畑 — ladang
  { front: "畑",       answers: ["hatake"] },
  { front: "田畑",     answers: ["tahata"] },

  // 岩 — batu besar / pegunungan berbatu
  // NOTE: "gansaki" (岩崎) adalah nama keluarga; "batuan" yang benar adalah 岩石 (ganseki)
  { front: "岩",       answers: ["iwa"] },
  { front: "岩石",     answers: ["ganseki"] },
  { front: "岩山",     answers: ["iwayama"] },

  // 目 — mata / daftar isi / atasan / tujuan
  // NOTE: "mekuji" dalam sumber kemungkinan salah ketik; yang benar adalah 目次 mokuji
  { front: "目",       answers: ["me"] },
  { front: "目次",     answers: ["mokuji"] },
  { front: "目上",     answers: ["meue"] },
  { front: "目的",     answers: ["mokuteki"] },

  // 耳 — telinga / THT
  { front: "耳",       answers: ["mimi"] },
  { front: "耳鼻科",   answers: ["jibika"] },

  // 手 — tangan / surat / ahli / tidak ahli / perangko / asisten
  { front: "手",       answers: ["te"] },
  { front: "上手な",   answers: ["jouzuna"] },
  { front: "手紙",     answers: ["tegami"] },
  { front: "下手な",   answers: ["hetana"] },
  { front: "切手",     answers: ["kitte"] },
  { front: "助手",     answers: ["joshu"] },

  // 足 — kaki / sepasang / cukup / kurang
  { front: "足",       answers: ["ashi"] },
  { front: "二足",     answers: ["nisoku"] },
  { front: "足りる",   answers: ["tariru"] },
  { front: "不足",     answers: ["fusoku"] },

  // 雨 — hujan
  { front: "雨",       answers: ["ame"] },
  { front: "雨天",     answers: ["uten"] },
  { front: "大雨",     answers: ["ooame"] },
  { front: "小雨",     answers: ["koame"] },
  { front: "雨水",     answers: ["amamizu"] },

  // 竹 — bambu
  { front: "竹",       answers: ["take"] },
  { front: "竹の子",   answers: ["takenoko"] },

  // 米 — beras / Amerika
  { front: "米",       answers: ["kome"] },
  { front: "米国",     answers: ["beikoku"] },
  { front: "北米",     answers: ["hokubei"] },
  { front: "南米",     answers: ["nanbei"] },
  { front: "中米",     answers: ["chuubei"] },

  // 貝 — kerang
  { front: "貝",       answers: ["kai"] },
  { front: "貝殻",     answers: ["kaigara"] },

  // 石 — batu / minyak / fosil
  { front: "石",       answers: ["ishi"] },
  { front: "石油",     answers: ["sekiyu"] },
  { front: "化石",     answers: ["kaseki"] },

  // 糸 — benang / benang wol
  { front: "糸",       answers: ["ito"] },
  { front: "毛糸",     answers: ["keito"] },

  // 花 — bunga
  { front: "花",         answers: ["hana"] },
  { front: "花瓶",       answers: ["kabin"] },
  { front: "花火",       answers: ["hanabi"] },
  { front: "桜の花",     answers: ["sakuranohana"] },
  { front: "花屋",       answers: ["hanaya"] },

  // 茶 — teh / kafe
  { front: "お茶",       answers: ["ocha"] },
  { front: "日本茶",     answers: ["nihoncha"] },
  { front: "喫茶店",     answers: ["kissaten"] },
  { front: "紅茶",       answers: ["koucha"] },

  // 肉 — daging
  { front: "肉",         answers: ["niku"] },
  { front: "鶏肉",       answers: ["toriniku"] },
  { front: "牛肉",       answers: ["gyuuniku"] },
  { front: "肉体",       answers: ["nikutai"] },
  { front: "肉屋",       answers: ["nikuya"] },
  { front: "豚肉",       answers: ["butaniku"] },
  { front: "馬肉",       answers: ["baniku"] },

  // 文 — kalimat / sastra
  { front: "文",         answers: ["bun"] },
  { front: "文部省",     answers: ["monbushou"] },
  { front: "文学",       answers: ["bungaku"] },

  // 字 / 文字 — huruf / karakter
  { front: "字",         answers: ["ji"] },
  { front: "漢字",       answers: ["kanji"] },
  { front: "文字",       answers: ["moji", "monji"] },

  // 物 — benda / makhluk
  { front: "物",         answers: ["mono"] },
  { front: "生物",       answers: ["seibutsu"] },
  // NOTE: "Shibutsugaku" dalam sumber adalah typo; yang benar adalah seibutsugaku (生物学)
  { front: "生物学",     answers: ["seibutsugaku"] },
  { front: "買い物",     answers: ["kaimono"] },
  { front: "荷物",       answers: ["nimotsu"] },
  { front: "本物",       answers: ["honmono"] },

  // 牛 — sapi / susu / daging sapi
  { front: "牛",         answers: ["ushi"] },
  { front: "牛乳",       answers: ["gyuunyuu"] },

  // 馬 — kuda
  { front: "馬",         answers: ["uma"] },
  { front: "馬車",       answers: ["basha"] },
  { front: "馬力",       answers: ["bariki"] },
  { front: "子馬",       answers: ["kouma"] },

  // 鳥 — burung / ayam
  { front: "鳥",         answers: ["tori"] },
  { front: "白鳥",       answers: ["hakuchou"] },
  { front: "焼き鳥",     answers: ["yakitori"] },
  { front: "野鳥",       answers: ["yachou"] },
  { front: "小鳥",       answers: ["kotori"] },

  // 魚 — ikan
  { front: "魚",         answers: ["sakana"] },
  { front: "魚屋",       answers: ["sakanaya"] },
  { front: "焼き魚",     answers: ["yakizakana"] },
  { front: "金魚",       answers: ["kingyo"] },
].map(c => ({ ...c, type: "kanji" }));

export { KANJI };
