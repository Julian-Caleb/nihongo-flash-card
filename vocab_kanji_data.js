// vocab_kanji_data.js
// Kanji vocabulary flashcard data.
// Each entry: { front, answers[], meaning[], type }
//   front    = kanji word shown on the card
//   answers  = accepted romaji readings (case-insensitive)
//   meaning  = accepted Indonesian meanings (case-insensitive)
//   type     = "kanji"

const KANJI = [
  // ── matahari / hari ────────────────────────────────────────────
  { front: "日",        answers: ["hi"],             meaning: ["matahari", "hari"] },
  { front: "日本",      answers: ["nihon"],          meaning: ["jepang"] },

  // ── hari dalam seminggu ─────────────────────────────────────────
  { front: "月曜日",    answers: ["getsuyoubi"],     meaning: ["senin"] },
  { front: "火曜日",    answers: ["kayoubi"],         meaning: ["selasa"] },
  { front: "水曜日",    answers: ["suiyoubi"],        meaning: ["rabu"] },
  { front: "木曜日",    answers: ["mokuyoubi"],       meaning: ["kamis"] },
  { front: "金曜日",    answers: ["kinyoubi"],        meaning: ["jumat"] },
  { front: "土曜日",    answers: ["doyoubi"],         meaning: ["sabtu"] },
  { front: "日曜日",    answers: ["nichiyoubi"],      meaning: ["minggu"] },

  // ── bulan dalam setahun ─────────────────────────────────────────
  { front: "一月",      answers: ["ichigatsu"],      meaning: ["januari"] },
  { front: "二月",      answers: ["nigatsu"],         meaning: ["februari"] },
  { front: "三月",      answers: ["sangatsu"],        meaning: ["maret"] },
  { front: "四月",      answers: ["shigatsu"],        meaning: ["april"] },
  { front: "五月",      answers: ["gogatsu"],         meaning: ["mei"] },
  { front: "六月",      answers: ["rokugatsu"],       meaning: ["juni"] },
  { front: "七月",      answers: ["shichigatsu"],     meaning: ["juli"] },
  { front: "八月",      answers: ["hachigatsu"],      meaning: ["agustus"] },
  { front: "九月",      answers: ["kugatsu"],         meaning: ["september"] },
  { front: "十月",      answers: ["juugatsu"],        meaning: ["oktober"] },
  { front: "十一月",    answers: ["juuichigatsu"],    meaning: ["november"] },
  { front: "十二月",    answers: ["juunigatsu"],      meaning: ["desember"] },

  // ── alam ────────────────────────────────────────────────────────
  { front: "木",        answers: ["ki"],              meaning: ["pohon", "kayu"] },
  { front: "山",        answers: ["yama"],            meaning: ["gunung"] },
  { front: "火山",      answers: ["kazan"],           meaning: ["gunung berapi"] },
  { front: "川",        answers: ["kawa"],            meaning: ["sungai"] },
  { front: "田んぼ",   answers: ["tanbo"],           meaning: ["sawah"] },
  { front: "小川",      answers: ["ogawa"],           meaning: ["anak sungai"] },

  // ── orang ───────────────────────────────────────────────────────
  { front: "人",        answers: ["hito"],            meaning: ["orang"] },
  { front: "日本人",    answers: ["nihonjin"],        meaning: ["orang jepang"] },
  { front: "口",        answers: ["kuchi"],           meaning: ["mulut"] },
  { front: "入口",      answers: ["iriguchi"],        meaning: ["pintu masuk"] },
  { front: "出口",      answers: ["deguchi"],         meaning: ["pintu keluar"] },
  { front: "人口",      answers: ["jinkou"],          meaning: ["jumlah penduduk", "populasi"] },

  // ── kendaraan & bangunan ────────────────────────────────────────
  { front: "車",        answers: ["kuruma"],          meaning: ["mobil", "kendaraan"] },
  { front: "電車",      answers: ["densha"],          meaning: ["kereta listrik"] },
  { front: "門",        answers: ["mon"],             meaning: ["gerbang"] },
  { front: "専門",      answers: ["senmon"],          meaning: ["spesialisasi", "keahlian"] },

  // ── unsur ───────────────────────────────────────────────────────
  { front: "火",        answers: ["hi"],              meaning: ["api"] },
  { front: "水",        answers: ["mizu"],            meaning: ["air"] },
  { front: "お金",      answers: ["okane"],           meaning: ["uang"] },
  { front: "金",        answers: ["kin"],             meaning: ["emas"] },
  { front: "土",        answers: ["tsuchi"],          meaning: ["tanah"] },
  { front: "土木",      answers: ["doboku"],          meaning: ["teknik sipil"] },

  // ── orang & keluarga (perempuan) ────────────────────────────────
  { front: "子供",      answers: ["kodomo"],          meaning: ["anak-anak"] },
  { front: "女子学生",  answers: ["joshigakusei"],    meaning: ["mahasiswi", "siswi"] },
  { front: "女の子",    answers: ["onnanoko"],        meaning: ["anak perempuan"] },
  { front: "女",        answers: ["onna"],            meaning: ["perempuan", "wanita"] },
  { front: "彼女",      answers: ["kanojo"],          meaning: ["dia (perempuan)", "pacar perempuan"] },
  { front: "女の人",    answers: ["onnanohito"],      meaning: ["wanita"] },

  // ── sekolah ─────────────────────────────────────────────────────
  { front: "学生",      answers: ["gakusei"],         meaning: ["pelajar", "siswa"] },
  { front: "学校",      answers: ["gakkou"],          meaning: ["sekolah"] },
  { front: "大学",      answers: ["daigaku"],         meaning: ["universitas"] },
  { front: "私立大学",  answers: ["shiritsudaigaku"], meaning: ["universitas swasta"] },
  { front: "小学校",    answers: ["shougakkou"],      meaning: ["sekolah dasar"] },

  // ── kata kerja & lainnya ────────────────────────────────────────
  { front: "生きる",    answers: ["ikiru"],           meaning: ["hidup", "untuk hidup"] },
  { front: "先生",      answers: ["sensei"],          meaning: ["guru", "dokter"] },
  { front: "生まれる",  answers: ["umareru"],         meaning: ["lahir", "dilahirkan"] },
  { front: "先",        answers: ["saki"],            meaning: ["depan", "ujung", "duluan"] },
  { front: "先月",      answers: ["sengetsu"],        meaning: ["bulan lalu"] },
  { front: "私",        answers: ["watashi"],         meaning: ["saya", "aku"] },

  // ── angka 1–10 ──────────────────────────────────────────────────
  { front: "一",        answers: ["ichi"],            meaning: ["satu"] },
  { front: "二",        answers: ["ni"],              meaning: ["dua"] },
  { front: "三",        answers: ["san"],             meaning: ["tiga"] },
  { front: "四",        answers: ["yon", "shi"],      meaning: ["empat"] },
  { front: "五",        answers: ["go"],              meaning: ["lima"] },
  { front: "六",        answers: ["roku"],            meaning: ["enam"] },
  { front: "七",        answers: ["nana", "shichi"],  meaning: ["tujuh"] },
  { front: "八",        answers: ["hachi"],           meaning: ["delapan"] },
  { front: "九",        answers: ["kyuu", "ku"],      meaning: ["sembilan"] },
  { front: "十",        answers: ["juu"],             meaning: ["sepuluh"] },

  // ── bilangan besar & satuan ─────────────────────────────────────
  { front: "百",        answers: ["hyaku"],           meaning: ["seratus", "ratus"] },
  { front: "千",        answers: ["sen"],             meaning: ["seribu", "ribu"] },
  { front: "万",        answers: ["man"],             meaning: ["sepuluh ribu", "puluh ribu"] },
  { front: "円",        answers: ["en"],              meaning: ["yen"] },
  { front: "年",        answers: ["toshi"],           meaning: ["tahun"] },

  // ── atas - bawah ────────────────────────────────────────────────
  { front: "上",        answers: ["ue"],              meaning: ["atas"] },
  { front: "上へ",      answers: ["ue e"],            meaning: ["ke atas"] },
  { front: "上手",      answers: ["jouzu"],           meaning: ["pandai", "ahli"] },
  { front: "下",        answers: ["shita"],           meaning: ["bawah"] },
  { front: "年下",      answers: ["toshishita"],      meaning: ["lebih muda"] },
  { front: "下へ",      answers: ["shita e"],         meaning: ["ke bawah"] },

  // ── dalam - tengah - besar - kecil ──────────────────────────────
  { front: "中",        answers: ["naka"],            meaning: ["dalam", "tengah"] },
  { front: "一日中",    answers: ["ichinichijuu"],    meaning: ["sepanjang hari"] },
  { front: "大きい",    answers: ["ookii"],           meaning: ["besar"] },
  { front: "大切",      answers: ["taisetsu"],        meaning: ["penting", "berharga"] },
  { front: "大人",      answers: ["otona"],           meaning: ["orang dewasa"] },
  { front: "小さい",    answers: ["chiisai"],         meaning: ["kecil"] },

  // ── hon (buku / pokok) ──────────────────────────────────────────
  { front: "本日",      answers: ["honjitsu"],        meaning: ["hari ini"] },
  { front: "本",        answers: ["hon"],             meaning: ["buku"] },
  { front: "本店",      answers: ["honten"],          meaning: ["toko utama", "kantor pusat"] },

  // ── han (setengah / bagi) ───────────────────────────────────────
  { front: "半ば",      answers: ["nakaba"],          meaning: ["pertengahan", "setengah"] },
  { front: "半年",      answers: ["hantoshi"],        meaning: ["setengah tahun"] },
  { front: "半分",      answers: ["hanbun"],          meaning: ["setengah"] },
  { front: "分ける",    answers: ["wakeru"],          meaning: ["membagi", "memisahkan"] },
  { front: "分かる",    answers: ["wakaru"],          meaning: ["mengerti", "paham"] },
  { front: "分",        answers: ["fun"],             meaning: ["menit"] },

  // ── chikara (kekuatan) ──────────────────────────────────────────
  { front: "力",        answers: ["chikara"],         meaning: ["kekuatan", "tenaga"] },
  { front: "力学",      answers: ["rikigaku"],        meaning: ["mekanika", "fisika"] },

  // ── apa ─────────────────────────────────────────────────────────
  { front: "何",        answers: ["nani", "nan"],     meaning: ["apa"] },

  // ── 明 — terang / fajar ─────────────────────────────────────────
  { front: "明るい",    answers: ["akarui"],          meaning: ["cerah", "ceria", "terang"] },
  { front: "明ける",    answers: ["akeru"],           meaning: ["fajar", "hari baru"] },

  // ── 休 — istirahat ──────────────────────────────────────────────
  { front: "休む",      answers: ["yasumu"],          meaning: ["istirahat", "beristirahat"] },
  { front: "休み",      answers: ["yasumi"],          meaning: ["istirahat", "libur"] },
  { front: "休日",      answers: ["kyuujitsu"],       meaning: ["hari libur"] },
  { front: "休火山",    answers: ["kyuukazan"],       meaning: ["gunung berapi tidak aktif"] },

  // ── 体 — tubuh ──────────────────────────────────────────────────
  { front: "体",        answers: ["karada"],          meaning: ["tubuh", "badan"] },
  { front: "体力",      answers: ["tairyoku"],        meaning: ["kekuatan fisik", "stamina"] },
  { front: "体育",      answers: ["taiiku"],          meaning: ["olahraga", "pendidikan jasmani"] },

  // ── 好 — suka ───────────────────────────────────────────────────
  { front: "好き",      answers: ["suki"],            meaning: ["suka", "cinta"] },
  { front: "好きな",    answers: ["sukina"],          meaning: ["favorit", "yang disukai"] },
  { front: "好かれる",  answers: ["sukareru"],        meaning: ["disukai"] },

  // ── 男 — laki-laki ──────────────────────────────────────────────
  { front: "男",        answers: ["otoko"],           meaning: ["laki-laki", "pria"] },
  { front: "男子学生",  answers: ["danshigakusei"],   meaning: ["mahasiswa pria", "siswa laki-laki"] },
  { front: "男の子",    answers: ["otokonoko"],       meaning: ["anak laki-laki"] },

  // ── 林 — hutan kecil ────────────────────────────────────────────
  { front: "林",        answers: ["hayashi"],         meaning: ["hutan kecil", "kebun"] },
  { front: "林業",      answers: ["ringyou"],         meaning: ["kehutanan"] },

  // ── 森 — hutan ──────────────────────────────────────────────────
  { front: "森",        answers: ["mori"],            meaning: ["hutan"] },
  { front: "森林",      answers: ["shinrin"],         meaning: ["hutan belantara"] },

  // ── 間 — waktu / jarak ──────────────────────────────────────────
  { front: "間",        answers: ["aida"],            meaning: ["antara", "jarak", "selang"] },
  { front: "一年間",    answers: ["ichinenkan"],      meaning: ["selama satu tahun"] },
  { front: "間に合う",  answers: ["maniau"],          meaning: ["tepat waktu"] },
  { front: "時間",      answers: ["jikan"],           meaning: ["waktu", "jam"] },

  // ── 畑 — ladang ─────────────────────────────────────────────────
  { front: "畑",        answers: ["hatake"],          meaning: ["ladang", "kebun"] },
  { front: "田畑",      answers: ["tahata"],          meaning: ["sawah dan ladang"] },

  // ── 岩 — batu besar ─────────────────────────────────────────────
  { front: "岩",        answers: ["iwa"],             meaning: ["batu besar", "batu karang"] },
  { front: "岩石",      answers: ["ganseki"],         meaning: ["batuan"] },
  { front: "岩山",      answers: ["iwayama"],         meaning: ["gunung berbatu"] },

  // ── 目 — mata ───────────────────────────────────────────────────
  { front: "目",        answers: ["me"],              meaning: ["mata"] },
  { front: "目次",      answers: ["mokuji"],          meaning: ["daftar isi"] },
  { front: "目上",      answers: ["meue"],            meaning: ["atasan", "orang yang lebih tua"] },
  { front: "目的",      answers: ["mokuteki"],        meaning: ["tujuan", "sasaran"] },

  // ── 耳 — telinga ────────────────────────────────────────────────
  { front: "耳",        answers: ["mimi"],            meaning: ["telinga"] },
  { front: "耳鼻科",    answers: ["jibika"],          meaning: ["dokter THT", "poli telinga hidung"] },

  // ── 手 — tangan ─────────────────────────────────────────────────
  { front: "手",        answers: ["te"],              meaning: ["tangan"] },
  { front: "上手な",    answers: ["jouzuna"],         meaning: ["pandai", "terampil"] },
  { front: "手紙",      answers: ["tegami"],          meaning: ["surat"] },
  { front: "下手な",    answers: ["hetana"],          meaning: ["tidak pandai", "tidak terampil"] },
  { front: "切手",      answers: ["kitte"],           meaning: ["perangko"] },
  { front: "助手",      answers: ["joshu"],           meaning: ["asisten", "pembantu"] },

  // ── 足 — kaki ───────────────────────────────────────────────────
  { front: "足",        answers: ["ashi"],            meaning: ["kaki"] },
  { front: "二足",      answers: ["nisoku"],          meaning: ["dua pasang (sepatu)"] },
  { front: "足りる",    answers: ["tariru"],          meaning: ["cukup", "mencukupi"] },
  { front: "不足",      answers: ["fusoku"],          meaning: ["kekurangan"] },

  // ── 雨 — hujan ──────────────────────────────────────────────────
  { front: "雨",        answers: ["ame"],             meaning: ["hujan"] },
  { front: "雨天",      answers: ["uten"],            meaning: ["cuaca hujan"] },
  { front: "大雨",      answers: ["ooame"],           meaning: ["hujan lebat", "hujan deras"] },
  { front: "小雨",      answers: ["koame"],           meaning: ["hujan rintik-rintik"] },
  { front: "雨水",      answers: ["amamizu"],         meaning: ["air hujan"] },

  // ── 竹 — bambu ──────────────────────────────────────────────────
  { front: "竹",        answers: ["take"],            meaning: ["bambu"] },
  { front: "竹の子",    answers: ["takenoko"],        meaning: ["rebung", "tunas bambu"] },

  // ── 米 — beras / Amerika ────────────────────────────────────────
  { front: "米",        answers: ["kome"],            meaning: ["beras"] },
  { front: "米国",      answers: ["beikoku"],         meaning: ["amerika serikat"] },
  { front: "北米",      answers: ["hokubei"],         meaning: ["amerika utara"] },
  { front: "南米",      answers: ["nanbei"],          meaning: ["amerika selatan"] },
  { front: "中米",      answers: ["chuubei"],         meaning: ["amerika tengah"] },

  // ── 貝 — kerang ─────────────────────────────────────────────────
  { front: "貝",        answers: ["kai"],             meaning: ["kerang"] },
  { front: "貝殻",      answers: ["kaigara"],         meaning: ["cangkang kerang"] },

  // ── 石 — batu ───────────────────────────────────────────────────
  { front: "石",        answers: ["ishi"],            meaning: ["batu"] },
  { front: "石油",      answers: ["sekiyu"],          meaning: ["minyak bumi", "minyak"] },
  { front: "化石",      answers: ["kaseki"],          meaning: ["fosil"] },

  // ── 糸 — benang ─────────────────────────────────────────────────
  { front: "糸",        answers: ["ito"],             meaning: ["benang"] },
  { front: "毛糸",      answers: ["keito"],           meaning: ["benang wol"] },

  // ── 花 — bunga ──────────────────────────────────────────────────
  { front: "花",        answers: ["hana"],            meaning: ["bunga"] },
  { front: "花瓶",      answers: ["kabin"],           meaning: ["vas bunga"] },
  { front: "花火",      answers: ["hanabi"],          meaning: ["kembang api"] },
  { front: "桜の花",    answers: ["sakuranohana"],    meaning: ["bunga sakura"] },
  { front: "花屋",      answers: ["hanaya"],          meaning: ["toko bunga"] },

  // ── 茶 — teh ────────────────────────────────────────────────────
  { front: "お茶",      answers: ["ocha"],            meaning: ["teh"] },
  { front: "日本茶",    answers: ["nihoncha"],        meaning: ["teh jepang", "teh hijau jepang"] },
  { front: "喫茶店",    answers: ["kissaten"],        meaning: ["kafe", "kedai kopi"] },
  { front: "紅茶",      answers: ["koucha"],          meaning: ["teh hitam"] },

  // ── 肉 — daging ─────────────────────────────────────────────────
  { front: "肉",        answers: ["niku"],            meaning: ["daging"] },
  { front: "鶏肉",      answers: ["toriniku"],        meaning: ["daging ayam"] },
  { front: "牛肉",      answers: ["gyuuniku"],        meaning: ["daging sapi"] },
  { front: "肉体",      answers: ["nikutai"],         meaning: ["tubuh jasmani", "raga"] },
  { front: "肉屋",      answers: ["nikuya"],          meaning: ["toko daging"] },
  { front: "豚肉",      answers: ["butaniku"],        meaning: ["daging babi"] },
  { front: "馬肉",      answers: ["baniku"],          meaning: ["daging kuda"] },

  // ── 文 — kalimat / sastra ───────────────────────────────────────
  { front: "文",        answers: ["bun"],             meaning: ["kalimat", "tulisan"] },
  { front: "文部省",    answers: ["monbushou"],       meaning: ["kementerian pendidikan"] },
  { front: "文学",      answers: ["bungaku"],         meaning: ["sastra"] },

  // ── 字 / 文字 — huruf / karakter ────────────────────────────────
  { front: "字",        answers: ["ji"],              meaning: ["huruf", "karakter"] },
  { front: "漢字",      answers: ["kanji"],           meaning: ["kanji", "huruf cina"] },
  { front: "文字",      answers: ["moji", "monji"],   meaning: ["huruf", "karakter tulisan"] },

  // ── 物 — benda / makhluk ────────────────────────────────────────
  { front: "物",        answers: ["mono"],            meaning: ["benda", "barang", "hal"] },
  { front: "生物",      answers: ["seibutsu"],        meaning: ["makhluk hidup"] },
  { front: "生物学",    answers: ["seibutsugaku"],    meaning: ["biologi"] },
  { front: "買い物",    answers: ["kaimono"],         meaning: ["belanja", "berbelanja"] },
  { front: "荷物",      answers: ["nimotsu"],         meaning: ["bagasi", "barang bawaan"] },
  { front: "本物",      answers: ["honmono"],         meaning: ["barang asli", "yang asli"] },

  // ── 牛 — sapi ───────────────────────────────────────────────────
  { front: "牛",        answers: ["ushi"],            meaning: ["sapi"] },
  { front: "牛乳",      answers: ["gyuunyuu"],        meaning: ["susu sapi"] },

  // ── 馬 — kuda ───────────────────────────────────────────────────
  { front: "馬",        answers: ["uma"],             meaning: ["kuda"] },
  { front: "馬車",      answers: ["basha"],           meaning: ["kereta kuda"] },
  { front: "馬力",      answers: ["bariki"],          meaning: ["tenaga kuda", "horsepower"] },
  { front: "子馬",      answers: ["kouma"],           meaning: ["anak kuda", "kuda poni"] },

  // ── 鳥 — burung ─────────────────────────────────────────────────
  { front: "鳥",        answers: ["tori"],            meaning: ["burung", "unggas"] },
  { front: "白鳥",      answers: ["hakuchou"],        meaning: ["angsa"] },
  { front: "焼き鳥",    answers: ["yakitori"],        meaning: ["sate ayam"] },
  { front: "野鳥",      answers: ["yachou"],          meaning: ["burung liar"] },
  { front: "小鳥",      answers: ["kotori"],          meaning: ["burung kecil"] },

  // ── 魚 — ikan ───────────────────────────────────────────────────
  { front: "魚",        answers: ["sakana"],          meaning: ["ikan"] },
  { front: "魚屋",      answers: ["sakanaya"],        meaning: ["toko ikan", "penjual ikan"] },
  { front: "焼き魚",    answers: ["yakizakana"],      meaning: ["ikan bakar", "ikan panggang"] },
  { front: "金魚",      answers: ["kingyo"],          meaning: ["ikan mas", "ikan koki"] },
].map(c => ({ ...c, type: "kanji" }));

export { KANJI };
