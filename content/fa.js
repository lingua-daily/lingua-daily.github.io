window.CONTENT = window.CONTENT || {};

/* Romanised throughout: a (as in cat), aa (as in father), e, o, i (see),
   u (food); kh, gh, sh, zh, ch; an apostrophe for the glottal catch inside a
   word; the ezafe joined with a hyphen (muze-ye Tehraan). Persian script is
   shown from B1 up, right to left. Culture, history, science and the arts
   only, never politics. */
window.CONTENT.fa = {
  label: "Farsi",
  flag: "",
  world: "Persian-speaking",
  defaultLevel: "A1",
  readingLevel: "A1",
  perDay: 2,
  script: true,
  focus: "Iran: Tehran, Isfahan and Shiraz",

  key: {
    title: "Reading the romanisation",
    intro: "Farsi is spelled here in English letters. The vowels are the part to watch.",
    rows: [
      ["aa", "long, as in “father”", "salaam · hello"],
      ["a", "short, as in “cat”", "dast · hand"],
      ["i · u", "as in “see” · as in “food”", "khub · good"],
      ["kh", "like the ch in Scottish “loch”", "khaane · house"],
      ["gh", "a soft gargled sound, a bit like a French r", "ghazaa · food"],
      ["-e / -ye", "the ezafe, a tiny “of” that links words", "muze-ye Tehraan · Tehran's museum"]
    ],
    note: "Spoken Farsi shortens a lot: «khaste nabaashid» is often said «khaste nabaashi». The lessons note it when they use the casual form."
  },

  /* Fixed alphabet course, shown at B1–B2: one short lesson a day per reader. */
  alphabet: {
    "title": "The Persian alphabet",
    "lessons": [
      {
        "title": "A start, and Persia's p",
        "letters": [
          {
            "char": "ا",
            "forms": "ا ـا",
            "name": "alef",
            "sound": "aa, or a seat for a vowel",
            "exScript": "آب",
            "exRoman": "aab",
            "exEn": "water"
          },
          {
            "char": "ب",
            "forms": "بـ ـبـ ـب",
            "name": "be",
            "sound": "b",
            "exScript": "بابا",
            "exRoman": "baabaa",
            "exEn": "dad"
          },
          {
            "char": "پ",
            "forms": "پـ ـپـ ـپ",
            "name": "pe",
            "sound": "p (three dots: Persian only)",
            "exScript": "پدر",
            "exRoman": "pedar",
            "exEn": "father"
          },
          {
            "char": "ت",
            "forms": "تـ ـتـ ـت",
            "name": "te",
            "sound": "t",
            "exScript": "توت",
            "exRoman": "tut",
            "exEn": "mulberry"
          }
        ]
      },
      {
        "title": "The hook family",
        "letters": [
          {
            "char": "ث",
            "forms": "ثـ ـثـ ـث",
            "name": "se",
            "sound": "s (in Farsi, not th)",
            "exScript": "ثانیه",
            "exRoman": "saaniye",
            "exEn": "second (time)"
          },
          {
            "char": "ج",
            "forms": "جـ ـجـ ـج",
            "name": "jim",
            "sound": "j",
            "exScript": "جوان",
            "exRoman": "javaan",
            "exEn": "young"
          },
          {
            "char": "چ",
            "forms": "چـ ـچـ ـچ",
            "name": "che",
            "sound": "ch (Persian only)",
            "exScript": "چای",
            "exRoman": "chaay",
            "exEn": "tea"
          },
          {
            "char": "ح",
            "forms": "حـ ـحـ ـح",
            "name": "he",
            "sound": "h",
            "exScript": "حال",
            "exRoman": "haal",
            "exEn": "state, how you are"
          }
        ]
      },
      {
        "title": "Letters that never join forward",
        "letters": [
          {
            "char": "خ",
            "forms": "خـ ـخـ ـخ",
            "name": "khe",
            "sound": "kh, the ch in loch",
            "exScript": "خوب",
            "exRoman": "khub",
            "exEn": "good"
          },
          {
            "char": "د",
            "forms": "د ـد",
            "name": "daal",
            "sound": "d",
            "exScript": "دست",
            "exRoman": "dast",
            "exEn": "hand"
          },
          {
            "char": "ذ",
            "forms": "ذ ـذ",
            "name": "zaal",
            "sound": "z",
            "exScript": "ذرت",
            "exRoman": "zorrat",
            "exEn": "corn"
          },
          {
            "char": "ر",
            "forms": "ر ـر",
            "name": "re",
            "sound": "a tapped r",
            "exScript": "روز",
            "exRoman": "ruz",
            "exEn": "day"
          }
        ]
      },
      {
        "title": "Z, zh, s and sh",
        "letters": [
          {
            "char": "ز",
            "forms": "ز ـز",
            "name": "ze",
            "sound": "z",
            "exScript": "زن",
            "exRoman": "zan",
            "exEn": "woman"
          },
          {
            "char": "ژ",
            "forms": "ژ ـژ",
            "name": "zhe",
            "sound": "zh, the s in measure (Persian only)",
            "exScript": "ژاله",
            "exRoman": "zhaale",
            "exEn": "dew"
          },
          {
            "char": "س",
            "forms": "سـ ـسـ ـس",
            "name": "sin",
            "sound": "s",
            "exScript": "سلام",
            "exRoman": "salaam",
            "exEn": "hello"
          },
          {
            "char": "ش",
            "forms": "شـ ـشـ ـش",
            "name": "shin",
            "sound": "sh",
            "exScript": "شب",
            "exRoman": "shab",
            "exEn": "night"
          }
        ]
      },
      {
        "title": "Borrowed letters, Persian sounds",
        "letters": [
          {
            "char": "ص",
            "forms": "صـ ـصـ ـص",
            "name": "saad",
            "sound": "s",
            "exScript": "صبح",
            "exRoman": "sobh",
            "exEn": "morning"
          },
          {
            "char": "ض",
            "forms": "ضـ ـضـ ـض",
            "name": "zaad",
            "sound": "z",
            "exScript": "ضعیف",
            "exRoman": "za'if",
            "exEn": "weak"
          },
          {
            "char": "ط",
            "forms": "طـ ـطـ ـط",
            "name": "taa",
            "sound": "t",
            "exScript": "طلا",
            "exRoman": "talaa",
            "exEn": "gold"
          },
          {
            "char": "ظ",
            "forms": "ظـ ـظـ ـظ",
            "name": "zaa",
            "sound": "z",
            "exScript": "ظهر",
            "exRoman": "zohr",
            "exEn": "noon"
          }
        ]
      },
      {
        "title": "The throat letters",
        "letters": [
          {
            "char": "ع",
            "forms": "عـ ـعـ ـع",
            "name": "eyn",
            "sound": "a slight catch, written ' in the lessons",
            "exScript": "عشق",
            "exRoman": "eshgh",
            "exEn": "love"
          },
          {
            "char": "غ",
            "forms": "غـ ـغـ ـغ",
            "name": "gheyn",
            "sound": "gh, a soft gargled sound",
            "exScript": "غذا",
            "exRoman": "ghazaa",
            "exEn": "food"
          },
          {
            "char": "ف",
            "forms": "فـ ـفـ ـف",
            "name": "fe",
            "sound": "f",
            "exScript": "فارسی",
            "exRoman": "faarsi",
            "exEn": "Persian"
          },
          {
            "char": "ق",
            "forms": "قـ ـقـ ـق",
            "name": "ghaaf",
            "sound": "gh, the same sound as gheyn in Farsi",
            "exScript": "قند",
            "exRoman": "ghand",
            "exEn": "sugar cube"
          }
        ]
      },
      {
        "title": "K, Persia's g, l and m",
        "letters": [
          {
            "char": "ک",
            "forms": "کـ ـکـ ـک",
            "name": "kaaf",
            "sound": "k",
            "exScript": "کتاب",
            "exRoman": "ketaab",
            "exEn": "book"
          },
          {
            "char": "گ",
            "forms": "گـ ـگـ ـگ",
            "name": "gaaf",
            "sound": "g as in go (Persian only)",
            "exScript": "گل",
            "exRoman": "gol",
            "exEn": "flower"
          },
          {
            "char": "ل",
            "forms": "لـ ـلـ ـل",
            "name": "laam",
            "sound": "l",
            "exScript": "لب",
            "exRoman": "lab",
            "exEn": "lip"
          },
          {
            "char": "م",
            "forms": "مـ ـمـ ـم",
            "name": "mim",
            "sound": "m",
            "exScript": "ماه",
            "exRoman": "maah",
            "exEn": "moon, month"
          }
        ]
      },
      {
        "title": "The last four",
        "letters": [
          {
            "char": "ن",
            "forms": "نـ ـنـ ـن",
            "name": "nun",
            "sound": "n",
            "exScript": "نان",
            "exRoman": "naan",
            "exEn": "bread"
          },
          {
            "char": "و",
            "forms": "و ـو",
            "name": "vaav",
            "sound": "v, or the vowels u and o",
            "exScript": "ورزش",
            "exRoman": "varzesh",
            "exEn": "sport"
          },
          {
            "char": "ه",
            "forms": "هـ ـهـ ـه",
            "name": "he",
            "sound": "h, and the final -e of many words",
            "exScript": "هوا",
            "exRoman": "havaa",
            "exEn": "air, weather"
          },
          {
            "char": "ی",
            "forms": "یـ ـیـ ـی",
            "name": "ye",
            "sound": "y, or long i",
            "exScript": "یک",
            "exRoman": "yek",
            "exEn": "one"
          }
        ]
      }
    ]
  },

  base: {
    "va":"and","dar":"in","az":"from / than","be":"to","baa":"with","ke":"that / which","in":"this",
    "aan":"that","man":"I","to":"you","u":"he / she","maa":"we","shomaa":"you (pl. / polite)",
    "aanhaa":"they","ast":"is","hast":"is / there is","nist":"is not","bud":"was","ham":"also / too",
    "raa":"(marks the object)","yek":"one / a","khayli":"very","har":"every","emruz":"today","farda":"tomorrow",
    "saal":"year","iraan":"Iran","tehraan":"Tehran","esfahaan":"Isfahan","shiraaz":"Shiraz",
    "e":"(ezafe: of / linking)","ye":"(ezafe: of / linking)","chi":"what","kojaa":"where","kay":"when",
    "baraaye":"for","taa":"until","ammaa":"but","yaa":"or","bale":"yes","na":"no"
  },

  days: []
};
