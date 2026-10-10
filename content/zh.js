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

  /* Fixed alphabet course, shown at B1–B2: one short lesson a day per reader. */
  alphabet: {
    "title": "Characters: the building blocks",
    "lessons": [
      {
        "title": "Counting and people",
        "letters": [
          {
            "char": "一",
            "forms": "",
            "name": "yī",
            "sound": "one: a single stroke",
            "exScript": "一个",
            "exRoman": "yí ge",
            "exEn": "one (of something)"
          },
          {
            "char": "二",
            "forms": "",
            "name": "èr",
            "sound": "two: two strokes",
            "exScript": "二月",
            "exRoman": "èryuè",
            "exEn": "February"
          },
          {
            "char": "三",
            "forms": "",
            "name": "sān",
            "sound": "three: three strokes",
            "exScript": "三天",
            "exRoman": "sān tiān",
            "exEn": "three days"
          },
          {
            "char": "十",
            "forms": "",
            "name": "shí",
            "sound": "ten: a cross",
            "exScript": "十块",
            "exRoman": "shí kuài",
            "exEn": "ten yuan"
          },
          {
            "char": "人",
            "forms": "",
            "name": "rén",
            "sound": "person: two walking legs",
            "exScript": "中国人",
            "exRoman": "Zhōngguó rén",
            "exEn": "Chinese person"
          }
        ]
      },
      {
        "title": "Nature",
        "letters": [
          {
            "char": "日",
            "forms": "",
            "name": "rì",
            "sound": "sun, day: a sun in a frame",
            "exScript": "日本",
            "exRoman": "Rìběn",
            "exEn": "Japan"
          },
          {
            "char": "月",
            "forms": "",
            "name": "yuè",
            "sound": "moon, month: a crescent",
            "exScript": "一月",
            "exRoman": "yīyuè",
            "exEn": "January"
          },
          {
            "char": "山",
            "forms": "",
            "name": "shān",
            "sound": "mountain: three peaks",
            "exScript": "山上",
            "exRoman": "shān shang",
            "exEn": "on the mountain"
          },
          {
            "char": "水",
            "forms": "",
            "name": "shuǐ",
            "sound": "water: a stream with splashes",
            "exScript": "喝水",
            "exRoman": "hē shuǐ",
            "exEn": "drink water"
          },
          {
            "char": "火",
            "forms": "",
            "name": "huǒ",
            "sound": "fire: flames rising",
            "exScript": "火车",
            "exRoman": "huǒchē",
            "exEn": "train (fire-cart)"
          }
        ]
      },
      {
        "title": "People and the body",
        "letters": [
          {
            "char": "女",
            "forms": "",
            "name": "nǚ",
            "sound": "woman: a kneeling figure",
            "exScript": "女人",
            "exRoman": "nǚrén",
            "exEn": "woman"
          },
          {
            "char": "子",
            "forms": "",
            "name": "zǐ",
            "sound": "child: a baby with arms out",
            "exScript": "孩子",
            "exRoman": "háizi",
            "exEn": "child"
          },
          {
            "char": "好",
            "forms": "",
            "name": "hǎo",
            "sound": "good: woman 女 + child 子",
            "exScript": "你好",
            "exRoman": "nǐ hǎo",
            "exEn": "hello"
          },
          {
            "char": "口",
            "forms": "",
            "name": "kǒu",
            "sound": "mouth: an open mouth",
            "exScript": "人口",
            "exRoman": "rénkǒu",
            "exEn": "population"
          },
          {
            "char": "大",
            "forms": "",
            "name": "dà",
            "sound": "big: a person with arms spread wide",
            "exScript": "大学",
            "exRoman": "dàxué",
            "exEn": "university"
          }
        ]
      },
      {
        "title": "I, you, he, she",
        "letters": [
          {
            "char": "我",
            "forms": "",
            "name": "wǒ",
            "sound": "I, me",
            "exScript": "我们",
            "exRoman": "wǒmen",
            "exEn": "we"
          },
          {
            "char": "你",
            "forms": "",
            "name": "nǐ",
            "sound": "you: person 亻 on the left",
            "exScript": "你们",
            "exRoman": "nǐmen",
            "exEn": "you all"
          },
          {
            "char": "他",
            "forms": "",
            "name": "tā",
            "sound": "he: person 亻 + 也",
            "exScript": "他们",
            "exRoman": "tāmen",
            "exEn": "they"
          },
          {
            "char": "她",
            "forms": "",
            "name": "tā",
            "sound": "she: woman 女 + 也",
            "exScript": "她的",
            "exRoman": "tā de",
            "exEn": "her"
          },
          {
            "char": "们",
            "forms": "",
            "name": "men",
            "sound": "makes people plural: 亻 + 门",
            "exScript": "朋友们",
            "exRoman": "péngyoumen",
            "exEn": "friends"
          }
        ]
      },
      {
        "title": "The little words",
        "letters": [
          {
            "char": "是",
            "forms": "",
            "name": "shì",
            "sound": "to be",
            "exScript": "不是",
            "exRoman": "bú shì",
            "exEn": "is not"
          },
          {
            "char": "不",
            "forms": "",
            "name": "bù",
            "sound": "not",
            "exScript": "不好",
            "exRoman": "bù hǎo",
            "exEn": "not good"
          },
          {
            "char": "的",
            "forms": "",
            "name": "de",
            "sound": "links words, like 's",
            "exScript": "我的",
            "exRoman": "wǒ de",
            "exEn": "my, mine"
          },
          {
            "char": "了",
            "forms": "",
            "name": "le",
            "sound": "marks something done or changed",
            "exScript": "好了",
            "exRoman": "hǎo le",
            "exEn": "done, ready"
          },
          {
            "char": "在",
            "forms": "",
            "name": "zài",
            "sound": "at, in",
            "exScript": "在家",
            "exRoman": "zài jiā",
            "exEn": "at home"
          }
        ]
      },
      {
        "title": "Where things are",
        "letters": [
          {
            "char": "上",
            "forms": "",
            "name": "shàng",
            "sound": "up, on: a mark above the line",
            "exScript": "上面",
            "exRoman": "shàngmiàn",
            "exEn": "on top"
          },
          {
            "char": "下",
            "forms": "",
            "name": "xià",
            "sound": "down, under: a mark below",
            "exScript": "下面",
            "exRoman": "xiàmiàn",
            "exEn": "underneath"
          },
          {
            "char": "中",
            "forms": "",
            "name": "zhōng",
            "sound": "middle: a line through a box",
            "exScript": "中国",
            "exRoman": "Zhōngguó",
            "exEn": "China (middle kingdom)"
          },
          {
            "char": "小",
            "forms": "",
            "name": "xiǎo",
            "sound": "small: three little strokes",
            "exScript": "小心",
            "exRoman": "xiǎoxīn",
            "exEn": "careful"
          },
          {
            "char": "木",
            "forms": "",
            "name": "mù",
            "sound": "tree, wood: branches and roots",
            "exScript": "木头",
            "exRoman": "mùtou",
            "exEn": "wood"
          }
        ]
      },
      {
        "title": "Everyday verbs",
        "letters": [
          {
            "char": "吃",
            "forms": "",
            "name": "chī",
            "sound": "eat: mouth 口 on the left",
            "exScript": "吃饭",
            "exRoman": "chī fàn",
            "exEn": "eat a meal"
          },
          {
            "char": "喝",
            "forms": "",
            "name": "hē",
            "sound": "drink: mouth 口 again",
            "exScript": "喝茶",
            "exRoman": "hē chá",
            "exEn": "drink tea"
          },
          {
            "char": "来",
            "forms": "",
            "name": "lái",
            "sound": "come",
            "exScript": "来了",
            "exRoman": "lái le",
            "exEn": "coming!"
          },
          {
            "char": "去",
            "forms": "",
            "name": "qù",
            "sound": "go",
            "exScript": "去哪儿",
            "exRoman": "qù nǎr",
            "exEn": "where are you going?"
          },
          {
            "char": "有",
            "forms": "",
            "name": "yǒu",
            "sound": "have, there is",
            "exScript": "没有",
            "exRoman": "méiyǒu",
            "exEn": "don't have"
          }
        ]
      },
      {
        "title": "Places and things",
        "letters": [
          {
            "char": "门",
            "forms": "",
            "name": "mén",
            "sound": "door: a swinging double door",
            "exScript": "门口",
            "exRoman": "ménkǒu",
            "exEn": "doorway"
          },
          {
            "char": "车",
            "forms": "",
            "name": "chē",
            "sound": "vehicle: a cart seen from above",
            "exScript": "汽车",
            "exRoman": "qìchē",
            "exEn": "car"
          },
          {
            "char": "国",
            "forms": "",
            "name": "guó",
            "sound": "country: a border 囗 around jade 玉",
            "exScript": "外国",
            "exRoman": "wàiguó",
            "exEn": "foreign country"
          },
          {
            "char": "家",
            "forms": "",
            "name": "jiā",
            "sound": "home: a roof 宀 over a pig",
            "exScript": "回家",
            "exRoman": "huí jiā",
            "exEn": "go home"
          },
          {
            "char": "学",
            "forms": "",
            "name": "xué",
            "sound": "study: a child 子 under a roof",
            "exScript": "学生",
            "exRoman": "xuésheng",
            "exEn": "student"
          }
        ]
      }
    ]
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
