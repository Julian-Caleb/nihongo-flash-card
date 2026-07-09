"""
kana_data.py

Contains the kana character set used by the quiz app: both Hiragana and
Katakana, basic gojuon + dakuten/handakuten variants.

Each entry is a tuple: (character, romaji_reading, script_name)
  - character     : the kana character itself
  - romaji_reading: how to pronounce/type it (e.g. "ka")
  - script_name   : either "Hiragana" or "Katakana" -- tells the quiz
                     which script the character belongs to, so the
                     question can state it explicitly.

KANA is a flat list of these tuples covering both scripts. The quiz
picks randomly from this combined list.
"""

# (character, reading, script)
HIRAGANA_ENTRIES = [
    # --- Vowels ---
    ("あ", "a", "Hiragana"), ("い", "i", "Hiragana"), ("う", "u", "Hiragana"),
    ("え", "e", "Hiragana"), ("お", "o", "Hiragana"),

    # --- K ---
    ("か", "ka", "Hiragana"), ("き", "ki", "Hiragana"), ("く", "ku", "Hiragana"),
    ("け", "ke", "Hiragana"), ("こ", "ko", "Hiragana"),
    # --- G (dakuten of K) ---
    ("が", "ga", "Hiragana"), ("ぎ", "gi", "Hiragana"), ("ぐ", "gu", "Hiragana"),
    ("げ", "ge", "Hiragana"), ("ご", "go", "Hiragana"),

    # --- S ---
    ("さ", "sa", "Hiragana"), ("し", "shi", "Hiragana"), ("す", "su", "Hiragana"),
    ("せ", "se", "Hiragana"), ("そ", "so", "Hiragana"),
    # --- Z (dakuten of S) ---
    ("ざ", "za", "Hiragana"), ("じ", "ji", "Hiragana"), ("ず", "zu", "Hiragana"),
    ("ぜ", "ze", "Hiragana"), ("ぞ", "zo", "Hiragana"),

    # --- T ---
    ("た", "ta", "Hiragana"), ("ち", "chi", "Hiragana"), ("つ", "tsu", "Hiragana"),
    ("て", "te", "Hiragana"), ("と", "to", "Hiragana"),
    # --- D (dakuten of T) ---
    ("だ", "da", "Hiragana"), ("ぢ", "ji", "Hiragana"), ("づ", "zu", "Hiragana"),
    ("で", "de", "Hiragana"), ("ど", "do", "Hiragana"),

    # --- N ---
    ("な", "na", "Hiragana"), ("に", "ni", "Hiragana"), ("ぬ", "nu", "Hiragana"),
    ("ね", "ne", "Hiragana"), ("の", "no", "Hiragana"),

    # --- H ---
    ("は", "ha", "Hiragana"), ("ひ", "hi", "Hiragana"), ("ふ", "fu", "Hiragana"),
    ("へ", "he", "Hiragana"), ("ほ", "ho", "Hiragana"),
    # --- B (dakuten of H) ---
    ("ば", "ba", "Hiragana"), ("び", "bi", "Hiragana"), ("ぶ", "bu", "Hiragana"),
    ("べ", "be", "Hiragana"), ("ぼ", "bo", "Hiragana"),
    # --- P (handakuten of H) ---
    ("ぱ", "pa", "Hiragana"), ("ぴ", "pi", "Hiragana"), ("ぷ", "pu", "Hiragana"),
    ("ぺ", "pe", "Hiragana"), ("ぽ", "po", "Hiragana"),

    # --- M ---
    ("ま", "ma", "Hiragana"), ("み", "mi", "Hiragana"), ("む", "mu", "Hiragana"),
    ("め", "me", "Hiragana"), ("も", "mo", "Hiragana"),

    # --- Y ---
    ("や", "ya", "Hiragana"), ("ゆ", "yu", "Hiragana"), ("よ", "yo", "Hiragana"),

    # --- R ---
    ("ら", "ra", "Hiragana"), ("り", "ri", "Hiragana"), ("る", "ru", "Hiragana"),
    ("れ", "re", "Hiragana"), ("ろ", "ro", "Hiragana"),

    # --- W ---
    ("わ", "wa", "Hiragana"), ("を", "wo", "Hiragana"),

    # --- N (single) ---
    ("ん", "n", "Hiragana"),
]

