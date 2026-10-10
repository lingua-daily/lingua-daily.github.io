window.CONTENT = window.CONTENT || {};

/* Romanised throughout in plain English letters: zh, kh, ts, ch, sh, shch;
   y for the hard «ы»; ya, yu, ye, yo; the soft sign is left out. Cyrillic is
   shown from B1 up. Culture, history, science and the arts only, never war
   or politics. */
window.CONTENT.ru = {
  label: "Russkiy",
  flag: "",
  world: "Russian-speaking",
  defaultLevel: "A1",
  readingLevel: "A1",
  perDay: 2,
  script: true,
  focus: "Russia: Moscow and St Petersburg",

  key: {
    title: "Reading the romanisation",
    intro: "Russian is spelled here in English letters. A few combinations stand for single Russian sounds.",
    rows: [
      ["kh", "like the ch in Scottish “loch”", "khorosho · good"],
      ["zh", "like the s in “measure”", "zhurnal · magazine"],
      ["ts · ch", "as in “cats” · as in “chat”", "tsentr · centre"],
      ["shch", "a long, soft “sh”", "borshch · beetroot soup"],
      ["y", "a hard “i”, said further back in the mouth", "my · we"],
      ["ya · yu · ye", "a y-sound before the vowel", "ya · I"]
    ],
    note: "Russian stress moves around and isn't marked here, so use the “listen” links to hear where it falls."
  },

  /* Fixed alphabet course, shown at B1–B2: one short lesson a day per reader. */
  alphabet: {
    "title": "The Cyrillic alphabet",
    "lessons": [
      {
        "title": "Look and sound like English",
        "letters": [
          {
            "char": "А а",
            "forms": "",
            "name": "a",
            "sound": "a as in father",
            "exScript": "мама",
            "exRoman": "mama",
            "exEn": "mum"
          },
          {
            "char": "К к",
            "forms": "",
            "name": "ka",
            "sound": "k",
            "exScript": "кот",
            "exRoman": "kot",
            "exEn": "cat"
          },
          {
            "char": "М м",
            "forms": "",
            "name": "em",
            "sound": "m",
            "exScript": "мир",
            "exRoman": "mir",
            "exEn": "world, peace"
          },
          {
            "char": "О о",
            "forms": "",
            "name": "o",
            "sound": "o as in more; unstressed it sounds like a",
            "exScript": "он",
            "exRoman": "on",
            "exEn": "he"
          },
          {
            "char": "Т т",
            "forms": "",
            "name": "te",
            "sound": "t",
            "exScript": "там",
            "exRoman": "tam",
            "exEn": "there"
          }
        ]
      },
      {
        "title": "False friends: look English, sound different",
        "letters": [
          {
            "char": "В в",
            "forms": "",
            "name": "ve",
            "sound": "v",
            "exScript": "вода",
            "exRoman": "voda",
            "exEn": "water"
          },
          {
            "char": "Е е",
            "forms": "",
            "name": "ye",
            "sound": "ye as in yes",
            "exScript": "нет",
            "exRoman": "net",
            "exEn": "no"
          },
          {
            "char": "Н н",
            "forms": "",
            "name": "en",
            "sound": "n",
            "exScript": "нос",
            "exRoman": "nos",
            "exEn": "nose"
          },
          {
            "char": "Р р",
            "forms": "",
            "name": "er",
            "sound": "a rolled r",
            "exScript": "рыба",
            "exRoman": "ryba",
            "exEn": "fish"
          },
          {
            "char": "С с",
            "forms": "",
            "name": "es",
            "sound": "s",
            "exScript": "сок",
            "exRoman": "sok",
            "exEn": "juice"
          },
          {
            "char": "У у",
            "forms": "",
            "name": "u",
            "sound": "u as in food",
            "exScript": "утро",
            "exRoman": "utro",
            "exEn": "morning"
          },
          {
            "char": "Х х",
            "forms": "",
            "name": "kha",
            "sound": "kh, the ch in Scottish loch",
            "exScript": "хлеб",
            "exRoman": "khleb",
            "exEn": "bread"
          }
        ]
      },
      {
        "title": "Shapes borrowed from Greek",
        "letters": [
          {
            "char": "Б б",
            "forms": "",
            "name": "be",
            "sound": "b",
            "exScript": "банк",
            "exRoman": "bank",
            "exEn": "bank"
          },
          {
            "char": "Г г",
            "forms": "",
            "name": "ge",
            "sound": "g as in go",
            "exScript": "год",
            "exRoman": "god",
            "exEn": "year"
          },
          {
            "char": "Д д",
            "forms": "",
            "name": "de",
            "sound": "d",
            "exScript": "дом",
            "exRoman": "dom",
            "exEn": "house"
          },
          {
            "char": "З з",
            "forms": "",
            "name": "ze",
            "sound": "z",
            "exScript": "зима",
            "exRoman": "zima",
            "exEn": "winter"
          },
          {
            "char": "Л л",
            "forms": "",
            "name": "el",
            "sound": "l",
            "exScript": "лампа",
            "exRoman": "lampa",
            "exEn": "lamp"
          },
          {
            "char": "П п",
            "forms": "",
            "name": "pe",
            "sound": "p",
            "exScript": "папа",
            "exRoman": "papa",
            "exEn": "dad"
          }
        ]
      },
      {
        "title": "New shapes",
        "letters": [
          {
            "char": "Ж ж",
            "forms": "",
            "name": "zhe",
            "sound": "zh, the s in measure",
            "exScript": "журнал",
            "exRoman": "zhurnal",
            "exEn": "magazine"
          },
          {
            "char": "И и",
            "forms": "",
            "name": "i",
            "sound": "ee as in see",
            "exScript": "мир",
            "exRoman": "mir",
            "exEn": "world, peace"
          },
          {
            "char": "Й й",
            "forms": "",
            "name": "i kratkoye",
            "sound": "a short y, as in boy",
            "exScript": "мой",
            "exRoman": "moy",
            "exEn": "my"
          },
          {
            "char": "Ф ф",
            "forms": "",
            "name": "ef",
            "sound": "f",
            "exScript": "фото",
            "exRoman": "foto",
            "exEn": "photo"
          },
          {
            "char": "Ц ц",
            "forms": "",
            "name": "tse",
            "sound": "ts as in cats",
            "exScript": "центр",
            "exRoman": "tsentr",
            "exEn": "centre"
          }
        ]
      },
      {
        "title": "The hushing sounds",
        "letters": [
          {
            "char": "Ч ч",
            "forms": "",
            "name": "che",
            "sound": "ch as in chat",
            "exScript": "чай",
            "exRoman": "chay",
            "exEn": "tea"
          },
          {
            "char": "Ш ш",
            "forms": "",
            "name": "sha",
            "sound": "sh",
            "exScript": "шапка",
            "exRoman": "shapka",
            "exEn": "hat"
          },
          {
            "char": "Щ щ",
            "forms": "",
            "name": "shcha",
            "sound": "a long, soft sh",
            "exScript": "борщ",
            "exRoman": "borshch",
            "exEn": "beetroot soup"
          },
          {
            "char": "Ы ы",
            "forms": "",
            "name": "y",
            "sound": "a hard i, said further back in the mouth",
            "exScript": "мы",
            "exRoman": "my",
            "exEn": "we"
          }
        ]
      },
      {
        "title": "Vowels with a y",
        "letters": [
          {
            "char": "Ё ё",
            "forms": "",
            "name": "yo",
            "sound": "yo as in yonder",
            "exScript": "ёлка",
            "exRoman": "yolka",
            "exEn": "fir tree"
          },
          {
            "char": "Ю ю",
            "forms": "",
            "name": "yu",
            "sound": "yu as in you",
            "exScript": "юг",
            "exRoman": "yug",
            "exEn": "south"
          },
          {
            "char": "Я я",
            "forms": "",
            "name": "ya",
            "sound": "ya as in yard",
            "exScript": "я",
            "exRoman": "ya",
            "exEn": "I"
          },
          {
            "char": "Э э",
            "forms": "",
            "name": "e",
            "sound": "e as in bet",
            "exScript": "это",
            "exRoman": "eto",
            "exEn": "this"
          }
        ]
      },
      {
        "title": "The two signs",
        "letters": [
          {
            "char": "Ь ь",
            "forms": "",
            "name": "myagkiy znak",
            "sound": "no sound: softens the consonant before it",
            "exScript": "день",
            "exRoman": "den",
            "exEn": "day"
          },
          {
            "char": "Ъ ъ",
            "forms": "",
            "name": "tvyordyy znak",
            "sound": "no sound: a small break before ye, yo, yu, ya",
            "exScript": "подъезд",
            "exRoman": "podyezd",
            "exEn": "building entrance"
          }
        ]
      }
    ]
  },

  base: {
    "i":"and","v":"in","vo":"in","na":"on / at","s":"with / from","so":"with","k":"to / towards",
    "iz":"from / out of","ot":"from","do":"until / to","po":"along / by","o":"about","ob":"about",
    "u":"at / by","za":"behind / for","dlya":"for","bez":"without","no":"but","a":"and / but","ili":"or",
    "da":"yes","net":"no","ne":"not","eto":"this / it is","etot":"this","eta":"this","ya":"I","ty":"you",
    "on":"he","ona":"she","ono":"it","my":"we","vy":"you (pl. / formal)","oni":"they","menya":"me",
    "tebya":"you","ego":"him / his","nas":"us","vas":"you","kak":"how / like","chto":"what / that",
    "gde":"where","kogda":"when","kto":"who","vot":"here is","uzhe":"already","eshche":"still / more",
    "ochen":"very","tozhe":"also","tak":"so","tam":"there","zdes":"here","segodnya":"today",
    "zavtra":"tomorrow","god":"year","goda":"year(s)","let":"years","rossiya":"Russia","rossii":"of Russia",
    "moskva":"Moscow","moskve":"in Moscow","peterburg":"St Petersburg","peterburge":"in St Petersburg"
  },

  days: []
};
