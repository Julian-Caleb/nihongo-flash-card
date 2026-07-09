"""
vocab_data.py

Contains Japanese vocabulary (words/sentences written in kana) paired
with their Bahasa Indonesia translations.

Key   = the Japanese word/sentence, written in kana (hiragana/katakana)
Value = the Bahasa Indonesia translation

This is used by the quiz to ask "what does this word/sentence mean in
Bahasa Indonesia?" as a separate question type from the kana-reading
quiz (which asks "how do you read/pronounce this character?").

Add more entries here as you learn new vocabulary -- nothing else in
the code needs to change.
"""

VOCAB = {
    "わたし": "saya",
    "あなた": "anda",
    "あのひと": "orang itu",
    "あのかた": "orang itu",
    "~さん": "saudara ~",
    "~ちゃん": "anak ~",
    "~じん": "orang ~",
    "せんせい": "guru",
    "きょうし": "guru",
    "ごくせい": "mahasiswa",
    "かいしゃいん": "karyawan",
    "~のしゃいん": "karyawan ~",
    "ぎんこういん": "pegawai bank",
    "いしゃ": "dokter",
    "けんきゅうしゃ": "peneliti",
    "だいがく": "universitas",
    "びょういん": "rumah sakit",
    "だれ": "siapa",
    "どなた": "siapa",
    "~さい": "~ tahun",
    "なんさい": "umur berapa",
    "おいくつ": "umur berapa",
    "はい": "iya",
    "いいえ": "tidak",
    "はじめまして": "perkenalkan",
    "~からきました": "datang dari ~",
    "どうぞよろしくおねがいします": "salam kenal",
    "しつれいですか": "permisi",
    "おなまえわ": "siapa namanya?",
    "こちらわ ~さん です": "ini saudara ~",
    "アメリカ": "amerika",
    "イギリス": "inggris",
    "インド": "india",
    "インドネシア": "indonesia",
    "カンコク": "korea selatan",
    "タイ": "thailand",
    "チュウゴク": "cina",
    "ドイツ": "jerman",
    "ニホン": "jepang",
    "ブラジル": "brazil",

    # --- Demonstrative pronouns ---
    "これ": "ini",
    "それ": "itu",
    "あれ": "itu",
    "この ~": "~ ini",
    "その ~": "~ itu",
    "あの ~": "~ itu",

    # --- Nouns: things / objects ---
    "ほん": "buku",
    "じしょ": "kamus",
    "ざっし": "majalah",
    "しんぶん": "koran",
    "ノート": "buku tulis",
    "てちょう": "buku agenda",
    "めいし": "kartu nama",
    "カード": "kartu",
    "えんぴつ": "pensil",
    "ボールペン": "bolpoin",
    "シャープペンシル": "pensil mekanik",
    "かぎ": "kunci",
    "とけい": "jam",
    "かさ": "payung",
    "かばん": "tas",
    "CD": "CD",
    "テレビ": "TV",
    "ラジオ": "radio",
    "カメラ": "kamera",
    "コンピューター": "komputer",
    "くるま": "mobil",
    "いす": "kursi",
    "つくえ": "meja",
    "チョコレート": "coklat",
    "コーヒー": "kopi",
    "みやげ": "oleh-oleh",
    "くつ": "sepatu",
    "ネクタイ": "dasi",
    "ワイン": "anggur",

    # --- Languages ---
    "えいご": "bahasa Inggris",
    "にほんご": "bahasa Jepang", 
    "~ご": "bahasa ~",

    # --- Location pronouns (ko-so-a-do series) ---
    "ここ": "sini",
    "そこ": "situ",
    "あそこ": "sana",
    "どこ": "dimana",
    "こちら": "sini",
    "そちら": "situ",
    "あちら": "sana",
    "どちら": "dimana",

    # --- Places / rooms ---
    "きょうしつ": "ruang kelas",
    "しょくどう": "ruang makan",
    "じむしょ": "kantor",
    "かいぎしつ": "ruang rapat",
    "うけつけ": "meja informasi",
    "ロビー": "lobi",
    "へや": "kamar",
    "トイレ": "toilet",
    "おてあらい": "toilet",
    "かいだん": "tangga",
    "エレベーター": "lift",
    "エスカレーター": "eskalator",
    "じどうはんばいき": "mesin jual otomatis",
    "でんわ": "telepon",
    "おくに": "negara",
    "かいしゃ": "perusahaan",
    "うち": "rumah",
    "うりば": "toko",
    "ちか": "basement",

    # --- Numbers / counting ---
    "~かい": "lantai ~",
    "~がい": "lantai ~",
    "なんがい": "lantai berapa",
    "~えん": "~ yen",
    "いくら": "berapa",
    "ひゃく": "ratus",
    "せん": "ribu",
    "まん": "puluh ribu",

    # --- Question words / fillers ---
    "なん": "apa",
    "そう": "begitu",
    "あのう": "eee...",
    "どうぞ": "silahkan",
    "すみません": "permisi",
    "どうも": "terimakasih",
    "いらっしゃいませ": "selamat datang",
    "じゃ": "kalau begitu",

    # --- Requests ---
    "~を みせて ください": "tolong perlihatkan ~",
    "~を ください": "minta ~",

    # --- Common phrases ---
    "どうも ありがとう ございます": "terimakasih banyak",
    "そう ですか": "o begitu",
    "ちがいます": "bukan begitu",
    "これから おせわに なります": "mulai sekarang mohon bantuannya",
    "こちらこそ どうぞ よろしく おねがいします": "ya, sama-sama",

    # --- Countries / cities ---
    "イタリア": "italia",
    "スイス": "swiss",
    "フランス": "perancis",
    "ジャカルタ": "jakarta",
    "バンコク": "bangkok",
    "ベルリン": "berlin",
}