KATAKANA_ENTRIES = [
    # --- Vowels ---
    ("ア", "a", "Katakana"), ("イ", "i", "Katakana"), ("ウ", "u", "Katakana"),
    ("エ", "e", "Katakana"), ("オ", "o", "Katakana"),

    # --- K ---
    ("カ", "ka", "Katakana"), ("キ", "ki", "Katakana"), ("ク", "ku", "Katakana"),
    ("ケ", "ke", "Katakana"), ("コ", "ko", "Katakana"),
    # --- G (dakuten of K) ---
    ("ガ", "ga", "Katakana"), ("ギ", "gi", "Katakana"), ("グ", "gu", "Katakana"),
    ("ゲ", "ge", "Katakana"), ("ゴ", "go", "Katakana"),

    # --- S ---
    ("サ", "sa", "Katakana"), ("シ", "shi", "Katakana"), ("ス", "su", "Katakana"),
    ("セ", "se", "Katakana"), ("ソ", "so", "Katakana"),
    # --- Z (dakuten of S) ---
    ("ザ", "za", "Katakana"), ("ジ", "ji", "Katakana"), ("ズ", "zu", "Katakana"),
    ("ゼ", "ze", "Katakana"), ("ゾ", "zo", "Katakana"),

    # --- T ---
    ("タ", "ta", "Katakana"), ("チ", "chi", "Katakana"), ("ツ", "tsu", "Katakana"),
    ("テ", "te", "Katakana"), ("ト", "to", "Katakana"),
    # --- D (dakuten of T) ---
    ("ダ", "da", "Katakana"), ("ヂ", "ji", "Katakana"), ("ヅ", "zu", "Katakana"),
    ("デ", "de", "Katakana"), ("ド", "do", "Katakana"),

    # --- N ---
    ("ナ", "na", "Katakana"), ("ニ", "ni", "Katakana"), ("ヌ", "nu", "Katakana"),
    ("ネ", "ne", "Katakana"), ("ノ", "no", "Katakana"),

    # --- H ---
    ("ハ", "ha", "Katakana"), ("ヒ", "hi", "Katakana"), ("フ", "fu", "Katakana"),
    ("ヘ", "he", "Katakana"), ("ホ", "ho", "Katakana"),
    # --- B (dakuten of H) ---
    ("バ", "ba", "Katakana"), ("ビ", "bi", "Katakana"), ("ブ", "bu", "Katakana"),
    ("ベ", "be", "Katakana"), ("ボ", "bo", "Katakana"),
    # --- P (handakuten of H) ---
    ("パ", "pa", "Katakana"), ("ピ", "pi", "Katakana"), ("プ", "pu", "Katakana"),
    ("ペ", "pe", "Katakana"), ("ポ", "po", "Katakana"),

    # --- M ---
    ("マ", "ma", "Katakana"), ("ミ", "mi", "Katakana"), ("ム", "mu", "Katakana"),
    ("メ", "me", "Katakana"), ("モ", "mo", "Katakana"),

    # --- Y ---
    ("ヤ", "ya", "Katakana"), ("ユ", "yu", "Katakana"), ("ヨ", "yo", "Katakana"),

    # --- R ---
    ("ラ", "ra", "Katakana"), ("リ", "ri", "Katakana"), ("ル", "ru", "Katakana"),
    ("レ", "re", "Katakana"), ("ロ", "ro", "Katakana"),

    # --- W ---
    ("ワ", "wa", "Katakana"), ("ヲ", "wo", "Katakana"),

    # --- N (single) ---
    ("ン", "n", "Katakana"),
]

# Combined list used by the quiz. Each item: (character, reading, script)
KANA = HIRAGANA_ENTRIES + KATAKANA_ENTRIES