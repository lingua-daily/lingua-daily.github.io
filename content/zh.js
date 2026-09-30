window.CONTENT = window.CONTENT || {};

/* Pinyin with tone marks, written by word (Zhōngguó, not Zhōng guó), as in the
   standard pinyin orthography. Characters shown from B1 up. */
window.CONTENT.zh = {
  label: "Zhōngwén",
  flag: "🇨🇳",
  world: "Chinese-speaking",
  defaultLevel: "A1",
  readingLevel: "A1",
  perDay: 2,
  script: true,              // characters shown from B1 up
  focus: "mainland China",

  /* Shown with every Mandarin lesson. */
  key: {
    title: "Tone marks",
    intro: "Every syllable carries one of four tones, or a light neutral one. Same letters, different tone, different word.",
    rows: [
      ["ā", "1st — high and level, like holding a sung note", "mā · mother"],
      ["á", "2nd — rising, like asking “huh?”", "má · hemp"],
      ["ǎ", "3rd — dips low then rises; in quick speech often just low", "mǎ · horse"],
      ["à", "4th — a sharp fall, like a firm “No!”", "mà · to scold"],
      ["a", "neutral — no mark; short and light", "ma · question particle"]
    ],
    note: "Two 3rd tones in a row: the first is said as a 2nd. Nǐ hǎo is pronounced “ní hǎo”."
  },

  base: {
    "de":"(possessive / modifier particle)","shì":"is / am / are","zài":"in / at","hé":"and",
    "le":"(completed action)","yě":"also","bù":"not","bú":"not","hěn":"very","dōu":"all / both",
    "wǒ":"I / me","nǐ":"you","tā":"he / she / it","wǒmen":"we","nǐmen":"you (pl.)","tāmen":"they",
    "zhè":"this","zhège":"this","nà":"that","nàge":"that","yǒu":"have / there is","méiyǒu":"don't have / there isn't",
    "yī":"one","yí":"one","yì":"one","gè":"(measure word)","ge":"(measure word)","ma":"(question particle)",
    "ne":"(particle)","ba":"(suggestion particle)","jīntiān":"today","míngtiān":"tomorrow",
    "hái":"still / also","jiù":"then / just","huì":"will / can","kěyǐ":"can / may","qù":"go","lái":"come",
    "dànshì":"but","suǒyǐ":"so","nián":"year","rén":"person / people","zhōngguó":"China",
    "běijīng":"Beijing","shànghǎi":"Shanghai"
  },

  days: []
};
