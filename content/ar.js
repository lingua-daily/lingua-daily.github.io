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
