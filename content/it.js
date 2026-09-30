window.CONTENT = window.CONTENT || {};

window.CONTENT.it = {
  label: "Italiano",
  flag: "🇮🇹",
  world: "Italian-speaking",
  defaultLevel: "A1",        // quiz level for the digest
  readingLevel: "A1",        // level the headlines and words are written at
  perDay: 2,                 // headlines, words and quiz questions shown
  script: false,
  focus: "Italy",

  base: {
    "il":"the","lo":"the","la":"the","i":"the","gli":"the","le":"the / them",
    "un":"a","uno":"a","una":"a",
    "di":"of","del":"of the","della":"of the","dei":"of the","delle":"of the","degli":"of the",
    "a":"to / at","al":"to the","alla":"to the","ai":"to the","da":"from / by","dal":"from the",
    "in":"in","nel":"in the","nella":"in the","con":"with","su":"on","sul":"on the","per":"for",
    "tra":"between","fra":"between","e":"and","ed":"and","o":"or","ma":"but","che":"that / which",
    "non":"not","è":"is","sono":"are / I am","ha":"has","hanno":"have","c'è":"there is",
    "ci":"there / us","si":"oneself","mi":"me","ti":"you","molto":"very / a lot","anche":"also",
    "oggi":"today","questo":"this","questa":"this","io":"I","tu":"you","lui":"he","lei":"she / you (formal)",
    "noi":"we","voi":"you (pl.)","loro":"they","anno":"year","anni":"years","più":"more",
    "italia":"Italy","roma":"Rome","milano":"Milan"
  },

  days: []   // no hand-written archive — fresh days only
};
