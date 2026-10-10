window.CONTENT = window.CONTENT || {};

/* Romanised throughout: long vowels aa/ii/uu; sh, kh, gh, th, dh; an apostrophe
   for ʿayn or hamza inside a word; the article joined with a hyphen (al-bayt).
   Headlines are Modern Standard Arabic; everyday words are Lebanese, Egyptian
   or Saudi, and each is labelled. */
window.CONTENT.ar = {
  label: "Arabiyya",
  flag: "",
  world: "Arabic-speaking",
  defaultLevel: "A1",
  readingLevel: "A1",
  perDay: 2,
  script: true,              // Arabic script shown from B1 up
  focus: "Lebanon, Egypt and Saudi Arabia",

  /* Shown with every Arabic lesson. */
  key: {
    title: "Reading the romanisation",
    intro: "Arabic is spelled here in English letters. A few of them stand for sounds English doesn't have.",
    rows: [
      ["aa · ii · uu", "held longer than a, i, u", "kitaab · book"],
      ["'", "a catch in the throat (the letters ʿayn or hamza)", "su'aal · question"],
      ["kh", "like the ch in Scottish “loch”", "khubz · bread"],
      ["gh", "a gargled r, like the French r in “Paris”", "ghaali · expensive"],
      ["q", "a k made far back in the throat", "qahwa · coffee"],
      ["th · dh", "as in “think” · as in “this”", "thalaatha · three"]
    ],
    note: "Egyptian speech often drops q to a catch ('ahwa for coffee) and says g where others say j (gamiil, beautiful)."
  },

  /* Fixed alphabet course, shown at B1–B2: one short lesson a day per reader. */
  alphabet: {
    "title": "The Arabic alphabet",
    "lessons": [
      {
        "title": "The dotted family",
        "letters": [
          {
            "char": "ا",
            "forms": "ا ـا",
            "name": "alif",
            "sound": "aa, or a seat for a vowel",
            "exScript": "باب",
            "exRoman": "baab",
            "exEn": "door"
          },
          {
            "char": "ب",
            "forms": "بـ ـبـ ـب",
            "name": "baa",
            "sound": "b (one dot below)",
            "exScript": "بيت",
            "exRoman": "bayt",
            "exEn": "house"
          },
          {
            "char": "ت",
            "forms": "تـ ـتـ ـت",
            "name": "taa",
            "sound": "t (two dots above)",
            "exScript": "تمر",
            "exRoman": "tamr",
            "exEn": "dates"
          },
          {
            "char": "ث",
            "forms": "ثـ ـثـ ـث",
            "name": "thaa",
            "sound": "th as in think (three dots)",
            "exScript": "ثلاثة",
            "exRoman": "thalaatha",
            "exEn": "three"
          },
          {
            "char": "ن",
            "forms": "نـ ـنـ ـن",
            "name": "nuun",
            "sound": "n (one dot above)",
            "exScript": "نور",
            "exRoman": "nuur",
            "exEn": "light"
          },
          {
            "char": "ي",
            "forms": "يـ ـيـ ـي",
            "name": "yaa",
            "sound": "y, or long ii (two dots below)",
            "exScript": "يد",
            "exRoman": "yad",
            "exEn": "hand"
          }
        ]
      },
      {
        "title": "The hook family",
        "letters": [
          {
            "char": "ج",
            "forms": "جـ ـجـ ـج",
            "name": "jiim",
            "sound": "j (Egyptians say g)",
            "exScript": "جمل",
            "exRoman": "jamal",
            "exEn": "camel"
          },
          {
            "char": "ح",
            "forms": "حـ ـحـ ـح",
            "name": "haa",
            "sound": "a breathy h from deep in the throat",
            "exScript": "حب",
            "exRoman": "hubb",
            "exEn": "love"
          },
          {
            "char": "خ",
            "forms": "خـ ـخـ ـخ",
            "name": "khaa",
            "sound": "kh, the ch in loch",
            "exScript": "خبز",
            "exRoman": "khubz",
            "exEn": "bread"
          }
        ]
      },
      {
        "title": "Letters that never join forward",
        "letters": [
          {
            "char": "د",
            "forms": "د ـد",
            "name": "daal",
            "sound": "d",
            "exScript": "دار",
            "exRoman": "daar",
            "exEn": "house"
          },
          {
            "char": "ذ",
            "forms": "ذ ـذ",
            "name": "dhaal",
            "sound": "dh, the th in this",
            "exScript": "ذهب",
            "exRoman": "dhahab",
            "exEn": "gold"
          },
          {
            "char": "ر",
            "forms": "ر ـر",
            "name": "raa",
            "sound": "a rolled r",
            "exScript": "رجل",
            "exRoman": "rajul",
            "exEn": "man"
          },
          {
            "char": "ز",
            "forms": "ز ـز",
            "name": "zaay",
            "sound": "z",
            "exScript": "زيت",
            "exRoman": "zayt",
            "exEn": "oil"
          },
          {
            "char": "و",
            "forms": "و ـو",
            "name": "waaw",
            "sound": "w, or long uu",
            "exScript": "ورد",
            "exRoman": "ward",
            "exEn": "roses"
          }
        ]
      },
      {
        "title": "The teeth family",
        "letters": [
          {
            "char": "س",
            "forms": "سـ ـسـ ـس",
            "name": "siin",
            "sound": "s",
            "exScript": "سلام",
            "exRoman": "salaam",
            "exEn": "peace, hello"
          },
          {
            "char": "ش",
            "forms": "شـ ـشـ ـش",
            "name": "shiin",
            "sound": "sh",
            "exScript": "شمس",
            "exRoman": "shams",
            "exEn": "sun"
          },
          {
            "char": "ص",
            "forms": "صـ ـصـ ـص",
            "name": "saad",
            "sound": "a heavy s, with the tongue low",
            "exScript": "صباح",
            "exRoman": "sabaah",
            "exEn": "morning"
          },
          {
            "char": "ض",
            "forms": "ضـ ـضـ ـض",
            "name": "daad",
            "sound": "a heavy d",
            "exScript": "ضيف",
            "exRoman": "dayf",
            "exEn": "guest"
          }
        ]
      },
      {
        "title": "Heavy letters and the throat",
        "letters": [
          {
            "char": "ط",
            "forms": "طـ ـطـ ـط",
            "name": "taa",
            "sound": "a heavy t",
            "exScript": "طالب",
            "exRoman": "taalib",
            "exEn": "student"
          },
          {
            "char": "ظ",
            "forms": "ظـ ـظـ ـظ",
            "name": "zaa",
            "sound": "a heavy dh",
            "exScript": "ظهر",
            "exRoman": "zuhr",
            "exEn": "noon"
          },
          {
            "char": "ع",
            "forms": "عـ ـعـ ـع",
            "name": "ayn",
            "sound": "a squeeze in the throat, written ' in the lessons",
            "exScript": "عين",
            "exRoman": "ayn",
            "exEn": "eye"
          },
          {
            "char": "غ",
            "forms": "غـ ـغـ ـغ",
            "name": "ghayn",
            "sound": "gh, a gargled r",
            "exScript": "غرفة",
            "exRoman": "ghurfa",
            "exEn": "room"
          }
        ]
      },
      {
        "title": "Loops and tall letters",
        "letters": [
          {
            "char": "ف",
            "forms": "فـ ـفـ ـف",
            "name": "faa",
            "sound": "f (one dot above)",
            "exScript": "فم",
            "exRoman": "fam",
            "exEn": "mouth"
          },
          {
            "char": "ق",
            "forms": "قـ ـقـ ـق",
            "name": "qaaf",
            "sound": "q, a k from deep in the throat (Egypt and Lebanon: a catch)",
            "exScript": "قلب",
            "exRoman": "qalb",
            "exEn": "heart"
          },
          {
            "char": "ك",
            "forms": "كـ ـكـ ـك",
            "name": "kaaf",
            "sound": "k",
            "exScript": "كتاب",
            "exRoman": "kitaab",
            "exEn": "book"
          },
          {
            "char": "ل",
            "forms": "لـ ـلـ ـل",
            "name": "laam",
            "sound": "l",
            "exScript": "ليل",
            "exRoman": "layl",
            "exEn": "night"
          }
        ]
      },
      {
        "title": "The last two, plus two extras",
        "letters": [
          {
            "char": "م",
            "forms": "مـ ـمـ ـم",
            "name": "miim",
            "sound": "m",
            "exScript": "ماء",
            "exRoman": "maa",
            "exEn": "water"
          },
          {
            "char": "ه",
            "forms": "هـ ـهـ ـه",
            "name": "haa",
            "sound": "h, a light English h",
            "exScript": "هواء",
            "exRoman": "hawaa",
            "exEn": "air"
          },
          {
            "char": "ة",
            "forms": "ـة",
            "name": "taa marbuuta",
            "sound": "not a letter of its own: the -a ending of feminine words",
            "exScript": "مدرسة",
            "exRoman": "madrasa",
            "exEn": "school"
          },
          {
            "char": "لا",
            "forms": "لا ـلا",
            "name": "laam-alif",
            "sound": "l + a written together: la",
            "exScript": "لا",
            "exRoman": "la",
            "exEn": "no"
          }
        ]
      }
    ]
  },

  base: {
    "fi":"in","wa":"and","min":"from","ila":"to","ala":"on","an":"about / that","ma'a":"with",
    "hadha":"this","hadhihi":"this","huwa":"he / it","hiya":"she / it","hum":"they","ana":"I",
    "anta":"you (m.)","anti":"you (f.)","nahnu":"we","kaana":"was","kaanat":"was (f.)",
    "la":"no / not","lam":"did not","lan":"will not","qad":"has / may","bi":"with / by",
    "li":"for / to","yawm":"day","sana":"year","kull":"every / all","ba'd":"after","qabl":"before",
    "misr":"Egypt","lubnan":"Lebanon","su'udiyya":"Saudi Arabia","bayrut":"Beirut",
    "qahira":"Cairo","riyad":"Riyadh"
  },

  days: []
};
