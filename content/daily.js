/* Written by bin/ingest-day.js — don't edit by hand.
   Freshly researched days, keyed by local date. Pruned to the last 14. */
var LINGUA_DAILY = {
 "2026-09-29": {
  "es": {
   "news": [
    {
     "topic": "Museos · España",
     "source": "https://www.eldiario.es/extremadura/cultura/entrada-gratis-regalo-libros-presencia-rafael-moneo-celebrar-40-anos-museo-romano-merida_1_13516754.html",
     "levels": {
      "C": {
       "text": "El Museo Nacional de Arte Romano de Mérida ha celebrado los cuarenta años de su sede, el edificio de ladrillo que Rafael Moneo levantó sobre los restos de la ciudad romana.",
       "en": "Mérida's National Museum of Roman Art has celebrated forty years of its home, the brick building Rafael Moneo raised over the remains of the Roman city.",
       "gloss": {
        "museo": "museum",
        "nacional": "national",
        "arte": "art",
        "romano": "Roman",
        "celebrado": "celebrated",
        "cuarenta": "forty",
        "sede": "headquarters / home",
        "edificio": "building",
        "ladrillo": "brick",
        "levantó": "raised / built",
        "restos": "remains",
        "ciudad": "city",
        "romana": "Roman"
       }
      },
      "A": {
       "text": "Un museo romano en Mérida tiene cuarenta años.",
       "en": "A Roman museum in Mérida is forty years old.",
       "gloss": {
        "museo": "museum",
        "romano": "Roman",
        "tiene": "has (here: is … old)",
        "cuarenta": "forty"
       }
      },
      "B": {
       "text": "El Museo de Arte Romano de Mérida celebra cuarenta años en su edificio actual, diseñado por el arquitecto Rafael Moneo.",
       "en": "Mérida's Museum of Roman Art celebrates forty years in its current building, designed by the architect Rafael Moneo.",
       "gloss": {
        "museo": "museum",
        "arte": "art",
        "romano": "Roman",
        "celebra": "celebrates",
        "cuarenta": "forty",
        "edificio": "building",
        "actual": "current",
        "diseñado": "designed",
        "arquitecto": "architect"
       }
      }
     }
    },
    {
     "topic": "Cultura · México",
     "source": "https://www.milenio.com/cultura/noche-museos-septiembre-2026-cdmx",
     "levels": {
      "C": {
       "text": "La Noche de Museos de este miércoles abre hasta tarde decenas de recintos capitalinos, casi todos gratis, con lucha libre en el Museo de San Carlos y mariachi en Bellas Artes.",
       "en": "This Wednesday's Museum Night keeps dozens of venues in the capital open late, almost all of them free, with lucha libre at the San Carlos Museum and mariachi at the Palace of Fine Arts.",
       "gloss": {
        "noche": "night",
        "museos": "museums",
        "miércoles": "Wednesday",
        "abre": "opens",
        "tarde": "late / afternoon",
        "decenas": "dozens",
        "recintos": "venues",
        "capitalinos": "in the capital (adj.)",
        "casi": "almost",
        "gratis": "free (of charge)",
        "lucha": "fight / wrestling",
        "libre": "free",
        "museo": "museum",
        "mariachi": "mariachi",
        "bellas": "fine / beautiful",
        "artes": "arts"
       }
      },
      "A": {
       "text": "El miércoles hay una noche de museos gratis en México.",
       "en": "On Wednesday there's a free museum night in Mexico.",
       "gloss": {
        "miércoles": "Wednesday",
        "noche": "night",
        "museos": "museums",
        "gratis": "free (of charge)"
       }
      },
      "B": {
       "text": "Este miércoles, muchos museos de la Ciudad de México abren hasta tarde y casi todos son gratis.",
       "en": "This Wednesday, many museums in Mexico City stay open late, and almost all of them are free.",
       "gloss": {
        "miércoles": "Wednesday",
        "muchos": "many",
        "museos": "museums",
        "ciudad": "city",
        "abren": "open",
        "tarde": "late",
        "casi": "almost",
        "gratis": "free (of charge)"
       }
      }
     }
    },
    {
     "topic": "Arqueología · Perú",
     "source": "https://www.artribune.com/arti-visive/archeologia-arte-antica/2026/09/scoperte-archeologiche-fulgur-conditum-spighe-bolsena-chan-chan-peru/",
     "levels": {
      "C": {
       "text": "En Chan Chan, la antigua capital chimú, los arqueólogos han hallado intacto un mausoleo de unos seiscientos años con treinta y ocho cuerpos y ofrendas de plata y cobre.",
       "en": "At Chan Chan, the old Chimú capital, archaeologists have found an intact mausoleum around six hundred years old, holding thirty-eight bodies and offerings of silver and copper.",
       "gloss": {
        "antigua": "old / ancient",
        "capital": "capital",
        "chimú": "Chimú (pre-Inca kingdom)",
        "arqueólogos": "archaeologists",
        "hallado": "found",
        "intacto": "intact",
        "mausoleo": "mausoleum",
        "seiscientos": "six hundred",
        "treinta": "thirty",
        "ocho": "eight",
        "cuerpos": "bodies",
        "ofrendas": "offerings",
        "plata": "silver",
        "cobre": "copper"
       }
      },
      "A": {
       "text": "En Perú, unos arqueólogos encuentran una tumba muy antigua.",
       "en": "In Peru, archaeologists find a very old tomb.",
       "gloss": {
        "perú": "Peru",
        "arqueólogos": "archaeologists",
        "encuentran": "find",
        "tumba": "tomb",
        "antigua": "old / ancient"
       }
      },
      "B": {
       "text": "En Perú, unos arqueólogos han encontrado una tumba de hace seiscientos años con treinta y ocho cuerpos.",
       "en": "In Peru, archaeologists have found a six-hundred-year-old tomb with thirty-eight bodies.",
       "gloss": {
        "perú": "Peru",
        "arqueólogos": "archaeologists",
        "encontrado": "found",
        "tumba": "tomb",
        "hace": "ago",
        "seiscientos": "six hundred",
        "treinta": "thirty",
        "ocho": "eight",
        "cuerpos": "bodies"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "flipar",
     "pos": "verb · slang",
     "region": "España",
     "ties": 1,
     "meaning": "to be blown away, to be amazed",
     "note": "Spain. «Flipar con algo» = to be blown away by it; «estar flipado» = to be full of yourself. Regular -ar verb. Mexico would say «vas a quedar impactado» or «está bien chido».",
     "example": "Vas a flipar con los mosaicos del museo.",
     "exampleEn": "You're going to be blown away by the museum's mosaics.",
     "exGloss": {
      "vas": "you are going",
      "flipar": "to be blown away",
      "mosaicos": "mosaics",
      "museo": "museum"
     }
    },
    {
     "word": "chido",
     "pos": "adjective · slang",
     "region": "México",
     "ties": 2,
     "meaning": "cool, great",
     "note": "Mexico. It agrees like any adjective: chido, chida, chidos. «Qué chido» = how cool; «bien chido» = really cool. Spain says «guay», Argentina «copado», Peru «bacán».",
     "example": "La lucha libre en el museo estuvo bien chida.",
     "exampleEn": "The lucha libre at the museum was really cool.",
     "exGloss": {
      "lucha": "wrestling",
      "libre": "free",
      "museo": "museum",
      "estuvo": "was",
      "bien": "really / well",
      "chida": "cool (Mex.)"
     }
    },
    {
     "word": "pata",
     "article": "el / la",
     "pos": "noun · slang",
     "region": "Perú",
     "ties": 3,
     "meaning": "buddy, mate (literally: paw, animal leg)",
     "note": "Peru. «Es mi pata» = he's my buddy; «patita» is warmer. Mexico says «cuate» or «carnal», Spain «colega» or «tronco». In standard Spanish «la pata» is just an animal's leg.",
     "example": "Mi pata trabaja en las excavaciones de Chan Chan.",
     "exampleEn": "My buddy works on the Chan Chan excavations.",
     "exGloss": {
      "pata": "buddy (Peru)",
      "trabaja": "works",
      "excavaciones": "excavations"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news3",
     "q": "Which word means “tomb”?",
     "options": [
      "la tienda",
      "la tumba",
      "la tarde",
      "la tabla"
     ],
     "answer": 1,
     "why": "«Tumba» = tomb. «Tienda» is shop, «tarde» afternoon, «tabla» board.",
     "lesson": "All four start with t-. «Tumba» is closest to English 'tomb'; lookalike words like this are the quickest wins at A1."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“La lucha libre en el museo estuvo bien chida.” What does «chida» mean?",
     "options": [
      "cool, great",
      "boring",
      "crowded",
      "expensive"
     ],
     "answer": 0,
     "why": "«Chido/chida» is Mexican slang for cool or great. It agrees with the noun: «la lucha… chida».",
     "lesson": "If you picked 'crowded', you guessed from the scene of a busy museum night. Slang like this rarely describes the scene; it carries the speaker's reaction to it."
    },
    {
     "level": "B1",
     "ref": "news1",
     "q": "Completa: El museo ___ cuarenta años en su edificio actual.",
     "options": [
      "celebran",
      "celebra",
      "celebras",
      "celebro"
     ],
     "answer": 1,
     "why": "El sujeto es «el museo», tercera persona del singular: «celebra».",
     "lesson": "«Celebran» tienta porque se habla de «cuarenta años», pero los años son lo que se celebra, no quien celebra. Pregunta siempre quién hace la acción."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Vas a flipar con los mosaicos»: ¿qué expresa aquí «ir a + infinitivo»?",
     "options": [
      "Una obligación",
      "Un futuro cercano y seguro",
      "Una costumbre",
      "Un deseo"
     ],
     "answer": 1,
     "why": "«Ir a + infinitivo» es el futuro perifrástico: algo que va a pasar pronto y con seguridad.",
     "lesson": "Si elegiste la obligación, confundiste «ir a» con «tener que». «Vas a flipar» no te obliga a nada; te anuncia lo que te va a pasar."
    },
    {
     "level": "C1",
     "ref": "news3",
     "q": "«Han hallado intacto un mausoleo»: ¿qué función cumple «intacto»?",
     "options": [
      "Adverbio de modo",
      "Complemento predicativo del objeto",
      "Adjetivo de «arqueólogos»",
      "Participio de un tiempo compuesto"
     ],
     "answer": 1,
     "why": "«Intacto» describe el estado del mausoleo en el momento del hallazgo y concuerda con él en masculino singular: es un predicativo del complemento directo.",
     "lesson": "Parece un adverbio porque va pegado al verbo, pero los adverbios no concuerdan. Pruébalo en femenino: «han hallado intacta una tumba». Si cambia, es un adjetivo predicativo."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Recintos capitalinos»: ¿qué aporta «capitalinos» frente a «de la capital»?",
     "options": [
      "Nada; es un error",
      "Indica que los recintos son del Estado",
      "Es un gentilicio: más compacto y periodístico",
      "Significa que están en el centro histórico"
     ],
     "answer": 2,
     "why": "«Capitalino» es el gentilicio de la capital; en México, de la CDMX. La prensa prefiere el adjetivo por economía y registro.",
     "lesson": "Quien lo toma por error suele no conocer el adjetivo, que es corriente en México («la vida capitalina»). No dice nada sobre quién es dueño del recinto ni sobre su ubicación exacta."
    }
   ],
   "tip": {
    "title": "Perfecto vs indefinido, Spain vs Mexico",
    "text": "In Spain, something finished today or this week usually takes the perfect tense: «el museo ha celebrado». Mexico and most of Latin America prefer the simple past for the same thing: «el museo celebró». Today's headlines use the perfect («ha celebrado», «han hallado») in Spanish-press style; a Mexican paper would more likely write «celebró» and «hallaron»."
   },
   "fun": {
    "kind": "idiom",
    "region": "España",
    "text": "Tirar la casa por la ventana.",
    "gloss": {
     "tirar": "to throw",
     "casa": "house",
     "ventana": "window"
    },
    "literal": "To throw the house out of the window.",
    "meaning": "To splash out: spend big, usually on a celebration.",
    "culture": "The popular story ties it to Spain's national lottery: winners were said to throw their old furniture out of the window because they could now buy everything new. Spaniards still say it about weddings and big birthdays: «Para la boda tiraron la casa por la ventana»."
   }
  },
  "de": {
   "news": [
    {
     "topic": "Volksfest · München",
     "source": "https://www.muenchen.de/veranstaltungen/oktoberfest/aktuell/oktoberfest-halbzeitbilanz-2026",
     "levels": {
      "C": {
       "text": "Zur Halbzeit des 191. Oktoberfests haben rund 3,8 Millionen Gäste die Theresienwiese besucht, 300.000 mehr als im Vorjahr.",
       "en": "At the halfway point of the 191st Oktoberfest, around 3.8 million guests have visited the Theresienwiese, 300,000 more than last year.",
       "gloss": {
        "halbzeit": "halfway point / half-time",
        "oktoberfests": "of the Oktoberfest",
        "rund": "around / roughly",
        "millionen": "million",
        "gäste": "guests",
        "theresienwiese": "Theresienwiese (the Oktoberfest grounds)",
        "besucht": "visited",
        "vorjahr": "previous year"
       }
      },
      "A": {
       "text": "Auf dem Oktoberfest sind schon fast vier Millionen Gäste.",
       "en": "There are already almost four million guests at the Oktoberfest.",
       "gloss": {
        "oktoberfest": "Oktoberfest",
        "fast": "almost",
        "millionen": "million",
        "gäste": "guests"
       }
      },
      "B": {
       "text": "Zur Halbzeit waren schon 3,8 Millionen Menschen auf dem Oktoberfest, mehr als im letzten Jahr.",
       "en": "By the halfway point, 3.8 million people had already been to the Oktoberfest, more than last year.",
       "gloss": {
        "halbzeit": "halfway point",
        "millionen": "million",
        "menschen": "people",
        "oktoberfest": "Oktoberfest",
        "letzten": "last"
       }
      }
     }
    },
    {
     "topic": "Kunst · Regensburg",
     "source": "https://www.regensburger-nachrichten.de/kultur-und-szene/100307-faszination-kathedrale-gastiert-im-donaueinkaufszentrum",
     "levels": {
      "C": {
       "text": "Nach mehr als 14.000 Besuchern zieht die Ausstellung „Faszination Kathedrale“ zum 750. Jubiläum des Regensburger Doms ins Donau-Einkaufszentrum.",
       "en": "After more than 14,000 visitors, the exhibition “Faszination Kathedrale”, marking the 750th anniversary of Regensburg Cathedral, moves into the Danube shopping centre.",
       "gloss": {
        "besuchern": "visitors (dative plural)",
        "zieht": "moves (lit. pulls)",
        "ausstellung": "exhibition",
        "faszination": "fascination",
        "kathedrale": "cathedral",
        "jubiläum": "anniversary",
        "regensburger": "Regensburg (adj.)",
        "doms": "of the cathedral",
        "ins": "into the",
        "donau-einkaufszentrum": "Danube shopping centre",
        "einkaufszentrum": "shopping centre"
       }
      },
      "A": {
       "text": "In Regensburg gibt es Kunst über den Dom im Einkaufszentrum.",
       "en": "In Regensburg there's art about the cathedral in the shopping centre.",
       "gloss": {
        "gibt": "gives (es gibt = there is)",
        "kunst": "art",
        "dom": "cathedral",
        "einkaufszentrum": "shopping centre"
       }
      },
      "B": {
       "text": "Die Ausstellung „Faszination Kathedrale“ über den Regensburger Dom ist jetzt im Einkaufszentrum zu sehen.",
       "en": "The exhibition “Faszination Kathedrale”, about Regensburg Cathedral, can now be seen in the shopping centre.",
       "gloss": {
        "ausstellung": "exhibition",
        "faszination": "fascination",
        "kathedrale": "cathedral",
        "regensburger": "Regensburg (adj.)",
        "dom": "cathedral",
        "jetzt": "now",
        "einkaufszentrum": "shopping centre",
        "sehen": "to see"
       }
      }
     }
    },
    {
     "topic": "Kunst · München",
     "source": "https://www.muenchen.travel/artikel/kunst-kultur/ausstellungen-2026-2027",
     "levels": {
      "C": {
       "text": "Das Bayerische Nationalmuseum in München zeigt bis Januar Hinterglasbilder der Künstlerin Fride Wirtl-Walser, eine Technik aus der bayerischen Volkskunst.",
       "en": "Munich's Bavarian National Museum is showing reverse-glass paintings by the artist Fride Wirtl-Walser until January, a technique from Bavarian folk art.",
       "gloss": {
        "nationalmuseum": "national museum",
        "zeigt": "shows",
        "januar": "January",
        "hinterglasbilder": "reverse-glass paintings",
        "künstlerin": "artist (female)",
        "technik": "technique",
        "volkskunst": "folk art"
       }
      },
      "A": {
       "text": "In München zeigt ein Museum Bilder auf Glas.",
       "en": "In Munich, a museum is showing pictures on glass.",
       "gloss": {
        "zeigt": "shows",
        "museum": "museum",
        "bilder": "pictures",
        "glas": "glass"
       }
      },
      "B": {
       "text": "Im Bayerischen Nationalmuseum in München sind jetzt Bilder hinter Glas zu sehen, eine alte bayerische Technik.",
       "en": "Pictures painted behind glass, an old Bavarian technique, are now on show at the Bavarian National Museum in Munich.",
       "gloss": {
        "nationalmuseum": "national museum",
        "jetzt": "now",
        "bilder": "pictures",
        "hinter": "behind",
        "glas": "glass",
        "sehen": "to see",
        "alte": "old",
        "technik": "technique"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "Maß",
     "article": "die",
     "pos": "noun · dialect",
     "region": "Bayern · Österreich",
     "ties": 1,
     "meaning": "a one-litre mug of beer (and the beer in it)",
     "note": "Bavarian. Said with a short vowel, like «Mass». Counting it doesn't change: «zwei Maß». Northern Germany would just say «ein Liter Bier». The example also has «heuer», Bavarian and Austrian for «dieses Jahr» (this year).",
     "example": "Auf der Wiesn trinken wir heuer nur eine Maß.",
     "exampleEn": "At the Oktoberfest this year we're only having one litre of beer.",
     "exGloss": {
      "wiesn": "Oktoberfest (Bav., lit. the meadow)",
      "trinken": "drink",
      "heuer": "this year (Bav./Aus.)",
      "maß": "litre of beer"
     }
    },
    {
     "word": "Schmarrn",
     "article": "der",
     "pos": "noun · dialect",
     "region": "Bayern · Österreich",
     "ties": 2,
     "meaning": "nonsense, rubbish",
     "note": "Bavarian and Austrian: «So a Schmarrn!» = what nonsense! The rest of Germany says «Quatsch» or «Unsinn». It's also the shredded-pancake dessert, Kaiserschmarrn.",
     "example": "Dass Kunst im Einkaufszentrum nichts bringt, ist doch ein Schmarrn.",
     "exampleEn": "The idea that art in a shopping centre achieves nothing is total nonsense.",
     "exGloss": {
      "dass": "that",
      "kunst": "art",
      "einkaufszentrum": "shopping centre",
      "bringt": "achieves / brings",
      "doch": "(particle: surely, after all)",
      "schmarrn": "nonsense (Bav./Aus.)"
     }
    },
    {
     "word": "gell?",
     "pos": "particle · dialect",
     "region": "Bayern · Österreich",
     "ties": 3,
     "meaning": "right? isn't it? (a tag asking you to agree)",
     "note": "Southern Germany and Austria, always at the end of a sentence. Northern Germany says «ne?» or «oder?», Switzerland «gäll?».",
     "example": "Die Hinterglasbilder sind wunderschön, gell?",
     "exampleEn": "The reverse-glass paintings are beautiful, aren't they?",
     "exGloss": {
      "hinterglasbilder": "reverse-glass paintings",
      "wunderschön": "beautiful",
      "gell": "right? (southern)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "Which word means “guests”?",
     "options": [
      "die Gäste",
      "die Gärten",
      "die Gassen",
      "die Geister"
     ],
     "answer": 0,
     "why": "«Der Gast», plural «die Gäste» = guest, guests.",
     "lesson": "«Gäste», «Gärten» (gardens) and «Gassen» (lanes) all start the same way. The umlaut plus -e is the plural pattern to spot: Gast → Gäste, like Hand → Hände."
    },
    {
     "level": "A2",
     "ref": "vocab3",
     "q": "“Die Hinterglasbilder sind wunderschön, gell?” What does «gell?» add?",
     "options": [
      "It means 'yellow'",
      "It means 'very'",
      "It asks you to agree, like 'right?'",
      "It puts the sentence in the past"
     ],
     "answer": 2,
     "why": "«Gell?» is a southern German tag that asks for agreement, like 'right?' or 'isn't it?'.",
     "lesson": "«Gelb» (yellow) sounds close, but «gell» only ever appears at the end of a sentence, after a comma. That position is the clue."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Ergänze: Die Ausstellung ist jetzt ___ Einkaufszentrum zu sehen.",
     "options": [
      "ins",
      "im",
      "in den",
      "am"
     ],
     "answer": 1,
     "why": "Ein Ort ohne Bewegung (wo?) verlangt den Dativ: in + dem = im.",
     "lesson": "«Ins» wäre richtig bei einer Bewegung (wohin?): Sie zieht ins Einkaufszentrum. Hier ist die Ausstellung schon dort, also «im»."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "«Das ist doch ein Schmarrn»: Welche Funktion hat «doch»?",
     "options": [
      "Es bedeutet 'trotzdem'",
      "Es macht den Satz zur Frage",
      "Es bedeutet 'auch'",
      "Es verstärkt einen Widerspruch: 'das ist ja wohl Unsinn'"
     ],
     "answer": 3,
     "why": "Als Modalpartikel zeigt «doch», dass der Sprecher einer Meinung widerspricht und seine Sicht für offensichtlich hält.",
     "lesson": "Als Konjunktion am Satzanfang heißt «doch» tatsächlich 'aber'. Mitten im Satz nach dem Verb ist es aber eine Partikel. Die Stellung verrät die Funktion."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Zur Halbzeit … haben rund 3,8 Millionen Gäste die Theresienwiese besucht»: Warum Perfekt und nicht Präteritum?",
     "options": [
      "Weil «besuchen» kein Präteritum hat",
      "Weil das Ergebnis jetzt zählt und das Fest noch läuft",
      "Weil es ein Passivsatz ist",
      "Weil Zahlen das Perfekt verlangen"
     ],
     "answer": 1,
     "why": "Die Bilanz gilt jetzt, und das Fest läuft weiter. Das Perfekt betont das Ergebnis mit Bezug zur Gegenwart.",
     "lesson": "«Besuchten» gibt es sehr wohl. Das Präteritum würde den Vorgang aber als abgeschlossene Erzählung darstellen, wie in einem Rückblick nach dem Fest."
    },
    {
     "level": "C2",
     "ref": "news3",
     "q": "«Hinterglasbilder der Künstlerin»: Was leistet der Genitiv hier gegenüber «von der Künstlerin»?",
     "options": [
      "Nichts; beides ist falsch",
      "Er ist nur in Bayern üblich",
      "Er klingt schriftsprachlicher und bezeichnet die Urheberschaft",
      "Er heißt, dass ihr die Bilder gehören, sie sie aber nicht gemalt hat"
     ],
     "answer": 2,
     "why": "Im Pressedeutsch steht der Genitiv für die Urheberschaft. «Von» bedeutet dasselbe, klingt aber mündlicher.",
     "lesson": "Wer 'Besitz' wählt, nimmt die Grundbedeutung des Genitivs zu wörtlich. Bei Werken wie Bildern, Büchern oder Liedern meint er fast immer die Urheberin, nicht die Eigentümerin."
    }
   ],
   "tip": {
    "title": "The dative plural -n",
    "text": "«Nach mehr als 14.000 Besuchern»: in the dative plural, a noun takes an extra -n unless it already ends in -n or -s. Die Besucher → mit den Besuchern; die Gäste → den Gästen. In writing it is never dropped, and getting it right is one of the clearest marks of careful German. In fast speech, especially in the south, you'll sometimes hear it slip."
   },
   "fun": {
    "kind": "saying",
    "region": "Bayern",
    "text": "Mia san mia.",
    "gloss": {
     "mia": "we (Bavarian for «wir»)",
     "san": "are (Bavarian for «sind»)"
    },
    "literal": "We are we.",
    "meaning": "We are who we are, and proud of it.",
    "culture": "It's the unofficial motto of Bavaria's self-confidence. Bavaria sees itself as a state with its own traditions and dialect, not just a region of Germany. FC Bayern Munich uses it as its club motto. In standard German it would be «Wir sind wir»."
   }
  },
  "it": {
   "news": [
    {
     "topic": "Archeologia · Campania",
     "source": "https://www.ilportico.it/it/cultura-29/a-pontecagnano-i-reperti-dell-ultima-scoperta-arch-179693/article",
     "levels": {
      "A": {
       "text": "A Pontecagnano c'è una nuova mostra: una tomba di più di 2.500 anni.",
       "en": "In Pontecagnano there is a new exhibition: a tomb more than 2,500 years old.",
       "gloss": {
        "nuova": "new",
        "mostra": "exhibition",
        "tomba": "tomb"
       }
      },
      "B": {
       "text": "A Pontecagnano, vicino a Salerno, una mostra presenta una tomba del VI secolo avanti Cristo.",
       "en": "In Pontecagnano, near Salerno, an exhibition presents a tomb from the 6th century BC.",
       "gloss": {
        "vicino": "near",
        "mostra": "exhibition",
        "presenta": "presents",
        "tomba": "tomb",
        "vi": "6th (Roman numeral)",
        "secolo": "century",
        "avanti": "before",
        "cristo": "Christ"
       }
      },
      "C": {
       "text": "Il Museo archeologico di Pontecagnano espone la tomba 10188, una rara sepoltura a cubo in travertino con un cratere corinzio decorato con cavalieri e sirene.",
       "en": "Pontecagnano's archaeological museum is showing tomb 10188, a rare cube-shaped travertine burial holding a Corinthian crater decorated with horsemen and sirens.",
       "gloss": {
        "museo": "museum",
        "archeologico": "archaeological",
        "espone": "exhibits",
        "tomba": "tomb",
        "rara": "rare",
        "sepoltura": "burial",
        "cubo": "cube",
        "travertino": "travertine",
        "cratere": "crater (wine-mixing vase)",
        "corinzio": "Corinthian",
        "decorato": "decorated",
        "cavalieri": "horsemen / knights",
        "sirene": "sirens"
       }
      }
     }
    },
    {
     "topic": "Cultura · Sardegna",
     "source": "https://www.ansa.it/sardegna/notizie/2026/09/24/musei-e-siti-aperti-nellisola-per-le-giornate-europee-del-patrimonio_7993fa51-72fb-40e5-93fb-63492d1fe12c.html",
     "levels": {
      "A": {
       "text": "Sabato molti musei sardi hanno aperto la sera per un euro.",
       "en": "On Saturday, many museums in Sardinia opened in the evening for one euro.",
       "gloss": {
        "sabato": "Saturday",
        "molti": "many",
        "musei": "museums",
        "sardi": "Sardinian",
        "aperto": "opened",
        "sera": "evening",
        "euro": "euro"
       }
      },
      "B": {
       "text": "Per le Giornate europee del patrimonio, sabato molti musei sardi sono rimasti aperti la sera per un euro.",
       "en": "For the European Heritage Days, many Sardinian museums stayed open on Saturday evening for one euro.",
       "gloss": {
        "giornate": "days",
        "europee": "European",
        "patrimonio": "heritage",
        "sabato": "Saturday",
        "molti": "many",
        "musei": "museums",
        "sardi": "Sardinian",
        "rimasti": "stayed",
        "aperti": "open",
        "sera": "evening",
        "euro": "euro"
       }
      },
      "C": {
       "text": "Nelle Giornate europee del patrimonio, dedicate al tema «Proteggere il patrimonio», oltre quaranta enti sardi hanno aperto musei e siti, con ingresso serale a un euro.",
       "en": "During the European Heritage Days, themed “Protecting heritage”, more than forty Sardinian institutions opened museums and sites, with evening entry for one euro.",
       "gloss": {
        "nelle": "in the",
        "giornate": "days",
        "europee": "European",
        "patrimonio": "heritage",
        "dedicate": "dedicated",
        "tema": "theme",
        "proteggere": "to protect",
        "oltre": "more than",
        "quaranta": "forty",
        "enti": "institutions",
        "sardi": "Sardinian",
        "aperto": "opened",
        "musei": "museums",
        "siti": "sites",
        "ingresso": "entry",
        "serale": "evening (adj.)",
        "euro": "euro"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "dai!",
     "pos": "interjection",
     "region": "general",
     "ties": 1,
     "meaning": "come on! go on!",
     "note": "Italy's all-purpose nudge: 'come on', 'go on', or 'no way!', depending on tone. It comes from «dare» (to give), literally 'give!'.",
     "example": "Dai, andiamo a vedere la tomba!",
     "exampleEn": "Come on, let's go and see the tomb!",
     "exGloss": {
      "dai": "come on",
      "andiamo": "let's go",
      "vedere": "to see",
      "tomba": "tomb"
     }
    },
    {
     "word": "boh",
     "pos": "interjection · slang",
     "region": "general",
     "ties": 2,
     "meaning": "dunno, who knows",
     "note": "A shrug in word form. Very informal but heard everywhere in Italy. The polite version is «non lo so».",
     "example": "Quanto costa il museo? Boh, forse un euro.",
     "exampleEn": "How much is the museum? Dunno, maybe one euro.",
     "exGloss": {
      "quanto": "how much",
      "costa": "costs",
      "museo": "museum",
      "boh": "dunno",
      "forse": "maybe",
      "euro": "euro"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "Which word means “tomb”?",
     "options": [
      "la tomba",
      "la torre",
      "la tavola",
      "la terra"
     ],
     "answer": 0,
     "why": "«La tomba» = tomb. «Torre» is tower, «tavola» table, «terra» earth.",
     "lesson": "All four start with t-, so go by the shape: «tomba» is English 'tomb' plus a vowel. Many Italian words work like that."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Quanto costa il museo? Boh, forse un euro.” What does «boh» mean?",
     "options": [
      "Yes, definitely",
      "Dunno",
      "It's free",
      "Too expensive"
     ],
     "answer": 1,
     "why": "«Boh» is a shrug in word form: 'dunno'.",
     "lesson": "The word after it, «forse» (maybe), is the giveaway. Someone who knew the price wouldn't say 'maybe'."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Completa: Molti musei sono rimasti ___ la sera.",
     "options": [
      "aperto",
      "aperti",
      "aperta",
      "aprire"
     ],
     "answer": 1,
     "why": "Con «essere» il participio concorda con il soggetto: musei, maschile plurale, quindi «aperti».",
     "lesson": "«Aperto» tenta perché l'hai visto in «hanno aperto». Con «avere» il participio non cambia, ma con «essere» sì."
    },
    {
     "level": "B2",
     "ref": "news1",
     "q": "«Una tomba di più di 2.500 anni»: che cosa indica «di»?",
     "options": [
      "Il possesso",
      "Il materiale",
      "La provenienza",
      "L'età"
     ],
     "answer": 3,
     "why": "«Di» più una durata indica l'età: un bambino di tre anni, una tomba di 2.500 anni.",
     "lesson": "«Di» indica spesso il possesso (la tomba di Marco), per questo tenta. Ma quando segue un numero con «anni», parla sempre dell'età."
    },
    {
     "level": "C1",
     "ref": "vocab1",
     "q": "«Dai, andiamo!»: da quale verbo viene «dai»?",
     "options": [
      "dire",
      "andare",
      "dare",
      "dovere"
     ],
     "answer": 2,
     "why": "È l'imperativo di «dare» alla seconda persona: letteralmente 'da'!'. Oggi si usa come esortazione.",
     "lesson": "Accanto ad «andiamo» sembra un pezzo di «andare», ma l'imperativo di «andare» è «va'» o «vai». «Dai» è rimasto fisso come interiezione."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Musei sardi»: perché l'aggettivo viene dopo il nome?",
     "options": [
      "Gli aggettivi di provenienza stanno normalmente dopo il nome",
      "È un errore",
      "Si fa solo in Sardegna",
      "Per enfasi poetica"
     ],
     "answer": 0,
     "why": "Gli aggettivi di nazionalità o di regione vanno dopo il nome: musei sardi, vino italiano.",
     "lesson": "Alcuni aggettivi cambiano senso secondo la posizione (un grande uomo, un uomo grande), e per questo si pensa all'enfasi. Quelli di provenienza no: stanno sempre dopo."
    }
   ],
   "tip": {
    "title": "Masculine -o, feminine -a",
    "text": "Most Italian nouns ending in -o are masculine (il museo) and most ending in -a are feminine (la tomba). The plural changes the last vowel: museo → musei, tomba → tombe. Both words are on today's page, so read the headlines again with that in mind."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "«In bocca al lupo!» «Crepi!»",
    "gloss": {
     "bocca": "mouth",
     "lupo": "wolf",
     "crepi": "may it die"
    },
    "literal": "“Into the wolf's mouth!” “May it die!”",
    "meaning": "Good luck! Said before an exam, an interview or a performance.",
    "culture": "Italians avoid wishing “good luck” directly, as if that might tempt fate. The right reply is «Crepi!» (or «Crepi il lupo!»), never «grazie», which is said to bring bad luck. Many connect it to old hunters' sayings."
   }
  },
  "ar": {
   "news": [
    {
     "topic": "Athar · Misr",
     "source": "https://archaeology.org/news/2026/09/25/pyramid-shaped-tomb-unearthed-in-egypts-dakhleh-oasis/",
     "levels": {
      "A": {
       "text": "Iktishaaf qabr ala shakl haram fi waahat al-daakhla bi-misr.",
       "en": "A pyramid-shaped tomb is discovered in Egypt's Dakhla Oasis.",
       "gloss": {
        "iktishaaf": "discovery",
        "qabr": "tomb",
        "shakl": "shape",
        "haram": "pyramid",
        "waahat": "oasis (of)",
        "al-daakhla": "Dakhla (lit. 'the inner one')",
        "bi-misr": "in Egypt"
       },
       "script": "اكتشاف قبر على شكل هرم في واحة الداخلة بمصر."
      },
      "B": {
       "text": "Wajada ulamaa al-athaar qabran ala shakl haram fi waahat al-daakhla bi-misr.",
       "en": "Archaeologists found a pyramid-shaped tomb in Egypt's Dakhla Oasis.",
       "gloss": {
        "wajada": "found",
        "ulamaa": "scholars",
        "al-athaar": "antiquities (ulamaa al-athaar = archaeologists)",
        "qabran": "a tomb",
        "shakl": "shape",
        "haram": "pyramid",
        "waahat": "oasis (of)",
        "al-daakhla": "Dakhla (lit. 'the inner one')",
        "bi-misr": "in Egypt"
       },
       "script": "وجد علماء الآثار قبرًا على شكل هرم في واحة الداخلة بمصر."
      },
      "C": {
       "text": "Kashafat ba'tha misriyya an qabr ala shakl haram fi waahat al-daakhla yarji'u ila al-qarn al-raabi al-miilaadii taqriiban.",
       "en": "An Egyptian mission has uncovered a pyramid-shaped tomb in the Dakhla Oasis dating to roughly the fourth century AD.",
       "gloss": {
        "kashafat": "uncovered",
        "ba'tha": "mission",
        "misriyya": "Egyptian",
        "qabr": "tomb",
        "shakl": "shape",
        "haram": "pyramid",
        "waahat": "oasis (of)",
        "al-daakhla": "Dakhla",
        "yarji'u": "dates back",
        "al-qarn": "the century",
        "al-raabi": "the fourth",
        "al-miilaadii": "AD (lit. of the Nativity)",
        "taqriiban": "approximately"
       },
       "script": "كشفت بعثة مصرية عن قبر على شكل هرم في واحة الداخلة يرجع إلى القرن الرابع الميلادي تقريبًا."
      }
     }
    },
    {
     "topic": "Turath · Lubnan",
     "source": "https://english.aawsat.com/culture/5319135-lebanon-returns-37-artifacts-smuggled-out-egypt",
     "levels": {
      "A": {
       "text": "Lubnan yu'iid 37 qit'a athariyya ila misr.",
       "en": "Lebanon returns 37 antiquities to Egypt.",
       "gloss": {
        "yu'iid": "returns / gives back",
        "qit'a": "piece",
        "athariyya": "archaeological, antique"
       },
       "script": "لبنان يعيد 37 قطعة أثرية إلى مصر."
      },
      "B": {
       "text": "Sallama Lubnan ila Misr 37 qit'a athariyya kaanat qad hurribat qabla sanawaat.",
       "en": "Lebanon handed Egypt 37 antiquities that had been smuggled years ago.",
       "gloss": {
        "sallama": "handed over",
        "qit'a": "piece",
        "athariyya": "archaeological, antique",
        "hurribat": "were smuggled",
        "qabla": "before / ago",
        "sanawaat": "years"
       },
       "script": "سلّم لبنان إلى مصر 37 قطعة أثرية كانت قد هُرّبت قبل سنوات."
      },
      "C": {
       "text": "Fi al-mathaf al-watanii bi-bayrut, a'aada Lubnan ila Misr 37 qit'a fir'awniyya dubitat fi marfa bayrut aam 2020.",
       "en": "At the National Museum in Beirut, Lebanon returned to Egypt 37 pharaonic pieces seized at Beirut port in 2020.",
       "gloss": {
        "al-mathaf": "the museum",
        "al-watanii": "the national",
        "bi-bayrut": "in Beirut",
        "a'aada": "returned",
        "qit'a": "piece",
        "fir'awniyya": "pharaonic",
        "dubitat": "were seized",
        "marfa": "port",
        "aam": "year"
       },
       "script": "في المتحف الوطني ببيروت، أعاد لبنان إلى مصر 37 قطعة فرعونية ضُبطت في مرفأ بيروت عام 2020."
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "yaa salaam",
     "wordScript": "يا سلام",
     "pos": "interjection",
     "region": "Egypt",
     "ties": 1,
     "meaning": "wow! how wonderful!",
     "note": "Egyptian, understood everywhere. Literally 'oh, peace!'. The example is Egyptian too: «da» (this) where Standard Arabic says «hadha», and «awi» (very) where it says «jiddan».",
     "example": "Yaa salaam! Al-qabr da gamiil awi.",
     "exScript": "يا سلام! القبر ده جميل أوي.",
     "exampleEn": "Wow! This tomb is really beautiful.",
     "exGloss": {
      "yaa": "oh",
      "salaam": "peace",
      "al-qabr": "the tomb",
      "da": "this (Egyptian)",
      "gamiil": "beautiful (Egyptian g)",
      "awi": "very (Egyptian)"
     }
    },
    {
     "word": "shu",
     "wordScript": "شو",
     "pos": "question word",
     "region": "Lebanon",
     "ties": 2,
     "meaning": "what?",
     "note": "Lebanese and Levantine. Egypt says «eeh?», Saudi Arabia «wesh?», Standard Arabic «maadhaa» or «maa». «Shu hayda?» = what's this?",
     "example": "Shu hayda? Qit'a min Masr?",
     "exScript": "شو هيدا؟ قطعة من مصر؟",
     "exampleEn": "What's this? A piece from Egypt?",
     "exGloss": {
      "shu": "what (Lebanese)",
      "hayda": "this (Lebanese)",
      "qit'a": "piece",
      "masr": "Egypt (spoken pronunciation)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "Which word means “tomb”?",
     "options": [
      "qabr",
      "haram",
      "waaha",
      "shakl"
     ],
     "answer": 0,
     "why": "«Qabr» = tomb or grave. «Haram» is pyramid, «waaha» oasis, «shakl» shape.",
     "lesson": "The story is about a pyramid, so «haram» tempts. But «ala shakl haram» means 'in the shape of a pyramid'; the tomb itself is «qabr»."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Shu hayda?” What are you asking?",
     "options": [
      "Where is it?",
      "What's this?",
      "How much is it?",
      "Who is that?"
     ],
     "answer": 1,
     "why": "«Shu» = what, «hayda» = this, both Lebanese.",
     "lesson": "'Who' in Lebanese is «miin». «Shu» always asks about a thing, never a person."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Maa ma'naa «athariyya» fi «qit'a athariyya»?",
     "options": [
      "modern",
      "expensive",
      "antique, archaeological",
      "broken"
     ],
     "answer": 2,
     "why": "«Athariyya» comes from «athar», a trace or relic; «al-athaar» are antiquities.",
     "lesson": "The story is about smuggling, so 'expensive' feels right. But «athariyya» says what the pieces are, not what they cost. The root a-th-r (trace) is the clue."
    },
    {
     "level": "B2",
     "ref": "news1",
     "q": "Limaadhaa «waahat al-daakhla» wa-laysa «al-waaha al-daakhla»?",
     "options": [
      "It's a spelling mistake",
      "Oasis names never take «al-»",
      "It's plural",
      "It's a possessive pair (idaafa): 'the oasis of Dakhla'"
     ],
     "answer": 3,
     "why": "In an idaafa (X of Y) only the last word takes «al-». The first word loses its article, and its final -a is pronounced -at: waaha → waahat.",
     "lesson": "«Al-waaha al-daakhla» would be noun plus adjective: 'the inner oasis'. Here Dakhla is a name, so it's the possessive pattern: 'the oasis of Dakhla'."
    },
    {
     "level": "C1",
     "ref": "vocab1",
     "q": "Fi «al-qabr da gamiil awi», maadhaa ta'nii «da»?",
     "options": [
      "the",
      "this (Egyptian)",
      "very",
      "that (Standard Arabic)"
     ],
     "answer": 1,
     "why": "Egyptian «da» (masculine) and «di» (feminine) mean 'this', and go after the noun: «al-qabr da» = this tomb.",
     "lesson": "Standard Arabic puts «hadha» before the noun (hadha al-qabr); Egyptian puts «da» after it. Coming after the noun makes it look like 'very', but 'very' is «awi»."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "«Yaa salaam!»: maa al-ma'naa al-harfii?",
     "options": [
      "Oh, peace!",
      "Hello!",
      "Goodbye!",
      "Thank God!"
     ],
     "answer": 0,
     "why": "Literally 'oh, peace!', used as an exclamation of delight or amazement.",
     "lesson": "Because «salaam» is in the greeting «as-salaamu alaykum», it's tempting to read it as hello. After «yaa» it becomes an exclamation, like 'wow'."
    }
   ],
   "tip": {
    "title": "The word al-",
    "text": "«Al-» means 'the' and never changes for gender or number: al-qabr (the tomb), al-waaha (the oasis). It's joined to its word, which is why it's written here with a hyphen. Before sounds like d, t, s, sh, n and r, the l blends into the next letter, so al-daakhla in today's headline is said 'ad-daakhla'."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Al-jaar qabla al-daar.",
    "script": "الجار قبل الدار.",
    "gloss": {
     "al-jaar": "the neighbour",
     "qabla": "before",
     "al-daar": "the house"
    },
    "literal": "The neighbour before the house.",
    "meaning": "Choose your neighbour before you choose your home.",
    "culture": "Across the Arab world, neighbours are part of daily life: food gets sent over, doors are knocked on, children run between homes. People still quote this when renting or buying: a great flat next to bad neighbours is a bad flat. It rhymes in Arabic, jaar and daar, which is why it sticks."
   }
  },
  "zh": {
   "news": [
    {
     "topic": "Kēxué · Zhōngguó",
     "source": "http://global.chinadaily.com.cn/a/202609/29/WS6abb55fce4b06d4aa0560c96.html",
     "levels": {
      "B": {
       "text": "Jiǔyuè shì Zhōngguó de kēpǔ yuè, quánguó yǒu sānshíliù wàn duō ge huódòng.",
       "en": "September is China's popular-science month, with more than 360,000 events across the country.",
       "gloss": {
        "jiǔyuè": "September",
        "kēpǔ": "popular science",
        "yuè": "month",
        "quánguó": "the whole country",
        "sānshíliù": "thirty-six",
        "wàn": "ten thousand",
        "duō": "more than / many",
        "huódòng": "events / activities"
       },
       "script": "九月是中国的科普月，全国有三十六万多个活动。"
      },
      "A": {
       "text": "Jiǔyuè, Zhōngguó yǒu hěn duō kēxué huódòng.",
       "en": "In September, China has lots of science events.",
       "gloss": {
        "jiǔyuè": "September",
        "duō": "many",
        "kēxué": "science",
        "huódòng": "events"
       },
       "script": "九月，中国有很多科学活动。"
      },
      "C": {
       "text": "Zài jīnnián de quánguó kēpǔ yuè lǐ, gèdì jǔbàn le sānshíliù wàn duō chǎng huódòng, xiànshàng xiànxià guānzhòng chāoguò yìbǎi yì rénci.",
       "en": "During this year's national popular-science month, more than 360,000 events were held across the country, with audiences online and offline exceeding 10 billion.",
       "gloss": {
        "jīnnián": "this year",
        "quánguó": "the whole country",
        "kēpǔ": "popular science",
        "yuè": "month",
        "lǐ": "in / during",
        "gèdì": "everywhere",
        "jǔbàn": "held",
        "sānshíliù": "thirty-six",
        "wàn": "ten thousand",
        "duō": "more than",
        "chǎng": "(measure word for events)",
        "huódòng": "events",
        "xiànshàng": "online",
        "xiànxià": "offline",
        "guānzhòng": "audience",
        "chāoguò": "exceed",
        "yìbǎi": "one hundred",
        "yì": "hundred million",
        "rénci": "person-visits"
       },
       "script": "在今年的全国科普月里，各地举办了三十六万多场活动，线上线下观众超过一百亿人次。"
      }
     }
    },
    {
     "topic": "Kēxué · Běijīng",
     "source": "https://macaubusiness.com/2026-beijing-international-week-for-science-literacy-launched-in-beijing/",
     "levels": {
      "B": {
       "text": "Běijīng Kēxué Zhōngxīn yǒu yí ge guójì kēxué zhōu, shíyī ge guójiā de rén lái cānjiā.",
       "en": "The Beijing Science Center holds an international science week, and people from 11 countries come to take part.",
       "gloss": {
        "kēxué": "science",
        "zhōngxīn": "centre",
        "guójì": "international",
        "zhōu": "week",
        "shíyī": "eleven",
        "guójiā": "country / countries",
        "cānjiā": "take part"
       },
       "script": "北京科学中心有一个国际科学周，十一个国家的人来参加。"
      },
      "A": {
       "text": "Běijīng yǒu yí ge kēxué zhōu.",
       "en": "Beijing has a science week.",
       "gloss": {
        "kēxué": "science",
        "zhōu": "week"
       },
       "script": "北京有一个科学周。"
      },
      "C": {
       "text": "Běijīng Kēxué Zhōngxīn yǔ Tàiguó hé Xīlà de bówùguǎn qiānshǔ le hézuò yìxiàngshū, jiāng gòngtóng kāifā kēxué jiàoyù xiàngmù.",
       "en": "The Beijing Science Center signed letters of intent with museums in Thailand and Greece to develop science-education programmes together.",
       "gloss": {
        "kēxué": "science",
        "zhōngxīn": "centre",
        "yǔ": "with",
        "tàiguó": "Thailand",
        "xīlà": "Greece",
        "bówùguǎn": "museums",
        "qiānshǔ": "signed",
        "hézuò": "cooperation",
        "yìxiàngshū": "letter of intent",
        "jiāng": "will",
        "gòngtóng": "jointly",
        "kāifā": "develop",
        "jiàoyù": "education",
        "xiàngmù": "programmes / projects"
       },
       "script": "北京科学中心与泰国和希腊的博物馆签署了合作意向书，将共同开发科学教育项目。"
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "hǎowánr",
     "wordScript": "好玩儿",
     "pos": "adjective",
     "region": "Běijīng",
     "ties": 1,
     "meaning": "fun",
     "note": "The -r ending (érhuà) is typical of Beijing and northern China. In the south and in Taiwan people say «hǎowán». It's written 好玩 without the 儿 in most texts.",
     "example": "Kēpǔ huódòng hěn hǎowánr!",
     "exScript": "科普活动很好玩儿！",
     "exampleEn": "Popular-science events are really fun!",
     "exGloss": {
      "kēpǔ": "popular science",
      "huódòng": "events",
      "hǎowánr": "fun (Beijing)"
     }
    },
    {
     "word": "yìqǐ",
     "wordScript": "一起",
     "pos": "adverb",
     "region": "general",
     "ties": 2,
     "meaning": "together",
     "note": "It goes before the verb: «yìqǐ qù» (go together), «yìqǐ chī» (eat together). Add «ba» at the end to turn it into 'let's…'.",
     "example": "Wǒmen yìqǐ qù kēxué zhōngxīn ba!",
     "exScript": "我们一起去科学中心吧！",
     "exampleEn": "Let's go to the science centre together!",
     "exGloss": {
      "yìqǐ": "together",
      "kēxué": "science",
      "zhōngxīn": "centre"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "Which word means “month”?",
     "options": [
      "yuè",
      "rén",
      "nián",
      "zhōu"
     ],
     "answer": 0,
     "why": "«Yuè» = month (it also means moon). Jiǔyuè, 'ninth month', is September.",
     "lesson": "«Nián» (year) and «zhōu» (week) are time words too, which is why they tempt. Chinese months are just a number plus yuè: yīyuè is January, jiǔyuè September."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Wǒmen yìqǐ qù kēxué zhōngxīn ba!” What does «ba» do at the end?",
     "options": [
      "It puts it in the past",
      "It makes a suggestion: 'let's'",
      "It asks 'why?'",
      "It means 'no'"
     ],
     "answer": 1,
     "why": "«Ba» at the end softens a sentence into a suggestion: 'let's go'.",
     "lesson": "«Ma» at the end turns a sentence into a yes/no question, so a question-like answer tempts. «Ba» doesn't ask anything; it proposes."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "«Shíyī ge guójiā»: «ge» shì shénme?",
     "options": [
      "a verb",
      "a name",
      "a word meaning 'many'",
      "a measure word"
     ],
     "answer": 3,
     "why": "A number needs a measure word before the noun: shíyī ge guójiā, 11 countries. «Ge» is the most general one.",
     "lesson": "It sits where English has nothing, so it's easy to read «ge» as part of the number, or as 'many'. Chinese never goes straight from number to noun."
    },
    {
     "level": "B2",
     "ref": "news1",
     "q": "«Sānshíliù wàn» shì duōshao?",
     "options": [
      "3,600",
      "36,000",
      "360,000",
      "3,600,000"
     ],
     "answer": 2,
     "why": "«Wàn» = 10,000, so 36 × 10,000 = 360,000.",
     "lesson": "English counts in thousands, Chinese in ten-thousands. Read «wàn» as 'thousand' and you get 36,000, the most common slip."
    },
    {
     "level": "C1",
     "ref": "vocab1",
     "q": "«Hǎowánr» de «r» shì shénme?",
     "options": [
      "The Beijing érhuà ending",
      "A plural marker",
      "A past-tense marker",
      "A spelling mistake"
     ],
     "answer": 0,
     "why": "The -r is érhuà, the curled 'r' sound of Beijing and northern speech: hǎowán → hǎowánr.",
     "lesson": "Chinese nouns and adjectives have no plural endings, so reading -r as a plural is an English habit. Érhuà is regional flavour, not grammar."
    },
    {
     "level": "C2",
     "ref": "vocab2",
     "q": "«Yìqǐ» yīnggāi fàng zài nǎr?",
     "options": [
      "After the verb",
      "Before the verb",
      "At the end of the sentence",
      "Before «wǒmen»"
     ],
     "answer": 1,
     "why": "Adverbs like «yìqǐ» go after the subject and before the verb: wǒmen yìqǐ qù.",
     "lesson": "English says 'go together', with the adverb after, so 'after the verb' feels natural. Chinese puts how and when before the verb."
    }
   ],
   "tip": {
    "title": "Verbs never change",
    "text": "Chinese verbs don't change for person or tense. «Lái» is come, comes, came and will come. Time comes from words like jīntiān (today), or from context. That's why today's headlines have no tenses to learn: «yǒu» works for 'there is' and 'there was' alike."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Niánnián yǒu yú.",
    "script": "年年有余。",
    "gloss": {
     "niánnián": "every year",
     "yú": "surplus (sounds like 'fish')"
    },
    "literal": "Every year, have a surplus.",
    "meaning": "May you have more than enough, every year.",
    "culture": "«Yú» 余 (surplus) sounds exactly like «yú» 鱼 (fish). That's why fish is served at the Chinese New Year's Eve dinner, and often a little is left on the plate, so there is literally 'fish left over'. Chinese culture is full of lucky puns like this."
   }
  }
 },
 "2026-09-30": {
  "es": {
   "news": [
    {
     "topic": "Arqueología subacuática · Mallorca",
     "source": "https://www.infobae.com/espana/2026/09/26/la-guardia-civil-rescata-del-fondo-del-mar-en-mallorca-un-cepo-que-formo-parte-del-ancla-de-una-embarcacion-del-imperio-romano-habia-riesgo-de-expolio/",
     "levels": {
      "A": {
       "text": "La Guardia Civil saca del mar parte de un ancla romana.",
       "en": "The Guardia Civil pulls part of a Roman anchor out of the sea.",
       "gloss": {
        "guardia": "guard",
        "civil": "civil (Guardia Civil = Spain's national police)",
        "saca": "takes out / pulls out",
        "mar": "sea",
        "parte": "part",
        "ancla": "anchor",
        "romana": "Roman"
       }
      },
      "B": {
       "text": "Buzos de la Guardia Civil sacaron del mar en Mallorca una pieza de un ancla romana de 350 kilos.",
       "en": "Guardia Civil divers pulled a 350-kilo piece of a Roman anchor out of the sea off Mallorca.",
       "gloss": {
        "buzos": "divers",
        "guardia": "guard",
        "civil": "civil",
        "sacaron": "pulled out",
        "mar": "sea",
        "pieza": "piece",
        "ancla": "anchor",
        "romana": "Roman",
        "kilos": "kilos"
       }
      },
      "C": {
       "text": "Buzos del GEAS de la Guardia Civil han reflotado con globos elevadores, frente a la costa norte de Mallorca, el cepo de un ancla romana de unos 350 kilos que corría riesgo de expolio.",
       "en": "Divers from the Guardia Civil's GEAS unit have raised, using lift balloons, the stock of a Roman anchor weighing some 350 kilos off the north coast of Mallorca, where it was at risk of looting.",
       "gloss": {
        "buzos": "divers",
        "guardia": "guard",
        "civil": "civil",
        "reflotado": "refloated / raised",
        "globos": "balloons",
        "elevadores": "lifting",
        "frente": "facing (frente a = off)",
        "costa": "coast",
        "norte": "north",
        "cepo": "stock (an anchor's crossbar)",
        "ancla": "anchor",
        "romana": "Roman",
        "unos": "some / about",
        "kilos": "kilos",
        "corría": "was running",
        "riesgo": "risk",
        "expolio": "looting"
       }
      }
     }
    },
    {
     "topic": "Historia · México",
     "source": "https://www.inah.gob.mx/boletines/mexico-y-filipinas-celebraran-al-galeon-de-manila-acapulco-a-461-anos-del-primer-tornaviaje",
     "levels": {
      "A": {
       "text": "México celebra el viaje del Galeón de Manila a Acapulco.",
       "en": "Mexico celebrates the voyage of the Manila Galleon to Acapulco.",
       "gloss": {
        "celebra": "celebrates",
        "viaje": "voyage / trip",
        "galeón": "galleon"
       }
      },
      "B": {
       "text": "Del 6 al 9 de octubre, Acapulco y Chilpancingo recordarán el galeón que unió Asia y América durante 250 años.",
       "en": "From 6 to 9 October, Acapulco and Chilpancingo will remember the galleon that linked Asia and America for 250 years.",
       "gloss": {
        "octubre": "October",
        "recordarán": "will remember",
        "galeón": "galleon",
        "unió": "joined / linked",
        "durante": "for / during",
        "años": "years"
       }
      },
      "C": {
       "text": "México y Filipinas conmemorarán en Acapulco el primer tornaviaje, que en 1565, gracias a fray Andrés de Urdaneta, halló la ruta de regreso por el Pacífico y abrió dos siglos y medio de comercio de plata, sedas y especias.",
       "en": "Mexico and the Philippines will commemorate in Acapulco the first tornaviaje, which in 1565, thanks to Friar Andrés de Urdaneta, found the return route across the Pacific and opened two and a half centuries of trade in silver, silks and spices.",
       "gloss": {
        "filipinas": "the Philippines",
        "conmemorarán": "will commemorate",
        "primer": "first",
        "tornaviaje": "return voyage (Asia to America)",
        "gracias": "thanks",
        "fray": "friar",
        "halló": "found",
        "ruta": "route",
        "regreso": "return",
        "pacífico": "Pacific",
        "abrió": "opened",
        "dos": "two",
        "siglos": "centuries",
        "medio": "half",
        "comercio": "trade",
        "plata": "silver",
        "sedas": "silks",
        "especias": "spices"
       }
      }
     }
    },
    {
     "topic": "Arqueología · Málaga",
     "source": "https://www.infobae.com/america/agencias/2026/09/14/arqueologos-de-la-uma-logran-hallazgos-ineditos-en-la-campana-de-excavacion-del-cerro-del-villar/",
     "levels": {
      "A": {
       "text": "En Málaga, unos arqueólogos estudian una ciudad fenicia.",
       "en": "In Málaga, archaeologists are studying a Phoenician town.",
       "gloss": {
        "arqueólogos": "archaeologists",
        "estudian": "study",
        "ciudad": "city / town",
        "fenicia": "Phoenician"
       }
      },
      "B": {
       "text": "Arqueólogos de la Universidad de Málaga encontraron pesas y ánforas en un poblado fenicio junto al río Guadalhorce.",
       "en": "University of Málaga archaeologists found weights and amphorae in a Phoenician settlement by the Guadalhorce river.",
       "gloss": {
        "arqueólogos": "archaeologists",
        "universidad": "university",
        "encontraron": "found",
        "pesas": "weights",
        "ánforas": "amphorae (storage jars)",
        "poblado": "settlement / village",
        "fenicio": "Phoenician",
        "junto": "next (junto a = by)",
        "río": "river"
       }
      },
      "C": {
       "text": "La quinta campaña en el Cerro del Villar, en la desembocadura del Guadalhorce, ha sacado a la luz pesas de balanza, ánforas griegas de Corinto y huellas de metalurgia de una colonia fenicia del siglo VIII antes de Cristo.",
       "en": "The fifth season at Cerro del Villar, at the mouth of the Guadalhorce, has brought to light balance weights, Greek amphorae from Corinth and traces of metalworking from an eighth-century BC Phoenician colony.",
       "gloss": {
        "quinta": "fifth",
        "campaña": "(dig) season / campaign",
        "cerro": "hill",
        "villar": "(place name)",
        "desembocadura": "river mouth",
        "sacado": "brought out (sacar a la luz = bring to light)",
        "luz": "light",
        "pesas": "weights",
        "balanza": "scales",
        "ánforas": "amphorae",
        "griegas": "Greek",
        "corinto": "Corinth",
        "huellas": "traces",
        "metalurgia": "metalworking",
        "colonia": "colony",
        "fenicia": "Phoenician",
        "siglo": "century",
        "viii": "8th",
        "antes": "before",
        "cristo": "Christ"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "guiri",
     "article": "el / la",
     "pos": "noun · slang",
     "region": "España",
     "ties": 1,
     "meaning": "foreign tourist (usually northern European)",
     "note": "Spain. Informal and usually jokey rather than rude. Plural «guiris». Mexico says «gringo» for Americans specifically, or just «turista».",
     "example": "La cala del ancla romana está llena de guiris en agosto.",
     "exampleEn": "The cove with the Roman anchor is full of tourists in August.",
     "exGloss": {
      "cala": "cove",
      "ancla": "anchor",
      "romana": "Roman",
      "está": "is",
      "llena": "full",
      "guiris": "foreign tourists",
      "agosto": "August"
     }
    },
    {
     "word": "ahorita",
     "pos": "adverb",
     "region": "México",
     "ties": 2,
     "meaning": "right now / in a bit / later (tone decides)",
     "note": "Mexico. Diminutive of «ahora». «Ahorita mismo» = right this second; a relaxed «ahorita» can mean much later. Spain says «ahora mismo» or «ahora».",
     "example": "Ahorita vamos al fuerte de San Diego a ver lo del galeón.",
     "exampleEn": "We're going to Fort San Diego in a bit to see the galleon thing.",
     "exGloss": {
      "ahorita": "right now / in a bit (Mex.)",
      "vamos": "we're going",
      "fuerte": "fort",
      "ver": "to see",
      "galeón": "galleon"
     }
    },
    {
     "word": "chiringuito",
     "article": "el",
     "pos": "noun",
     "region": "España",
     "ties": 3,
     "meaning": "beach bar, beach shack",
     "note": "Spain. In Málaga they grill «espetos», sardines on a cane skewer. Mexico would call a beach shack restaurant a «palapa».",
     "example": "Después de la excavación, comimos espetos en un chiringuito de la playa.",
     "exampleEn": "After the dig, we ate sardine skewers at a beach bar.",
     "exGloss": {
      "después": "after",
      "excavación": "dig / excavation",
      "comimos": "we ate",
      "espetos": "sardine skewers (Málaga)",
      "chiringuito": "beach bar",
      "playa": "beach"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“La Guardia Civil saca del mar parte de un ancla romana.” Which word means “sea”?",
     "options": [
      "el mar",
      "el mes",
      "la mano",
      "el mal"
     ],
     "answer": 0,
     "why": "«El mar» = the sea. «Mes» is month, «mano» hand, «mal» evil or badly.",
     "lesson": "«Mar» and «mal» differ by one letter and both are masculine. Link «mar» to English 'marine' and 'maritime' and it sticks."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Ahorita vamos al fuerte.” When are they going?",
     "options": [
      "Yesterday",
      "Now or in a bit, depending on tone",
      "Never",
      "Only in the morning"
     ],
     "answer": 1,
     "why": "«Ahorita» is Mexican for 'right now' or 'in a little while'. Tone decides which.",
     "lesson": "The -ita ending makes it look like 'a little now', so 'this exact second' tempts. In Mexico a relaxed «ahorita» can stretch to 'later'. Listen to the tone, not the ending."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "«Acapulco y Chilpancingo recordarán el galeón»: ¿qué tiempo es «recordarán»?",
     "options": [
      "pasado",
      "presente",
      "futuro",
      "imperativo"
     ],
     "answer": 2,
     "why": "La terminación -án con el infinitivo entero (recordar + án) es el futuro de «ellos».",
     "lesson": "El galeón es del siglo XVI, así que el pasado tienta. Pero la celebración es en octubre, todavía no ha pasado. El pasado sería «recordaron», con -ron."
    },
    {
     "level": "B2",
     "ref": "vocab3",
     "q": "«Comimos espetos en un chiringuito»: ¿qué es un chiringuito?",
     "options": [
      "Un barco de pesca",
      "Una fiesta de pueblo",
      "Un bar sencillo en la playa",
      "Un tipo de pescado"
     ],
     "answer": 2,
     "why": "Un chiringuito es un bar o puesto sencillo junto a la playa.",
     "lesson": "Como los espetos son pescado, «tipo de pescado» parece lógico. Pero «en un chiringuito» indica un lugar: la preposición «en» te dice que es dónde se come, no qué se come."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«El cepo de un ancla romana»: ¿por qué «un» y no «una»?",
     "options": [
      "Porque «ancla» es masculino",
      "Es un error de la noticia",
      "Porque va seguido de un adjetivo",
      "Porque es femenino con a- tónica: toma «un» en singular"
     ],
     "answer": 3,
     "why": "Los sustantivos femeninos que empiezan por a- tónica toman «el» o «un» en singular para evitar el choque de vocales: el ancla, un águila, el agua.",
     "lesson": "El adjetivo «romana» delata que sigue siendo femenino. El artículo solo cambia por sonido y solo justo delante: en plural son «las anclas», y con adjetivo delante, «una gran ancla»."
    },
    {
     "level": "C2",
     "ref": "news3",
     "q": "«Ha sacado a la luz pesas de balanza»: ¿qué aporta «sacar a la luz» frente a «encontrar»?",
     "options": [
      "Subraya que algo oculto pasa a ser visible o conocido",
      "Nada; son sinónimos exactos",
      "Indica que el hallazgo fue casual",
      "Implica que se excavó de día"
     ],
     "answer": 0,
     "why": "«Sacar a la luz» insiste en el paso de lo oculto a lo visible; por eso sirve también para secretos y escándalos.",
     "lesson": "Quien elige «casual» confunde la locución con «dar con algo». «Sacar a la luz» no dice nada del azar: una campaña planificada saca a la luz tanto como un golpe de suerte."
    }
   ],
   "tip": {
    "title": "Diminutives on adverbs",
    "text": "Spanish puts -ito on words English never shrinks, including adverbs: «ahora» → «ahorita», «cerca» → «cerquita», «luego» → «lueguito». Mexico does this constantly, and the effect is softening or affection rather than smallness. Spain uses these adverb forms far less, and it keeps -ito mostly for nouns and adjectives."
   },
   "fun": {
    "kind": "joke",
    "region": "México",
    "text": "—¿Qué le dijo una uva verde a una morada? —¡Respira, respira!",
    "gloss": {
     "qué": "what",
     "dijo": "said",
     "uva": "grape",
     "verde": "green",
     "morada": "purple",
     "respira": "breathe"
    },
    "literal": "What did a green grape say to a purple one? Breathe, breathe!",
    "meaning": "The purple grape's colour is read as a face turning purple from holding its breath, so the green grape tells it to breathe.",
    "culture": "«¿Qué le dijo X a Y?» is the classic shape of Mexican «chistes blancos», clean jokes that children swap at school and families tell at the table. The humour is visual and gentle, and the format lets anyone invent a new one on the spot."
   }
  },
  "de": {
   "news": [
    {
     "topic": "Geschichte · München",
     "source": "https://www.residenz-muenchen.de/",
     "levels": {
      "A": {
       "text": "In München zeigt die Residenz Schätze von einem Kurfürsten.",
       "en": "In Munich, the Residenz is showing an elector's treasures.",
       "gloss": {
        "zeigt": "shows",
        "residenz": "royal palace (the Residenz)",
        "schätze": "treasures",
        "kurfürsten": "elector (a prince who elected the emperor)"
       }
      },
      "B": {
       "text": "Vor 300 Jahren starb Kurfürst Max Emanuel; jetzt zeigt die Münchner Residenz seine schönsten Schätze.",
       "en": "Elector Max Emanuel died 300 years ago; now Munich's Residenz is showing his finest treasures.",
       "gloss": {
        "vor": "ago",
        "jahren": "years",
        "starb": "died",
        "kurfürst": "elector",
        "jetzt": "now",
        "zeigt": "shows",
        "münchner": "Munich (adj.)",
        "residenz": "royal palace",
        "seine": "his",
        "schönsten": "most beautiful / finest",
        "schätze": "treasures"
       }
      },
      "C": {
       "text": "Zum 300. Todestag des Kurfürsten Max Emanuel zeigt die Schatzkammer der Münchner Residenz eine goldene Tischuhr, eine juwelenbesetzte osmanische Gürtelschnalle und prunkvolles Jagdgerät.",
       "en": "For the 300th anniversary of Elector Max Emanuel's death, the treasury of Munich's Residenz is showing a gold table clock, a jewel-studded Ottoman belt buckle and splendid hunting gear.",
       "gloss": {
        "todestag": "anniversary of death",
        "kurfürsten": "elector (genitive)",
        "zeigt": "shows",
        "schatzkammer": "treasury",
        "münchner": "Munich (adj.)",
        "residenz": "royal palace",
        "goldene": "golden",
        "tischuhr": "table clock",
        "juwelenbesetzte": "jewel-studded",
        "osmanische": "Ottoman",
        "gürtelschnalle": "belt buckle",
        "prunkvolles": "splendid, lavish",
        "jagdgerät": "hunting gear"
       }
      }
     }
    },
    {
     "topic": "Archäologie · Aschaffenburg",
     "source": "https://www.herder.de/wbg-magazine/aktuelles/2026/2400-jahre-altes-eisenzeit-bauwerk-in-aschaffenburg-per-kran-geborgen/",
     "levels": {
      "A": {
       "text": "In Aschaffenburg holt ein Kran sehr alte Balken aus der Erde.",
       "en": "In Aschaffenburg, a crane lifts very old beams out of the ground.",
       "gloss": {
        "holt": "fetches / lifts",
        "kran": "crane",
        "sehr": "very",
        "alte": "old",
        "balken": "beams",
        "erde": "earth / ground"
       }
      },
      "B": {
       "text": "Am Main in Aschaffenburg haben Archäologen 2400 Jahre alte Eichenbalken der Kelten mit einem Kran geborgen.",
       "en": "On the River Main in Aschaffenburg, archaeologists have used a crane to recover 2,400-year-old Celtic oak beams.",
       "gloss": {
        "main": "the Main (river)",
        "archäologen": "archaeologists",
        "jahre": "years",
        "alte": "old",
        "eichenbalken": "oak beams",
        "kelten": "Celts",
        "kran": "crane",
        "geborgen": "recovered"
       }
      },
      "C": {
       "text": "Die zwischen 372 und 352 vor Christus gefällten Eichenbalken vom Aschaffenburger Mainufer, bis zu 250 Kilo schwer, gehörten wohl zu einem keltischen Bauwerk, das den Zugang vom Fluss zu einer Siedlung sicherte.",
       "en": "The oak beams from Aschaffenburg's Main riverbank, felled between 372 and 352 BC and weighing up to 250 kilos, probably belonged to a Celtic structure that secured access from the river to a settlement.",
       "gloss": {
        "zwischen": "between",
        "vor": "before (vor Christus = BC)",
        "christus": "Christ",
        "gefällten": "felled",
        "eichenbalken": "oak beams",
        "aschaffenburger": "Aschaffenburg (adj.)",
        "mainufer": "bank of the Main",
        "bis": "up to",
        "kilo": "kilos",
        "schwer": "heavy",
        "gehörten": "belonged",
        "wohl": "probably",
        "keltischen": "Celtic",
        "bauwerk": "structure",
        "zugang": "access",
        "fluss": "river",
        "siedlung": "settlement",
        "sicherte": "secured"
       }
      }
     }
    },
    {
     "topic": "Archäologie · Niederösterreich",
     "source": "https://noe.orf.at/stories/3372363/",
     "levels": {
      "A": {
       "text": "In Österreich finden Forscher eine alte römische Stadt.",
       "en": "In Austria, researchers find an old Roman town.",
       "gloss": {
        "finden": "find",
        "forscher": "researchers",
        "alte": "old",
        "römische": "Roman",
        "stadt": "town, city"
       }
      },
      "B": {
       "text": "In Niederösterreich haben Forscher unter der Erde eine vergessene Römerstadt mit einem Amphitheater entdeckt.",
       "en": "In Lower Austria, researchers have discovered a forgotten Roman town with an amphitheatre underground.",
       "gloss": {
        "forscher": "researchers",
        "unter": "under",
        "erde": "earth / ground",
        "vergessene": "forgotten",
        "römerstadt": "Roman town",
        "amphitheater": "amphitheatre",
        "entdeckt": "discovered"
       }
      },
      "C": {
       "text": "Geophysikalische Messungen in Sankt Pantaleon-Erla zeigen eine planmäßig angelegte Römerstadt von bis zu 30 Hektar mit Straßenraster und einem Amphitheater für rund 8000 Zuschauer.",
       "en": "Geophysical surveys at St. Pantaleon-Erla reveal a systematically laid-out Roman town of up to 30 hectares, with a street grid and an amphitheatre for around 8,000 spectators.",
       "gloss": {
        "geophysikalische": "geophysical",
        "messungen": "measurements / surveys",
        "sankt": "Saint",
        "zeigen": "show",
        "planmäßig": "systematically",
        "angelegte": "laid out",
        "römerstadt": "Roman town",
        "bis": "up to",
        "hektar": "hectares",
        "straßenraster": "street grid",
        "amphitheater": "amphitheatre",
        "rund": "around",
        "zuschauer": "spectators"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "fei",
     "pos": "particle · dialect",
     "region": "Bayern",
     "ties": 1,
     "meaning": "really, you know (adds emphasis or a gentle warning)",
     "note": "Bavarian and Franconian. «Des is fei teuer» = that's really expensive, mind you. There's no exact standard-German equivalent; the nearest are «wirklich» or «aber».",
     "example": "Die goldene Uhr in der Schatzkammer ist fei schön!",
     "exampleEn": "The gold clock in the treasury is really beautiful, you know!",
     "exGloss": {
      "goldene": "golden",
      "uhr": "clock",
      "schatzkammer": "treasury",
      "fei": "really / you know (Bav.)",
      "schön": "beautiful"
     }
    },
    {
     "word": "Baustelle",
     "article": "die",
     "pos": "noun",
     "region": "general",
     "ties": 2,
     "meaning": "building site, roadworks",
     "note": "Seen on every road sign: «Achtung Baustelle!». Plural «die Baustellen». The Aschaffenburg beams turned up on one, during work on a rainwater basin.",
     "example": "Wegen der Baustelle am Mainufer komme ich heute später.",
     "exampleEn": "Because of the roadworks on the riverbank, I'll be late today.",
     "exGloss": {
      "wegen": "because of",
      "baustelle": "building site / roadworks",
      "mainufer": "bank of the Main",
      "komme": "come",
      "heute": "today",
      "später": "later"
     }
    },
    {
     "word": "Jause",
     "article": "die",
     "pos": "noun · dialect",
     "region": "Österreich",
     "ties": 3,
     "meaning": "snack, light cold meal",
     "note": "Austrian. «Jausnen» = to have one. Bavaria says «die Brotzeit», standard German «der Imbiss» or «die Zwischenmahlzeit». «Most» is Austria's pear or apple cider; the area around St. Pantaleon is called the Mostviertel.",
     "example": "Nach der Führung in St. Pantaleon gibt's eine Jause mit Brot und Most.",
     "exampleEn": "After the tour in St. Pantaleon there's a snack with bread and cider.",
     "exGloss": {
      "nach": "after",
      "führung": "guided tour",
      "st": "Saint (abbr.)",
      "gibt's": "there is (gibt es)",
      "jause": "snack (Aus.)",
      "brot": "bread",
      "most": "cider (Aus.)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news2",
     "q": "“In Aschaffenburg holt ein Kran sehr alte Balken aus der Erde.” Which word means “crane”?",
     "options": [
      "der Kranz",
      "der Kran",
      "die Krone",
      "der Kern"
     ],
     "answer": 1,
     "why": "«Der Kran» = crane (the machine). «Kranz» is wreath, «Krone» crown, «Kern» core.",
     "lesson": "«Kran» and «Kranz» differ only by the final -z. English 'crane' has no z either, so match the shorter word."
    },
    {
     "level": "A2",
     "ref": "vocab3",
     "q": "“Nach der Führung gibt's eine Jause mit Brot und Most.” What's a «Jause»?",
     "options": [
      "a guided tour",
      "a museum ticket",
      "a snack",
      "a church"
     ],
     "answer": 2,
     "why": "«Die Jause» is Austrian for a snack or light meal; «mit Brot und Most» (with bread and cider) gives it away.",
     "lesson": "«Führung» (tour) comes first in the sentence, so it's tempting to think the Jause is part of the visit. «Nach» means 'after': the Jause comes after the tour."
    },
    {
     "level": "B1",
     "ref": "news3",
     "q": "Ergänze: In Niederösterreich haben Forscher eine vergessene Römerstadt ___.",
     "options": [
      "entdecken",
      "entdeckt",
      "entdeckte",
      "entdeckten"
     ],
     "answer": 1,
     "why": "Perfekt = «haben» + Partizip II, und das Partizip steht am Satzende: haben … entdeckt.",
     "lesson": "«Entdeckten» lockt, weil «Forscher» Plural ist. Aber im Perfekt zeigt nur «haben» den Plural; das Partizip ändert sich nie."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Die goldene Uhr ist fei schön»: Was macht «fei»?",
     "options": [
      "Es verstärkt die Aussage, etwa wie «wirklich»",
      "Es verneint den Satz",
      "Es bedeutet «fein, dünn»",
      "Es macht eine Frage daraus"
     ],
     "answer": 0,
     "why": "«Fei» ist eine bairische Modalpartikel: Sie verstärkt oder mahnt freundlich.",
     "lesson": "Es sieht aus wie «fein», aber «fein» wäre ein Adjektiv und würde die Uhr beschreiben. «Fei» beschreibt nichts, es färbt nur den Ton."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Zum 300. Todestag des Kurfürsten Max Emanuel»: Warum «Kurfürsten» mit -en?",
     "options": [
      "Weil es Plural ist",
      "Weil es Dativ ist",
      "Weil es ein Tippfehler ist",
      "Weil «Fürst» zur n-Deklination gehört: Genitiv -en"
     ],
     "answer": 3,
     "why": "«Fürst» ist ein schwaches Maskulinum: außer im Nominativ Singular endet es immer auf -en (des, dem, den Fürsten).",
     "lesson": "Die Form sieht aus wie der Plural «die Kurfürsten». Das «des» davor zeigt aber Genitiv Singular, und schwache Nomen bekommen dort -en statt -s."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Die zwischen 372 und 352 vor Christus gefällten Eichenbalken»: Wie heißt diese Konstruktion?",
     "options": [
      "Erweitertes Partizipialattribut",
      "Relativsatz",
      "Passivsatz",
      "Apposition"
     ],
     "answer": 0,
     "why": "Ein Partizip («gefällten») mit Ergänzungen steht zwischen Artikel und Nomen: typisch für geschriebenes Pressedeutsch.",
     "lesson": "Inhaltlich entspricht es einem Relativsatz («die Balken, die … gefällt wurden»), deshalb lockt die Antwort. Es fehlen aber Relativpronomen und finites Verb: Die Information ist in das Attribut gepackt."
    }
   ],
   "tip": {
    "title": "Compounds take the last part's gender",
    "text": "A compound noun gets its gender from its last part: der Bau + die Stelle = die Baustelle; der Main + das Ufer = das Mainufer. The first part carries the stress (BAUstelle), and meaning narrows from right to left: a Baustelle is a kind of Stelle. Linking letters between the parts (-s- in Arbeitsplatz, -n- in Straßenrand) are fixed for each word, so learn them with the compound."
   },
   "fun": {
    "kind": "idiom",
    "region": "Bayern · Österreich",
    "text": "Des is mir wurscht.",
    "gloss": {
     "des": "that (Bav. «das»)",
     "is": "is (Bav. «ist»)",
     "mir": "to me",
     "wurscht": "sausage (Bav. «Wurst»)"
    },
    "literal": "That is sausage to me.",
    "meaning": "I don't care; it's all the same to me.",
    "culture": "Standard German says «Das ist mir Wurst», but the southern «wurscht» sounds more natural. A popular explanation is that a sausage has two identical ends, so it doesn't matter which one you start with. Bavarians and Austrians even have a noun for relaxed indifference: «die Wurschtigkeit»."
   }
  },
  "it": {
   "news": [
    {
     "topic": "Archeologia · Lazio",
     "source": "https://www.artribune.com/arti-visive/archeologia-arte-antica/2026/09/scoperte-archeologiche-fulgur-conditum-spighe-bolsena-chan-chan-peru/",
     "levels": {
      "A": {
       "text": "Nel lago di Bolsena ci sono vasi con farro di 3.000 anni.",
       "en": "In Lake Bolsena there are pots holding 3,000-year-old spelt.",
       "gloss": {
        "nel": "in the",
        "lago": "lake",
        "vasi": "pots, jars",
        "farro": "spelt (ancient wheat)",
        "anni": "years"
       }
      },
      "B": {
       "text": "Sul fondo del lago di Bolsena, i sub hanno trovato vasi di ceramica pieni di spighe di farro di 3.000 anni fa.",
       "en": "On the bed of Lake Bolsena, divers have found ceramic pots full of ears of spelt from 3,000 years ago.",
       "gloss": {
        "sul": "on the",
        "fondo": "bottom",
        "lago": "lake",
        "sub": "divers",
        "trovato": "found",
        "vasi": "pots, jars",
        "ceramica": "ceramic",
        "pieni": "full",
        "spighe": "ears (of grain)",
        "farro": "spelt",
        "anni": "years",
        "fa": "ago"
       }
      },
      "C": {
       "text": "Nei fondali del Gran Carro, sul lago di Bolsena, le indagini subacquee hanno restituito recipienti protovillanoviani ancora colmi di spighe di farro, forse offerte legate a un'area sacra.",
       "en": "On the lakebed at the Gran Carro site on Lake Bolsena, underwater investigations have yielded Proto-Villanovan vessels still brimming with ears of spelt, perhaps offerings linked to a sacred area.",
       "gloss": {
        "nei": "in the",
        "fondali": "beds (sea/lake floor)",
        "gran": "great",
        "carro": "cart (Gran Carro = site name)",
        "lago": "lake",
        "indagini": "investigations",
        "subacquee": "underwater",
        "restituito": "yielded (lit. given back)",
        "recipienti": "vessels",
        "protovillanoviani": "Proto-Villanovan (c. 12th–10th c. BC)",
        "ancora": "still",
        "colmi": "brimming",
        "spighe": "ears (of grain)",
        "farro": "spelt",
        "forse": "perhaps",
        "offerte": "offerings",
        "legate": "linked",
        "area": "area",
        "sacra": "sacred"
       }
      }
     }
    },
    {
     "topic": "Archeologia · Tivoli",
     "source": "https://www.artribune.com/arti-visive/archeologia-arte-antica/2026/09/scoperte-archeologiche-fulgur-conditum-spighe-bolsena-chan-chan-peru/",
     "levels": {
      "A": {
       "text": "A Villa Adriana trovano una pietra romana per un fulmine.",
       "en": "At Hadrian's Villa they find a Roman stone for a lightning strike.",
       "gloss": {
        "trovano": "they find",
        "pietra": "stone",
        "romana": "Roman",
        "fulmine": "lightning bolt"
       }
      },
      "B": {
       "text": "A Villa Adriana, vicino a Roma, gli archeologi hanno trovato una lastra che ricorda un fulmine caduto lì.",
       "en": "At Hadrian's Villa near Rome, archaeologists have found a slab that marks a lightning bolt which struck there.",
       "gloss": {
        "vicino": "near",
        "archeologi": "archaeologists",
        "trovato": "found",
        "lastra": "slab",
        "ricorda": "recalls / marks",
        "fulmine": "lightning bolt",
        "caduto": "fallen / struck",
        "lì": "there"
       }
      },
      "C": {
       "text": "Nell'area dell'anfiteatro di Villa Adriana, l'Università di Urbino ha trovato ancora al suo posto una lastra con la scritta «FVLGVR SVBMANIVM»: un fulmine di Summano, dio dei lampi notturni, sepolto secondo il rito romano.",
       "en": "In the amphitheatre area of Hadrian's Villa, the University of Urbino has found, still in place, a slab inscribed «FVLGVR SVBMANIVM»: a lightning bolt of Summanus, god of night lightning, buried according to Roman rite.",
       "gloss": {
        "area": "area",
        "anfiteatro": "amphitheatre",
        "università": "university",
        "trovato": "found",
        "ancora": "still",
        "suo": "its",
        "posto": "place",
        "lastra": "slab",
        "scritta": "inscription",
        "fvlgvr": "lightning (Latin)",
        "svbmanivm": "of Summanus (Latin)",
        "fulmine": "lightning bolt",
        "dio": "god",
        "lampi": "flashes of lightning",
        "notturni": "nocturnal",
        "sepolto": "buried",
        "secondo": "according to",
        "rito": "rite",
        "romano": "Roman"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "fare la scarpetta",
     "pos": "verb phrase · idiom",
     "region": "general",
     "ties": 1,
     "meaning": "to mop up the sauce on your plate with bread",
     "note": "Literally 'to do the little shoe'. Everyone does it at home; at a formal dinner some consider it bad manners. «Fare» is irregular: faccio, fai, fa.",
     "example": "Con questa zuppa di farro, faccio la scarpetta!",
     "exampleEn": "With this spelt soup, I'm mopping up the plate with bread!",
     "exGloss": {
      "questa": "this",
      "zuppa": "soup",
      "farro": "spelt",
      "faccio": "I do / I make",
      "scarpetta": "mopping up with bread (lit. little shoe)"
     }
    },
    {
     "word": "magari!",
     "pos": "interjection · adverb",
     "region": "general",
     "ties": 2,
     "meaning": "I wish! if only! / maybe",
     "note": "On its own, «Magari!» = I wish! / I'd love to! Inside a sentence it means maybe: «magari domani» = maybe tomorrow.",
     "example": "Vuoi vedere Villa Adriana domani? – Magari!",
     "exampleEn": "Do you want to see Hadrian's Villa tomorrow? – I'd love to!",
     "exGloss": {
      "vuoi": "do you want",
      "vedere": "to see",
      "domani": "tomorrow",
      "magari": "I wish! / I'd love to!"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“Nel lago di Bolsena ci sono vasi con farro.” Which word means “lake”?",
     "options": [
      "il luogo",
      "il latte",
      "il lago",
      "il letto"
     ],
     "answer": 2,
     "why": "«Il lago» = lake. «Luogo» is place, «latte» milk, «letto» bed.",
     "lesson": "«Lago» and «luogo» look alike. Think of Lake Como, «il lago di Como»: the same pattern as «il lago di Bolsena»."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Vuoi vedere Villa Adriana domani? – Magari!” What does «Magari!» mean here?",
     "options": [
      "No, thanks",
      "I'd love to! / I wish!",
      "Maybe not",
      "Where is it?"
     ],
     "answer": 1,
     "why": "On its own, «Magari!» is an enthusiastic 'I'd love to!' or 'if only!'.",
     "lesson": "Inside a sentence «magari» means 'maybe', so 'maybe not' tempts. Said alone as an answer, it's a keen yes."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Completa: A Villa Adriana gli archeologi ___ una lastra.",
     "options": [
      "sono trovati",
      "hanno trovato",
      "ha trovato",
      "è trovato"
     ],
     "answer": 1,
     "why": "«Trovare» ha un oggetto diretto (una lastra), quindi il passato prossimo si fa con «avere»; il soggetto è plurale: «hanno».",
     "lesson": "«Sono» tenta perché molti verbi di movimento usano «essere» (sono andati). Ma quando il verbo ha un oggetto diretto, l'ausiliare è «avere»."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Con questa zuppa di farro, faccio la scarpetta»: che cosa fai?",
     "options": [
      "Compro scarpe nuove",
      "Cammino a piedi",
      "Lascio il cibo nel piatto",
      "Pulisco il piatto col pane"
     ],
     "answer": 3,
     "why": "«Fare la scarpetta» vuol dire raccogliere il sugo rimasto nel piatto con un pezzo di pane.",
     "lesson": "«Scarpetta» è davvero una piccola scarpa, per questo tentano le scarpe o il camminare. Il contesto è la zuppa: l'espressione riguarda il piatto, non i piedi."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Recipienti ancora colmi di spighe»: che differenza c'è tra «colmi» e «pieni»?",
     "options": [
      "«Colmi» vuol dire pieni fino all'orlo, e ha un tono più letterario",
      "«Colmi» vuol dire vuoti",
      "«Colmi» vuol dire rotti",
      "Nessuna: «colmi» è dialettale"
     ],
     "answer": 0,
     "why": "«Colmo» è pieno fino al bordo; è più intenso e più scritto di «pieno».",
     "lesson": "Chi lo prende per dialettale non conosce il registro: «colmo» è italiano standard, frequente nella prosa giornalistica. Ricorre anche nel sostantivo «il colmo» (il punto più alto)."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Un fulmine … sepolto secondo il rito romano»: che funzione ha «secondo»?",
     "options": [
      "Numerale ordinale: «il secondo»",
      "Avverbio di tempo",
      "Preposizione: «conforme a, in base a»",
      "Voce del verbo «secondare»"
     ],
     "answer": 2,
     "why": "Qui «secondo» è una preposizione: introduce la norma seguita, come in «secondo la legge».",
     "lesson": "L'ordinale è l'uso che si impara per primo, e per questo tenta. Ma un ordinale accompagna un nome contato («il secondo fulmine»); davanti a «il rito» indica conformità."
    }
   ],
   "tip": {
    "title": "Di: the Italian 'of'",
    "text": "Italian uses «di» where English uses 's or puts one noun before another: «il lago di Bolsena» is Lake Bolsena, «zuppa di farro» is spelt soup. The main thing comes first, then «di», then what it's made of or belongs to. Joined to «il», it becomes «del»: «il fondo del lago», the bottom of the lake."
   },
   "fun": {
    "kind": "joke",
    "region": "general",
    "text": "Qual è il colmo per un elettricista? Non essere al corrente!",
    "gloss": {
     "qual": "what / which",
     "colmo": "the height, the ultimate irony",
     "elettricista": "electrician",
     "essere": "to be",
     "corrente": "current (electric) / up to date"
    },
    "literal": "What's the height for an electrician? Not being at the current!",
    "meaning": "«Essere al corrente» means to be up to date, and «corrente» is also electric current. The ultimate irony for an electrician is being out of the loop.",
    "culture": "«Qual è il colmo per…?» jokes are an Italian classic, swapped by children and groaned at by parents. Each one finds the perfect irony for a job through a pun. Today's headline has «colmi» in its other sense: brimming full."
   }
  },
  "ar": {
   "news": [
    {
     "topic": "Athar · al-Baaha",
     "source": "https://archaeology.org/news/2026/09/15/early-mosque-uncovered-in-saudi-arabias-al-baha-province/",
     "levels": {
      "A": {
       "text": "Hay'at al-turaath tajidu masjidan qadiiman fi al-Baaha.",
       "script": "هيئة التراث تجد مسجدًا قديمًا في الباحة.",
       "en": "The Heritage Commission finds an old mosque in Al-Baha.",
       "gloss": {
        "hay'at": "commission / authority (of)",
        "al-turaath": "the heritage",
        "tajidu": "finds",
        "masjidan": "a mosque",
        "qadiiman": "old",
        "al-baaha": "Al-Baha (Saudi province)"
       }
      },
      "B": {
       "text": "Kashafat hay'at al-turaath fi al-Baaha an masjid min al-qarn al-awwal al-hijrii, lahu mi'dhana wa-mihraab.",
       "script": "كشفت هيئة التراث في الباحة عن مسجد من القرن الأول الهجري، له مئذنة ومحراب.",
       "en": "In Al-Baha, the Heritage Commission uncovered a mosque from the first century of the Islamic era, with a minaret and a mihrab.",
       "gloss": {
        "kashafat": "uncovered (f.)",
        "hay'at": "commission (of)",
        "al-turaath": "the heritage",
        "al-baaha": "Al-Baha",
        "an": "(kashafa an = to uncover)",
        "masjid": "mosque",
        "min": "from",
        "al-qarn": "the century",
        "al-awwal": "the first",
        "al-hijrii": "Hijri (of the Islamic calendar)",
        "lahu": "it has",
        "mi'dhana": "minaret",
        "wa-mihraab": "and a mihrab (prayer niche)",
        "mihraab": "mihrab (prayer niche)"
       }
      },
      "C": {
       "text": "Fi mawqi al-Ma'allama al-ta'diinii bi-al-Baaha, azaaha fariiq hay'at al-turaath al-sitaar an masjid min al-hijaara al-graniitiyya yarji'u ila al-qarn al-awwal al-hijrii, tuzayyinu judraanahu nuquush arabiyya.",
       "script": "في موقع المعلّمة التعديني بالباحة، أزاح فريق هيئة التراث الستار عن مسجد من الحجارة الغرانيتية يرجع إلى القرن الأول الهجري، تزيّن جدرانه نقوش عربية.",
       "en": "At the Al-Maallamah mining site in Al-Baha, a Heritage Commission team has unveiled a granite-stone mosque dating to the first century of the Islamic era, its walls adorned with Arabic inscriptions.",
       "gloss": {
        "mawqi": "site (of)",
        "al-ma'allama": "Al-Maallamah (site name)",
        "al-ta'diinii": "the mining (adj.)",
        "bi-al-baaha": "in Al-Baha",
        "azaaha": "removed (azaaha al-sitaar an = unveiled)",
        "fariiq": "team",
        "hay'at": "commission (of)",
        "al-turaath": "the heritage",
        "al-sitaar": "the curtain",
        "an": "from",
        "masjid": "mosque",
        "min": "of / from",
        "al-hijaara": "the stones",
        "al-graniitiyya": "granite (adj.)",
        "yarji'u": "dates back",
        "ila": "to",
        "al-qarn": "the century",
        "al-awwal": "the first",
        "al-hijrii": "Hijri (Islamic era)",
        "tuzayyinu": "adorn",
        "judraanahu": "its walls",
        "nuquush": "inscriptions",
        "arabiyya": "Arabic"
       }
      }
     }
    },
    {
     "topic": "Fann qadiim · Saqqaara",
     "source": "https://www.euronews.com/2026/09/10/spanish-archaeologists-find-4400-year-old-tomb-in-egypt-with-original-colours-intact",
     "levels": {
      "A": {
       "text": "Fi Saqqaara, maqbara qadiima lahaa alwaan jamiila.",
       "script": "في سقارة، مقبرة قديمة لها ألوان جميلة.",
       "en": "In Saqqara, an old tomb has beautiful colours.",
       "gloss": {
        "saqqaara": "Saqqara (necropolis near Cairo)",
        "maqbara": "tomb",
        "qadiima": "old (f.)",
        "lahaa": "it has (f.)",
        "alwaan": "colours",
        "jamiila": "beautiful"
       }
      },
      "B": {
       "text": "Wajadat ba'tha isbaaniyya misriyya fi Saqqaara maqbara umruhaa 4400 sana, wa-alwaanuhaa maa zaalat baaqiya.",
       "script": "وجدت بعثة إسبانية مصرية في سقارة مقبرة عمرها 4400 سنة، وألوانها ما زالت باقية.",
       "en": "A Spanish-Egyptian mission found a 4,400-year-old tomb in Saqqara, and its colours are still there.",
       "gloss": {
        "wajadat": "found (f.)",
        "ba'tha": "mission",
        "isbaaniyya": "Spanish",
        "misriyya": "Egyptian",
        "saqqaara": "Saqqara",
        "maqbara": "tomb",
        "umruhaa": "its age",
        "sana": "year(s)",
        "wa-alwaanuhaa": "and its colours",
        "alwaanuhaa": "its colours",
        "maa": "(maa zaala = still)",
        "zaalat": "(maa zaalat = is still)",
        "baaqiya": "remaining"
       }
      },
      "C": {
       "text": "Kashafat ba'tha misriyya isbaaniyya fi Saqqaara an mastaba min al-usra al-khaamisa li-mas'uul yud'aa Yunmen, ihtafazat nuquushuhaa bi-alwaanihaa al-asliyya wa-tusawwiru al-ziraa'a wa-mawaakib al-qaraabiin.",
       "script": "كشفت بعثة مصرية إسبانية في سقارة عن مصطبة من الأسرة الخامسة لمسؤول يُدعى يونمن، احتفظت نقوشها بألوانها الأصلية وتصوّر الزراعة ومواكب القرابين.",
       "en": "An Egyptian-Spanish mission in Saqqara has uncovered a Fifth Dynasty mastaba belonging to an official named Yunmen, whose reliefs have kept their original colours and show farming and processions of offerings.",
       "gloss": {
        "kashafat": "uncovered (f.)",
        "ba'tha": "mission",
        "misriyya": "Egyptian",
        "isbaaniyya": "Spanish",
        "saqqaara": "Saqqara",
        "an": "(kashafa an = to uncover)",
        "mastaba": "mastaba (flat-roofed tomb)",
        "min": "from",
        "al-usra": "the dynasty",
        "al-khaamisa": "the fifth",
        "li-mas'uul": "for an official",
        "mas'uul": "official",
        "yud'aa": "(who) is called",
        "ihtafazat": "kept (f.)",
        "nuquushuhaa": "its reliefs",
        "bi-alwaanihaa": "(with) their colours",
        "alwaanihaa": "their colours",
        "al-asliyya": "the original",
        "wa-tusawwiru": "and depict",
        "tusawwiru": "depict",
        "al-ziraa'a": "agriculture",
        "wa-mawaakib": "and processions",
        "mawaakib": "processions",
        "al-qaraabiin": "the offerings"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "marra",
     "wordScript": "مرة",
     "pos": "adverb",
     "region": "Saudi",
     "ties": 1,
     "meaning": "very",
     "note": "Saudi (Najd and Hijaz). In Standard Arabic «marra» means 'once, one time'; Saudis also use it for 'very'. Egypt says «awi», Lebanon «ktiir», Standard Arabic «jiddan».",
     "example": "Al-masjid haadha qadiim marra!",
     "exScript": "المسجد هذا قديم مرة!",
     "exampleEn": "This mosque is really old!",
     "exGloss": {
      "al-masjid": "the mosque",
      "haadha": "this",
      "qadiim": "old",
      "marra": "very (Saudi)"
     }
    },
    {
     "word": "lissa",
     "wordScript": "لسه",
     "pos": "adverb",
     "region": "Egypt",
     "ties": 2,
     "meaning": "still; (with a negative) not yet",
     "note": "Egyptian. «Lissa ma-shuftush» = I haven't seen it yet. Lebanese say «ba'd» (or «lissa»), Saudis «lil-hiin», Standard Arabic «maa zaala», as in today's headline.",
     "example": "Al-alwaan lissa gamiila awi!",
     "exScript": "الألوان لسه جميلة أوي!",
     "exampleEn": "The colours are still really beautiful!",
     "exGloss": {
      "al-alwaan": "the colours",
      "lissa": "still (Egyptian)",
      "gamiila": "beautiful (Egyptian g)",
      "awi": "very (Egyptian)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“Hay'at al-turaath tajidu masjidan qadiiman.” Which word means “mosque”?",
     "options": [
      "madrasa",
      "masjid",
      "maktab",
      "matbakh"
     ],
     "answer": 1,
     "why": "«Masjid» = mosque (English 'mosque' comes from it). «Madrasa» is school, «maktab» office, «matbakh» kitchen.",
     "lesson": "All four start with ma-, the prefix Arabic uses for places: masjid is the place of prostration (s-j-d), maktab the place of writing (k-t-b). Look at the middle letters to tell them apart."
    },
    {
     "level": "A2",
     "ref": "vocab1",
     "q": "“Al-masjid haadha qadiim marra!” What does «marra» mean here?",
     "options": [
      "once",
      "old",
      "very",
      "again"
     ],
     "answer": 2,
     "why": "In Saudi speech «marra» after an adjective means 'very': «qadiim marra» = really old.",
     "lesson": "In Standard Arabic «marra» means 'once', which is what textbooks teach. After an adjective in Saudi speech it's an intensifier."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Fi «wajadat ba'tha … maqbara», maa ma'naa «maqbara»?",
     "options": [
      "tomb",
      "museum",
      "colour",
      "year"
     ],
     "answer": 0,
     "why": "«Maqbara» = tomb or cemetery, from the root q-b-r (to bury); «qabr» is a grave.",
     "lesson": "Like «masjid», it begins with ma-, the place prefix: maqbara is 'the place of burying'. Once you spot the root q-b-r, 'museum' (mathaf) is ruled out."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "Fi «al-alwaan lissa gamiila», maa ma'naa «lissa»?",
     "options": [
      "not",
      "only",
      "again",
      "still"
     ],
     "answer": 3,
     "why": "Egyptian «lissa» = still: the colours are still beautiful.",
     "lesson": "«Lissa» often appears with a negative («lissa ma-shuftush», not yet), so 'not' tempts. On its own, with no «ma-», it just means 'still'."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Azaaha fariiq hay'at al-turaath al-sitaar an masjid»: maa al-ma'naa?",
     "options": [
      "unveiled (lit. removed the curtain from)",
      "destroyed",
      "built",
      "closed"
     ],
     "answer": 0,
     "why": "«Azaaha al-sitaar an» is a fixed press phrase: to pull back the curtain from, i.e. unveil or reveal.",
     "lesson": "«Azaaha» alone means 'removed', which makes 'destroyed' tempting. With «al-sitaar» (the curtain) the removing applies to the cover, not the mosque."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Li-mas'uul yud'aa Yunmen»: maa waziifat «yud'aa»?",
     "options": [
      "active verb: 'calls'",
      "noun: 'a prayer'",
      "passive verb: '(who) is called'",
      "verb: 'prays'"
     ],
     "answer": 2,
     "why": "«Yud'aa» is the passive of «yad'uu» (to call): 'an official who is called Yunmen'.",
     "lesson": "The same root d-'-w gives «du'aa'» (a prayer), so 'prays' or 'a prayer' tempt. The yu-…-aa vowel pattern marks the passive."
    }
   ],
   "tip": {
    "title": "Plural things act feminine singular",
    "text": "In Arabic, plurals of things (not people) take feminine singular adjectives and verbs. «Al-alwaan» (the colours) is plural, yet it's «al-alwaan … gamiila», not a plural form. Compare «al-masjid … qadiim»: a masculine singular noun, so there's no -a ending. That final -a (taa' marbuuta) is the everyday feminine marker."
   },
   "fun": {
    "kind": "idiom",
    "region": "Egypt",
    "text": "Yi'mil min il-habba ubba.",
    "script": "يعمل من الحبة قبة.",
    "gloss": {
     "yi'mil": "he makes",
     "min": "from",
     "il-habba": "the seed / grain",
     "ubba": "dome (Egyptian «qubba»)"
    },
    "literal": "He makes a dome out of a seed.",
    "meaning": "To make a mountain out of a molehill.",
    "culture": "It rhymes, habba and ubba, which is why it sticks. Egyptians say the q of «qubba» as a glottal stop, so it becomes 'ubba'. Cairo's skyline is full of domes on mosques and shrines, so a dome is the natural image for something big."
   }
  },
  "zh": {
   "news": [
    {
     "topic": "Kǎogǔ · Shǎnxī",
     "source": "https://www.heritagedaily.com/2026/09/tomb-discovery-could-be-resting-place-of-fabled-chinese-empress/159352",
     "levels": {
      "A": {
       "text": "Xī'ān fùjìn yǒu yí zuò hěn dà de gǔmù.",
       "script": "西安附近有一座很大的古墓。",
       "en": "Near Xi'an there is a very big ancient tomb.",
       "gloss": {
        "fùjìn": "nearby",
        "yǒu": "there is / have",
        "yí": "one",
        "zuò": "(measure word for big solid things)",
        "hěn": "very",
        "dà": "big",
        "de": "(links describer to noun)",
        "gǔmù": "ancient tomb"
       }
      },
      "B": {
       "text": "Kǎogǔ xuéjiā rènwéi, Xī'ān jīchǎng pángbiān de dà mù kěnéng shì Qín Shǐhuáng zǔmǔ de mù.",
       "script": "考古学家认为，西安机场旁边的大墓可能是秦始皇祖母的墓。",
       "en": "Archaeologists think the big tomb beside Xi'an airport may belong to Qin Shi Huang's grandmother.",
       "gloss": {
        "kǎogǔ": "archaeology",
        "xuéjiā": "scholars (kǎogǔ xuéjiā = archaeologists)",
        "rènwéi": "think, believe",
        "jīchǎng": "airport",
        "pángbiān": "beside",
        "de": "(links describer to noun)",
        "dà": "big",
        "mù": "tomb",
        "kěnéng": "possibly, may",
        "shì": "is",
        "zǔmǔ": "grandmother"
       }
      },
      "C": {
       "text": "Shǎnxī kǎogǔ rényuán rènwéi, Xī'ān Xiányáng jīchǎng fùjìn yí zuò zāo dàojué de dàxíng mùzàng, zuì yǒu kěnéng shì Qín Shǐhuáng de sìzǔmǔ Huáyáng tàihòu zhī mù.",
       "script": "陕西考古人员认为，西安咸阳机场附近一座遭盗掘的大型墓葬，最有可能是秦始皇的嗣祖母华阳太后之墓。",
       "en": "Shaanxi archaeologists believe that a large, looted tomb near Xi'an Xianyang airport most likely belongs to Empress Dowager Huayang, Qin Shi Huang's adoptive grandmother.",
       "gloss": {
        "kǎogǔ": "archaeology",
        "rényuán": "staff, personnel",
        "rènwéi": "believe",
        "jīchǎng": "airport",
        "fùjìn": "near",
        "yí": "one",
        "zuò": "(measure word)",
        "zāo": "suffered",
        "dàojué": "tomb robbing, looting",
        "de": "(links describer to noun)",
        "dàxíng": "large-scale",
        "mùzàng": "tomb, burial",
        "zuì": "most",
        "yǒu": "have",
        "kěnéng": "likely (zuì yǒu kěnéng = most likely)",
        "shì": "is",
        "sìzǔmǔ": "adoptive grandmother",
        "tàihòu": "empress dowager",
        "zhī": "(classical 'of')",
        "mù": "tomb"
       }
      }
     }
    },
    {
     "topic": "Mínsú · Běijīng",
     "source": "https://www.chinadaily.com.cn/a/202609/28/WS6aba3619e4b06d4aa05609ad.html",
     "levels": {
      "A": {
       "text": "Běijīng de bówùguǎn guò Zhōngqiū Jié.",
       "script": "北京的博物馆过中秋节。",
       "en": "A Beijing museum celebrates the Mid-Autumn Festival.",
       "gloss": {
        "de": "(links describer to noun)",
        "bówùguǎn": "museum",
        "guò": "celebrate, spend (a festival)",
        "zhōngqiū": "Mid-Autumn",
        "jié": "festival"
       }
      },
      "B": {
       "text": "Zhōngqiū Jié qiánhòu, Běijīng Mínsú Bówùguǎn jǔbàn le yīnyuèhuì, hái ràng yóukè zìjǐ huà tù'éryé.",
       "script": "中秋节前后，北京民俗博物馆举办了音乐会，还让游客自己画兔儿爷。",
       "en": "Around the Mid-Autumn Festival, the Beijing Folklore Museum held concerts and let visitors paint their own Rabbit Lord figures.",
       "gloss": {
        "zhōngqiū": "Mid-Autumn",
        "jié": "festival",
        "qiánhòu": "around (lit. before and after)",
        "mínsú": "folk customs",
        "bówùguǎn": "museum",
        "jǔbàn": "held, hosted",
        "le": "(completed action)",
        "yīnyuèhuì": "concert",
        "hái": "also",
        "ràng": "let",
        "yóukè": "visitors",
        "zìjǐ": "themselves",
        "huà": "paint, draw",
        "tù'éryé": "Rabbit Lord (clay figure)"
       }
      },
      "C": {
       "text": "Zài yǒu qībǎi duō nián lìshǐ de Dōngyuè Miào lǐ, Běijīng Mínsú Bówùguǎn yǐ xiányuè sìchóngzòu, tù'éryé zhǎnlǎn hé guófēng shìjí qìngzhù Zhōngqiū.",
       "script": "在有七百多年历史的东岳庙里，北京民俗博物馆以弦乐四重奏、兔儿爷展览和国风市集庆祝中秋。",
       "en": "Inside the more than 700-year-old Dongyue Temple, the Beijing Folklore Museum marked Mid-Autumn with string quartets, a Rabbit Lord display and a Chinese-style market.",
       "gloss": {
        "zài": "in, at",
        "yǒu": "have",
        "qībǎi": "seven hundred",
        "duō": "more than",
        "nián": "years",
        "lìshǐ": "history",
        "de": "(links describer to noun)",
        "miào": "temple",
        "lǐ": "inside",
        "mínsú": "folk customs",
        "bówùguǎn": "museum",
        "yǐ": "with, by means of",
        "xiányuè": "string music",
        "sìchóngzòu": "quartet",
        "tù'éryé": "Rabbit Lord (clay figure)",
        "zhǎnlǎn": "exhibition",
        "hé": "and",
        "guófēng": "Chinese-style",
        "shìjí": "market, fair",
        "qìngzhù": "celebrate",
        "zhōngqiū": "Mid-Autumn (Festival)"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "dàgài",
     "wordScript": "大概",
     "pos": "adverb",
     "region": "general",
     "ties": 1,
     "meaning": "probably; about, roughly",
     "note": "With numbers it means 'roughly': «dàgài wǔ fēnzhōng» = about five minutes. More casual than «kěnéng».",
     "example": "Zhè ge mù dàgài yǒu liǎngqiān duō nián le.",
     "exScript": "这个墓大概有两千多年了。",
     "exampleEn": "This tomb is probably over two thousand years old.",
     "exGloss": {
      "zhè": "this",
      "ge": "(measure word)",
      "mù": "tomb",
      "dàgài": "probably",
      "yǒu": "has (here: is … old)",
      "liǎngqiān": "two thousand",
      "duō": "more than",
      "nián": "years",
      "le": "(change / now)"
     }
    },
    {
     "word": "rènao",
     "wordScript": "热闹",
     "pos": "adjective",
     "region": "general",
     "ties": 2,
     "meaning": "lively, bustling",
     "note": "Literally 'hot noise', and a compliment: crowds and bustle are good things at a festival. «Còu rènao» = to join the fun (or to butt in).",
     "example": "Zhōngqiū Jié de shìjí zhēn rènao!",
     "exScript": "中秋节的市集真热闹！",
     "exampleEn": "The Mid-Autumn Festival market is really lively!",
     "exGloss": {
      "zhōngqiū": "Mid-Autumn",
      "jié": "festival",
      "de": "(links describer to noun)",
      "shìjí": "market, fair",
      "zhēn": "really",
      "rènao": "lively, bustling"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“Xī'ān fùjìn yǒu yí zuò hěn dà de gǔmù.” The «mù» in «gǔmù» means “tomb”. Which of these is «mù»?",
     "options": [
      "mǎ",
      "mù",
      "mén",
      "mǐ"
     ],
     "answer": 1,
     "why": "«Mù» = tomb; «gǔmù» is an ancient tomb. «Mǎ» is horse, «mén» door, «mǐ» rice.",
     "lesson": "All four start with m-, so the vowel and tone do the work. «Mù» has -u and a falling fourth tone, like a firm 'moo!'."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Zhōngqiū Jié de shìjí zhēn rènao!” How does the speaker feel about the market?",
     "options": [
      "Happy: it's lively and fun",
      "Annoyed: it's too noisy",
      "Sad: it's closed",
      "They don't say"
     ],
     "answer": 0,
     "why": "«Rènao» means lively and bustling, and in Chinese that's a compliment.",
     "lesson": "The literal meaning, 'hot noise', makes 'too noisy' tempting. For a Chinese festival, noise and crowds are exactly what you want."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "«Běijīng Mínsú Bówùguǎn jǔbàn le yīnyuèhuì»: «le» zài zhèlǐ biǎoshì shénme?",
     "options": [
      "a question",
      "the future",
      "the action is completed",
      "plural"
     ],
     "answer": 2,
     "why": "«Le» straight after a verb marks a completed action: «jǔbàn le» = held.",
     "lesson": "English marks the past on the verb itself, so «le» looks like a past-tense ending. It really marks completion; it can be used for the future too («chī le fàn zài zǒu» = go after you've eaten)."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Zhè ge mù dàgài yǒu liǎngqiān duō nián le»: «dàgài» shì shénme yìsi?",
     "options": [
      "definitely",
      "probably / about",
      "never",
      "exactly"
     ],
     "answer": 1,
     "why": "«Dàgài» = probably, or roughly with a number.",
     "lesson": "«Dà» means big, so it can look like an emphatic 'definitely'. Together with «duō» (more than) the sentence is an estimate, not a certainty."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Huáyáng tàihòu zhī mù»: «zhī» xiāngdāng yú xiàndài Hànyǔ de nǎge zì?",
     "options": [
      "le",
      "ma",
      "zài",
      "de"
     ],
     "answer": 3,
     "why": "«Zhī» is the classical linking particle, equal to modern «de»: «tàihòu zhī mù» = «tàihòu de mù».",
     "lesson": "In classical texts «zhī» is also a pronoun ('it') and a verb ('to go'), so it's easy to overthink. In a noun + zhī + noun pattern, it's simply «de» in formal dress."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Yǐ xiányuè sìchóngzòu … qìngzhù Zhōngqiū»: «yǐ» shì shénme yìsi?",
     "options": [
      "already",
      "by means of / with",
      "because",
      "after"
     ],
     "answer": 1,
     "why": "«Yǐ + noun + verb» = to do something by means of the noun: to celebrate with string quartets.",
     "lesson": "«Yǐjīng» (already) and «yǐhòu» (after) both start with a «yǐ» sound, so they tempt. The character is different (以, not 已), and before a noun it means 'with'."
    }
   ],
   "tip": {
    "title": "De: the describer comes first",
    "text": "«De» joins a describing part to a noun, and the describer always comes first: «Zhōngqiū Jié de shìjí» is 'the Mid-Autumn Festival market', literally 'Mid-Autumn Festival's market'. English often puts the detail after the noun ('the market at the festival'); Chinese never does, however long the describing part gets."
   },
   "fun": {
    "kind": "idiom",
    "region": "general",
    "text": "Shǒu zhū dài tù.",
    "script": "守株待兔。",
    "gloss": {
     "shǒu": "guard",
     "zhū": "tree stump",
     "dài": "wait for",
     "tù": "rabbit"
    },
    "literal": "Guard the stump, wait for the rabbit.",
    "meaning": "To sit and wait for luck to strike again instead of working for it.",
    "culture": "It comes from the Hánfēizǐ, a 3rd-century-BC text: a farmer in the state of Song saw a rabbit run into a tree stump and die, so he gave up farming to wait for another one. None came. People still use it to tell someone to stop waiting for easy wins."
   }
  }
 },
 "2026-10-06": {
  "es": {
   "news": [
    {
     "topic": "Arte · Madrid",
     "source": "https://www.timeout.es/madrid/es/noticias/este-precioso-museo-de-madrid-abre-tras-dos-anos-cerrado-con-nuevas-salas-y-una-espectacular-exposicion-090826",
     "levels": {
      "A": {
       "text": "El Museo Sorolla de Madrid abre otra vez el 15 de octubre.",
       "en": "Madrid's Sorolla Museum opens again on 15 October.",
       "gloss": {
        "museo": "museum",
        "abre": "opens",
        "otra": "other (otra vez = again)",
        "vez": "time (otra vez = again)",
        "octubre": "October"
       }
      },
      "B": {
       "text": "Tras casi dos años cerrado, el Museo Sorolla reabrirá el 15 de octubre con más de 2.000 metros cuadrados nuevos.",
       "en": "After almost two years closed, the Sorolla Museum will reopen on 15 October with more than 2,000 new square metres.",
       "gloss": {
        "tras": "after",
        "casi": "almost",
        "dos": "two",
        "años": "years",
        "cerrado": "closed",
        "museo": "museum",
        "reabrirá": "will reopen",
        "octubre": "October",
        "más": "more",
        "metros": "metres",
        "cuadrados": "square",
        "nuevos": "new"
       }
      },
      "C": {
       "text": "El Museo Sorolla reabre el 15 de octubre, tras casi dos años de obras, con una ampliación de Nieto Sobejano en el edificio contiguo de la calle Zurbano y una muestra sobre la arquitectura de la casa del pintor.",
       "en": "The Sorolla Museum reopens on 15 October after almost two years of building work, with an extension by Nieto Sobejano in the adjoining building on Calle Zurbano and a show on the architecture of the painter's house.",
       "gloss": {
        "museo": "museum",
        "reabre": "reopens",
        "octubre": "October",
        "tras": "after",
        "casi": "almost",
        "dos": "two",
        "años": "years",
        "obras": "building work",
        "ampliación": "extension",
        "nieto": "Nieto (architect)",
        "sobejano": "Sobejano (architect)",
        "edificio": "building",
        "contiguo": "adjoining",
        "calle": "street",
        "zurbano": "Zurbano (street name)",
        "muestra": "exhibition, show",
        "sobre": "about",
        "arquitectura": "architecture",
        "casa": "house",
        "pintor": "painter"
       }
      }
     }
    },
    {
     "topic": "Festivales · México",
     "source": "https://www.mexicodesconocido.com.mx/festival-internacional-cervantino-2026.html",
     "levels": {
      "A": {
       "text": "Guanajuato tiene un gran festival de arte hasta el 18 de octubre.",
       "en": "Guanajuato has a big arts festival until 18 October.",
       "gloss": {
        "tiene": "has",
        "gran": "big, great",
        "festival": "festival",
        "arte": "art",
        "hasta": "until",
        "octubre": "October"
       }
      },
      "B": {
       "text": "El Festival Cervantino reúne en Guanajuato a 2.746 artistas de 29 países, y este año Francia es el invitado de honor.",
       "en": "The Cervantino Festival brings together 2,746 artists from 29 countries in Guanajuato, and this year France is the guest of honour.",
       "gloss": {
        "festival": "festival",
        "cervantino": "Cervantine (named after Cervantes)",
        "reúne": "brings together",
        "artistas": "artists",
        "países": "countries",
        "este": "this",
        "año": "year",
        "francia": "France",
        "invitado": "guest",
        "honor": "honour"
       }
      },
      "C": {
       "text": "La edición número 54 del Festival Internacional Cervantino, que se celebra en Guanajuato hasta el 18 de octubre, tiene a Francia como invitada de honor por los doscientos años de relaciones diplomáticas con México.",
       "en": "The 54th Cervantino International Festival, held in Guanajuato until 18 October, has France as its guest of honour to mark two hundred years of diplomatic relations with Mexico.",
       "gloss": {
        "edición": "edition",
        "número": "number",
        "festival": "festival",
        "internacional": "international",
        "cervantino": "Cervantine (named after Cervantes)",
        "celebra": "is held (se celebra)",
        "hasta": "until",
        "octubre": "October",
        "tiene": "has",
        "francia": "France",
        "invitada": "guest",
        "honor": "honour",
        "doscientos": "two hundred",
        "años": "years",
        "relaciones": "relations",
        "diplomáticas": "diplomatic"
       }
      }
     }
    },
    {
     "topic": "Arqueología · Argentina",
     "source": "https://www.heritagedaily.com/2026/10/archaeologists-to-investigate-possible-inca-ceremonial-geoglyph-in-the-andes/159491",
     "levels": {
      "A": {
       "text": "Un montañista encuentra en Google Earth un posible sitio inca.",
       "en": "A mountaineer finds a possible Inca site on Google Earth.",
       "gloss": {
        "montañista": "mountaineer",
        "encuentra": "finds",
        "posible": "possible",
        "sitio": "site",
        "inca": "Inca"
       }
      },
      "B": {
       "text": "En Mendoza, a 3.000 metros de altura, unos arqueólogos van a estudiar un posible geoglifo inca que un montañista vio en Google Earth.",
       "en": "In Mendoza, at 3,000 metres, archaeologists are going to study a possible Inca geoglyph that a mountaineer spotted on Google Earth.",
       "gloss": {
        "metros": "metres",
        "altura": "height, altitude",
        "arqueólogos": "archaeologists",
        "van": "are going",
        "estudiar": "to study",
        "posible": "possible",
        "geoglifo": "geoglyph (a design laid out on the ground)",
        "inca": "Inca",
        "montañista": "mountaineer",
        "vio": "saw"
       }
      },
      "C": {
       "text": "En la Cordillera del Tigre, en Mendoza, un equipo hispano-argentino estudiará con drones y fotogrametría unas estructuras de piedra a 3.000 metros que podrían formar un geoglifo ceremonial de época incaica.",
       "en": "In the Cordillera del Tigre in Mendoza, a Spanish-Argentine team will use drones and photogrammetry to study stone structures at 3,000 metres that could form a ceremonial geoglyph from the Inca period.",
       "gloss": {
        "cordillera": "mountain range",
        "tigre": "tiger",
        "equipo": "team",
        "hispano-argentino": "Spanish-Argentine",
        "argentino": "Argentine",
        "estudiará": "will study",
        "drones": "drones",
        "fotogrametría": "photogrammetry",
        "estructuras": "structures",
        "piedra": "stone",
        "metros": "metres",
        "podrían": "could",
        "formar": "to form",
        "geoglifo": "geoglyph",
        "ceremonial": "ceremonial",
        "época": "period, era",
        "incaica": "Inca (adj.)"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "quedar",
     "pos": "verb",
     "region": "España",
     "ties": 1,
     "meaning": "to arrange to meet, to meet up",
     "note": "Spain. «¿Quedamos?» = shall we meet up? «Quedar con alguien» = to meet someone. Mexico says «quedar de verse» or just «nos vemos». Careful: «quedarse», with -se, means to stay. Regular -ar verb.",
     "example": "¿Quedamos el sábado en el Museo Sorolla?",
     "exampleEn": "Shall we meet up at the Sorolla Museum on Saturday?",
     "exGloss": {
      "quedamos": "shall we meet up",
      "sábado": "Saturday",
      "museo": "museum"
     }
    },
    {
     "word": "padre",
     "pos": "adjective · slang",
     "region": "México",
     "ties": 2,
     "meaning": "cool, great",
     "note": "Mexico. «¡Qué padre!» = how cool! «Padrísimo» = awesome. As slang it doesn't change for gender: «una fiesta padre». Spain says «guay»; elsewhere «padre» just means father.",
     "example": "¡Qué padre está el Cervantino este año!",
     "exampleEn": "The Cervantino is so cool this year!",
     "exGloss": {
      "qué": "how",
      "padre": "cool (Mex.)",
      "está": "is",
      "cervantino": "the Cervantino festival",
      "este": "this",
      "año": "year"
     }
    },
    {
     "word": "laburo",
     "article": "el",
     "pos": "noun · slang",
     "region": "Argentina",
     "ties": 3,
     "meaning": "work, job",
     "note": "Argentina and Uruguay, from Italian «lavoro». Verb: laburar. Spain says «el curro», Mexico «la chamba».",
     "example": "Subir a 3.000 metros para medir piedras es mucho laburo.",
     "exampleEn": "Climbing to 3,000 metres to measure stones is a lot of work.",
     "exGloss": {
      "subir": "to climb, go up",
      "metros": "metres",
      "medir": "to measure",
      "piedras": "stones",
      "mucho": "a lot of",
      "laburo": "work (Arg.)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“El Museo Sorolla de Madrid abre otra vez el 15 de octubre.” What does «abre» mean?",
     "options": [
      "closes",
      "opens",
      "sells",
      "builds"
     ],
     "answer": 1,
     "why": "«Abre» comes from «abrir», to open: the museum opens again.",
     "lesson": "The story is about a museum that was closed, so 'closes' feels natural. The verb for closing is «cerrar». Link «abrir» to English 'aperture', an opening."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“¡Qué padre está el Cervantino este año!” What does «padre» mean here?",
     "options": [
      "father",
      "boring",
      "cool, great",
      "far away"
     ],
     "answer": 2,
     "why": "In Mexico, «padre» after «qué» is praise: how cool!",
     "lesson": "'Father' is the textbook meaning, so it pulls hard. But a festival can't be a father; after «¡Qué…!» in Mexico, «padre» is slang for great."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "En «Francia es el invitado de honor», ¿qué significa «invitado»?",
     "options": [
      "huésped de un hotel",
      "artista francés",
      "premio",
      "persona o país al que se invita"
     ],
     "answer": 3,
     "why": "«Invitado» es quien recibe una invitación; el «invitado de honor» es el más destacado.",
     "lesson": "En inglés 'guest' sirve para las dos cosas, por eso tienta «huésped». En español el «huésped» se aloja en un hotel o en una casa; el «invitado» viene porque lo han invitado."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«¿Quedamos el sábado en el Museo Sorolla?»: ¿qué propone el hablante?",
     "options": [
      "Quedarse en casa el sábado",
      "Verse con alguien el sábado",
      "Que el museo siga abierto",
      "Ir al museo solo"
     ],
     "answer": 1,
     "why": "Sin «se», «quedar» significa citarse: «¿quedamos?» = ¿nos vemos?",
     "lesson": "«Quedarse» (con «se») significa permanecer, y de ahí sale la trampa de «quedarse en casa». Fíjate en el pronombre: sin «se», es una cita."
    },
    {
     "level": "C1",
     "ref": "news3",
     "q": "«Unas estructuras de piedra que podrían formar un geoglifo»: ¿por qué el condicional «podrían»?",
     "options": [
      "Expresa una hipótesis aún no confirmada",
      "Indica una acción pasada",
      "Es una fórmula de cortesía",
      "Expresa una obligación"
     ],
     "answer": 0,
     "why": "En prensa, el condicional marca prudencia: los investigadores todavía no han verificado que sea un geoglifo.",
     "lesson": "El condicional se aprende con la cortesía («¿podrían ayudarme?»), y por eso tienta. Aquí nadie pide nada: el periodista se distancia de una hipótesis."
    },
    {
     "level": "C2",
     "ref": "news1",
     "q": "«En el edificio contiguo de la calle Zurbano»: ¿qué significa «contiguo»?",
     "options": [
      "antiguo",
      "contemporáneo",
      "situado justo al lado",
      "en la planta de arriba"
     ],
     "answer": 2,
     "why": "«Contiguo» es lo que está pegado a otra cosa: el nuevo espacio está en el edificio de al lado.",
     "lesson": "Rima con «antiguo» y la casa es de principios del siglo XX, así que la trampa es fácil. Pero «contiguo» habla de posición, no de edad: comparte pared o linde."
    }
   ],
   "tip": {
    "title": "Estar for impressions",
    "text": "In «¡Qué padre está el Cervantino!», estar isn't about a temporary state but about how the thing strikes the speaker right now. «El festival es padre» states a fact; «está padre» reports the experience. Mexico leans on this constantly («está bien padre», «estuvo increíble»), and Spain does too with food: «¡qué rico está el jamón!»."
   },
   "fun": {
    "kind": "saying",
    "region": "México",
    "text": "Camarón que se duerme, se lo lleva la corriente.",
    "gloss": {
     "camarón": "shrimp",
     "duerme": "falls asleep",
     "lleva": "carries off",
     "corriente": "current"
    },
    "literal": "The shrimp that falls asleep gets carried off by the current.",
    "meaning": "If you snooze, you lose: stay alert or you'll miss your chance.",
    "culture": "Mexican parents and grandparents say it to get children out of bed or to push someone to grab an opportunity. It's heard across Latin America, but the coastal image of shrimp in a river current is especially at home in Mexico, where «camarones» are everyday food from Sinaloa to Veracruz."
   }
  },
  "de": {
   "news": [
    {
     "topic": "Archäologie · München",
     "source": "https://www.sonntagsblatt.de/artikel/ausstellung-zeigt-stonehenge-und-seine-menschen",
     "levels": {
      "A": {
       "text": "In München zeigt ein Museum alte Dinge aus Stonehenge.",
       "en": "In Munich, a museum is showing old things from Stonehenge.",
       "gloss": {
        "zeigt": "shows",
        "museum": "museum",
        "alte": "old",
        "dinge": "things"
       }
      },
      "B": {
       "text": "Seit dem 18. September zeigt die Archäologische Staatssammlung in München rund 600 Objekte rund um Stonehenge.",
       "en": "Since 18 September, the Archaeological State Collection in Munich has been showing around 600 objects about Stonehenge.",
       "gloss": {
        "seit": "since",
        "september": "September",
        "zeigt": "shows",
        "archäologische": "archaeological",
        "staatssammlung": "state collection",
        "rund": "around (rund um = all about)",
        "objekte": "objects"
       }
      },
      "C": {
       "text": "Erstmals in Mitteleuropa zeigt die Archäologische Staatssammlung in München die Stonehenge-Schau mit rund 600 Objekten, darunter Originale aus Salisbury, Schweineknochen aus der Jungsteinzeit und Gefäße der Glockenbecherkultur.",
       "en": "For the first time in Central Europe, Munich's Archaeological State Collection is showing the Stonehenge exhibition, with around 600 objects including originals from Salisbury, Neolithic pig bones and Bell Beaker vessels.",
       "gloss": {
        "erstmals": "for the first time",
        "mitteleuropa": "Central Europe",
        "zeigt": "shows",
        "archäologische": "archaeological",
        "staatssammlung": "state collection",
        "stonehenge-schau": "Stonehenge exhibition",
        "schau": "show, exhibition",
        "rund": "around",
        "objekten": "objects (dative)",
        "darunter": "among them",
        "originale": "originals",
        "schweineknochen": "pig bones",
        "jungsteinzeit": "Neolithic (lit. young Stone Age)",
        "gefäße": "vessels",
        "glockenbecherkultur": "Bell Beaker culture"
       }
      }
     }
    },
    {
     "topic": "Kultur · Regensburg",
     "source": "https://www.regensburger-nachrichten.de/kultur-und-szene/100261-die-lange-nacht-der-museen-regensburg-geht-in-die-zweite-runde",
     "levels": {
      "A": {
       "text": "Am Samstag sind die Museen in Regensburg bis ein Uhr nachts offen.",
       "en": "On Saturday, the museums in Regensburg are open until one in the morning.",
       "gloss": {
        "samstag": "Saturday",
        "museen": "museums",
        "bis": "until",
        "uhr": "o'clock",
        "nachts": "at night",
        "offen": "open"
       }
      },
      "B": {
       "text": "Bei der zweiten Langen Nacht der Museen öffnen am 10. Oktober Museen, Kirchen und Galerien in Regensburg mit einem Ticket für 20 Euro.",
       "en": "For the second Long Night of Museums, museums, churches and galleries in Regensburg open on 10 October with one ticket for 20 euros.",
       "gloss": {
        "zweiten": "second",
        "langen": "long",
        "nacht": "night",
        "museen": "museums",
        "öffnen": "open",
        "oktober": "October",
        "kirchen": "churches",
        "galerien": "galleries",
        "ticket": "ticket",
        "euro": "euros"
       }
      },
      "C": {
       "text": "Zur zweiten Auflage der Langen Nacht der Museen öffnen am Samstag von 18 bis 1 Uhr Museen, Kirchen und Ateliers in Regensburg, darunter elf neue Kulturorte, verbunden durch Shuttlebusse.",
       "en": "For the second edition of the Long Night of Museums, museums, churches and studios in Regensburg open on Saturday from 6 pm to 1 am, including eleven new cultural venues, linked by shuttle buses.",
       "gloss": {
        "zweiten": "second",
        "auflage": "edition",
        "langen": "long",
        "nacht": "night",
        "museen": "museums",
        "öffnen": "open",
        "samstag": "Saturday",
        "bis": "until",
        "uhr": "o'clock",
        "kirchen": "churches",
        "ateliers": "studios",
        "darunter": "among them",
        "elf": "eleven",
        "neue": "new",
        "kulturorte": "cultural venues",
        "verbunden": "connected",
        "shuttlebusse": "shuttle buses"
       }
      }
     }
    },
    {
     "topic": "Archäologie · Sachsen-Anhalt",
     "source": "https://www.archaeologie-online.de/nachrichten/reste-von-ueber-10-000-jahre-alten-mittelsteinzeitlichen-holzkonstruktionen-im-arendsee-gefunden-676/",
     "levels": {
      "A": {
       "text": "In einem See finden Taucher sehr altes Holz.",
       "en": "In a lake, divers find very old wood.",
       "gloss": {
        "see": "lake",
        "finden": "find",
        "taucher": "divers",
        "sehr": "very",
        "altes": "old",
        "holz": "wood"
       }
      },
      "B": {
       "text": "Im Arendsee in Sachsen-Anhalt haben Archäologen in 20 Metern Tiefe bis zu 10.500 Jahre alte Hölzer gefunden.",
       "en": "In Lake Arendsee in Saxony-Anhalt, archaeologists have found pieces of wood up to 10,500 years old at a depth of 20 metres.",
       "gloss": {
        "sachsen-anhalt": "Saxony-Anhalt",
        "archäologen": "archaeologists",
        "metern": "metres (dative)",
        "tiefe": "depth",
        "bis": "up to (bis zu)",
        "jahre": "years",
        "alte": "old",
        "hölzer": "pieces of wood",
        "gefunden": "found"
       }
      },
      "C": {
       "text": "Unterwasserarchäologen haben im Arendsee in rund 20 Metern Tiefe bis zu 10.500 Jahre alte, bearbeitete Hölzer aus der Mittelsteinzeit entdeckt; sauerstoffarmes Wasser über einem Salzstock hat sie außergewöhnlich gut erhalten.",
       "en": "Underwater archaeologists have discovered worked pieces of Mesolithic wood up to 10,500 years old at a depth of around 20 metres in Lake Arendsee; low-oxygen water above a salt dome has preserved them exceptionally well.",
       "gloss": {
        "unterwasserarchäologen": "underwater archaeologists",
        "rund": "around",
        "metern": "metres (dative)",
        "tiefe": "depth",
        "bis": "up to (bis zu)",
        "jahre": "years",
        "alte": "old",
        "bearbeitete": "worked (by human hands)",
        "hölzer": "pieces of wood",
        "mittelsteinzeit": "Mesolithic (Middle Stone Age)",
        "entdeckt": "discovered",
        "sauerstoffarmes": "low-oxygen",
        "wasser": "water",
        "salzstock": "salt dome",
        "außergewöhnlich": "exceptionally",
        "gut": "well",
        "erhalten": "preserved"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "Hammer",
     "article": "der",
     "pos": "noun · slang",
     "region": "general",
     "ties": 1,
     "meaning": "amazing (lit. the hammer)",
     "note": "Colloquial all over Germany: «Das ist der Hammer!» = that's amazing. With a different tone it can mean outrageous. Bavarians may also say «a Wahnsinn».",
     "example": "Die Stonehenge-Ausstellung ist echt der Hammer!",
     "exampleEn": "The Stonehenge exhibition is seriously amazing!",
     "exGloss": {
      "stonehenge-ausstellung": "Stonehenge exhibition",
      "ausstellung": "exhibition",
      "echt": "really",
      "hammer": "amazing (slang)"
     }
    },
    {
     "word": "Gaudi",
     "article": "die",
     "pos": "noun · dialect",
     "region": "Bayern · Österreich",
     "ties": 2,
     "meaning": "fun, a good laugh",
     "note": "Bavarian and Austrian: «Des is a Gaudi!» = this is great fun. Standard German says «der Spaß». Nothing to do with the architect Gaudí, though it's said the same way.",
     "example": "Die Lange Nacht war a richtige Gaudi.",
     "exampleEn": "The Long Night was real fun.",
     "exGloss": {
      "lange": "long",
      "nacht": "night",
      "war": "was",
      "a": "a (Bav. «eine»)",
      "richtige": "real, proper",
      "gaudi": "fun (Bav.)"
     }
    },
    {
     "word": "baden gehen",
     "pos": "verb phrase · idiom",
     "region": "general",
     "ties": 3,
     "meaning": "to go for a swim (outdoors); colloquially: to flop, to come a cropper",
     "note": "«Im See baden gehen» = to go swimming in the lake. Figuratively, «Damit gehst du baden» = that'll go wrong for you. «Gehen» is irregular: ging, ist gegangen.",
     "example": "Im Sommer gehen wir im Arendsee baden.",
     "exampleEn": "In summer we go swimming in Lake Arendsee.",
     "exGloss": {
      "sommer": "summer",
      "gehen": "go",
      "arendsee": "Lake Arendsee",
      "baden": "to bathe, swim"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news2",
     "q": "“Am Samstag sind die Museen bis ein Uhr nachts offen.” Which word means “open”?",
     "options": [
      "oft",
      "offen",
      "Ofen",
      "oben"
     ],
     "answer": 1,
     "why": "«Offen» = open. «Oft» is often, «Ofen» oven, «oben» above.",
     "lesson": "«Ofen» looks almost the same, but German capitalises every noun. A lowercase «offen» after «sind» can't be a noun: it's describing the museums."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Die Lange Nacht war a richtige Gaudi.” What was the night like?",
     "options": [
      "boring",
      "too long",
      "very expensive",
      "great fun"
     ],
     "answer": 3,
     "why": "«Gaudi» is Bavarian for fun; «a richtige Gaudi» = real fun.",
     "lesson": "«Lange» (long) sits right there, so 'too long' tempts. But «Lange Nacht» is just the event's name; the verdict is in the last word."
    },
    {
     "level": "B1",
     "ref": "news3",
     "q": "Ergänze: Archäologen haben im Arendsee alte Hölzer ___.",
     "options": [
      "finden",
      "fanden",
      "gefunden",
      "gefindet"
     ],
     "answer": 2,
     "why": "Perfekt = «haben» + Partizip II. «Finden» ist ein starkes Verb: finden – fand – gefunden.",
     "lesson": "«Gefindet» folgt dem Muster der schwachen Verben (ge-…-t, wie «gesucht»). Starke Verben wechseln den Vokal und enden auf -en: gefunden, getrunken, gesungen."
    },
    {
     "level": "B2",
     "ref": "vocab3",
     "q": "«Mit diesem Plan gehst du baden»: Was bedeutet das?",
     "options": [
      "Du gehst schwimmen",
      "Der Plan wird scheitern",
      "Du wirst nass",
      "Der Plan ist entspannend"
     ],
     "answer": 1,
     "why": "Im übertragenen Sinn heißt «baden gehen» scheitern oder einen Reinfall erleben.",
     "lesson": "Die wörtliche Bedeutung ist im Beispielsatz zum Arendsee richtig, deshalb lockt «schwimmen». Aber ein Plan kann nicht schwimmen: Wenn das Subjekt nicht ins Wasser kann, ist es die Redewendung."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Schweineknochen aus der Jungsteinzeit»: Welche Epoche ist gemeint?",
     "options": [
      "Das Neolithikum",
      "Die Altsteinzeit",
      "Die Bronzezeit",
      "Die frühe Neuzeit"
     ],
     "answer": 0,
     "why": "Die Jungsteinzeit ist das Neolithikum, die Zeit der ersten Bauern, die Stonehenge errichteten.",
     "lesson": "«Jung» klingt nach 'kürzlich', aber gemeint ist die jüngste, also letzte Phase der Steinzeit. Die Reihenfolge: Altsteinzeit, Mittelsteinzeit (wie die Hölzer im Arendsee), Jungsteinzeit."
    },
    {
     "level": "C2",
     "ref": "news3",
     "q": "«Bis zu 10.500 Jahre alte, bearbeitete Hölzer»: Warum steht ein Komma zwischen «alte» und «bearbeitete»?",
     "options": [
      "Weil ein Relativsatz folgt",
      "Weil Zahlenangaben ein Komma verlangen",
      "Das Komma ist ein Fehler",
      "Weil die Adjektive gleichrangig sind"
     ],
     "answer": 3,
     "why": "Beide Attribute beschreiben die Hölzer gleichrangig; man könnte «und» einsetzen: alte und bearbeitete Hölzer.",
     "lesson": "Bei «alte römische Münzen» steht kein Komma, weil «alte» die Einheit «römische Münzen» näher bestimmt. Der Test: Passt «und» dazwischen, ohne dass sich der Sinn verschiebt, braucht es ein Komma."
    }
   ],
   "tip": {
    "title": "Gehen + bare infinitive",
    "text": "«Wir gehen im Arendsee baden»: gehen takes a bare infinitive, with no «zu», and the infinitive moves to the end of the clause. Likewise «essen gehen», «einkaufen gehen», «spazieren gehen». A handful of verbs work the same way: bleiben, lassen, sehen, hören, lernen. In the perfect, gehen keeps «sein»: «wir sind baden gegangen»."
   },
   "fun": {
    "kind": "joke",
    "region": "Deutschland",
    "text": "Was ist grün und klopft an die Tür? Ein Klopfsalat.",
    "gloss": {
     "was": "what",
     "grün": "green",
     "klopft": "knocks",
     "tür": "door",
     "klopfsalat": "knock-lettuce (pun on «Kopfsalat»)"
    },
    "literal": "What is green and knocks on the door? A knock-lettuce.",
    "meaning": "«Kopfsalat» is an ordinary head of lettuce. Slip in an l and «Kopf» (head) becomes «Klopf» (knock), so the lettuce is now knocking.",
    "culture": "«Was ist grün und…?» riddles are a staple of German children's jokes. Germans call this kind of groaner a «Flachwitz», a flat joke, and telling one deadpan is half the fun."
   }
  },
  "it": {
   "news": [
    {
     "topic": "Archeologia · Sardegna",
     "source": "https://www.cagliaripad.it/678782/ovodda-straordinario-ritrovamento-archeologico-la-soprintendenza-a-lavoro/",
     "levels": {
      "A": {
       "text": "In Sardegna trovano due grandi pietre con cerchi.",
       "en": "In Sardinia they find two large stones with circles.",
       "gloss": {
        "trovano": "they find",
        "due": "two",
        "grandi": "large, big",
        "pietre": "stones",
        "cerchi": "circles"
       }
      },
      "B": {
       "text": "A Ovodda, in Sardegna, la Soprintendenza ha recuperato due grandi pietre incise con archi concentrici, forse del IV millennio avanti Cristo.",
       "en": "At Ovodda in Sardinia, the heritage authority has recovered two large stones carved with concentric arcs, perhaps from the 4th millennium BC.",
       "gloss": {
        "soprintendenza": "heritage authority",
        "recuperato": "recovered",
        "due": "two",
        "grandi": "large",
        "pietre": "stones",
        "incise": "engraved, carved",
        "archi": "arcs",
        "concentrici": "concentric",
        "forse": "perhaps",
        "iv": "4th",
        "millennio": "millennium",
        "avanti": "before",
        "cristo": "Christ"
       }
      },
      "C": {
       "text": "Nelle campagne di Ovodda, in Barbagia, la Soprintendenza ha recuperato due grandi pietre incise con archi concentrici attorno a un cerchio centrale, forse risalenti almeno al IV millennio avanti Cristo e legate a riti o confini.",
       "en": "In the countryside around Ovodda, in Barbagia, the heritage authority has recovered two large stones carved with concentric arcs around a central circle, perhaps dating back at least to the 4th millennium BC and linked to rites or boundaries.",
       "gloss": {
        "nelle": "in the",
        "campagne": "countryside",
        "barbagia": "Barbagia (mountain region of Sardinia)",
        "soprintendenza": "heritage authority",
        "recuperato": "recovered",
        "due": "two",
        "grandi": "large",
        "pietre": "stones",
        "incise": "engraved, carved",
        "archi": "arcs",
        "concentrici": "concentric",
        "attorno": "around",
        "cerchio": "circle",
        "centrale": "central",
        "forse": "perhaps",
        "risalenti": "dating back",
        "almeno": "at least",
        "iv": "4th",
        "millennio": "millennium",
        "avanti": "before",
        "cristo": "Christ",
        "legate": "linked",
        "riti": "rites",
        "confini": "boundaries"
       }
      }
     }
    },
    {
     "topic": "Arte · Roma",
     "source": "https://www.artribune.com/arti-visive/2026/09/grandi-mostre-autunno-2026/",
     "levels": {
      "A": {
       "text": "A Roma apre una grande mostra su Pontormo, un pittore del Cinquecento.",
       "en": "In Rome, a big exhibition opens on Pontormo, a 16th-century painter.",
       "gloss": {
        "apre": "opens",
        "grande": "big",
        "mostra": "exhibition",
        "pittore": "painter",
        "cinquecento": "the 1500s (16th century)"
       }
      },
      "B": {
       "text": "Da giovedì le Scuderie del Quirinale di Roma dedicano una grande mostra a Pontormo, pittore fiorentino del Cinquecento.",
       "en": "From Thursday, the Scuderie del Quirinale in Rome devotes a major exhibition to Pontormo, a 16th-century Florentine painter.",
       "gloss": {
        "giovedì": "Thursday",
        "scuderie": "stables",
        "quirinale": "Quirinal (hill and palace in Rome)",
        "dedicano": "devote, dedicate",
        "grande": "big, major",
        "mostra": "exhibition",
        "pittore": "painter",
        "fiorentino": "Florentine",
        "cinquecento": "the 1500s (16th century)"
       }
      },
      "C": {
       "text": "Alle Scuderie del Quirinale apre giovedì 8 ottobre una monografica su Jacopo Carucci, detto il Pontormo, che mette in luce l'anticonformismo, la drammaticità dei volumi e l'uso visionario del colore del maestro del Manierismo.",
       "en": "On Thursday 8 October a monographic show opens at the Scuderie del Quirinale on Jacopo Carucci, known as Pontormo, highlighting the nonconformism, dramatic volumes and visionary use of colour of the Mannerist master.",
       "gloss": {
        "alle": "at the",
        "scuderie": "stables",
        "quirinale": "Quirinal",
        "apre": "opens",
        "giovedì": "Thursday",
        "ottobre": "October",
        "monografica": "single-artist exhibition",
        "detto": "known as",
        "mette": "puts (mettere in luce = to highlight)",
        "luce": "light",
        "anticonformismo": "nonconformism",
        "drammaticità": "drama",
        "volumi": "volumes",
        "uso": "use",
        "visionario": "visionary",
        "colore": "colour",
        "maestro": "master",
        "manierismo": "Mannerism"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "che roba!",
     "pos": "interjection",
     "region": "general",
     "ties": 1,
     "meaning": "wow! what a thing!",
     "note": "Literally 'what stuff!'. Said in wonder or disbelief, depending on tone. «Roba» alone means stuff, things: «Quanta roba!» = so much stuff!",
     "example": "Pietre così antiche? Che roba!",
     "exampleEn": "Stones that old? Wow!",
     "exGloss": {
      "pietre": "stones",
      "così": "so",
      "antiche": "ancient, old",
      "roba": "stuff"
     }
    },
    {
     "word": "fare la fila",
     "pos": "verb phrase",
     "region": "general",
     "ties": 2,
     "meaning": "to queue, to wait in line",
     "note": "«La fila» = the line, the queue. Many people, especially in the north, say «fare la coda». «Saltare la fila» = to jump the queue, and museums sell «biglietti saltafila», skip-the-line tickets.",
     "example": "Per la mostra di Pontormo abbiamo fatto la fila per un'ora.",
     "exampleEn": "We queued for an hour for the Pontormo exhibition.",
     "exGloss": {
      "mostra": "exhibition",
      "abbiamo": "we have",
      "fatto": "done, made",
      "fila": "queue",
      "un'ora": "an hour",
      "ora": "hour"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“In Sardegna trovano due grandi pietre con cerchi.” Which word means “stones”?",
     "options": [
      "piante",
      "pietre",
      "porte",
      "piazze"
     ],
     "answer": 1,
     "why": "«Pietre» = stones (singular «pietra»). «Piante» are plants, «porte» doors, «piazze» squares.",
     "lesson": "All four are feminine plurals ending in -e, so the ending won't help. Think of the name Peter, 'rock': «Pietro», «pietra»."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Abbiamo fatto la fila per un'ora.” What did they do for an hour?",
     "options": [
      "They waited in a queue",
      "They filed papers",
      "They ate lunch",
      "They painted"
     ],
     "answer": 0,
     "why": "«Fare la fila» = to queue. «Fila» means line.",
     "lesson": "«Fila» looks like English 'file', so paperwork tempts. Think of 'single file': people standing in a line."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "«Pontormo, pittore fiorentino del Cinquecento»: che secolo è il Cinquecento?",
     "options": [
      "il V secolo",
      "il XV secolo",
      "il XVI secolo",
      "il L secolo"
     ],
     "answer": 2,
     "why": "Il Cinquecento sono gli anni 1500: il XVI secolo.",
     "lesson": "«Cinque» fa pensare al XV, ma l'italiano nomina i secoli dalle centinaia (millecinquecento), mentre la numerazione ordinale aggiunge uno. Quattrocento = XV, Cinquecento = XVI."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Pietre così antiche? Che roba!»: che cosa esprime «che roba!»?",
     "options": [
      "Disgusto per la sporcizia",
      "Una domanda sul prezzo",
      "Un ordine",
      "Stupore, meraviglia"
     ],
     "answer": 3,
     "why": "Detto da solo dopo una notizia sorprendente, «che roba!» esprime stupore.",
     "lesson": "«Roba» può essere negativa («che roba schifosa!»), per questo il disgusto tenta. Senza aggettivo, e dopo una domanda stupita, è meraviglia."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Pietre … forse risalenti almeno al IV millennio»: che forma è «risalenti»?",
     "options": [
      "participio presente con valore di aggettivo",
      "gerundio",
      "infinito",
      "participio passato"
     ],
     "answer": 0,
     "why": "«Risalente» è il participio presente di «risalire»: concorda con «pietre» (plurale) e vale «che risalgono».",
     "lesson": "Il gerundio sarebbe «risalendo», invariabile. La desinenza -ente/-enti e l'accordo al plurale tradiscono il participio presente, frequentissimo nella prosa giornalistica."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Jacopo Carucci, detto il Pontormo»: perché l'articolo davanti a «Pontormo»?",
     "options": [
      "È un errore",
      "Con i soprannomi d'artista l'articolo è tradizionale",
      "Indica che si tratta di un luogo",
      "È un uso solo dialettale"
     ],
     "answer": 1,
     "why": "I soprannomi con cui sono noti molti pittori prendono spesso l'articolo: il Pontormo, il Perugino, il Caravaggio.",
     "lesson": "In italiano standard i cognomi di uomini non vogliono l'articolo, e per questo sembra un errore. I soprannomi d'artista, però, funzionano quasi come nomi comuni e lo conservano."
    }
   ],
   "tip": {
    "title": "Adjectives in -e",
    "text": "Some adjectives end in -e and use the same form for masculine and feminine: «grande». Their plural ends in -i, so headline 1 has «due grandi pietre» at every level. Compare the noun «pietra» → «pietre»: -a words take -e in the plural, so the -e of «grande» doesn't mean feminine."
   },
   "fun": {
    "kind": "idiom",
    "region": "general",
    "text": "Essere al verde.",
    "gloss": {
     "essere": "to be",
     "verde": "green"
    },
    "literal": "To be at the green.",
    "meaning": "To be broke, out of money.",
    "culture": "A popular explanation goes back to old candles whose base was painted green: when the flame burned down to the green, time (or the auction) was up. Italians use it all the time, usually with a smile: «Sono al verde fino a fine mese», I'm broke till the end of the month."
   }
  },
  "ar": {
   "news": [
    {
     "topic": "Athar · al-Iskandariyya",
     "source": "https://tourismdailynews.com/2026/10/06/%D8%AE%D8%A7%D8%AA%D9%85-%D8%A3%D8%AB%D8%B1%D9%8A-%D9%8A%D8%AC%D8%B3%D8%AF-%D9%81%D9%86%D8%A7%D8%B1-%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D9%88%D8%A7%D9%83%D8%AA%D8%B4%D8%A7%D9%81%D8%A7/",
     "levels": {
      "A": {
       "text": "Fi al-Iskandariyya, khaatam qadiim alayhi suurat al-fanaar.",
       "script": "في الإسكندرية، خاتم قديم عليه صورة الفنار.",
       "en": "In Alexandria, an old ring has a picture of the lighthouse on it.",
       "gloss": {
        "fi": "in",
        "al-iskandariyya": "Alexandria",
        "khaatam": "ring",
        "qadiim": "old",
        "alayhi": "on it",
        "suurat": "picture (of)",
        "al-fanaar": "the lighthouse"
       }
      },
      "B": {
       "text": "Wajadat ba'tha fi al-miinaa al-sharqii bi-al-Iskandariyya khaataman burunziyyan alayhi suurat fanaar al-Iskandariyya.",
       "script": "وجدت بعثة في الميناء الشرقي بالإسكندرية خاتمًا برونزيًا عليه صورة فنار الإسكندرية.",
       "en": "A mission in Alexandria's Eastern Harbour found a bronze ring with a picture of the Alexandria lighthouse on it.",
       "gloss": {
        "wajadat": "found (f.)",
        "ba'tha": "mission",
        "fi": "in",
        "al-miinaa": "the harbour",
        "al-sharqii": "the eastern",
        "bi-al-iskandariyya": "in Alexandria",
        "khaataman": "a ring",
        "burunziyyan": "bronze (adj.)",
        "alayhi": "on it",
        "suurat": "picture (of)",
        "fanaar": "lighthouse (of)",
        "al-iskandariyya": "Alexandria"
       }
      },
      "C": {
       "text": "Kashafat ba'tha lil-athaar al-ghaariqa fi jaziirat Antirhoodos bi-al-miinaa al-sharqii an khaatam burunzii yahmilu suurat fanaar al-Iskandariyya, wa-hiya al-marra al-uulaa allatii yazharu fiihaa al-fanaar alaa khaatam.",
       "script": "كشفت بعثة للآثار الغارقة في جزيرة أنتيرودس بالميناء الشرقي عن خاتم برونزي يحمل صورة فنار الإسكندرية، وهي المرة الأولى التي يظهر فيها الفنار على خاتم.",
       "en": "A submerged-antiquities mission on Antirhodos island in the Eastern Harbour has uncovered a bronze ring bearing an image of the Pharos of Alexandria, the first time the lighthouse has appeared on a ring.",
       "gloss": {
        "kashafat": "uncovered (f.)",
        "ba'tha": "mission",
        "lil-athaar": "for antiquities",
        "al-ghaariqa": "the submerged",
        "fi": "in, on",
        "jaziirat": "island (of)",
        "antirhoodos": "Antirhodos (sunken royal island)",
        "bi-al-miinaa": "in the harbour",
        "al-sharqii": "the eastern",
        "an": "(kashafa an = to uncover)",
        "khaatam": "ring",
        "burunzii": "bronze (adj.)",
        "yahmilu": "bears, carries",
        "suurat": "picture, image (of)",
        "fanaar": "lighthouse (of)",
        "al-iskandariyya": "Alexandria",
        "wa-hiya": "and it is",
        "al-marra": "the time",
        "al-uulaa": "the first",
        "allatii": "which, that",
        "yazharu": "appears",
        "fiihaa": "in it (in which)",
        "al-fanaar": "the lighthouse",
        "alaa": "on"
       }
      }
     }
    },
    {
     "topic": "Fann · Lubnaan",
     "source": "https://www.med-or.org/en/news/med-or-partecipa-allinaugurazione-della-mostra-echoes-of-existence-presso-il-museo-nazionale-di-beirut",
     "levels": {
      "A": {
       "text": "Fi Bayruut, ma'rad fannii an shajarat al-sanawbar.",
       "script": "في بيروت، معرض فني عن شجرة الصنوبر.",
       "en": "In Beirut, an art exhibition about the pine tree.",
       "gloss": {
        "fi": "in",
        "bayruut": "Beirut",
        "ma'rad": "exhibition",
        "fannii": "art (adj.)",
        "an": "about",
        "shajarat": "tree (of)",
        "al-sanawbar": "the pine"
       }
      },
      "B": {
       "text": "Fi al-mathaf al-watanii bi-Bayruut, ya'ridu fannaanaani a'maalan an shajarat al-sanawbar, ramz al-bahr al-mutawassit.",
       "script": "في المتحف الوطني ببيروت، يعرض فنانان أعمالًا عن شجرة الصنوبر، رمز البحر المتوسط.",
       "en": "At the National Museum in Beirut, two artists are showing works about the pine tree, a symbol of the Mediterranean.",
       "gloss": {
        "fi": "in",
        "al-mathaf": "the museum",
        "al-watanii": "the national",
        "bi-bayruut": "in Beirut",
        "ya'ridu": "show, exhibit",
        "fannaanaani": "two artists",
        "a'maalan": "works",
        "an": "about",
        "shajarat": "tree (of)",
        "al-sanawbar": "the pine",
        "ramz": "symbol (of)",
        "al-bahr": "the sea",
        "al-mutawassit": "the Mediterranean (lit. the middle one)"
       }
      },
      "C": {
       "text": "Yajma'u ma'rad «Asdaa al-wujuud» fi al-mathaf al-watanii bi-Bayruut bayna a'maal al-fannaan al-lubnaanii al-iitaalii Jilbeer al-Halabii wa-al-iitaalii Enzo Kukkii, hawla al-sanawbar ramzan lil-dhaakira wa-al-intimaa fi hawd al-mutawassit.",
       "script": "يجمع معرض «أصداء الوجود» في المتحف الوطني ببيروت بين أعمال الفنان اللبناني الإيطالي جيلبير الحلبي والإيطالي إنزو كوكي، حول الصنوبر رمزًا للذاكرة والانتماء في حوض المتوسط.",
       "en": "The exhibition “Echoes of Existence” at the National Museum in Beirut brings together works by the Lebanese-Italian artist Gilbert El Halaby and the Italian Enzo Cucchi around the pine as a symbol of memory and belonging in the Mediterranean basin.",
       "gloss": {
        "yajma'u": "brings together",
        "ma'rad": "exhibition",
        "asdaa": "echoes",
        "al-wujuud": "existence",
        "fi": "in",
        "al-mathaf": "the museum",
        "al-watanii": "the national",
        "bi-bayruut": "in Beirut",
        "bayna": "between",
        "a'maal": "works (of)",
        "al-fannaan": "the artist",
        "al-lubnaanii": "the Lebanese",
        "al-iitaalii": "the Italian",
        "jilbeer": "Gilbert",
        "al-halabii": "El Halaby",
        "wa-al-iitaalii": "and the Italian",
        "enzo": "Enzo",
        "kukkii": "Cucchi",
        "hawla": "around, about",
        "al-sanawbar": "the pine",
        "ramzan": "as a symbol",
        "lil-dhaakira": "of memory",
        "wa-al-intimaa": "and belonging",
        "hawd": "basin",
        "al-mutawassit": "the Mediterranean"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "maashi",
     "wordScript": "ماشي",
     "pos": "interjection",
     "region": "Egypt",
     "ties": 1,
     "meaning": "OK, fine, alright",
     "note": "Egyptian, literally 'walking' (as in: it's going fine). Lebanese also say «maashi» or «tayyib», Saudis «tamaam» or «zeen», Standard Arabic «hasanan». The example is Egyptian too: «bukra» (tomorrow), and «Iskindiriyya» for Alexandria.",
     "example": "Maashi, bukra nruuh Iskindiriyya.",
     "exScript": "ماشي، بكرة نروح إسكندرية.",
     "exampleEn": "OK, tomorrow we'll go to Alexandria.",
     "exGloss": {
      "maashi": "OK (Egyptian)",
      "bukra": "tomorrow",
      "nruuh": "we go",
      "iskindiriyya": "Alexandria (Egyptian pronunciation)"
     }
    },
    {
     "word": "hilu",
     "wordScript": "حلو",
     "pos": "adjective",
     "region": "Lebanon",
     "ties": 2,
     "meaning": "nice, lovely, pretty (also: sweet)",
     "note": "Lebanese and Levantine; feminine «hilwe». Egyptians say «hilw» or «gamiil», Saudis «zeen», Standard Arabic «jamiil». It also means sweet, of food. «Ktiir» = very, Lebanese.",
     "example": "Al-ma'rad ktiir hilu!",
     "exScript": "المعرض كتير حلو!",
     "exampleEn": "The exhibition is really lovely!",
     "exGloss": {
      "al-ma'rad": "the exhibition",
      "ktiir": "very (Lebanese)",
      "hilu": "nice, lovely"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news1",
     "q": "“Fi al-Iskandariyya, khaatam qadiim alayhi suurat al-fanaar.” Which word means “ring”?",
     "options": [
      "fanaar",
      "suura",
      "khaatam",
      "qadiim"
     ],
     "answer": 2,
     "why": "«Khaatam» = ring. «Fanaar» is lighthouse, «suura» picture, «qadiim» old.",
     "lesson": "The story is famous for the lighthouse, so «fanaar» tempts. But the lighthouse is only the picture on the ring; the object found is the «khaatam»."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Al-ma'rad ktiir hilu!” What does the speaker think of the exhibition?",
     "options": [
      "It's closed",
      "It's really lovely",
      "It's too small",
      "It's expensive"
     ],
     "answer": 1,
     "why": "«Hilu» = nice, lovely; «ktiir» = very.",
     "lesson": "«Ktiir» also means 'a lot', which can sound like a complaint (too much, too expensive). Here it just strengthens «hilu», which is praise."
    },
    {
     "level": "B1",
     "ref": "news2",
     "q": "Maa ma'naa «al-sanawbar» fi «shajarat al-sanawbar»?",
     "options": [
      "cedar",
      "olive",
      "palm",
      "pine"
     ],
     "answer": 3,
     "why": "«Al-sanawbar» = the pine; «shajarat al-sanawbar» = the pine tree.",
     "lesson": "Lebanon's national tree, on its flag, is the cedar, so 'cedar' is the reflex answer. The cedar is «al-arz»; the pine is «al-sanawbar»."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Maashi, bukra nruuh Iskindiriyya»: maa ma'naa «maashi» hunaa?",
     "options": [
      "walking",
      "OK",
      "tomorrow",
      "maybe"
     ],
     "answer": 1,
     "why": "In Egyptian speech «maashi» at the start of a reply means OK, agreed.",
     "lesson": "The literal meaning is 'walking', the participle of «mashaa». Used alone as a reply, it agrees, like English 'fine'."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Khaatam burunzii yahmilu suurat fanaar al-Iskandariyya»: maa ma'naa «yahmilu» hunaa?",
     "options": [
      "bears, shows",
      "carries away",
      "is pregnant with",
      "weighs"
     ],
     "answer": 0,
     "why": "With an image, a name or an inscription, «hamala» means to bear: the ring bears a picture.",
     "lesson": "The everyday meaning is 'to carry', so 'carries away' tempts. A ring can't carry anything off; with «suura» the verb means to display."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Hawla al-sanawbar ramzan lil-dhaakira»: limaadhaa «ramzan» bi-al-nasb (-an)?",
     "options": [
      "It's the subject of the sentence",
      "It's a plural form",
      "It's an accusative of state: 'as a symbol'",
      "It's a spelling mistake"
     ],
     "answer": 2,
     "why": "«Ramzan» is a haal, an accusative describing the pine's role: around the pine, as a symbol of memory.",
     "lesson": "Readers often expect the genitive after «hawla al-sanawbar», reading it as 'the pine's symbol'. The -an ending breaks that link: it tells you what the pine is being treated as."
    }
   ],
   "tip": {
    "title": "Three-letter roots",
    "text": "Most Arabic words are built on a root of three consonants. «Khaatam» (ring) comes from kh-t-m, the idea of sealing: rings were once seals. The same root gives «khitaam» (the end, a 'seal' on something) and «makhtuum» (sealed). Spot the root and you can often guess a new word's family."
   },
   "fun": {
    "kind": "saying",
    "region": "Lebanon",
    "text": "Ba'd il-iid ma byinfitil ka'k.",
    "script": "بعد العيد ما بينفتل كعك.",
    "gloss": {
     "ba'd": "after",
     "il-iid": "the feast, the holiday",
     "ma": "not",
     "byinfitil": "gets shaped, gets twisted",
     "ka'k": "ka'k (festive biscuits)"
    },
    "literal": "After the feast, no ka'k gets shaped.",
    "meaning": "It's too late: there's no point doing something once the moment has passed.",
    "culture": "Ka'k al-iid are festive biscuits filled with dates or nuts that families shape together in the days before the holiday. Baking them afterwards makes no sense, so Lebanese and Syrians say this to anyone who turns up with help, or an apology, too late."
   }
  },
  "zh": {
   "news": [
    {
     "topic": "Kǎogǔ · Sìchuān",
     "source": "https://www.heritagedaily.com/2026/09/archaeologists-uncover-2000-year-old-han-dynasty-city/159348",
     "levels": {
      "A": {
       "text": "Sìchuān yǒu yí zuò liǎngqiān nián de gǔchéng.",
       "script": "四川有一座两千年的古城。",
       "en": "In Sichuan there is a 2,000-year-old ancient city.",
       "gloss": {
        "yǒu": "there is, have",
        "yí": "one",
        "zuò": "(measure word for big things)",
        "liǎngqiān": "two thousand",
        "nián": "years",
        "de": "(links describer to noun)",
        "gǔchéng": "ancient city"
       }
      },
      "B": {
       "text": "Kǎogǔ xuéjiā zài Sìchuān fāxiàn le yí zuò Hàncháo chéngshì, yǒu chéngqiáng, jiēdào hé mǎtóu.",
       "script": "考古学家在四川发现了一座汉朝城市，有城墙、街道和码头。",
       "en": "Archaeologists found a Han-dynasty city in Sichuan, with city walls, streets and a dock.",
       "gloss": {
        "kǎogǔ": "archaeology",
        "xuéjiā": "scholars (kǎogǔ xuéjiā = archaeologists)",
        "zài": "in, at",
        "fāxiàn": "discover",
        "le": "(completed action)",
        "yí": "one",
        "zuò": "(measure word for big things)",
        "hàncháo": "Han dynasty",
        "chéngshì": "city",
        "yǒu": "have",
        "chéngqiáng": "city walls",
        "jiēdào": "streets",
        "hé": "and",
        "mǎtóu": "dock, wharf"
       }
      },
      "C": {
       "text": "Sìchuān Qúxiàn Chéngbà yízhǐ chūtǔ le Xīhàn chéngqiáng, zhújiǎn hé qīngtóngqì, hái yǒu yí chù kěnéng shì quánguó wéiyī de Hàndài shuǐ chéngmén.",
       "script": "四川渠县城坝遗址出土了西汉城墙、竹简和青铜器，还有一处可能是全国唯一的汉代水城门。",
       "en": "The Chengba site in Qu County, Sichuan, has yielded Western Han city walls, bamboo slips and bronzes, as well as what may be the only Han-era water gate in the country.",
       "gloss": {
        "qúxiàn": "Qu County",
        "chéngbà": "Chengba (site name)",
        "yízhǐ": "site, ruins",
        "chūtǔ": "unearth (lit. come out of the soil)",
        "le": "(completed action)",
        "xīhàn": "Western Han (202 BC – AD 8)",
        "chéngqiáng": "city walls",
        "zhújiǎn": "bamboo slips (for writing)",
        "hé": "and",
        "qīngtóngqì": "bronzes",
        "hái": "also",
        "yǒu": "there is",
        "yí": "one",
        "chù": "(measure word for places)",
        "kěnéng": "possibly",
        "shì": "is",
        "quánguó": "the whole country",
        "wéiyī": "only, sole",
        "de": "(links describer to noun)",
        "hàndài": "Han era",
        "shuǐ": "water",
        "chéngmén": "city gate"
       }
      }
     }
    },
    {
     "topic": "Wénhuà · Zhōngguó",
     "source": "https://en.people.cn/n3/2026/1003/c90000-20505538.html",
     "levels": {
      "A": {
       "text": "Guóqìng jiàqī, hěn duō rén qù bówùguǎn.",
       "script": "国庆假期，很多人去博物馆。",
       "en": "During the National Day holiday, lots of people go to museums.",
       "gloss": {
        "guóqìng": "National Day",
        "jiàqī": "holiday",
        "hěn": "very",
        "duō": "many",
        "rén": "people",
        "qù": "go",
        "bówùguǎn": "museum"
       }
      },
      "B": {
       "text": "Guóqìng jiàqī, gèdì yóukè kàn le píyǐngxì, Chuānjù hé bówùguǎn zhǎnlǎn.",
       "script": "国庆假期，各地游客看了皮影戏、川剧和博物馆展览。",
       "en": "Over the National Day holiday, visitors all over the country watched shadow-puppet plays, Sichuan Opera and museum exhibitions.",
       "gloss": {
        "guóqìng": "National Day",
        "jiàqī": "holiday",
        "gèdì": "everywhere, all over",
        "yóukè": "visitors, tourists",
        "kàn": "watch, see",
        "le": "(completed action)",
        "píyǐngxì": "shadow-puppet play",
        "chuānjù": "Sichuan Opera",
        "hé": "and",
        "bówùguǎn": "museum",
        "zhǎnlǎn": "exhibition"
       }
      },
      "C": {
       "text": "Guóqìng jiàqī qījiān, Húběi Bādōng de fēiyí zhǎnlǎnguǎn shàngyǎn píyǐngxì, Sìchuān Yíbīn de jùyuàn shàngyǎn Chuānjù, Shāndōng hé Héběi de bówùguǎn yě xīyǐn le dàliàng yóukè.",
       "script": "国庆假期期间，湖北巴东的非遗展览馆上演皮影戏，四川宜宾的剧院上演川剧，山东和河北的博物馆也吸引了大量游客。",
       "en": "During the National Day holiday, an intangible-heritage hall in Badong, Hubei staged shadow-puppet plays, a theatre in Yibin, Sichuan put on Sichuan Opera, and museums in Shandong and Hebei also drew large numbers of visitors.",
       "gloss": {
        "guóqìng": "National Day",
        "jiàqī": "holiday",
        "qījiān": "during, period",
        "de": "(links describer to noun)",
        "fēiyí": "intangible cultural heritage (abbr.)",
        "zhǎnlǎnguǎn": "exhibition hall",
        "shàngyǎn": "stage, put on",
        "píyǐngxì": "shadow-puppet play",
        "jùyuàn": "theatre",
        "chuānjù": "Sichuan Opera",
        "hé": "and",
        "bówùguǎn": "museums",
        "yě": "also",
        "xīyǐn": "attract",
        "le": "(completed action)",
        "dàliàng": "large numbers of",
        "yóukè": "visitors"
       }
      }
     }
    }
   ],
   "vocab": [
    {
     "word": "lìhai",
     "wordScript": "厉害",
     "pos": "adjective",
     "region": "general",
     "ties": 1,
     "meaning": "amazing, impressive (also: severe, fierce)",
     "note": "Everyday praise: «Nǐ zhēn lìhai!» = you're amazing! Said of people, skills and feats. It can also mean severe: «téng de lìhai» = it hurts badly.",
     "example": "Liǎngqiān nián qián jiù yǒu shuǐ chéngmén, zhēn lìhai!",
     "exScript": "两千年前就有水城门，真厉害！",
     "exampleEn": "They had a water gate two thousand years ago. That's amazing!",
     "exGloss": {
      "liǎngqiān": "two thousand",
      "nián": "years",
      "qián": "ago",
      "jiù": "already",
      "yǒu": "have",
      "shuǐ": "water",
      "chéngmén": "city gate",
      "zhēn": "really",
      "lìhai": "amazing"
     }
    },
    {
     "word": "rén shān rén hǎi",
     "wordScript": "人山人海",
     "pos": "idiom (chéngyǔ)",
     "region": "general",
     "ties": 2,
     "meaning": "huge crowds, packed (lit. people mountain, people sea)",
     "note": "The stock phrase for every Golden Week crowd at a sight or museum. The casual version is «rén tài duō le!» = way too many people!",
     "example": "Guóqìng jiàqī, bówùguǎn lǐ rén shān rén hǎi.",
     "exScript": "国庆假期，博物馆里人山人海。",
     "exampleEn": "Over the National Day holiday, the museum was packed.",
     "exGloss": {
      "guóqìng": "National Day",
      "jiàqī": "holiday",
      "bówùguǎn": "museum",
      "lǐ": "inside",
      "rén": "people",
      "shān": "mountain",
      "hǎi": "sea"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "news2",
     "q": "“Guóqìng jiàqī, hěn duō rén qù bówùguǎn.” Which word means “museum”?",
     "options": [
      "jiàqī",
      "bówùguǎn",
      "guóqìng",
      "rén"
     ],
     "answer": 1,
     "why": "«Bówùguǎn» = museum. «Jiàqī» is holiday, «guóqìng» National Day, «rén» people.",
     "lesson": "«Guǎn» at the end means a building or hall, as in «túshūguǎn» (library) and «fànguǎn» (restaurant). Spot «-guǎn» and you're looking for a place."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "“Bówùguǎn lǐ rén shān rén hǎi.” What is the museum like?",
     "options": [
      "empty",
      "in the mountains",
      "packed with people",
      "by the sea"
     ],
     "answer": 2,
     "why": "«Rén shān rén hǎi» = a mountain of people, a sea of people: packed.",
     "lesson": "«Shān» (mountain) and «hǎi» (sea) tempt you to read it as a location. They're images: there are so many people they look like a mountain and a sea."
    },
    {
     "level": "B1",
     "ref": "news1",
     "q": "«Yǒu chéngqiáng, jiēdào hé mǎtóu»: «chéngqiáng» shì shénme yìsi?",
     "options": [
      "city walls",
      "bridges",
      "streets",
      "gates"
     ],
     "answer": 0,
     "why": "«Chéng» = city, «qiáng» = wall: city walls.",
     "lesson": "«Qiáng» (wall) sounds a lot like «qiáo» (bridge), so 'bridges' is the trap. Listen for the -ng at the end: qiáng is the wall."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "«Liǎngqiān nián qián jiù yǒu shuǐ chéngmén, zhēn lìhai!»: «lìhai» zài zhèlǐ shì shénme yìsi?",
     "options": [
      "That's terrible",
      "That's dangerous",
      "That's expensive",
      "That's amazing"
     ],
     "answer": 3,
     "why": "Here «lìhai» is admiration: what they built 2,000 years ago is impressive.",
     "lesson": "«Lìhai» can also mean fierce or severe, so 'terrible' or 'dangerous' tempt. With «zhēn» and an achievement before it, it's praise."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Chéngbà yízhǐ chūtǔ le Xīhàn chéngqiáng»: «chūtǔ» shì shénme yìsi?",
     "options": [
      "were built",
      "were unearthed",
      "were destroyed",
      "were sold"
     ],
     "answer": 1,
     "why": "«Chū» = come out, «tǔ» = soil: to come out of the ground, i.e. be unearthed.",
     "lesson": "The sentence has no passive marker, so it can read like the site 'built' the walls. «Chūtǔ» works like 'yield': the site is the place things come out of."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«Jùyuàn shàngyǎn Chuānjù»: «shàngyǎn» de «shàng» zài zhèlǐ biǎoshì shénme?",
     "options": [
      "up, above",
      "last (as in last week)",
      "putting on, onto the stage",
      "going to a place"
     ],
     "answer": 2,
     "why": "«Shàngyǎn» = to stage, to put on a performance: «shàng» is the move onto the stage.",
     "lesson": "«Shàng» is learned first as 'up' or 'last' («shàng ge xīngqī»), which is why those tempt. In verbs like «shàngyǎn» and «shàngyìng» (to screen a film) it means bringing something before the public."
    }
   ],
   "tip": {
    "title": "Chéngyǔ: four-character idioms",
    "text": "Chinese has thousands of chéngyǔ, fixed idioms of four syllables. Some, like «rén shān rén hǎi» ('people mountain, people sea'), are pure images and easy to guess. Others only make sense once you know the old story behind them. They turn up everywhere, from news headlines to chat with friends."
   },
   "fun": {
    "kind": "joke",
    "region": "general",
    "text": "Hǎi wèishénme shì lán de? Yīnwèi yú zài shuǐ lǐ tǔ pàopao: blue, blue, blue!",
    "script": "海为什么是蓝的？因为鱼在水里吐泡泡：blue, blue, blue！",
    "gloss": {
     "hǎi": "sea",
     "wèishénme": "why",
     "shì": "is",
     "lán": "blue",
     "de": "(particle)",
     "yīnwèi": "because",
     "yú": "fish",
     "zài": "(doing right now)",
     "shuǐ": "water",
     "lǐ": "in",
     "tǔ": "blow, spit out",
     "pàopao": "bubbles",
     "blue": "English 'blue', said like a bubbling 'bùlū'"
    },
    "literal": "Why is the sea blue? Because the fish are blowing bubbles in the water: blue, blue, blue!",
    "meaning": "The bubbling noise sounds like the English word 'blue' in a Chinese accent, so the fish are 'saying' blue and colouring the sea.",
    "culture": "Chinese kids love «lěng xiàohua», 'cold jokes': puns so bad they leave the room chilly. Slipping in an English word is a modern twist, since almost every Chinese child learns English at school."
   }
  }
 },
 "2026-10-10": {
  "es": {
   "news": [
    {
     "topic": "Arte · Madrid",
     "source": "https://www.esmadrid.com/node/108245",
     "levels": {
      "A": {
       "text": "El Prado muestra dibujos de Ricardo de Madrazo desde el martes.",
       "en": "The Prado shows drawings by Ricardo de Madrazo from Tuesday.",
       "gloss": {
        "prado": "Prado (museum)",
        "muestra": "shows",
        "dibujos": "drawings",
        "martes": "Tuesday"
       }
      },
      "B": {
       "text": "El Museo del Prado abrirá el 13 de octubre una exposición de dibujos y acuarelas del pintor Ricardo de Madrazo.",
       "en": "The Prado Museum will open an exhibition of drawings and watercolours by the painter Ricardo de Madrazo on 13 October.",
       "gloss": {
        "museo": "museum",
        "prado": "Prado",
        "abrirá": "will open",
        "octubre": "October",
        "exposición": "exhibition",
        "dibujos": "drawings",
        "acuarelas": "watercolours",
        "pintor": "painter"
       }
      },
      "C": {
       "text": "El Prado dedica por primera vez una muestra exclusivamente a la obra sobre papel de Ricardo de Madrazo, con cuadernos, dibujos y acuarelas de sus viajes por España, Europa y el norte de África.",
       "en": "For the first time the Prado devotes a show exclusively to Ricardo de Madrazo's work on paper, with sketchbooks, drawings and watercolours from his travels through Spain, Europe and North Africa.",
       "gloss": {
        "prado": "Prado",
        "dedica": "devotes",
        "muestra": "show, exhibition",
        "exclusivamente": "exclusively",
        "obra": "work",
        "papel": "paper",
        "cuadernos": "notebooks, sketchbooks",
        "dibujos": "drawings",
        "acuarelas": "watercolours",
        "viajes": "travels, trips",
        "europa": "Europe",
        "norte": "north",
        "áfrica": "Africa"
       }
      }
     }
    },
    {
     "topic": "Arqueología · Colima",
     "source": "https://www.unotv.com/ciencia-y-tecnologia/sorpresivo-hallazgo-mar-de-fondo-deja-al-descubierto-mas-de-90-piezas-arqueologicas-en-colima/",
     "levels": {
      "A": {
       "text": "El mar descubre más de 90 piezas antiguas en una playa de Colima.",
       "en": "The sea uncovers more than 90 ancient pieces on a beach in Colima.",
       "gloss": {
        "mar": "sea",
        "descubre": "uncovers",
        "piezas": "pieces",
        "antiguas": "ancient, old",
        "playa": "beach"
       }
      },
      "B": {
       "text": "Las olas dejaron al descubierto más de 90 piezas arqueológicas en la playa Tecuanillo, y los vecinos avisaron al INAH.",
       "en": "The waves left more than 90 archaeological pieces exposed on Tecuanillo beach, and local residents alerted INAH.",
       "gloss": {
        "olas": "waves",
        "dejaron": "left",
        "descubierto": "uncovered (al descubierto = exposed)",
        "piezas": "pieces",
        "arqueológicas": "archaeological",
        "playa": "beach",
        "vecinos": "neighbours, local residents",
        "avisaron": "warned, alerted",
        "inah": "INAH (national institute of anthropology and history)"
       }
      },
      "C": {
       "text": "Un mar de fondo dejó al descubierto en la playa Tecuanillo, en Tecomán, más de noventa piezas de cerámica, figurillas y restos óseos que abarcan desde el 1200 antes de Cristo hasta 1521.",
       "en": "A ground swell exposed more than ninety pieces on Tecuanillo beach in Tecomán, ceramics, figurines and bone remains spanning from 1200 BC to 1521.",
       "gloss": {
        "mar": "sea (mar de fondo = ground swell)",
        "fondo": "bottom, depth",
        "dejó": "left",
        "descubierto": "uncovered (al descubierto = exposed)",
        "playa": "beach",
        "noventa": "ninety",
        "piezas": "pieces",
        "cerámica": "ceramics, pottery",
        "figurillas": "figurines",
        "restos": "remains",
        "óseos": "bone (adj.)",
        "abarcan": "span, cover",
        "antes": "before",
        "cristo": "Christ"
       }
      }
     }
    },
    {
     "topic": "Arqueología maya · Yucatán",
     "source": "https://escapadah.com/tendencias/2026/10/5/inah-analiza-pendientes-prehispanicos-hallados-en-proyecto-tren-maya-para-entender-antiguo-comercio-47519.html",
     "levels": {
      "A": {
       "text": "Expertos estudian 14 pendientes mayas con forma de rana.",
       "en": "Experts study 14 Maya pendants shaped like frogs.",
       "gloss": {
        "expertos": "experts",
        "estudian": "study",
        "pendientes": "pendants",
        "mayas": "Maya",
        "forma": "shape",
        "rana": "frog"
       }
      },
      "B": {
       "text": "El INAH analiza 14 pendientes de concha con forma de rana o sapo que aparecieron en las obras del Tren Maya.",
       "en": "INAH is analysing 14 shell pendants shaped like frogs or toads that turned up during the Maya Train works.",
       "gloss": {
        "inah": "INAH",
        "analiza": "analyses",
        "pendientes": "pendants",
        "concha": "shell",
        "forma": "shape",
        "rana": "frog",
        "sapo": "toad",
        "aparecieron": "appeared, turned up",
        "obras": "building works",
        "tren": "train",
        "maya": "Maya"
       }
      },
      "C": {
       "text": "El INAH estudia catorce pendientes de concha del Clásico tardío, hallados en Campeche y Yucatán durante las obras del Tren Maya, para entender las antiguas redes de intercambio.",
       "en": "INAH is studying fourteen Late Classic shell pendants, found in Campeche and Yucatán during the Maya Train works, to understand ancient exchange networks.",
       "gloss": {
        "inah": "INAH",
        "estudia": "studies",
        "catorce": "fourteen",
        "pendientes": "pendants",
        "concha": "shell",
        "clásico": "Classic (period)",
        "tardío": "late",
        "hallados": "found",
        "durante": "during",
        "obras": "building works",
        "tren": "train",
        "maya": "Maya",
        "entender": "to understand",
        "antiguas": "ancient",
        "redes": "networks",
        "intercambio": "exchange"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Paying and numbers",
      "situation": "Buying fruit at a market stall in Madrid",
      "region": "España",
      "lines": [
       {
        "who": "You",
        "text": "Hola, ¿cuánto cuestan las naranjas?",
        "en": "Hi, how much are the oranges?",
        "gloss": {
         "hola": "hi",
         "cuánto": "how much",
         "cuestan": "cost",
         "naranjas": "oranges"
        }
       },
       {
        "who": "Seller",
        "text": "Dos euros el kilo.",
        "en": "Two euros a kilo.",
        "gloss": {
         "euros": "euros",
         "kilo": "kilo"
        }
       },
       {
        "who": "You",
        "text": "Vale, un kilo, por favor.",
        "en": "OK, a kilo, please.",
        "gloss": {
         "vale": "OK (Spain)",
         "kilo": "kilo",
         "favor": "favour (por favor = please)"
        }
       },
       {
        "who": "Seller",
        "text": "¿Algo más?",
        "en": "Anything else?",
        "gloss": {
         "algo": "something, anything"
        }
       },
       {
        "who": "You",
        "text": "No, gracias. ¿Puedo pagar con tarjeta?",
        "en": "No, thanks. Can I pay by card?",
        "gloss": {
         "gracias": "thanks",
         "puedo": "can I",
         "pagar": "to pay",
         "tarjeta": "card"
        }
       },
       {
        "who": "Seller",
        "text": "Claro, son dos euros.",
        "en": "Of course, that's two euros.",
        "gloss": {
         "claro": "of course",
         "euros": "euros"
        }
       }
      ]
     },
     {
      "topic": "The weather",
      "situation": "Chatting with a hotel receptionist in Colima",
      "region": "México",
      "lines": [
       {
        "who": "You",
        "text": "¡Qué calor hace hoy!",
        "en": "It's so hot today!",
        "gloss": {
         "qué": "how, what",
         "calor": "heat",
         "hace": "makes (hace calor = it's hot)"
        }
       },
       {
        "who": "Receptionist",
        "text": "Sí, pero en la tarde va a llover.",
        "en": "Yes, but it's going to rain in the afternoon.",
        "gloss": {
         "tarde": "afternoon",
         "llover": "to rain"
        }
       },
       {
        "who": "You",
        "text": "¿Y mañana? Quiero ir a la playa.",
        "en": "And tomorrow? I want to go to the beach.",
        "gloss": {
         "quiero": "I want",
         "ir": "to go",
         "playa": "beach"
        }
       },
       {
        "who": "Receptionist",
        "text": "Mañana va a estar soleado. ¡Lleve bloqueador!",
        "en": "Tomorrow it'll be sunny. Take sunscreen!",
        "gloss": {
         "soleado": "sunny",
         "lleve": "take (polite command)",
         "bloqueador": "sunscreen (Mexico)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Complaining about a wrong order",
      "situation": "At a fonda in Mexico City, your dish isn't what you asked for",
      "region": "México",
      "lines": [
       {
        "who": "You",
        "text": "Disculpe, joven, creo que hubo un error con mi orden.",
        "en": "Excuse me, young man, I think there was a mistake with my order.",
        "gloss": {
         "disculpe": "excuse me (polite)",
         "joven": "young man (polite way to address a waiter in Mexico)",
         "creo": "I think",
         "hubo": "there was",
         "error": "mistake",
         "orden": "order (Mexico)"
        }
       },
       {
        "who": "Waiter",
        "text": "¿Qué pasó? ¿No es lo que pidió?",
        "en": "What happened? Isn't it what you ordered?",
        "gloss": {
         "qué": "what",
         "pasó": "happened",
         "pidió": "you ordered (polite)"
        }
       },
       {
        "who": "You",
        "text": "Pedí las enchiladas verdes, y estas son rojas. Y la verdad pican un buen.",
        "en": "I ordered the green enchiladas, and these are red. And honestly they're really spicy.",
        "gloss": {
         "pedí": "I ordered",
         "enchiladas": "enchiladas",
         "verdes": "green",
         "rojas": "red",
         "verdad": "truth (la verdad = honestly)",
         "pican": "are spicy, sting",
         "buen": "good (un buen = a lot, Mexico slang)"
        }
       },
       {
        "who": "Waiter",
        "text": "Ay, perdón, ahorita se las cambio.",
        "en": "Oh, sorry, I'll change them for you right away.",
        "gloss": {
         "ay": "oh",
         "perdón": "sorry",
         "ahorita": "right now, in a moment (Mexico)",
         "cambio": "I change"
        }
       },
       {
        "who": "You",
        "text": "Órale, gracias. No hay prisa.",
        "en": "Great, thanks. No rush.",
        "gloss": {
         "órale": "OK, great (Mexico)",
         "gracias": "thanks",
         "prisa": "hurry, rush"
        }
       },
       {
        "who": "Waiter",
        "text": "Y le traigo un agua de jamaica de cortesía, ¿va?",
        "en": "And I'll bring you a hibiscus water on the house, OK?",
        "gloss": {
         "traigo": "I bring",
         "agua": "water (agua de jamaica = hibiscus drink)",
         "jamaica": "hibiscus",
         "cortesía": "courtesy (de cortesía = on the house)",
         "va": "OK? (Mexico, ¿va? = deal?)"
        }
       }
      ]
     },
     {
      "topic": "Making and changing plans",
      "situation": "Voice note from a friend in Madrid about Saturday",
      "region": "España",
      "lines": [
       {
        "who": "Friend",
        "text": "Tío, ¿al final quedamos el sábado para ir al Prado?",
        "en": "Mate, so are we meeting on Saturday to go to the Prado after all?",
        "gloss": {
         "tío": "mate, dude (Spain)",
         "final": "end (al final = in the end, after all)",
         "quedamos": "we meet up",
         "sábado": "Saturday",
         "ir": "to go",
         "prado": "Prado"
        }
       },
       {
        "who": "You",
        "text": "Uf, el sábado no puedo, me ha salido un curro.",
        "en": "Ugh, I can't on Saturday, a job's come up.",
        "gloss": {
         "uf": "ugh",
         "sábado": "Saturday",
         "puedo": "I can",
         "salido": "come up (salir = come out)",
         "curro": "job, work (Spain slang)"
        }
       },
       {
        "who": "Friend",
        "text": "Vaya. ¿Y el domingo por la mañana?",
        "en": "Oh well. And Sunday morning?",
        "gloss": {
         "vaya": "oh well, what a pity",
         "domingo": "Sunday"
        }
       },
       {
        "who": "You",
        "text": "Vale, el domingo me viene genial. ¿A las once en la puerta?",
        "en": "OK, Sunday suits me perfectly. Eleven o'clock at the entrance?",
        "gloss": {
         "vale": "OK (Spain)",
         "domingo": "Sunday",
         "viene": "comes (me viene genial = suits me great)",
         "genial": "great",
         "once": "eleven",
         "puerta": "door, entrance"
        }
       },
       {
        "who": "Friend",
        "text": "Hecho. Y luego nos tomamos unas cañas, ¿no?",
        "en": "Done. And then we'll have a few beers, right?",
        "gloss": {
         "hecho": "done, deal",
         "luego": "then, afterwards",
         "tomamos": "we have (a drink)",
         "cañas": "small draught beers"
        }
       },
       {
        "who": "You",
        "text": "¡Por supuesto! Nos vemos.",
        "en": "Of course! See you.",
        "gloss": {
         "supuesto": "supposed (por supuesto = of course)",
         "vemos": "we see (nos vemos = see you)"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "molar",
     "pos": "verb · slang",
     "region": "España",
     "ties": 1,
     "meaning": "to be cool, to be great (me mola = I love it)",
     "note": "Works like gustar: the thing you like is the subject (me mola, me molan). Mexico: está padre, está chido.",
     "example": "¡Cómo me molan las acuarelas de Madrazo!",
     "exampleEn": "I really love Madrazo's watercolours!",
     "exGloss": {
      "cómo": "how",
      "molan": "are cool (me molan = I love them)",
      "acuarelas": "watercolours"
     }
    },
    {
     "word": "¡aguas!",
     "pos": "interjection · slang",
     "region": "México",
     "ties": 2,
     "meaning": "watch out!, careful!",
     "note": "Often «¡aguas con…!» for what to watch out for. Spain: ¡cuidado!, ¡ojo!",
     "example": "¡Aguas con las olas, que hoy está muy bravo el mar!",
     "exampleEn": "Watch out for the waves, the sea's really rough today!",
     "exGloss": {
      "aguas": "watch out (Mexico)",
      "olas": "waves",
      "bravo": "rough, wild",
      "mar": "sea"
     }
    },
    {
     "word": "collar",
     "article": "el",
     "pos": "noun",
     "region": "general",
     "ties": 3,
     "meaning": "necklace",
     "note": "Plural: los collares. A pendant hanging from it is un colgante in Spain and un dije in Mexico.",
     "example": "En Mérida compré un collar con una rana de concha.",
     "exampleEn": "In Mérida I bought a necklace with a shell frog.",
     "exGloss": {
      "compré": "I bought",
      "collar": "necklace",
      "rana": "frog",
      "concha": "shell"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "At the market you ask «¿Cuánto cuestan las naranjas?». What are you asking?",
     "options": [
      "Where the oranges are",
      "How much the oranges cost",
      "Whether the oranges are fresh",
      "How many oranges are left"
     ],
     "answer": 1,
     "why": "«¿Cuánto cuestan…?» means «How much do … cost?»: cuánto = how much, cuestan = they cost.",
     "lesson": "Cuánto (how much) and cuántos (how many) look almost the same; the verb cuestan, from costar, is what tells you this is about price."
    },
    {
     "level": "A2",
     "ref": "news2",
     "q": "In the Colima headline, «El mar descubre más de 90 piezas», what does «descubre» mean here?",
     "options": [
      "Covers",
      "Destroys",
      "Carries away",
      "Uncovers"
     ],
     "answer": 3,
     "why": "Descubrir is literally «dis-cover»: the sea took the sand away and uncovered the pieces.",
     "lesson": "Descubrir usually means «to discover», so learners expect a person as the subject; with the sea as subject, the literal sense «to uncover» is the one meant."
    },
    {
     "level": "B1",
     "ref": "phrase2",
     "q": "En el audio, tu amigo dice «¿al final quedamos el sábado?». ¿Qué significa «quedamos» aquí?",
     "options": [
      "Nos quedamos en casa",
      "Nos vemos, tenemos una cita",
      "Nos sobra tiempo",
      "Nos quedamos sin dinero"
     ],
     "answer": 1,
     "why": "Quedar (sin «se») significa acordar una cita: «quedamos el sábado» = nos vemos el sábado.",
     "lesson": "Quedarse, con «se», es permanecer en un sitio; sin el pronombre, quedar con alguien es citarse, y esa pequeña «se» cambia todo el sentido."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "Un amigo mexicano grita «¡Aguas con las olas!». ¿Qué te está diciendo?",
     "options": [
      "Que bebas agua",
      "Que el agua está fría",
      "Que tengas cuidado con las olas",
      "Que te metas al agua"
     ],
     "answer": 2,
     "why": "En México, «¡aguas!» es un aviso: ¡cuidado! «Aguas con…» indica de qué hay que cuidarse.",
     "lesson": "Como la frase va de la playa, la palabra «agua» invita a pensar en beber o nadar; pero «¡aguas!» en plural es una interjección fija y no habla del agua en absoluto."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«El Prado dedica por primera vez una muestra exclusivamente a la obra sobre papel». ¿Qué quiere decir «muestra» en este titular?",
     "options": [
      "Una prueba o señal",
      "Una exposición",
      "Una pequeña cantidad de producto",
      "Una forma del verbo enseñar"
     ],
     "answer": 1,
     "why": "Con «dedica una muestra a…», «muestra» es un sustantivo: exposición, sinónimo muy habitual en la prensa cultural.",
     "lesson": "«Muestra» también es una muestra de perfume o la tercera persona de «mostrar»; aquí el artículo «una» delante lo convierte en sustantivo, y el contexto de museo fija el sentido de exposición."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "¿Cuál de estas frases usa «molar» correctamente?",
     "options": [
      "Yo molo las acuarelas de Madrazo.",
      "Me molan las acuarelas de Madrazo.",
      "Me mola las acuarelas de Madrazo.",
      "Yo me molo con las acuarelas."
     ],
     "answer": 1,
     "why": "Molar se construye como gustar: lo que gusta es el sujeto y concuerda con el verbo, así que «las acuarelas» exige «molan».",
     "lesson": "Muchos hablantes no nativos dejan el verbo en singular porque «me mola» es la forma que más se oye; pero el verbo concuerda con lo que gusta, no con «me»."
    }
   ],
   "tip": {
    "title": "Molar and gustar: the liked thing is the subject",
    "text": "In «me molan las acuarelas», the watercolours are the grammatical subject, and «me» is the person who is pleased, so the verb goes plural with a plural thing. Gustar, encantar, molar and also «me viene genial» from the voice note all work this way. Think «the watercolours are cool to me», not «I like»."
   },
   "fun": {
    "kind": "idiom",
    "region": "general",
    "text": "Ser pan comido.",
    "gloss": {
     "ser": "to be",
     "pan": "bread",
     "comido": "eaten"
    },
    "literal": "To be eaten bread.",
    "meaning": "To be very easy, a piece of cake.",
    "culture": "Bread is so basic to Spanish and Mexican tables that bread already eaten stands for something done without effort. You hear it everywhere: «El examen fue pan comido»."
   }
  },
  "de": {
   "news": [
    {
     "topic": "Kunst · München",
     "source": "https://www.pinakothek-der-moderne.de/en/exhibitions/die-nacht-beruehrt-die-erde/",
     "levels": {
      "A": {
       "text": "Ein Museum in München zeigt Bilder von Fritz Winter.",
       "en": "A museum in Munich shows pictures by Fritz Winter.",
       "gloss": {
        "museum": "museum",
        "zeigt": "shows",
        "bilder": "pictures, paintings"
       }
      },
      "B": {
       "text": "Seit dem 9. Oktober zeigt die Pinakothek der Moderne Werke des Malers Fritz Winter, der vor 50 Jahren starb.",
       "en": "Since 9 October the Pinakothek der Moderne has been showing works by the painter Fritz Winter, who died 50 years ago.",
       "gloss": {
        "oktober": "October",
        "zeigt": "shows",
        "pinakothek": "Pinakothek (art gallery)",
        "moderne": "modern art (die Moderne = modernism)",
        "werke": "works",
        "malers": "painter's (genitive)",
        "vor": "ago, before",
        "starb": "died"
       }
      },
      "C": {
       "text": "Zum 50. Todestag des Bauhaus-Schülers Fritz Winter, dessen Kunst ab 1937 als „entartet“ galt, beleuchtet die Pinakothek der Moderne anhand seines neu zugänglichen Nachlasses sein Schaffen der 1930er und 40er Jahre.",
       "en": "On the 50th anniversary of the death of Bauhaus pupil Fritz Winter, whose art was branded 'degenerate' from 1937, the Pinakothek der Moderne sheds light on his work of the 1930s and 40s using his newly accessible estate.",
       "gloss": {
        "todestag": "anniversary of death",
        "bauhaus-schülers": "Bauhaus pupil's",
        "schülers": "pupil's",
        "dessen": "whose",
        "kunst": "art",
        "ab": "from",
        "entartet": "degenerate (Nazi term)",
        "galt": "was considered",
        "beleuchtet": "sheds light on",
        "pinakothek": "Pinakothek",
        "moderne": "modern art",
        "anhand": "by means of, using",
        "seines": "his",
        "neu": "newly",
        "zugänglichen": "accessible",
        "nachlasses": "estate (papers left after death)",
        "sein": "his",
        "schaffen": "creative work",
        "er": "-s (in 1930er = 1930s)",
        "jahre": "years"
       }
      }
     }
    },
    {
     "topic": "Kunst · München",
     "source": "https://www.muenchen.de/veranstaltungen/freizeit/ausstellung-museen/barcelona-moderna",
     "levels": {
      "A": {
       "text": "Bald zeigt München Kunst aus Barcelona, von Gaudí bis Picasso.",
       "en": "Soon Munich shows art from Barcelona, from Gaudí to Picasso.",
       "gloss": {
        "bald": "soon",
        "zeigt": "shows",
        "kunst": "art"
       }
      },
      "B": {
       "text": "Ab dem 23. Oktober zeigt die Kunsthalle München die Kunst Barcelonas zwischen 1880 und 1914, von Gaudí bis zum jungen Picasso.",
       "en": "From 23 October the Kunsthalle München is showing the art of Barcelona between 1880 and 1914, from Gaudí to the young Picasso.",
       "gloss": {
        "ab": "from",
        "oktober": "October",
        "zeigt": "shows",
        "kunsthalle": "art exhibition hall",
        "kunst": "art",
        "barcelonas": "Barcelona's",
        "zwischen": "between",
        "jungen": "young"
       }
      },
      "C": {
       "text": "Als erste Ausstellung in Deutschland widmet sich „Barcelona moderna“ in der Kunsthalle München ab dem 23. Oktober der katalanischen Moderne und holt neben Gaudí und dem jungen Picasso hierzulande kaum bekannte Künstler wie Ramon Casas und Santiago Rusiñol ins Licht.",
       "en": "As the first exhibition in Germany of its kind, 'Barcelona moderna' at the Kunsthalle München is devoted from 23 October to Catalan modernism, bringing into the light, alongside Gaudí and the young Picasso, artists barely known in this country such as Ramon Casas and Santiago Rusiñol.",
       "gloss": {
        "erste": "first",
        "ausstellung": "exhibition",
        "widmet": "devotes (sich widmen = to be devoted to)",
        "moderna": "modern (Spanish/Catalan)",
        "kunsthalle": "art exhibition hall",
        "ab": "from",
        "oktober": "October",
        "katalanischen": "Catalan",
        "moderne": "modernism",
        "holt": "brings, fetches",
        "neben": "alongside",
        "jungen": "young",
        "hierzulande": "in this country",
        "kaum": "barely",
        "bekannte": "known",
        "künstler": "artists",
        "ins": "into the",
        "licht": "light"
       }
      }
     }
    },
    {
     "topic": "Archäologie · Rheinland",
     "source": "https://de.euronews.com/2026/09/29/934-silbermuenze-deutschland-roemerschatz",
     "levels": {
      "A": {
       "text": "Ein Mann findet 934 alte Silbermünzen auf einem Feld.",
       "en": "A man finds 934 old silver coins in a field.",
       "gloss": {
        "mann": "man",
        "findet": "finds",
        "alte": "old",
        "silbermünzen": "silver coins",
        "feld": "field"
       }
      },
      "B": {
       "text": "Bei Wesseling hat ein Sondengänger 934 römische Silbermünzen gefunden, die zur Zeit von Kaiser Hadrian vergraben wurden.",
       "en": "Near Wesseling a metal detectorist has found 934 Roman silver coins that were buried in the time of Emperor Hadrian.",
       "gloss": {
        "sondengänger": "metal detectorist",
        "römische": "Roman",
        "silbermünzen": "silver coins",
        "gefunden": "found",
        "zeit": "time",
        "kaiser": "emperor",
        "vergraben": "buried"
       }
      },
      "C": {
       "text": "Mit 934 Denaren und gut drei Kilogramm Silber ist der Hort von Wesseling der größte bekannte Münzschatz in Deutschland, der unter Kaiser Hadrian vergraben wurde.",
       "en": "With 934 denarii and just over three kilograms of silver, the Wesseling hoard is the largest known coin treasure in Germany buried under Emperor Hadrian.",
       "gloss": {
        "denaren": "denarii (Roman silver coins)",
        "gut": "good (gut drei = a good three, just over three)",
        "kilogramm": "kilograms",
        "silber": "silver",
        "hort": "hoard",
        "größte": "largest",
        "bekannte": "known",
        "münzschatz": "coin hoard, coin treasure",
        "kaiser": "emperor",
        "vergraben": "buried"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Greetings and goodbyes",
      "situation": "Meeting a neighbour in the stairwell in Munich",
      "region": "Bayern",
      "lines": [
       {
        "who": "Neighbour",
        "text": "Servus! Wie geht's?",
        "en": "Hi! How are you?",
        "gloss": {
         "servus": "hi / bye (Bavaria, Austria)",
         "geht's": "goes it (wie geht's = how are you)"
        }
       },
       {
        "who": "You",
        "text": "Servus! Gut, danke. Und dir?",
        "en": "Hi! Good, thanks. And you?",
        "gloss": {
         "servus": "hi",
         "gut": "good",
         "danke": "thanks"
        }
       },
       {
        "who": "Neighbour",
        "text": "Passt scho. Gehst du in die Arbeit?",
        "en": "Fine, thanks. Are you going to work?",
        "gloss": {
         "passt": "fits (passt scho = it's fine, Bavarian)",
         "scho": "already (Bavarian for schon)",
         "gehst": "are you going",
         "arbeit": "work"
        }
       },
       {
        "who": "You",
        "text": "Ja, ich bin spät dran. Pfiat di!",
        "en": "Yes, I'm running late. Bye!",
        "gloss": {
         "ja": "yes",
         "spät": "late",
         "dran": "on it (spät dran = running late)",
         "pfiat": "bye (Bavarian, 'God protect you')",
         "di": "you (Bavarian for dich)",
         "bin": "am"
        }
       },
       {
        "who": "Neighbour",
        "text": "Pfiat di, bis später!",
        "en": "Bye, see you later!",
        "gloss": {
         "pfiat": "bye (Bavarian)",
         "di": "you (Bavarian)",
         "später": "later"
        }
       }
      ]
     },
     {
      "topic": "Hotel check-in",
      "situation": "Arriving at a small hotel in Vienna",
      "region": "Österreich",
      "lines": [
       {
        "who": "Receptionist",
        "text": "Grüß Gott! Haben Sie reserviert?",
        "en": "Hello! Do you have a reservation?",
        "gloss": {
         "grüß": "greet (Grüß Gott = hello, southern German/Austrian)",
         "gott": "God",
         "reserviert": "reserved, booked"
        }
       },
       {
        "who": "You",
        "text": "Ja, auf den Namen Miller, für zwei Nächte.",
        "en": "Yes, under the name Miller, for two nights.",
        "gloss": {
         "ja": "yes",
         "namen": "name",
         "nächte": "nights"
        }
       },
       {
        "who": "Receptionist",
        "text": "Sehr gut. Hier ist Ihr Schlüssel, Zimmer zwölf.",
        "en": "Very good. Here's your key, room twelve.",
        "gloss": {
         "gut": "good",
         "ihr": "your (polite)",
         "schlüssel": "key",
         "zimmer": "room",
         "zwölf": "twelve"
        }
       },
       {
        "who": "You",
        "text": "Danke! Wann gibt es Frühstück?",
        "en": "Thanks! When is breakfast?",
        "gloss": {
         "danke": "thanks",
         "wann": "when",
         "gibt": "gives (es gibt = there is)",
         "frühstück": "breakfast"
        }
       },
       {
        "who": "Receptionist",
        "text": "Von sieben bis zehn Uhr.",
        "en": "From seven to ten o'clock.",
        "gloss": {
         "von": "from",
         "sieben": "seven",
         "uhr": "o'clock"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "At the pharmacy",
      "situation": "Asking for something for a sore throat at an Apotheke in Regensburg",
      "region": "Bayern",
      "lines": [
       {
        "who": "Pharmacist",
        "text": "Grüß Gott, was darf's sein?",
        "en": "Hello, what can I get you?",
        "gloss": {
         "grüß": "greet",
         "gott": "God (Grüß Gott = hello)",
         "darf's": "may it (was darf's sein = what can I get you)",
         "was": "what"
        }
       },
       {
        "who": "You",
        "text": "Grüß Gott. Ich hab seit gestern so ein Kratzen im Hals, und schlucken tut echt weh.",
        "en": "Hello. Since yesterday I've had this scratchy throat, and swallowing really hurts.",
        "gloss": {
         "grüß": "greet",
         "gott": "God",
         "hab": "have (spoken for habe)",
         "gestern": "yesterday",
         "kratzen": "scratching",
         "hals": "throat",
         "schlucken": "swallowing",
         "tut": "does (weh tun = to hurt)",
         "echt": "really",
         "weh": "sore, painful"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Haben Sie auch Fieber?",
        "en": "Do you have a temperature too?",
        "gloss": {
         "fieber": "fever, temperature"
        }
       },
       {
        "who": "You",
        "text": "Nee, eigentlich nicht. Nur halt die Halsschmerzen.",
        "en": "Nah, not really. Just the sore throat, you know.",
        "gloss": {
         "nee": "nah, no (colloquial)",
         "eigentlich": "actually, really",
         "nur": "only, just",
         "halt": "just, you know (filler)",
         "halsschmerzen": "sore throat"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Dann nehmen S' diese Lutschtabletten, alle drei Stunden eine.",
        "en": "Then take these lozenges, one every three hours.",
        "gloss": {
         "nehmen": "take",
         "s'": "you (Bavarian for Sie)",
         "lutschtabletten": "lozenges",
         "alle": "every (alle drei Stunden = every three hours)",
         "stunden": "hours",
         "s": "you (Bavarian S' for Sie)"
        }
       },
       {
        "who": "You",
        "text": "Passt, die nehm ich. Was kriegen Sie?",
        "en": "Fine, I'll take those. What do I owe you?",
        "gloss": {
         "passt": "fine, that works",
         "nehm": "take (spoken for nehme)",
         "kriegen": "get (was kriegen Sie = what do I owe you)",
         "was": "what"
        }
       }
      ]
     },
     {
      "topic": "Telling a short story about your weekend",
      "situation": "Monday morning at the coffee machine with a colleague in Munich",
      "region": "Bayern",
      "lines": [
       {
        "who": "Colleague",
        "text": "Morgen! Na, wie war dein Wochenende?",
        "en": "Morning! So, how was your weekend?",
        "gloss": {
         "morgen": "morning (greeting)",
         "na": "well, so",
         "war": "was",
         "dein": "your",
         "wochenende": "weekend"
        }
       },
       {
        "who": "You",
        "text": "Super! Am Samstag sind wir mit dem Radl an den Starnberger See gefahren.",
        "en": "Great! On Saturday we cycled to Lake Starnberg.",
        "gloss": {
         "super": "great",
         "samstag": "Saturday",
         "radl": "bike (Bavarian for Fahrrad)",
         "starnberger": "Starnberg (adj.)",
         "see": "lake",
         "gefahren": "gone, ridden"
        }
       },
       {
        "who": "Colleague",
        "text": "Echt? Bei dem Wetter?",
        "en": "Really? In that weather?",
        "gloss": {
         "echt": "really",
         "wetter": "weather"
        }
       },
       {
        "who": "You",
        "text": "Ja, in der Früh hat's geregnet, aber dann war's total schön.",
        "en": "Yes, it rained first thing in the morning, but then it was really lovely.",
        "gloss": {
         "ja": "yes",
         "früh": "morning (in der Früh = in the morning, southern)",
         "hat's": "has it",
         "geregnet": "rained",
         "war's": "was it",
         "total": "totally, really",
         "schön": "lovely, nice"
        }
       },
       {
        "who": "Colleague",
        "text": "Und am Sonntag? Habt ihr euch ausgeruht?",
        "en": "And on Sunday? Did you have a rest?",
        "gloss": {
         "sonntag": "Sunday",
         "habt": "have (you all)",
         "euch": "yourselves",
         "ausgeruht": "rested"
        }
       },
       {
        "who": "You",
        "text": "Schön wär's! Wir sind in die Pinakothek gegangen. Aber war pfundig.",
        "en": "I wish! We went to the Pinakothek. But it was great.",
        "gloss": {
         "schön": "nice (schön wär's = I wish)",
         "wär's": "would be it",
         "pinakothek": "Pinakothek (art gallery)",
         "gegangen": "gone",
         "pfundig": "great (Bavarian)"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "pfundig",
     "pos": "adjective · slang",
     "region": "Bayern",
     "ties": 1,
     "meaning": "great, terrific",
     "note": "Bavarian and Austrian colloquial, from Pfund (pound): weighty, solid. Standard: toll, super, klasse.",
     "example": "Die Bilder von Fritz Winter sind echt pfundig!",
     "exampleEn": "Fritz Winter's paintings are really great!",
     "exGloss": {
      "bilder": "pictures, paintings",
      "echt": "really",
      "pfundig": "great (Bavarian)"
     }
    },
    {
     "word": "sich anschauen",
     "pos": "verb · separable",
     "region": "Süddeutschland",
     "ties": 2,
     "meaning": "to have a look at, to go and see",
     "note": "Separable: ich schaue mir … an; Perfekt: ich habe mir … angeschaut. Northern Germany prefers sich ansehen or, casually, sich angucken.",
     "example": "Schauen wir uns am Sonntag die Ausstellung über Barcelona an?",
     "exampleEn": "Shall we go and see the Barcelona exhibition on Sunday?",
     "exGloss": {
      "schauen": "look (sich anschauen = to look at)",
      "sonntag": "Sunday",
      "ausstellung": "exhibition",
      "an": "at (separable prefix of anschauen)"
     }
    },
    {
     "word": "Kohle",
     "article": "die",
     "pos": "noun · slang",
     "region": "general",
     "ties": 3,
     "meaning": "money, cash (literally coal)",
     "note": "Used without a plural: Ich hab keine Kohle. Other slang: die Knete, das Moos; Bavarian also das Gerstl.",
     "example": "Wenn ich so einen Schatz finde, hab ich endlich Kohle!",
     "exampleEn": "If I find a treasure like that, I'll finally have some cash!",
     "exGloss": {
      "wenn": "if, when",
      "einen": "a",
      "schatz": "treasure",
      "finde": "find",
      "hab": "have (spoken for habe)",
      "endlich": "finally",
      "kohle": "cash (slang)"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "Your Munich neighbour says «Pfiat di!» as you leave. What does it mean?",
     "options": [
      "Hurry up!",
      "Good morning!",
      "Bye!",
      "Be careful!"
     ],
     "answer": 2,
     "why": "«Pfiat di» is the Bavarian goodbye, short for «behüte dich Gott», God protect you.",
     "lesson": "Because «Servus» works for both hello and goodbye, learners expect every Bavarian greeting to do both; «Pfiat di» is only ever said when parting."
    },
    {
     "level": "A2",
     "ref": "news3",
     "q": "In «Ein Mann findet 934 alte Silbermünzen auf einem Feld», what did the man find?",
     "options": [
      "Silver coins",
      "Old gold rings",
      "Silver plates",
      "Roman weapons"
     ],
     "answer": 0,
     "why": "Silbermünzen = Silber (silver) + Münzen (coins): silver coins.",
     "lesson": "In a German compound the last part names the thing and the first part describes it, so Silbermünzen are coins made of silver, not silver of some kind."
    },
    {
     "level": "B1",
     "ref": "phrase2",
     "q": "Die Kollegin fragt: «Habt ihr euch ausgeruht?» Du antwortest «Schön wär's!». Was meinst du?",
     "options": [
      "Ja, es war sehr schön.",
      "Leider nein, das hätte ich gern gehabt.",
      "Das Wetter war schön.",
      "Ich weiß es nicht mehr."
     ],
     "answer": 1,
     "why": "«Schön wär's» ist Konjunktiv II: es wäre schön, ist aber nicht passiert, also ‚schön wäre es gewesen‘.",
     "lesson": "Das Wort «schön» klingt positiv und lockt zu ‚ja, es war schön‘; entscheidend ist aber «wär's», der Konjunktiv, der einen unerfüllten Wunsch ausdrückt."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "Welcher Satz ist richtig?",
     "options": [
      "Wir haben uns die Ausstellung angeschaut.",
      "Wir haben uns die Ausstellung geanschaut.",
      "Wir haben die Ausstellung uns anschaut.",
      "Wir sind uns die Ausstellung angeschaut."
     ],
     "answer": 0,
     "why": "Bei trennbaren Verben steht das ge- zwischen Präfix und Stamm: an-ge-schaut; anschauen bildet das Perfekt mit haben.",
     "lesson": "Viele setzen ge- automatisch an den Anfang, weil das bei einfachen Verben so ist; bei trennbaren Verben rutscht es hinter das Präfix."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "Im Titel steht, Winters Kunst «galt» ab 1937 als „entartet“. Was bedeutet hier «galt»?",
     "options": [
      "kostete",
      "wurde gezeigt",
      "wurde angesehen als",
      "war gültig"
     ],
     "answer": 2,
     "why": "«gelten als» heißt ‚angesehen werden als‘: Die Nationalsozialisten stuften seine Kunst als „entartet“ ein.",
     "lesson": "«gelten» kennt man oft als ‚gültig sein‘ (der Fahrschein gilt); erst die Verbindung mit «als» macht daraus ein Urteil darüber, wie etwas gesehen wird."
    },
    {
     "level": "C2",
     "ref": "vocab3",
     "q": "Ein Freund sagt: «Ich hab grad keine Kohle.» Was ist die passende Antwort?",
     "options": [
      "Dann heizen wir eben mit Holz.",
      "Kein Problem, ich lad dich ein.",
      "Die Kohle ist im Keller.",
      "Dann kauf doch einen Ofen."
     ],
     "answer": 1,
     "why": "«Kohle» ist umgangssprachlich Geld; wer keine hat, wird am besten eingeladen.",
     "lesson": "Die wörtliche Bedeutung Brennstoff liegt nahe, besonders mit Wörtern wie heizen oder Keller; im Alltag ist «keine Kohle haben» aber fast immer ‚pleite sein‘."
    }
   ],
   "tip": {
    "title": "Perfekt with sein for getting somewhere",
    "text": "Verbs of moving from A to B take sein in the Perfekt: «wir sind an den See gefahren», «wir sind in die Pinakothek gegangen». The same verb takes haben when it has a direct object: «ich habe das Auto gefahren». And «sich anschauen» stays with haben, because looking isn't travelling."
   },
   "fun": {
    "kind": "idiom",
    "region": "Bayern",
    "text": "Da legst di nieder!",
    "gloss": {
     "legst": "lay (you lay)",
     "di": "yourself (Bavarian for dich)",
     "nieder": "down"
    },
    "literal": "There you lie yourself down!",
    "meaning": "Wow, unbelievable! I'm floored.",
    "culture": "A Bavarian exclamation of amazement, good or bad: so astonishing that you'd have to lie down. You'll hear it over a huge Schweinsbraten or a shocking bill, often stretched out as «Ja, da legst di nieder!»."
   }
  },
  "it": {
   "news": [
    {
     "topic": "Arte · Milano",
     "source": "https://www.finestresullarte.info/en/exhibitions/francis-picabia-over-170-works-at-palazzo-reale-for-the-most-comprehensive-exhibition-in-italy",
     "levels": {
      "A": {
       "text": "A Milano c'è una grande mostra sul pittore Francis Picabia.",
       "en": "In Milan there is a big exhibition about the painter Francis Picabia.",
       "gloss": {
        "grande": "big",
        "mostra": "exhibition",
        "pittore": "painter"
       }
      },
      "B": {
       "text": "Il 9 ottobre il Palazzo Reale di Milano ha aperto la più grande mostra mai dedicata in Italia a Francis Picabia.",
       "en": "On 9 October Milan's Palazzo Reale opened the biggest exhibition ever devoted to Francis Picabia in Italy.",
       "gloss": {
        "ottobre": "October",
        "palazzo": "palace",
        "reale": "royal",
        "aperto": "opened",
        "grande": "big (la più grande = the biggest)",
        "mostra": "exhibition",
        "mai": "ever",
        "dedicata": "devoted, dedicated"
       }
      },
      "C": {
       "text": "Curata dalla pronipote Anne Berest Picabia, la mostra di Palazzo Reale, la più ampia mai dedicata in Italia all'artista, rinuncia alla cronologia e fa della notte il suo filo conduttore.",
       "en": "Curated by his great-granddaughter Anne Berest Picabia, the Palazzo Reale show, the most comprehensive ever devoted to the artist in Italy, gives up chronology and makes the night its connecting thread.",
       "gloss": {
        "curata": "curated",
        "dalla": "by the",
        "pronipote": "great-granddaughter",
        "mostra": "exhibition",
        "palazzo": "palace",
        "reale": "royal",
        "ampia": "broad, comprehensive",
        "mai": "ever",
        "dedicata": "devoted",
        "artista": "artist",
        "rinuncia": "gives up",
        "alla": "to the",
        "cronologia": "chronology",
        "fa": "makes",
        "della": "of the (fare di X Y = make X into Y)",
        "notte": "night",
        "suo": "its",
        "filo": "thread",
        "conduttore": "guiding (filo conduttore = common thread)"
       }
      }
     }
    },
    {
     "topic": "Archeologia · Puglia",
     "source": "https://www.foggiatoday.it/cronaca/scoperta-chiese-scavi-siponto.html",
     "levels": {
      "A": {
       "text": "A Siponto gli archeologi trovano una chiesa molto antica.",
       "en": "At Siponto archaeologists find a very old church.",
       "gloss": {
        "archeologi": "archaeologists",
        "trovano": "find",
        "chiesa": "church",
        "antica": "ancient, old"
       }
      },
      "B": {
       "text": "Gli archeologi delle università di Bari e Foggia hanno scoperto a Siponto una chiesa che potrebbe risalire al quinto o sesto secolo.",
       "en": "Archaeologists from the universities of Bari and Foggia have discovered a church at Siponto that may date back to the fifth or sixth century.",
       "gloss": {
        "archeologi": "archaeologists",
        "università": "universities",
        "scoperto": "discovered",
        "chiesa": "church",
        "potrebbe": "could, may",
        "risalire": "to date back",
        "quinto": "fifth",
        "sesto": "sixth",
        "secolo": "century"
       }
      },
      "C": {
       "text": "Negli scavi di Siponto, presso Manfredonia, è emersa una chiesa paleocristiana che gli studiosi collegano a quella dei santi Agata e Stefano, ricordata vicino al porto dalla Vita di Lorenzo.",
       "en": "In the Siponto excavations, near Manfredonia, an early Christian church has emerged that scholars link to that of Saints Agatha and Stephen, recorded near the port by the Life of Lawrence.",
       "gloss": {
        "negli": "in the",
        "scavi": "excavations",
        "presso": "near",
        "emersa": "emerged",
        "chiesa": "church",
        "paleocristiana": "early Christian",
        "studiosi": "scholars",
        "collegano": "link, connect",
        "quella": "that (one)",
        "santi": "saints",
        "ricordata": "recorded, mentioned",
        "vicino": "near",
        "porto": "port",
        "dalla": "by the",
        "vita": "Life (title of a biography)"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Introducing yourself",
      "situation": "Meeting someone at a language exchange in Bologna",
      "lines": [
       {
        "who": "Giulia",
        "text": "Ciao! Come ti chiami?",
        "en": "Hi! What's your name?",
        "gloss": {
         "ciao": "hi",
         "come": "how",
         "chiami": "you call (ti chiami = you are called)"
        }
       },
       {
        "who": "You",
        "text": "Mi chiamo Alex. E tu?",
        "en": "My name is Alex. And you?",
        "gloss": {
         "chiamo": "I call (mi chiamo = my name is)"
        }
       },
       {
        "who": "Giulia",
        "text": "Io sono Giulia. Di dove sei?",
        "en": "I'm Giulia. Where are you from?",
        "gloss": {
         "dove": "where",
         "sei": "you are"
        }
       },
       {
        "who": "You",
        "text": "Sono americano, ma abito qui da un mese.",
        "en": "I'm American, but I've been living here for a month.",
        "gloss": {
         "americano": "American",
         "abito": "I live",
         "qui": "here",
         "mese": "month"
        }
       },
       {
        "who": "Giulia",
        "text": "Piacere! Parli già bene l'italiano.",
        "en": "Nice to meet you! You already speak Italian well.",
        "gloss": {
         "piacere": "nice to meet you (literally pleasure)",
         "parli": "you speak",
         "già": "already",
         "bene": "well",
         "l'italiano": "Italian",
         "italiano": "Italian"
        }
       },
       {
        "who": "You",
        "text": "Grazie, piano piano!",
        "en": "Thanks, little by little!",
        "gloss": {
         "grazie": "thanks",
         "piano": "slowly (piano piano = bit by bit)"
        }
       }
      ]
     },
     {
      "topic": "Shopping at the market",
      "situation": "Buying tomatoes at a street market in Naples",
      "lines": [
       {
        "who": "Seller",
        "text": "Buongiorno! Cosa le do?",
        "en": "Good morning! What can I get you?",
        "gloss": {
         "buongiorno": "good morning",
         "cosa": "what",
         "le": "to you (polite)",
         "do": "I give"
        }
       },
       {
        "who": "You",
        "text": "Mezzo chilo di pomodori, per favore.",
        "en": "Half a kilo of tomatoes, please.",
        "gloss": {
         "mezzo": "half",
         "chilo": "kilo",
         "pomodori": "tomatoes",
         "favore": "favour (per favore = please)"
        }
       },
       {
        "who": "Seller",
        "text": "Ecco qua. Altro?",
        "en": "Here you go. Anything else?",
        "gloss": {
         "ecco": "here is",
         "qua": "here",
         "altro": "else, other"
        }
       },
       {
        "who": "You",
        "text": "No, basta così. Quanto le devo?",
        "en": "No, that's all. How much do I owe you?",
        "gloss": {
         "basta": "enough",
         "così": "like this (basta così = that's all)",
         "quanto": "how much",
         "devo": "I owe, I must",
         "no": "no"
        }
       },
       {
        "who": "Seller",
        "text": "Due euro, grazie.",
        "en": "Two euros, thanks.",
        "gloss": {
         "due": "two",
         "euro": "euros",
         "grazie": "thanks"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Booking and cancelling",
      "situation": "Phoning a trattoria in Milan to move a booking",
      "lines": [
       {
        "who": "Waiter",
        "text": "Trattoria da Mario, buonasera!",
        "en": "Trattoria da Mario, good evening!",
        "gloss": {
         "trattoria": "trattoria (simple restaurant)",
         "da": "at (da Mario = Mario's)",
         "buonasera": "good evening"
        }
       },
       {
        "who": "You",
        "text": "Buonasera, senta, avevo prenotato per stasera alle otto, a nome Rossi.",
        "en": "Good evening, listen, I'd booked for tonight at eight, under the name Rossi.",
        "gloss": {
         "buonasera": "good evening",
         "senta": "listen (polite)",
         "avevo": "I had",
         "prenotato": "booked",
         "stasera": "tonight",
         "alle": "at (time)",
         "otto": "eight",
         "nome": "name"
        }
       },
       {
        "who": "Waiter",
        "text": "Sì, quattro persone. Mi dica.",
        "en": "Yes, four people. Go ahead.",
        "gloss": {
         "sì": "yes",
         "quattro": "four",
         "persone": "people",
         "dica": "say (mi dica = go ahead, how can I help)"
        }
       },
       {
        "who": "You",
        "text": "Eh, purtroppo non ce la facciamo. Si può spostare a domani?",
        "en": "Well, unfortunately we can't make it. Can we move it to tomorrow?",
        "gloss": {
         "eh": "well",
         "purtroppo": "unfortunately",
         "ce": "it (farcela = to manage)",
         "facciamo": "we make (non ce la facciamo = we can't make it)",
         "può": "can (si può = is it possible)",
         "spostare": "to move",
         "domani": "tomorrow"
        }
       },
       {
        "who": "Waiter",
        "text": "Allora, domani alle otto è pieno, alle nove e mezza però va bene.",
        "en": "So, tomorrow at eight is full, but half past nine is fine.",
        "gloss": {
         "allora": "so, well",
         "domani": "tomorrow",
         "alle": "at",
         "otto": "eight",
         "pieno": "full",
         "nove": "nine",
         "mezza": "half",
         "però": "but, though",
         "va": "goes (va bene = it's fine)",
         "bene": "well"
        }
       },
       {
        "who": "You",
        "text": "Perfetto, va benissimo. Grazie mille!",
        "en": "Perfect, that's great. Thanks a lot!",
        "gloss": {
         "perfetto": "perfect",
         "va": "goes",
         "benissimo": "very well",
         "grazie": "thanks",
         "mille": "a thousand (grazie mille = thanks a lot)"
        }
       }
      ]
     },
     {
      "topic": "Chatting with a neighbour",
      "situation": "On the landing of a condominio in Turin",
      "lines": [
       {
        "who": "Neighbour",
        "text": "Oh, buongiorno! Tutto bene? Ieri sera ho sentito un gran rumore da voi.",
        "en": "Oh, good morning! All well? Last night I heard a big noise from your place.",
        "gloss": {
         "oh": "oh",
         "buongiorno": "good morning",
         "tutto": "all, everything",
         "bene": "well",
         "ieri": "yesterday (ieri sera = last night)",
         "sera": "evening",
         "sentito": "heard",
         "gran": "big",
         "rumore": "noise",
         "voi": "you (plural), your place",
         "ho": "I have (ho sentito = I heard)"
        }
       },
       {
        "who": "You",
        "text": "Ah, scusi! Mi è caduta la libreria, un disastro.",
        "en": "Ah, sorry! My bookcase fell over, a disaster.",
        "gloss": {
         "ah": "ah",
         "scusi": "sorry (polite)",
         "caduta": "fallen",
         "libreria": "bookcase",
         "disastro": "disaster"
        }
       },
       {
        "who": "Neighbour",
        "text": "Mamma mia! Si è fatto male?",
        "en": "Goodness! Did you hurt yourself?",
        "gloss": {
         "mamma": "mum (mamma mia = goodness)",
         "mia": "my",
         "fatto": "done, made (farsi male = to get hurt)",
         "male": "badly"
        }
       },
       {
        "who": "You",
        "text": "No, no, per fortuna niente. Solo un po' di libri per terra.",
        "en": "No, no, luckily nothing. Just a few books on the floor.",
        "gloss": {
         "fortuna": "luck (per fortuna = luckily)",
         "niente": "nothing",
         "solo": "only, just",
         "po'": "bit (un po' di = some)",
         "libri": "books",
         "terra": "ground, floor",
         "no": "no",
         "po": "bit (un po' = a bit)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Meno male. Se le serve un trapano, ce l'ho io, eh.",
        "en": "Thank goodness. If you need a drill, I've got one, you know.",
        "gloss": {
         "meno": "less (meno male = thank goodness)",
         "male": "bad",
         "se": "if",
         "serve": "is needed (le serve = you need)",
         "trapano": "drill",
         "l'ho": "I have it",
         "ho": "I have",
         "eh": "you know",
         "ce": "it (ce l'ho = I've got it)"
        }
       },
       {
        "who": "You",
        "text": "Magari! Gentilissima, grazie.",
        "en": "That would be great! Very kind of you, thanks.",
        "gloss": {
         "magari": "I'd love that, if only",
         "gentilissima": "very kind",
         "grazie": "thanks"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "allora",
     "pos": "adverb · filler",
     "region": "general",
     "ties": 1,
     "meaning": "so, well, then (to start or move a conversation along)",
     "note": "Also means 'at that time' (allora c'era…). As a filler it buys time, like English 'so…' or 'well…'.",
     "example": "Allora, andiamo a vedere la mostra di Picabia?",
     "exampleEn": "So, shall we go and see the Picabia exhibition?",
     "exGloss": {
      "allora": "so, well",
      "andiamo": "we go, let's go",
      "vedere": "to see",
      "mostra": "exhibition"
     }
    },
    {
     "word": "ecco",
     "pos": "adverb · interjection",
     "region": "general",
     "ties": 2,
     "meaning": "here is, there it is, there you go",
     "note": "Joins pronouns: eccolo (here it is), eccola, eccomi (here I am). «Ecco!» alone also means 'exactly!'.",
     "example": "Ecco la chiesa antica che hanno trovato a Siponto!",
     "exampleEn": "There's the old church they found at Siponto!",
     "exGloss": {
      "ecco": "here is, there is",
      "chiesa": "church",
      "antica": "ancient",
      "trovato": "found"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase2",
     "q": "At the market you say «Mezzo chilo di pomodori». How much are you asking for?",
     "options": [
      "Half a kilo",
      "One kilo",
      "Two kilos",
      "A few tomatoes"
     ],
     "answer": 0,
     "why": "Mezzo means half, so mezzo chilo is half a kilo.",
     "lesson": "Mezzo sounds like English 'middle' or 'medium', so it's tempting to read it as 'a medium amount'; in quantities and times (mezzogiorno, le nove e mezza) it is always a half."
    },
    {
     "level": "A2",
     "ref": "news2",
     "q": "In «gli archeologi trovano una chiesa molto antica», what did the archaeologists find?",
     "options": [
      "A very old castle",
      "A very old church",
      "An old cemetery",
      "A new museum"
     ],
     "answer": 1,
     "why": "Chiesa means church and antica means ancient or old.",
     "lesson": "Antica looks like 'antique' and can suggest small objects; in Italian it is the everyday word for anything old or ancient, including whole buildings."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Al telefono dici «purtroppo non ce la facciamo». Che cosa vuoi dire?",
     "options": [
      "Non lo facciamo apposta.",
      "Non riusciamo a venire.",
      "Non ci piace il ristorante.",
      "Non abbiamo fame."
     ],
     "answer": 1,
     "why": "Farcela vuol dire riuscire a fare qualcosa; «non ce la facciamo» = non riusciamo, non possiamo venire.",
     "lesson": "Chi traduce parola per parola vede solo «fare» e pensa a ‘non lo facciamo’; ma ce e la insieme formano il verbo farcela, con un senso tutto suo."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "Un amico cerca le chiavi e dice «Eccole!». Che cosa significa?",
     "options": [
      "Eccole è un saluto.",
      "Ecco i libri!",
      "Eccole: le ha trovate.",
      "Le chiavi non ci sono."
     ],
     "answer": 2,
     "why": "Ecco + le (pronome femminile plurale) = eccole, ‘eccole qui’: si riferisce alle chiavi appena trovate.",
     "lesson": "Il pronome attaccato a ecco deve concordare con la cosa: chiavi è femminile plurale, quindi le; eccoli andrebbe con libri, eccola con una cosa sola."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "La mostra «fa della notte il suo filo conduttore». Che cosa vuol dire?",
     "options": [
      "La mostra apre solo di notte.",
      "La notte è il tema che lega tutte le opere.",
      "La mostra racconta la vita notturna di Milano.",
      "Le opere sono esposte al buio."
     ],
     "answer": 1,
     "why": "Il «filo conduttore» è il tema che collega le parti di un racconto: qui la notte sostituisce la cronologia come principio d'ordine.",
     "lesson": "Leggere «notte» in senso pratico, come orario o buio, è la trappola: la costruzione «fare di X il filo conduttore» parla di idea guida, non di quando o come si visita."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "In quale frase «allora» NON fa da riempitivo per avviare il discorso?",
     "options": [
      "Allora, che facciamo stasera?",
      "Allora, dove eravamo rimasti?",
      "Allora l'Italia era molto più povera.",
      "Allora, ragazzi, cominciamo!"
     ],
     "answer": 2,
     "why": "In «Allora l'Italia era molto più povera» allora significa ‘a quel tempo’, è un avverbio di tempo, non un riempitivo.",
     "lesson": "Siccome «allora» in testa alla frase è quasi sempre il ‘so…’ della conversazione, si tende a leggerlo così; il verbo all'imperfetto e l'assenza della virgola rivelano il valore temporale."
    }
   ],
   "tip": {
    "title": "C'è and ci sono: there is, there are",
    "text": "Italian says 'there is' with c'è and 'there are' with ci sono: «A Milano c'è una grande mostra», «ci sono molti quadri». The ci means 'there'. In the neighbour chat, ci also turns up in «ce l'ho io», 'I've got it', where ci changes to ce before lo or la."
   },
   "fun": {
    "kind": "joke",
    "region": "Italia",
    "text": "Perché il libro di matematica è triste? Perché ha troppi problemi!",
    "gloss": {
     "perché": "why / because",
     "libro": "book",
     "matematica": "maths",
     "triste": "sad",
     "troppi": "too many",
     "problemi": "problems"
    },
    "literal": "Why is the maths book sad? Because it has too many problems!",
    "meaning": "A pun: problemi are both troubles and maths exercises.",
    "culture": "Italian schoolchildren spend years doing «problemi» for homework, so this is one of the first jokes kids learn and tell each other. It works in English too, which makes it a nice one to try on Italian friends."
   }
  },
  "ar": {
   "news": [
    {
     "topic": "Athar · Lubnaan",
     "source": "https://english.aawsat.com/node/5312435",
     "levels": {
      "A": {
       "text": "Ma'bad ruumaanii qadiim fi jibaal Lubnaan.",
       "script": "معبد روماني قديم في جبال لبنان.",
       "en": "An old Roman temple in the mountains of Lebanon.",
       "gloss": {
        "ma'bad": "temple",
        "ruumaanii": "Roman",
        "qadiim": "old, ancient",
        "jibaal": "mountains"
       }
      },
      "B": {
       "text": "Kashafa al-baahithuun an a'midat ma'bad ruumaanii fi Ma'aasir al-Shuuf qurba ghaabat al-arz.",
       "script": "كشف الباحثون عن أعمدة معبد روماني في معاصر الشوف قرب غابة الأرز.",
       "en": "Researchers uncovered the columns of a Roman temple in Maasser al-Shouf, near the cedar forest.",
       "gloss": {
        "kashafa": "uncovered (kashafa an = revealed)",
        "al-baahithuun": "the researchers",
        "baahithuun": "researchers",
        "a'midat": "columns of",
        "ma'bad": "temple",
        "ruumaanii": "Roman",
        "qurba": "near",
        "ghaabat": "forest of",
        "al-arz": "the cedars",
        "arz": "cedars"
       }
      },
      "C": {
       "text": "Yarji'u ma'bad Ma'aasir al-Shuuf ila al-qarn al-awwal qabla al-miilaad, wa qad tahawwala laahiqan ila hisn saliibii.",
       "script": "يرجع معبد معاصر الشوف إلى القرن الأول قبل الميلاد، وقد تحوّل لاحقاً إلى حصن صليبي.",
       "en": "The Maasser al-Shouf temple dates back to the first century BC, and it later became a Crusader fortress.",
       "gloss": {
        "yarji'u": "dates back, returns",
        "ma'bad": "temple",
        "al-qarn": "the century",
        "qarn": "century",
        "al-awwal": "the first",
        "awwal": "first",
        "qabla": "before",
        "al-miilaad": "the birth (of Christ) (qabla al-miilaad = BC)",
        "miilaad": "birth",
        "tahawwala": "turned into",
        "laahiqan": "later",
        "hisn": "fortress",
        "saliibii": "Crusader"
       }
      }
     }
    },
    {
     "topic": "Athar · Saqqaara",
     "source": "https://archaeologymag.com/2026/08/egyptian-officials-tomb-and-ushabti-figures-at-saqqara/",
     "levels": {
      "A": {
       "text": "Ba'tha misriyya tajidu maqbara qadiima fi Saqqaara.",
       "script": "بعثة مصرية تجد مقبرة قديمة في سقارة.",
       "en": "An Egyptian mission finds an ancient tomb at Saqqara.",
       "gloss": {
        "ba'tha": "mission, expedition",
        "misriyya": "Egyptian",
        "tajidu": "finds",
        "maqbara": "tomb",
        "qadiima": "ancient, old"
       }
      },
      "B": {
       "text": "Wajadat ba'tha misriyya fi Saqqaara maqbarat mas'uul kabiir min al-dawla al-qadiima, wa bi-qurbihaa thalaathat tawaabiit hajariyya mughlaqa.",
       "script": "وجدت بعثة مصرية في سقارة مقبرة مسؤول كبير من الدولة القديمة، وبقربها ثلاثة توابيت حجرية مغلقة.",
       "en": "An Egyptian mission found the tomb of a senior official from the Old Kingdom at Saqqara, and near it three sealed stone sarcophagi.",
       "gloss": {
        "wajadat": "found",
        "ba'tha": "mission",
        "misriyya": "Egyptian",
        "maqbarat": "tomb of",
        "mas'uul": "official",
        "kabiir": "senior, big",
        "al-dawla": "the state (al-dawla al-qadiima = the Old Kingdom)",
        "dawla": "state",
        "al-qadiima": "the old",
        "qadiima": "old",
        "bi-qurbihaa": "near it",
        "qurbihaa": "its vicinity",
        "thalaathat": "three",
        "tawaabiit": "sarcophagi, coffins",
        "hajariyya": "stone (adj.)",
        "mughlaqa": "sealed, closed"
       }
      },
      "C": {
       "text": "Tadummu maqbarat Sekhentiu-Ptah fi Saqqaara baaban wahmiyyan fi makaanihi al-aslii, wa tadhkuru nuquushuhaa annahu ashrafa ala a'maal al-malik.",
       "script": "تضم مقبرة سخنتيو-بتاح في سقارة باباً وهمياً في مكانه الأصلي، وتذكر نقوشها أنه أشرف على أعمال الملك.",
       "en": "The tomb of Sekhentiu-Ptah at Saqqara contains a false door in its original place, and its inscriptions say he supervised the king's works.",
       "gloss": {
        "tadummu": "contains, includes",
        "maqbarat": "tomb of",
        "baaban": "a door",
        "wahmiyyan": "false, illusory",
        "makaanihi": "its place",
        "al-aslii": "the original",
        "aslii": "original",
        "tadhkuru": "mentions, says",
        "nuquushuhaa": "its inscriptions",
        "annahu": "that he",
        "ashrafa": "supervised",
        "a'maal": "works",
        "al-malik": "the king",
        "malik": "king"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Introducing yourself",
      "situation": "Meeting a new colleague in Cairo",
      "region": "Egypt",
      "lines": [
       {
        "who": "Colleague",
        "text": "Ahlan! Ismak eih?",
        "script": "أهلاً! اسمك إيه؟",
        "en": "Hi! What's your name?",
        "gloss": {
         "ahlan": "hi, welcome",
         "ismak": "your name",
         "eih": "what (Egypt)"
        }
       },
       {
        "who": "You",
        "text": "Ismi Sam. W inta?",
        "script": "اسمي سام. وانت؟",
        "en": "My name's Sam. And you?",
        "gloss": {
         "ismi": "my name",
         "w": "and",
         "inta": "you (to a man)"
        }
       },
       {
        "who": "Colleague",
        "text": "Ana Kariim. Inta mineen?",
        "script": "أنا كريم. انت منين؟",
        "en": "I'm Karim. Where are you from?",
        "gloss": {
         "inta": "you",
         "mineen": "from where (Egypt)"
        }
       },
       {
        "who": "You",
        "text": "Ana min Amriika, w ba-shtaghal hina.",
        "script": "أنا من أمريكا، وبشتغل هنا.",
        "en": "I'm from America, and I work here.",
        "gloss": {
         "w": "and",
         "ba-shtaghal": "I work (Egypt)",
         "shtaghal": "work",
         "hina": "here"
        }
       },
       {
        "who": "Colleague",
        "text": "Tsharrafna!",
        "script": "تشرفنا!",
        "en": "Nice to meet you!",
        "gloss": {
         "tsharrafna": "we are honoured, nice to meet you"
        }
       }
      ]
     },
     {
      "topic": "Shopping at the market",
      "situation": "Buying fruit from a stall in Beirut",
      "region": "Lebanon",
      "lines": [
       {
        "who": "You",
        "text": "Marhaba, addeish kiilo l-tiffaah?",
        "script": "مرحبا، أديش كيلو التفاح؟",
        "en": "Hello, how much is a kilo of apples?",
        "gloss": {
         "marhaba": "hello",
         "addeish": "how much (Lebanon)",
         "kiilo": "kilo",
         "l-tiffaah": "the apples",
         "tiffaah": "apples"
        }
       },
       {
        "who": "Seller",
        "text": "Mitteen alf lira.",
        "script": "ميتين ألف ليرة.",
        "en": "Two hundred thousand lira.",
        "gloss": {
         "mitteen": "two hundred",
         "alf": "thousand",
         "lira": "lira (Lebanese pound)"
        }
       },
       {
        "who": "You",
        "text": "Tayyib, a'tiini kiilo, iza bitriid.",
        "script": "طيب، أعطيني كيلو، إذا بتريد.",
        "en": "OK, give me a kilo, please.",
        "gloss": {
         "tayyib": "OK, fine",
         "a'tiini": "give me",
         "kiilo": "kilo",
         "iza": "if",
         "bitriid": "you want (iza bitriid = please)"
        }
       },
       {
        "who": "Seller",
        "text": "Tikram! Shi taani?",
        "script": "تكرم! شي تاني؟",
        "en": "With pleasure! Anything else?",
        "gloss": {
         "tikram": "with pleasure (Lebanon, 'be honoured')",
         "shi": "something, anything",
         "taani": "other, else"
        }
       },
       {
        "who": "You",
        "text": "La, merci.",
        "script": "لا، مرسي.",
        "en": "No, thanks.",
        "gloss": {
         "merci": "thanks (Lebanon, from French)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Booking and cancelling",
      "situation": "Calling a restaurant in Riyadh to cancel and rebook",
      "region": "Saudi",
      "lines": [
       {
        "who": "Restaurant",
        "text": "Hala, ma'ak al-mat'am, tafaddal.",
        "script": "هلا، معك المطعم، تفضل.",
        "en": "Hi, this is the restaurant, go ahead.",
        "gloss": {
         "hala": "hi (Gulf)",
         "ma'ak": "with you (ma'ak X = this is X speaking)",
         "al-mat'am": "the restaurant",
         "mat'am": "restaurant",
         "tafaddal": "go ahead, please"
        }
       },
       {
        "who": "You",
        "text": "Hala walla. Kaan andi hajz al-leila as-saa'a tisa', bas maa raah agdar aji.",
        "script": "هلا والله. كان عندي حجز الليلة الساعة تسع، بس ما راح أقدر أجي.",
        "en": "Hey there. I had a booking tonight at nine, but I won't be able to come.",
        "gloss": {
         "hala": "hi",
         "walla": "by God (hala walla = warm hello)",
         "andi": "I have",
         "hajz": "booking",
         "al-leila": "tonight",
         "leila": "night",
         "as-saa'a": "the hour, o'clock",
         "saa'a": "hour",
         "tisa'": "nine",
         "bas": "but",
         "maa": "not",
         "raah": "will (future)",
         "agdar": "I can (Saudi g for q)",
         "aji": "I come",
         "kaan": "was (kaan andi = I had)",
         "tisa": "nine"
        }
       },
       {
        "who": "Restaurant",
        "text": "Wala yihimmak. Tibgha nghayyirah li-bukra?",
        "script": "ولا يهمك. تبغى نغيره لبكرة؟",
        "en": "No worries. Do you want us to change it to tomorrow?",
        "gloss": {
         "wala": "nor (wala yihimmak = don't worry)",
         "yihimmak": "it concerns you",
         "tibgha": "you want (Saudi)",
         "nghayyirah": "we change it",
         "li-bukra": "to tomorrow",
         "bukra": "tomorrow"
        }
       },
       {
        "who": "You",
        "text": "Ee, zain. Nafs al-wagt, khamsa ashkhaas.",
        "script": "إي، زين. نفس الوقت، خمسة أشخاص.",
        "en": "Yes, good. Same time, five people.",
        "gloss": {
         "ee": "yes",
         "zain": "good (Gulf)",
         "nafs": "same",
         "al-wagt": "the time (Saudi g)",
         "wagt": "time",
         "khamsa": "five",
         "ashkhaas": "people, persons"
        }
       },
       {
        "who": "Restaurant",
        "text": "Tamaam, sajjaltah. Hayyaak!",
        "script": "تمام، سجلته. حيّاك!",
        "en": "Perfect, I've noted it. You're welcome any time!",
        "gloss": {
         "tamaam": "perfect, fine",
         "sajjaltah": "I registered it",
         "hayyaak": "welcome (Saudi)"
        }
       }
      ]
     },
     {
      "topic": "Haggling at a market",
      "situation": "Buying a scarf at Khan el-Khalili in Cairo",
      "region": "Egypt",
      "lines": [
       {
        "who": "Seller",
        "text": "Itfaddal ya basha, il-shaal da harir.",
        "script": "اتفضل يا باشا، الشال ده حرير.",
        "en": "Come in, sir, this scarf is silk.",
        "gloss": {
         "itfaddal": "please, come in",
         "ya": "O (calling someone)",
         "basha": "sir (Egypt, from pasha)",
         "il-shaal": "the scarf",
         "shaal": "scarf",
         "da": "this (Egypt, after the noun)",
         "harir": "silk"
        }
       },
       {
        "who": "You",
        "text": "Bikaam da?",
        "script": "بكام ده؟",
        "en": "How much is this?",
        "gloss": {
         "bikaam": "for how much (Egypt)",
         "da": "this"
        }
       },
       {
        "who": "Seller",
        "text": "Alashaanak, khamsumiit gineeh bas.",
        "script": "علشانك، خمسمية جنيه بس.",
        "en": "For you, just five hundred pounds.",
        "gloss": {
         "alashaanak": "for you, for your sake",
         "khamsumiit": "five hundred",
         "gineeh": "Egyptian pound",
         "bas": "only"
        }
       },
       {
        "who": "You",
        "text": "Laa, da ghaali awi! Miteen w khamsiin.",
        "script": "لا، ده غالي قوي! ميتين وخمسين.",
        "en": "No, that's really expensive! Two hundred and fifty.",
        "gloss": {
         "laa": "no",
         "da": "this",
         "ghaali": "expensive",
         "awi": "very (Egypt)",
         "miteen": "two hundred",
         "w": "and",
         "khamsiin": "fifty"
        }
       },
       {
        "who": "Seller",
        "text": "Ya basha, ana kida bakhsar! Arba'umiyya, aakhir kalaam.",
        "script": "يا باشا، أنا كده بخسر! أربعمية، آخر كلام.",
        "en": "Sir, I'm losing money like this! Four hundred, final offer.",
        "gloss": {
         "ya": "O",
         "basha": "sir",
         "kida": "like this (Egypt)",
         "bakhsar": "I lose",
         "arba'umiyya": "four hundred",
         "aakhir": "last",
         "kalaam": "word, talk (aakhir kalaam = final offer)"
        }
       },
       {
        "who": "You",
        "text": "Tayyib, talattumiyya w nib'a ashaab.",
        "script": "طيب، تلتمية ونبقى أصحاب.",
        "en": "OK, three hundred and we're still friends.",
        "gloss": {
         "tayyib": "OK",
         "talattumiyya": "three hundred",
         "w": "and",
         "nib'a": "we stay, we become",
         "ashaab": "friends"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "ya'ni",
     "wordScript": "يعني",
     "pos": "filler",
     "region": "Lebanon",
     "ties": 1,
     "meaning": "I mean, like, so",
     "note": "Used across the Arab world; Egyptians and Saudis say it just the same. Literally 'it means'. «Ya'ni?» alone means 'meaning what?'.",
     "example": "Hal-ma'bad ktiir adiim, ya'ni min alfeen sene.",
     "exScript": "هالمعبد كتير قديم، يعني من ألفين سنة.",
     "exampleEn": "This temple is really old, I mean from two thousand years ago.",
     "exGloss": {
      "hal-ma'bad": "this temple",
      "ma'bad": "temple",
      "ktiir": "very (Lebanon)",
      "adiim": "old (Lebanese drops q)",
      "ya'ni": "I mean",
      "alfeen": "two thousand",
      "sene": "year (Lebanon)"
     }
    },
    {
     "word": "awi",
     "wordScript": "قوي",
     "pos": "adverb",
     "region": "Egypt",
     "ties": 2,
     "meaning": "very, really",
     "note": "Comes after the adjective: hilwa awi. Lebanon: ktiir (before or after); Saudi: marra or waajid; MSA: jiddan.",
     "example": "Il-maqbara di adiima awi, min ayyaam il-fara'na!",
     "exScript": "المقبرة دي قديمة قوي، من أيام الفراعنة!",
     "exampleEn": "This tomb is really old, from the days of the pharaohs!",
     "exGloss": {
      "il-maqbara": "the tomb",
      "maqbara": "tomb",
      "di": "this (fem., Egypt)",
      "adiima": "old (Egyptian drops q)",
      "awi": "very",
      "ayyaam": "days",
      "il-fara'na": "the pharaohs",
      "fara'na": "pharaohs"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "Your Cairo colleague asks «Ismak eih?». What are they asking?",
     "options": [
      "Where are you from?",
      "What's your name?",
      "How are you?",
      "What's your job?"
     ],
     "answer": 1,
     "why": "Ism is 'name', -ak is 'your', and eih is Egyptian for 'what': 'your name, what?'.",
     "lesson": "Eih comes at the end, so learners used to English word order may hear 'Ismak' and guess from tone alone; in Egyptian the question word usually sits at the end of the sentence."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "In Egyptian Arabic, «ghaali awi» means…",
     "options": [
      "a bit expensive",
      "not expensive",
      "really expensive",
      "too cheap"
     ],
     "answer": 2,
     "why": "Awi intensifies the adjective before it: ghaali awi = very expensive.",
     "lesson": "Awi comes from qawi, 'strong', and some learners take it for a separate word about strength; in Cairo speech it is simply 'very', always after the adjective."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Fi al-mukaalama yaquulu al-mat'am «Wala yihimmak». Maa ma'naahaa?",
     "options": [
      "Laa nastatii' musaa'adatak",
      "Laa tahtamm, laa mushkila",
      "Al-mat'am mughlaq al-yawm",
      "Yajibu an tadfa' al-aan"
     ],
     "answer": 1,
     "why": "«Wala yihimmak» ta'biir sha'bii ma'naahu: laa taqlaq, laa mushkila.",
     "lesson": "Tabda'u al-ibaara bi-«wala», fa-yazunnu al-muta'allim annahaa rafd; laakinnahaa kulluhaa li-tatmiin al-zubuun."
    },
    {
     "level": "B2",
     "ref": "news2",
     "q": "Limaadha naquulu «thalaathat tawaabiit» wa laysa «thalaath tawaabiit»?",
     "options": [
      "Li-anna «tawaabiit» jam' mu'annath",
      "Li-anna al-'adad ya'tii qabla al-ism",
      "Li-anna al-mufrad «taabuut» mudhakkar",
      "Li-anna al-fi'l fi al-maadi"
     ],
     "answer": 2,
     "why": "Al-a'daad min thalaatha ila ashara tukhaalifu jins al-mufrad: «taabuut» mudhakkar, fa-ya'khudhu al-'adad taa' marbuuta.",
     "lesson": "Shakl al-jam' laa yuhaddidu al-jins; al-muhimm huwa al-mufrad, wa hadha maa yansaahu kathiiruun."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "«Wa qad tahawwala laahiqan ila hisn saliibii»: maadha hadatha li-l-ma'bad?",
     "options": [
      "Hudima tamaaman",
      "Buniya min jadiid fi al-'asr al-hadiith",
      "Nuqila ila Bayruut",
      "Saara qal'a fi zaman al-saliibiyyiin"
     ],
     "answer": 3,
     "why": "Tahawwala ila ya'ni saara: al-ma'bad al-ruumaanii saara hisnan fi zaman al-saliibiyyiin, fi al-qarnayn al-thaanii ashar wa al-thaalith ashar.",
     "lesson": "Qad tuuhii kalimat «laahiqan» bi-hadath qariib; laakinnahaa hunaa tadullu ala marhala ta'tii ba'da quruun fi taariikh al-mawqi'."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "Fi al-lahja al-lubnaaniyya, fi ayy jumla tashrahu «ya'ni» kalaaman saabiqan?",
     "options": [
      "Ya'ni bukra?",
      "Hal-ma'bad ktiir adiim, ya'ni min alfeen sene.",
      "Ya'ni shu baddak?",
      "Ma ba'rif, ya'ni..."
     ],
     "answer": 1,
     "why": "Hunaa «ya'ni» li-l-tawdiih: ba'da «ktiir adiim» ya'tii al-sharh «min alfeen sene».",
     "lesson": "Li-anna «ya'ni» tusta'malu kathiiran hashwan aw su'aalan, yakhtaaru al-muta'allim ihdaa tilka al-jumal; laakin ma'naahaa al-aslii huwa «ay», sharh maa qablahaa."
    }
   ],
   "tip": {
    "title": "Egyptian 'this' comes after the noun",
    "text": "In Cairo, 'this' follows the noun, which keeps its il-: «il-shaal da» (this scarf), «il-maqbara di» (this tomb). Use da for masculine nouns and di for feminine ones. Standard Arabic puts it first: hadha al-shaal. Lebanese uses a short hal- in front: «hal-ma'bad», this temple."
   },
   "fun": {
    "kind": "saying",
    "region": "Egypt",
    "text": "Illi faat maat.",
    "script": "اللي فات مات.",
    "gloss": {
     "illi": "what, that which",
     "faat": "passed",
     "maat": "died"
    },
    "literal": "What has passed has died.",
    "meaning": "Let bygones be bygones; the past is over, move on.",
    "culture": "Egyptians say it to end an argument or to comfort someone after a mistake: no point dwelling on it. The rhyme of faat and maat makes it stick, and it's as common at the family dinner table as in the office."
   }
  },
  "zh": {
   "news": [
    {
     "topic": "Kǎogǔ · Ānhuī",
     "source": "https://archaeologymag.com/2026/09/chinese-tomb-roots-of-zongzi-tradition/",
     "levels": {
      "A": {
       "text": "Ānhuī yí zuò gǔmù lǐ yǒu xiàng zòngzi de dōngxi.",
       "script": "安徽一座古墓里有像粽子的东西。",
       "en": "An ancient tomb in Anhui holds things that look like zongzi.",
       "gloss": {
        "ānhuī": "Anhui (province)",
        "zuò": "(measure word for buildings, tombs)",
        "gǔmù": "ancient tomb",
        "lǐ": "inside",
        "xiàng": "look like",
        "zòngzi": "zongzi (leaf-wrapped rice parcel)",
        "dōngxi": "things"
       }
      },
      "B": {
       "text": "Kēxuéjiā yòng gǔ DNA fāxiàn, Wǔwángdūn gǔmù lǐ de shí'èr gè zhíwù bāo shì yòng xiàngshù yè bāo qǐlái de.",
       "script": "科学家用古DNA发现，武王墩古墓里的十二个植物包是用橡树叶包起来的。",
       "en": "Using ancient DNA, scientists found that the twelve plant bundles in the Wuwangdun tomb were wrapped in oak leaves.",
       "gloss": {
        "kēxuéjiā": "scientists",
        "yòng": "use",
        "gǔ": "ancient",
        "dna": "DNA",
        "fāxiàn": "discover",
        "wǔwángdūn": "Wuwangdun (site name)",
        "gǔmù": "ancient tomb",
        "lǐ": "in",
        "shí'èr": "twelve",
        "zhíwù": "plant",
        "bāo": "bundle; to wrap",
        "xiàngshù": "oak tree",
        "yè": "leaf",
        "qǐlái": "(after a verb: up, completed)"
       }
      },
      "C": {
       "text": "Ānhuī Wǔwángdūn gǔmù de mùzhǔ bèi rènwéi shì gōngyuánqián 238 nián qùshì de Chǔ Kǎoliè Wáng, mù zhōng chūtǔ de xiàngyè guǒ gǔwù kěnéng shì zòngzi de zǎoqī xíngtài.",
       "script": "安徽武王墩古墓的墓主被认为是公元前238年去世的楚考烈王，墓中出土的橡叶裹谷物可能是粽子的早期形态。",
       "en": "The Wuwangdun tomb in Anhui is attributed to King Kaolie of Chu, who died in 238 BC, and the oak-leaf-wrapped grains unearthed in it may be an early form of zongzi.",
       "gloss": {
        "ānhuī": "Anhui",
        "wǔwángdūn": "Wuwangdun",
        "gǔmù": "ancient tomb",
        "mùzhǔ": "tomb occupant",
        "bèi": "(passive marker)",
        "rènwéi": "believe, consider",
        "gōngyuánqián": "BC",
        "qùshì": "pass away",
        "chǔ": "Chu (ancient state)",
        "kǎoliè": "Kaolie (royal title)",
        "wáng": "king",
        "mù": "tomb",
        "zhōng": "in",
        "chūtǔ": "be unearthed",
        "xiàngyè": "oak leaf",
        "guǒ": "wrap",
        "gǔwù": "grain, cereals",
        "kěnéng": "may, possibly",
        "zòngzi": "zongzi",
        "zǎoqī": "early",
        "xíngtài": "form"
       }
      }
     }
    },
    {
     "topic": "Bówùguǎn · Shànghǎi",
     "source": "https://edu.sh.gov.cn/study_en_museums/20260225/8d2ce9908fa449bc8e6f4b703cc1df22.html",
     "levels": {
      "A": {
       "text": "Shànghǎi Bówùguǎn yǒu yí gè Měizhōu gǔdài wénmíng zhǎnlǎn.",
       "script": "上海博物馆有一个美洲古代文明展览。",
       "en": "Shanghai Museum has an exhibition on the ancient civilisations of the Americas.",
       "gloss": {
        "bówùguǎn": "museum",
        "měizhōu": "the Americas",
        "gǔdài": "ancient",
        "wénmíng": "civilisation",
        "zhǎnlǎn": "exhibition"
       }
      },
      "B": {
       "text": "Jīnnián qīyuè, Shànghǎi Bówùguǎn kāi le yí gè Měizhōu gǔdài wénmíng dà zhǎn, zhǎnchū yìqiān duō jiàn wénwù.",
       "script": "今年七月，上海博物馆开了一个美洲古代文明大展，展出一千多件文物。",
       "en": "This July, Shanghai Museum opened a major exhibition on the ancient civilisations of the Americas, showing more than 1,000 artefacts.",
       "gloss": {
        "jīnnián": "this year",
        "qīyuè": "July",
        "bówùguǎn": "museum",
        "kāi": "open",
        "měizhōu": "the Americas",
        "gǔdài": "ancient",
        "wénmíng": "civilisation",
        "dà": "big, major",
        "zhǎn": "exhibition",
        "zhǎnchū": "put on display",
        "yìqiān": "one thousand",
        "duō": "more than",
        "jiàn": "(measure word for items)",
        "wénwù": "artefacts, cultural relics"
       }
      },
      "C": {
       "text": "Shànghǎi Bówùguǎn jīnnián tuīchū de Měizhōu gǔdài wénmíng zhǎn huìjù yìqiān yú jiàn wénwù, zhǎnqī jiāng chíxù dào 2027 nián, bèi yù wéi quánqiú guīmó zuì dà de tónglèi zhǎnlǎn.",
       "script": "上海博物馆今年推出的美洲古代文明展汇聚一千余件文物，展期将持续到2027年，被誉为全球规模最大的同类展览。",
       "en": "Shanghai Museum's exhibition on the ancient Americas, launched this year, brings together more than a thousand artefacts, runs into 2027 and is billed as the largest of its kind in the world.",
       "gloss": {
        "bówùguǎn": "museum",
        "jīnnián": "this year",
        "tuīchū": "launch, present",
        "měizhōu": "the Americas",
        "gǔdài": "ancient",
        "wénmíng": "civilisation",
        "zhǎn": "exhibition",
        "huìjù": "bring together",
        "yìqiān": "one thousand",
        "yú": "more than (formal)",
        "jiàn": "(measure word for items)",
        "wénwù": "artefacts",
        "zhǎnqī": "run of an exhibition",
        "jiāng": "will",
        "chíxù": "continue",
        "dào": "until",
        "bèi": "(passive marker)",
        "yù": "praise, acclaim",
        "wéi": "as",
        "quánqiú": "worldwide",
        "guīmó": "scale",
        "zuì": "most",
        "dà": "big",
        "tónglèi": "of the same kind",
        "zhǎnlǎn": "exhibition"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Asking for directions",
      "situation": "You're looking for the metro station and stop a passer-by.",
      "lines": [
       {
        "who": "You",
        "text": "Bù hǎoyìsi, dìtiězhàn zài nǎr?",
        "script": "不好意思，地铁站在哪儿？",
        "en": "Excuse me, where's the metro station?",
        "gloss": {
         "hǎoyìsi": "bù hǎoyìsi: excuse me / sorry",
         "dìtiězhàn": "metro station",
         "nǎr": "where (northern, with -r)"
        }
       },
       {
        "who": "Passer-by",
        "text": "Yìzhí zǒu, ránhòu wǎng zuǒ guǎi.",
        "script": "一直走，然后往左拐。",
        "en": "Go straight on, then turn left.",
        "gloss": {
         "yìzhí": "straight on",
         "zǒu": "walk, go",
         "ránhòu": "then",
         "wǎng": "towards",
         "zuǒ": "left",
         "guǎi": "turn"
        }
       },
       {
        "who": "You",
        "text": "Yuǎn ma?",
        "script": "远吗？",
        "en": "Is it far?",
        "gloss": {
         "yuǎn": "far"
        }
       },
       {
        "who": "Passer-by",
        "text": "Bù yuǎn, zǒulù wǔ fēnzhōng.",
        "script": "不远，走路五分钟。",
        "en": "Not far, five minutes on foot.",
        "gloss": {
         "yuǎn": "far",
         "zǒulù": "on foot, walk",
         "wǔ": "five",
         "fēnzhōng": "minutes"
        }
       },
       {
        "who": "You",
        "text": "Hǎo de, xièxie!",
        "script": "好的，谢谢！",
        "en": "OK, thanks!",
        "gloss": {
         "hǎo": "good (hǎo de: OK)",
         "xièxie": "thanks"
        }
       },
       {
        "who": "Passer-by",
        "text": "Bú kèqi.",
        "script": "不客气。",
        "en": "You're welcome.",
        "gloss": {
         "kèqi": "polite (bú kèqi: you're welcome, lit. don't be polite)"
        }
       }
      ]
     },
     {
      "topic": "Buying fruit",
      "situation": "At a fruit stall in a neighbourhood market.",
      "lines": [
       {
        "who": "You",
        "text": "Lǎobǎn, píngguǒ zěnme mài?",
        "script": "老板，苹果怎么卖？",
        "en": "Hi (lit. boss), how much are the apples?",
        "gloss": {
         "lǎobǎn": "boss (how you address a stallholder)",
         "píngguǒ": "apples",
         "zěnme": "how",
         "mài": "sell"
        }
       },
       {
        "who": "Seller",
        "text": "Wǔ kuài yì jīn.",
        "script": "五块一斤。",
        "en": "Five yuan a jin (half a kilo).",
        "gloss": {
         "wǔ": "five",
         "kuài": "yuan (spoken)",
         "jīn": "jin, 500 grams"
        }
       },
       {
        "who": "You",
        "text": "Wǒ yào liǎng jīn.",
        "script": "我要两斤。",
        "en": "I'll take two jin.",
        "gloss": {
         "yào": "want",
         "liǎng": "two (before a measure word)",
         "jīn": "jin, 500 grams"
        }
       },
       {
        "who": "Seller",
        "text": "Hǎo, yígòng shí kuài. Wēixìn háishi Zhīfùbǎo?",
        "script": "好，一共十块。微信还是支付宝？",
        "en": "OK, ten yuan altogether. WeChat or Alipay?",
        "gloss": {
         "hǎo": "OK",
         "yígòng": "altogether",
         "shí": "ten",
         "kuài": "yuan",
         "wēixìn": "WeChat",
         "háishi": "or (in questions)",
         "zhīfùbǎo": "Alipay"
        }
       },
       {
        "who": "You",
        "text": "Wēixìn ba.",
        "script": "微信吧。",
        "en": "WeChat, then.",
        "gloss": {
         "wēixìn": "WeChat"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Moving a dinner",
      "situation": "A friend calls to push tonight's dinner to tomorrow.",
      "lines": [
       {
        "who": "Friend",
        "text": "Wèi, wǎnshang de fànjú, néng bu néng gǎi dào míngtiān a?",
        "script": "喂，晚上的饭局，能不能改到明天啊？",
        "en": "Hey, tonight's dinner — any chance we could move it to tomorrow?",
        "gloss": {
         "wèi": "hello (on the phone)",
         "wǎnshang": "evening",
         "fànjú": "dinner get-together",
         "néng": "can",
         "bu": "not (light, in néng bu néng)",
         "gǎi": "change",
         "dào": "to",
         "a": "(softening particle)"
        }
       },
       {
        "who": "You",
        "text": "Zěnme le? Jiābān a?",
        "script": "怎么了？加班啊？",
        "en": "What's up? Working late?",
        "gloss": {
         "zěnme": "how (zěnme le: what's up?)",
         "jiābān": "work overtime",
         "a": "(softening particle)"
        }
       },
       {
        "who": "Friend",
        "text": "Duì, lǎobǎn tūrán yào yí gè bàogào, wǒ yào fēng le.",
        "script": "对，老板突然要一个报告，我要疯了。",
        "en": "Yeah, the boss suddenly wants a report — I'm going crazy.",
        "gloss": {
         "duì": "right, yeah",
         "lǎobǎn": "boss",
         "tūrán": "suddenly",
         "yào": "want; (yào … le) about to",
         "bàogào": "report",
         "fēng": "crazy"
        }
       },
       {
        "who": "You",
        "text": "Méi shìr, míngtiān yě xíng. Hái shì qī diǎn?",
        "script": "没事儿，明天也行。还是七点？",
        "en": "No worries, tomorrow's fine. Still seven?",
        "gloss": {
         "méi": "not (méi shìr: no problem)",
         "shìr": "matter (Beijing -r)",
         "xíng": "OK, fine",
         "qī": "seven",
         "diǎn": "o'clock"
        }
       },
       {
        "who": "Friend",
        "text": "Qī diǎn bàn ba, wǒ pà dǔchē.",
        "script": "七点半吧，我怕堵车。",
        "en": "Let's say half seven, I'm worried about the traffic.",
        "gloss": {
         "qī": "seven",
         "diǎn": "o'clock",
         "bàn": "half",
         "pà": "be afraid",
         "dǔchē": "traffic jam"
        }
       },
       {
        "who": "You",
        "text": "Xíng, nà jiù zhème dìng le!",
        "script": "行，那就这么定了！",
        "en": "Fine, it's settled then!",
        "gloss": {
         "xíng": "OK",
         "zhème": "like this",
         "dìng": "settle, fix"
        }
       }
      ]
     },
     {
      "topic": "A wrong takeaway order",
      "situation": "You call the restaurant about a delivery that came wrong.",
      "lines": [
       {
        "who": "You",
        "text": "Nǐ hǎo, wǒ gāng shōudào wàimài, kěshì sòng cuò le.",
        "script": "你好，我刚收到外卖，可是送错了。",
        "en": "Hi, I just got my delivery, but it's the wrong order.",
        "gloss": {
         "hǎo": "good (nǐ hǎo: hello)",
         "gāng": "just",
         "shōudào": "receive",
         "wàimài": "takeaway delivery",
         "kěshì": "but",
         "sòng": "deliver",
         "cuò": "wrong"
        }
       },
       {
        "who": "Staff",
        "text": "Ā, bù hǎoyìsi! Nín diǎn de shì shénme?",
        "script": "啊，不好意思！您点的是什么？",
        "en": "Oh, sorry! What did you order?",
        "gloss": {
         "ā": "oh",
         "hǎoyìsi": "bù hǎoyìsi: sorry",
         "nín": "you (polite)",
         "diǎn": "order (food)",
         "shénme": "what"
        }
       },
       {
        "who": "You",
        "text": "Wǒ diǎn de shì niúròu miàn, bú yào là de, kě zhège shì málà de.",
        "script": "我点的是牛肉面，不要辣的，可这个是麻辣的。",
        "en": "I ordered beef noodles, not spicy, but this one is numbing-hot.",
        "gloss": {
         "diǎn": "order",
         "niúròu": "beef",
         "miàn": "noodles",
         "yào": "want",
         "là": "spicy",
         "kě": "but (spoken, short for kěshì)",
         "málà": "numbing and spicy (Sichuan style)"
        }
       },
       {
        "who": "Staff",
        "text": "Zhēn duìbuqǐ, wǒmen mǎshàng gěi nín chóng zuò yí fèn.",
        "script": "真对不起，我们马上给您重做一份。",
        "en": "Really sorry, we'll make you a new one right away.",
        "gloss": {
         "zhēn": "really",
         "duìbuqǐ": "sorry",
         "mǎshàng": "right away",
         "gěi": "for",
         "nín": "you (polite)",
         "chóng": "again",
         "zuò": "make",
         "fèn": "(measure word: portion)"
        }
       },
       {
        "who": "You",
        "text": "Nà zhè fèn zěnme bàn?",
        "script": "那这份怎么办？",
        "en": "So what about this one?",
        "gloss": {
         "fèn": "portion",
         "zěnme": "how",
         "bàn": "handle (zěnme bàn: what to do)"
        }
       },
       {
        "who": "Staff",
        "text": "Nín liúzhe chī ba, suàn wǒmen de.",
        "script": "您留着吃吧，算我们的。",
        "en": "Keep it and enjoy it — it's on us.",
        "gloss": {
         "nín": "you (polite)",
         "liúzhe": "keep (it)",
         "chī": "eat",
         "suàn": "count as (suàn wǒmen de: it's on us)"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "chīhuò",
     "wordScript": "吃货",
     "pos": "slang",
     "region": "general",
     "ties": 1,
     "meaning": "foodie; someone who lives to eat",
     "note": "Literally 'eating-goods'. Started as teasing, now a proud, affectionate label used all over mainland China and Taiwan; you mostly say it about yourself.",
     "example": "Wǒ shì ge chīhuò, Duānwǔ Jié yì tiān chī wǔ gè zòngzi.",
     "exScript": "我是个吃货，端午节一天吃五个粽子。",
     "exampleEn": "I'm a total foodie: at the Dragon Boat Festival I eat five zongzi a day.",
     "exGloss": {
      "chīhuò": "foodie",
      "duānwǔ": "Duanwu (Dragon Boat)",
      "jié": "festival",
      "tiān": "day",
      "chī": "eat",
      "wǔ": "five",
      "zòngzi": "zongzi"
     }
    },
    {
     "word": "guàng",
     "wordScript": "逛",
     "pos": "verb",
     "region": "general",
     "ties": 2,
     "meaning": "to stroll around, browse, wander through",
     "note": "Goes straight before the place: guàng jiē (wander the streets, window-shop), guàng gōngyuán, guàng bówùguǎn. Doubled, guàngguang, it sounds even more relaxed.",
     "example": "Zhōumò wǒmen qù Shànghǎi Bówùguǎn guàngguang ba.",
     "exScript": "周末我们去上海博物馆逛逛吧。",
     "exampleEn": "Let's go and wander round Shanghai Museum this weekend.",
     "exGloss": {
      "zhōumò": "weekend",
      "bówùguǎn": "museum",
      "guàngguang": "have a wander round"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "In the directions scene, what does «wǎng zuǒ guǎi» mean?",
     "options": [
      "Go straight on",
      "Turn right",
      "Turn left",
      "Go back"
     ],
     "answer": 2,
     "why": "Wǎng is 'towards', zuǒ is 'left' and guǎi is 'turn': turn towards the left.",
     "lesson": "«Yìzhí zǒu» (go straight on) sits right before it in the same line, so the eye grabs it; and zuǒ (left) and yòu (right) are the classic pair learners swap."
    },
    {
     "level": "A2",
     "ref": "news1",
     "q": "In headline 1, what is inside the ancient tomb in Anhui?",
     "options": [
      "Things that look like zongzi",
      "A gold crown",
      "Old coins",
      "A painted boat"
     ],
     "answer": 0,
     "why": "«Xiàng zòngzi de dōngxi» means 'things that look like zongzi', the leaf-wrapped rice parcels.",
     "lesson": "Xiàng means 'resemble', not 'is': the headline is careful not to claim they are zongzi, because scholars still debate it. Reading xiàng as a plain 'is' overstates the find."
    },
    {
     "level": "B1",
     "ref": "phrase2",
     "q": "Zài wàimài duìhuà lǐ, «suàn wǒmen de» shì shénme yìsi?",
     "options": [
      "Nǐ yào zài fù yí cì qián",
      "Zhè fèn bú yòng nǐ fù qián",
      "Wǒmen bāng nǐ suàn qián",
      "Zhè shì wǒmen zìjǐ de wǎnfàn"
     ],
     "answer": 1,
     "why": "«Suàn wǒmen de» is 'count it as ours': the restaurant pays, so the wrong dish is free.",
     "lesson": "Suàn also means 'calculate', which makes «wǒmen bāng nǐ suàn qián» look right; in this set phrase it means 'count as', the same as «zhè dùn suàn wǒ de» 'this meal's on me'."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "«Qù bówùguǎn guàngguang» lǐ, «guàngguang» de yìsi zuì jiējìn nǎge?",
     "options": [
      "Mǎi hěn duō dōngxi",
      "Suíbiàn zǒuzou kànkan",
      "Zài nàr gōngzuò",
      "Kāi chē qù"
     ],
     "answer": 1,
     "why": "Guàng is relaxed, aimless strolling and looking, so «suíbiàn zǒuzou kànkan» (just walk and look around) fits.",
     "lesson": "Because «guàng jiē» is the usual word for going shopping, people assume guàng means 'buy'. It means wandering; buying is optional, which is why window-shopping is guàng too."
    },
    {
     "level": "C1",
     "ref": "news2",
     "q": "Dì èr tiáo xīnwén lǐ, «bèi yù wéi quánqiú guīmó zuì dà de tónglèi zhǎnlǎn» shuōmíng shénme?",
     "options": [
      "Zhè shì quánqiú zuì zǎo de bówùguǎn",
      "Zhège zhǎnlǎn zài quánqiú xúnhuí",
      "Tā bèi chēngwéi tónglèi zhǎnlǎn lǐ zuì dà de",
      "Tā shì Shànghǎi zuì xiǎo de zhǎnlǎn"
     ],
     "answer": 2,
     "why": "Bèi yù wéi is 'is acclaimed as', and tónglèi zhǎnlǎn is 'exhibitions of the same kind': it is billed as the biggest show on the ancient Americas anywhere.",
     "lesson": "Quánqiú (worldwide) pulls readers toward 'touring the world', but here it only sets the scale of the comparison; nothing in the sentence says the show travels."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "«Wǒ shì ge chīhuò» zhè jù huà de yǔqì zuì kěnéng shì?",
     "options": [
      "Yánsù de pīpíng zìjǐ",
      "Zhèngshì de zìwǒ jièshào",
      "Duì chúshī de chēngzàn",
      "Qīngsōng, yǒu diǎnr zìcháo"
     ],
     "answer": 3,
     "why": "Chīhuò is light-hearted slang; calling yourself one is cheerful self-mockery, not a confession.",
     "lesson": "Huò on its own can be an insult («bèn huò», 'idiot'), so learners hear criticism. In chīhuò the sting is gone; it is closer to a badge of honour."
    }
   ],
   "tip": {
    "title": "Asking yes-or-no with verb–not–verb",
    "text": "Besides adding ma, Mandarin asks yes/no questions by saying the verb twice with bù in between: «néng bu néng gǎi dào míngtiān?» 'can we move it or not?'. The middle bu goes light and toneless. To answer, repeat the verb, «néng» or «bù néng», since Mandarin has no all-purpose 'yes' or 'no'."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Mín yǐ shí wéi tiān.",
    "script": "民以食为天。",
    "gloss": {
     "mín": "the people",
     "yǐ": "take, regard",
     "shí": "food",
     "wéi": "as",
     "tiān": "heaven, sky"
    },
    "literal": "The people take food as their heaven.",
    "meaning": "Food is the most basic of needs; eating well comes before everything.",
    "culture": "The line goes back to the Han-dynasty historian Sima Qian's Shǐjì, about two thousand years ago. Today it is painted on restaurant walls and quoted by every self-declared chīhuò justifying a second zongzi."
   }
  },
  "ru": {
   "news": [
    {
     "topic": "Arkheologiya · Velikiy Novgorod",
     "source": "https://arkeonews.net/archaeologists-confirm-birch-bark-writing-continued-in-medieval-novgorod-after-moscow-annexation/",
     "levels": {
      "A": {
       "text": "Arkheologi v Novgorode nakhodyat staryye pisma na bereste.",
       "script": "Археологи в Новгороде находят старые письма на бересте.",
       "en": "Archaeologists in Novgorod find old letters written on birch bark.",
       "gloss": {
        "arkheologi": "archaeologists",
        "novgorode": "Novgorod (in)",
        "nakhodyat": "find",
        "staryye": "old",
        "pisma": "letters",
        "bereste": "birch bark (on)"
       }
      },
      "B": {
       "text": "V 2025 godu arkheologi nashli v Velikom Novgorode shest novykh berestyanykh gramot s nomerami ot 1232 do 1237.",
       "script": "В 2025 году археологи нашли в Великом Новгороде шесть новых берестяных грамот с номерами от 1232 до 1237.",
       "en": "In 2025, archaeologists found six new birch-bark letters in Veliky Novgorod, numbered 1232 to 1237.",
       "gloss": {
        "godu": "year (in)",
        "arkheologi": "archaeologists",
        "nashli": "found",
        "velikom": "Great (Veliky)",
        "novgorode": "Novgorod (in)",
        "shest": "six",
        "novykh": "new",
        "berestyanykh": "birch-bark",
        "gramot": "documents, letters",
        "nomerami": "numbers"
       }
      },
      "C": {
       "text": "Akademik Aleksey Gippius predstavil shest berestyanykh gramot sezona 2025 goda, kotoryye svidetelstvuyut, chto traditsiya pisma na bereste perezhila vkhozhdeniye Novgoroda v sostav Moskovskogo gosudarstva.",
       "script": "Академик Алексей Гиппиус представил шесть берестяных грамот сезона 2025 года, которые свидетельствуют, что традиция письма на бересте пережила вхождение Новгорода в состав Московского государства.",
       "en": "Academician Alexei Gippius presented six birch-bark letters from the 2025 season, evidence that the tradition of writing on bark outlived Novgorod's absorption into the Muscovite state.",
       "gloss": {
        "akademik": "academician",
        "predstavil": "presented",
        "shest": "six",
        "berestyanykh": "birch-bark",
        "gramot": "documents, letters",
        "sezona": "season",
        "kotoryye": "which",
        "svidetelstvuyut": "bear witness, show",
        "traditsiya": "tradition",
        "pisma": "writing",
        "bereste": "birch bark",
        "perezhila": "outlived",
        "vkhozhdeniye": "entry, incorporation",
        "novgoroda": "Novgorod's",
        "sostav": "make-up (v sostav: into)",
        "moskovskogo": "Muscovite",
        "gosudarstva": "state"
       }
      }
     }
    },
    {
     "topic": "Iskusstvo · Peterburg",
     "source": "https://www.hermitagemuseum.org/what-s-on?lng=en",
     "levels": {
      "A": {
       "text": "V Ermitazhe idyot vystavka o Kitaye.",
       "script": "В Эрмитаже идёт выставка о Китае.",
       "en": "There's an exhibition about China on at the Hermitage.",
       "gloss": {
        "ermitazhe": "Hermitage (in the)",
        "idyot": "is on (lit. goes)",
        "vystavka": "exhibition",
        "kitaye": "China (about)"
       }
      },
      "B": {
       "text": "Do 22 noyabrya v Zimnem dvortse mozhno uvidet okolo shestidesyati proizvedeniy pridvornogo iskusstva Kitaya epokhi Tsin.",
       "script": "До 22 ноября в Зимнем дворце можно увидеть около шестидесяти произведений придворного искусства Китая эпохи Цин.",
       "en": "Until 22 November, around sixty works of Chinese court art from the Qing era can be seen in the Winter Palace.",
       "gloss": {
        "noyabrya": "November",
        "zimnem": "Winter",
        "dvortse": "palace (in)",
        "mozhno": "one can",
        "uvidet": "see",
        "okolo": "about",
        "shestidesyati": "sixty",
        "proizvedeniy": "works",
        "pridvornogo": "court",
        "iskusstva": "art",
        "kitaya": "China's",
        "epokhi": "era",
        "tsin": "Qing"
       }
      },
      "C": {
       "text": "V Gerbovom zale Zimnego dvortsa do 22 noyabrya prodolzhayet rabotu vystavka, posvyashchyonnaya imperatorskomu Kitayu epokhi Tsin, gde predstavleny okolo shestidesyati unikalnykh proizvedeniy pridvornogo iskusstva iz sobraniya Ermitazha.",
       "script": "В Гербовом зале Зимнего дворца до 22 ноября продолжает работу выставка, посвящённая императорскому Китаю эпохи Цин, где представлены около шестидесяти уникальных произведений придворного искусства из собрания Эрмитажа.",
       "en": "In the Armorial Hall of the Winter Palace, an exhibition devoted to imperial China under the Qing runs until 22 November, showing some sixty unique works of court art from the Hermitage collection.",
       "gloss": {
        "gerbovom": "Armorial (heraldic)",
        "zale": "hall (in)",
        "zimnego": "Winter",
        "dvortsa": "palace's",
        "noyabrya": "November",
        "prodolzhayet": "continues",
        "rabotu": "work (prodolzhat rabotu: stay open)",
        "vystavka": "exhibition",
        "posvyashchyonnaya": "devoted",
        "imperatorskomu": "imperial",
        "kitayu": "China (to)",
        "epokhi": "era",
        "tsin": "Qing",
        "predstavleny": "are presented",
        "okolo": "about",
        "shestidesyati": "sixty",
        "unikalnykh": "unique",
        "proizvedeniy": "works",
        "pridvornogo": "court",
        "iskusstva": "art",
        "sobraniya": "collection",
        "ermitazha": "Hermitage's"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Introducing yourself",
      "situation": "Meeting someone new at a friend's party.",
      "lines": [
       {
        "who": "Masha",
        "text": "Privet! Ya Masha. A tebya kak zovut?",
        "script": "Привет! Я Маша. А тебя как зовут?",
        "en": "Hi! I'm Masha. And what's your name?",
        "gloss": {
         "privet": "hi",
         "zovut": "(they) call (kak zovut: what's … name)"
        }
       },
       {
        "who": "You",
        "text": "Ochen priyatno, ya Tom.",
        "script": "Очень приятно, я Том.",
        "en": "Nice to meet you, I'm Tom.",
        "gloss": {
         "priyatno": "pleasant (ochen priyatno: nice to meet you)"
        }
       },
       {
        "who": "Masha",
        "text": "Ty otkuda?",
        "script": "Ты откуда?",
        "en": "Where are you from?",
        "gloss": {
         "otkuda": "from where"
        }
       },
       {
        "who": "You",
        "text": "Ya iz Londona. A ty?",
        "script": "Я из Лондона. А ты?",
        "en": "I'm from London. And you?",
        "gloss": {
         "londona": "London (from)"
        }
       },
       {
        "who": "Masha",
        "text": "Ya iz Pitera.",
        "script": "Я из Питера.",
        "en": "I'm from St Petersburg.",
        "gloss": {
         "pitera": "Piter, everyday name for St Petersburg (from)"
        }
       },
       {
        "who": "You",
        "text": "Kruto! Ya davno khochu v Piter.",
        "script": "Круто! Я давно хочу в Питер.",
        "en": "Cool! I've wanted to go to St Petersburg for ages.",
        "gloss": {
         "kruto": "cool",
         "davno": "for a long time",
         "khochu": "want",
         "piter": "St Petersburg (colloquial)"
        }
       }
      ]
     },
     {
      "topic": "Ordering coffee",
      "situation": "At the counter of a café.",
      "lines": [
       {
        "who": "Barista",
        "text": "Zdravstvuyte! Chto vam?",
        "script": "Здравствуйте! Что вам?",
        "en": "Hello! What can I get you?",
        "gloss": {
         "zdravstvuyte": "hello (polite)",
         "vam": "for you"
        }
       },
       {
        "who": "You",
        "text": "Kapuchino, pozhaluysta.",
        "script": "Капучино, пожалуйста.",
        "en": "A cappuccino, please.",
        "gloss": {
         "kapuchino": "cappuccino",
         "pozhaluysta": "please"
        }
       },
       {
        "who": "Barista",
        "text": "Bolshoy ili malenkiy?",
        "script": "Большой или маленький?",
        "en": "Large or small?",
        "gloss": {
         "bolshoy": "big",
         "malenkiy": "small"
        }
       },
       {
        "who": "You",
        "text": "Malenkiy. I yeshchyo kruassan.",
        "script": "Маленький. И ещё круассан.",
        "en": "Small. And a croissant too.",
        "gloss": {
         "malenkiy": "small",
         "yeshchyo": "also, as well",
         "kruassan": "croissant"
        }
       },
       {
        "who": "Barista",
        "text": "S vas trista sorok rubley.",
        "script": "С вас триста сорок рублей.",
        "en": "That's 340 roubles.",
        "gloss": {
         "trista": "three hundred",
         "sorok": "forty",
         "rubley": "roubles"
        }
       },
       {
        "who": "You",
        "text": "Vot, kartoy.",
        "script": "Вот, картой.",
        "en": "Here, by card.",
        "gloss": {
         "kartoy": "by card"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "At the pharmacy",
      "situation": "Asking the pharmacist for something for a sore throat.",
      "lines": [
       {
        "who": "Pharmacist",
        "text": "Dobryy den, slushayu vas.",
        "script": "Добрый день, слушаю вас.",
        "en": "Good afternoon, how can I help?",
        "gloss": {
         "dobryy": "good",
         "den": "day",
         "slushayu": "(I'm) listening"
        }
       },
       {
        "who": "You",
        "text": "Zdravstvuyte, u menya gorlo bolit i nos zalozhen. Chto-nibud posovetuyete?",
        "script": "Здравствуйте, у меня горло болит и нос заложен. Что-нибудь посоветуете?",
        "en": "Hello, I've got a sore throat and a blocked nose. Can you recommend anything?",
        "gloss": {
         "zdravstvuyte": "hello (polite)",
         "gorlo": "throat",
         "bolit": "hurts",
         "nos": "nose",
         "zalozhen": "blocked",
         "chto-nibud": "anything",
         "posovetuyete": "(will you) recommend"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Temperatura yest?",
        "script": "Температура есть?",
        "en": "Any fever?",
        "gloss": {
         "temperatura": "temperature, fever",
         "yest": "is there"
        }
       },
       {
        "who": "You",
        "text": "Da net, vrode net.",
        "script": "Да нет, вроде нет.",
        "en": "Nah, I don't think so.",
        "gloss": {
         "vrode": "seems (vrode net: I don't think so)"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Togda vot: sprey dlya gorla i kapli v nos. Yesli cherez tri dnya ne proydyot, idite k vrachu.",
        "script": "Тогда вот: спрей для горла и капли в нос. Если через три дня не пройдёт, идите к врачу.",
        "en": "Then here: a throat spray and nose drops. If it's not gone in three days, see a doctor.",
        "gloss": {
         "togda": "then",
         "sprey": "spray",
         "gorla": "throat",
         "kapli": "drops",
         "nos": "nose",
         "yesli": "if",
         "cherez": "in, after",
         "tri": "three",
         "dnya": "days",
         "proydyot": "goes away",
         "idite": "go",
         "vrachu": "doctor (to the)"
        }
       },
       {
        "who": "You",
        "text": "Ponyatno, spasibo bolshoye.",
        "script": "Понятно, спасибо большое.",
        "en": "Got it, thanks a lot.",
        "gloss": {
         "ponyatno": "understood, got it",
         "spasibo": "thanks",
         "bolshoye": "big (spasibo bolshoye: thanks a lot)"
        }
       }
      ]
     },
     {
      "topic": "Monday small talk",
      "situation": "At the office coffee machine, a colleague asks about your weekend.",
      "lines": [
       {
        "who": "Colleague",
        "text": "Nu chto, kak vykhodnyye?",
        "script": "Ну что, как выходные?",
        "en": "So, how was the weekend?",
        "gloss": {
         "nu": "well, so",
         "vykhodnyye": "weekend"
        }
       },
       {
        "who": "You",
        "text": "Da normalno. Yezdili na dachu, sobirali griby.",
        "script": "Да нормально. Ездили на дачу, собирали грибы.",
        "en": "Yeah, fine. We went to the dacha and picked mushrooms.",
        "gloss": {
         "normalno": "fine, OK",
         "yezdili": "(we) went (by vehicle)",
         "dachu": "dacha, country cottage",
         "sobirali": "gathered, picked",
         "griby": "mushrooms"
        }
       },
       {
        "who": "Colleague",
        "text": "O, mnogo nabrali?",
        "script": "О, много набрали?",
        "en": "Oh, did you get many?",
        "gloss": {
         "mnogo": "a lot",
         "nabrali": "gathered (a quantity)"
        }
       },
       {
        "who": "You",
        "text": "Polnuyu korzinu! Pravda, polovina — mukhomory.",
        "script": "Полную корзину! Правда, половина — мухоморы.",
        "en": "A full basket! Mind you, half were fly agarics.",
        "gloss": {
         "polnuyu": "full",
         "korzinu": "basket",
         "pravda": "mind you (lit. truth)",
         "polovina": "half",
         "mukhomory": "fly agarics (poisonous red mushrooms)"
        }
       },
       {
        "who": "Colleague",
        "text": "Nu ty dayosh! Vybrosil, nadeyus?",
        "script": "Ну ты даёшь! Выбросил, надеюсь?",
        "en": "You're something else! Threw them out, I hope?",
        "gloss": {
         "nu": "well",
         "dayosh": "give (ty dayosh: you're unbelievable)",
         "vybrosil": "threw away",
         "nadeyus": "I hope"
        }
       },
       {
        "who": "You",
        "text": "Konechno. A ty chem zanimalsya?",
        "script": "Конечно. А ты чем занимался?",
        "en": "Of course. And what did you get up to?",
        "gloss": {
         "konechno": "of course",
         "chem": "with what",
         "zanimalsya": "were busy with"
        }
       },
       {
        "who": "Colleague",
        "text": "Da nichego, otsypalsya.",
        "script": "Да ничего, отсыпался.",
        "en": "Oh, nothing, just caught up on sleep.",
        "gloss": {
         "nichego": "nothing",
         "otsypalsya": "caught up on sleep"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "zapiska",
     "wordScript": "записка",
     "pos": "noun",
     "region": "general",
     "ties": 1,
     "meaning": "a note, a short written message",
     "note": "From zapisat 'to write down'. Affectionately zapisochka. A note left on the fridge is a zapiska; a phone voice message is a golosovoye.",
     "example": "Mnogiye gramoty — prosto bytovyye zapiski, kak nashi soobshcheniya v telefone.",
     "exScript": "Многие грамоты — просто бытовые записки, как наши сообщения в телефоне.",
     "exampleEn": "Many of the birch-bark letters are just everyday notes, like the messages on our phones.",
     "exGloss": {
      "mnogiye": "many",
      "gramoty": "documents, letters",
      "prosto": "just",
      "bytovyye": "everyday, household",
      "zapiski": "notes",
      "nashi": "our",
      "soobshcheniya": "messages",
      "telefone": "phone (in)"
     }
    },
    {
     "word": "zaglyanut",
     "wordScript": "заглянуть",
     "pos": "verb",
     "region": "general",
     "ties": 2,
     "meaning": "to pop in, drop by (briefly)",
     "note": "Literally 'to glance in'. Warm and informal: «zaglyani ko mne» 'drop by my place'. More casual than zayti, which is simply 'to go in, call in'.",
     "example": "Davay zaglyanem v Ermitazh na kitayskuyu vystavku, poka ona ne zakrylas.",
     "exScript": "Давай заглянем в Эрмитаж на китайскую выставку, пока она не закрылась.",
     "exampleEn": "Let's pop into the Hermitage for the China exhibition before it closes.",
     "exGloss": {
      "davay": "let's",
      "zaglyanem": "(we'll) pop in",
      "ermitazh": "Hermitage",
      "kitayskuyu": "Chinese",
      "vystavku": "exhibition",
      "poka": "while (poka ne: before)",
      "zakrylas": "closed"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "In the introductions scene, Masha says «Ya iz Pitera». Where is she from?",
     "options": [
      "Moscow",
      "St Petersburg",
      "Peterhof",
      "Perm"
     ],
     "answer": 1,
     "why": "Piter is the everyday nickname for St Petersburg; «iz Pitera» means 'from Piter'.",
     "lesson": "Pitera looks like it could be a person called Peter, or the palace town Peterhof. The -a ending is just the form a noun takes after iz 'from'; Russians simply shorten their city's long name."
    },
    {
     "level": "A2",
     "ref": "news1",
     "q": "What do archaeologists find in Novgorod in headline 1?",
     "options": [
      "Old coins",
      "Old wooden boats",
      "Old letters on birch bark",
      "Old church bells"
     ],
     "answer": 2,
     "why": "«Staryye pisma na bereste» means 'old letters on birch bark'.",
     "lesson": "Novgorod is a medieval trading city, so coins or boats feel likely. Beresta is birch bark, which medieval Novgorodians scratched messages into, and its waterlogged soil kept them."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Farmatsevt govorit: «Yesli cherez tri dnya ne proydyot, idite k vrachu». Chto eto znachit?",
     "options": [
      "Cherez tri dnya kupite novyy sprey",
      "Yesli cherez tri dnya ne stanet luchshe, idite k vrachu",
      "Vrach pridyot cherez tri dnya",
      "Peyte lekarstvo tri dnya"
     ],
     "answer": 1,
     "why": "Proyti here means 'to pass, go away' (of an illness); «ne proydyot» is 'if it doesn't clear up'.",
     "lesson": "Cherez often reads as 'through', and proyti as 'walk past', so learners picture someone coming in three days. With illness, «proshlo» simply means 'it's gone'."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "«Davay zaglyanem v Ermitazh». Chto znachit «zaglyanem»?",
     "options": [
      "Zaydyom nenadolgo",
      "Posmotrim v okno",
      "Kupim bilety zaranee",
      "Uydyom iz muzeya"
     ],
     "answer": 0,
     "why": "Zaglyanut is to drop in briefly, so «zaydyom nenadolgo» (we'll go in for a short while) matches.",
     "lesson": "The root glyad- means 'look', which pulls people towards 'look through the window'. In everyday speech zaglyanut has moved from peeking to paying a quick visit."
    },
    {
     "level": "C1",
     "ref": "news2",
     "q": "Gde prokhodit vystavka iz vtorogo zagolovka?",
     "options": [
      "V Novoy Tretyakovke",
      "V Russkom muzeye",
      "V Kremle",
      "V Gerbovom zale Zimnego dvortsa"
     ],
     "answer": 3,
     "why": "The C headline names the Gerbovyy zal, the Armorial Hall, of the Winter Palace, part of the Hermitage.",
     "lesson": "The Winter Palace and 'the Hermitage' are often treated as different places, so the Russian Museum, also in Petersburg, can seem a fair guess. The Winter Palace is the Hermitage's main building."
    },
    {
     "level": "C2",
     "ref": "vocab1",
     "q": "Pochemu v primere berestyanyye gramoty sravnivayut s «soobshcheniyami v telefone»?",
     "options": [
      "Ikh pisali tolko bogatyye lyudi",
      "Oni byli ochen dlinnymi",
      "Ikh nakhodyat v telefonakh",
      "Eto korotkiye povsednevnyye zapiski"
     ],
     "answer": 3,
     "why": "A zapiska is a short, practical note, and «bytovyye zapiski» are everyday notes, just like quick texts today.",
     "lesson": "Medieval writing makes people think of chronicles and rich patrons. What makes the birch-bark letters special is how ordinary they are: shopping, debts and family news from ordinary townspeople."
    }
   ],
   "tip": {
    "title": "“At me hurts”: the u menya pattern",
    "text": "Russian often makes the thing, not the person, the subject. «U menya gorlo bolit» is literally 'at me the throat hurts', and the verb agrees with gorlo. Having works the same way: «u menya yest kot» 'at me there is a cat', i.e. I have a cat. Learn «u menya…» as a chunk and swap in u tebya, u nas."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Nazvalsya gruzdem — polezay v kuzov.",
    "script": "Назвался груздем — полезай в кузов.",
    "gloss": {
     "nazvalsya": "(you) called yourself",
     "gruzdem": "a milk-cap mushroom",
     "polezay": "climb",
     "kuzov": "basket (old: bark basket)"
    },
    "literal": "You called yourself a milk-cap mushroom, so climb into the basket.",
    "meaning": "You took it on, so see it through.",
    "culture": "Autumn mushroom hunting is a national pastime, and the gruzd, salted for winter, is a prized catch. A kuzov was a basket woven from bark, often birch; today the same word mostly means a car body."
   }
  },
  "fa": {
   "news": [
    {
     "topic": "Baastaanshenaasi · Paasaargaad",
     "source": "https://www.presstv.co.uk/Detail/2026/07/12/772117/Historic-mihrab-unearthed-during-restoration-at-Iran-UNESCO-listed-Pasargadae",
     "levels": {
      "A": {
       "text": "Yek mehraab-e ghadimi dar Paasaargaad peydaa mishavad.",
       "script": "یک محراب قدیمی در پاسارگاد پیدا می‌شود.",
       "en": "An old mihrab turns up at Pasargadae.",
       "gloss": {
        "mehraab-e": "mihrab (prayer niche) + ezafe",
        "ghadimi": "old",
        "paasaargaad": "Pasargadae",
        "peydaa": "found",
        "mishavad": "becomes (peydaa mishavad: is found)"
       }
      },
      "B": {
       "text": "Hengaam-e maremmat-e kaarvaansaraa-ye Mozaffari dar Paasaargaad, yek mehraab-e taarikhi peydaa shod.",
       "script": "هنگام مرمت کاروانسرای مظفری در پاسارگاد، یک محراب تاریخی پیدا شد.",
       "en": "During restoration of the Mozaffari caravanserai at Pasargadae, a historic mihrab was found.",
       "gloss": {
        "hengaam-e": "during",
        "maremmat-e": "restoration of",
        "kaarvaansaraa-ye": "caravanserai of",
        "mozaffari": "Mozaffari (name)",
        "paasaargaad": "Pasargadae",
        "mehraab-e": "mihrab",
        "taarikhi": "historic",
        "peydaa": "found",
        "shod": "became (peydaa shod: was found)"
       }
      },
      "C": {
       "text": "Be gofte-ye modir-e paaygaah-e Paasaargaad, mehraab-e kashf-shode dar kaarvaansaraa-ye Mozaffari baa tazyinaat-e zarif-ash mitavaanad bar taarikh-e mazhabi va me'maari-ye in mohavvate partow afkanad.",
       "script": "به گفتهٔ مدیر پایگاه پاسارگاد، محراب کشف‌شده در کاروانسرای مظفری با تزئینات ظریفش می‌تواند بر تاریخ مذهبی و معماری این محوطه پرتو افکند.",
       "en": "According to the head of the Pasargadae site, the mihrab discovered in the Mozaffari caravanserai, with its fine decoration, could shed light on the religious and architectural history of the site.",
       "gloss": {
        "gofte-ye": "saying (be gofte-ye: according to)",
        "modir-e": "director of",
        "paaygaah-e": "site, base of",
        "paasaargaad": "Pasargadae",
        "mehraab-e": "mihrab",
        "kashf-shode": "discovered",
        "kaarvaansaraa-ye": "caravanserai of",
        "mozaffari": "Mozaffari",
        "tazyinaat-e": "decorations",
        "zarif-ash": "its delicate",
        "mitavaanad": "can",
        "bar": "on",
        "taarikh-e": "history of",
        "mazhabi": "religious",
        "me'maari-ye": "architecture of",
        "mohavvate": "site, compound",
        "partow": "light, ray",
        "afkanad": "cast (partow afkandan: shed light)"
       }
      }
     }
    },
    {
     "topic": "Akkaasi · Takht-e Jamshid",
     "source": "https://www.tehrantimes.com/news/528368/Oldest-known-photographs-reveal-how-Persepolis-has-changed-over-time",
     "levels": {
      "A": {
       "text": "Ghadimitarin aks-haa-ye Takht-e Jamshid maal-e saal-e 1857 ast.",
       "script": "قدیمی‌ترین عکس‌های تخت جمشید مال سال ۱۸۵۷ است.",
       "en": "The oldest photos of Persepolis are from 1857.",
       "gloss": {
        "ghadimitarin": "oldest",
        "aks-haa-ye": "photos of",
        "takht-e": "throne of (Takht-e Jamshid: Persepolis)",
        "maal-e": "belonging to, from",
        "saal-e": "year"
       }
      },
      "B": {
       "text": "Luiji Peshe, afsar va akkaas-e Itaaliyaayi, paayiz-e 1857 avvalin aks-haa-ye shenaakhte-shode az Takht-e Jamshid raa gereft.",
       "script": "لوئیجی پشه، افسر و عکاس ایتالیایی، پاییز ۱۸۵۷ اولین عکس‌های شناخته‌شده از تخت جمشید را گرفت.",
       "en": "Luigi Pesce, an Italian officer and photographer, took the first known photographs of Persepolis in the autumn of 1857.",
       "gloss": {
        "afsar": "officer",
        "akkaas-e": "photographer",
        "itaaliyaayi": "Italian",
        "paayiz-e": "autumn of",
        "avvalin": "first",
        "aks-haa-ye": "photos",
        "shenaakhte-shode": "known",
        "takht-e": "throne of (Persepolis)",
        "gereft": "took"
       }
      },
      "C": {
       "text": "Aks-haa-ye Luiji Peshe az paayiz-e 1857 Takht-e Jamshid raa makaani hanuz nime-madfun neshaan midahand ke pellekaan-e sharghi-ye Kaakh-e Aapaadaanaa dar aan hanuz az zir-e khaak birun nayaamade bud.",
       "script": "عکس‌های لوئیجی پشه از پاییز ۱۸۵۷ تخت جمشید را مکانی هنوز نیمه‌مدفون نشان می‌دهند که پلکان شرقی کاخ آپادانا در آن هنوز از زیر خاک بیرون نیامده بود.",
       "en": "Luigi Pesce's photographs from autumn 1857 show Persepolis as a still half-buried place, where the eastern staircase of the Apadana Palace had not yet emerged from the earth.",
       "gloss": {
        "aks-haa-ye": "photos of",
        "paayiz-e": "autumn of",
        "takht-e": "throne of (Persepolis)",
        "makaani": "a place",
        "hanuz": "still, yet",
        "nime-madfun": "half-buried",
        "neshaan": "sign (neshaan daadan: show)",
        "midahand": "(they) give",
        "pellekaan-e": "staircase of",
        "sharghi-ye": "eastern",
        "kaakh-e": "palace of",
        "aapaadaanaa": "Apadana",
        "zir-e": "under",
        "khaak": "earth, soil",
        "birun": "out",
        "nayaamade": "not come"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Hello and goodbye",
      "situation": "You bump into a neighbour on the stairs.",
      "region": "Tehraan",
      "lines": [
       {
        "who": "Neighbour",
        "text": "Salaam, khubi?",
        "script": "سلام، خوبی؟",
        "en": "Hi, how are you?",
        "gloss": {
         "salaam": "hello",
         "khubi": "are you well? (khub + -i 'you are')"
        }
       },
       {
        "who": "You",
        "text": "Mersi, khubam. Shomaa chetorin?",
        "script": "مرسی، خوبم. شما چطورین؟",
        "en": "Thanks, I'm fine. How are you?",
        "gloss": {
         "mersi": "thanks",
         "khubam": "I'm well",
         "chetorin": "how are you (spoken for chetorid)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Bad nistam. Kojaa mirin?",
        "script": "بد نیستم. کجا میرین؟",
        "en": "Not bad. Where are you off to?",
        "gloss": {
         "bad": "bad",
         "nistam": "I'm not",
         "mirin": "you go (spoken for miravid)"
        }
       },
       {
        "who": "You",
        "text": "Mikhaam beram naanvaayi.",
        "script": "می‌خوام برم نونوایی.",
        "en": "I'm going to the bakery.",
        "gloss": {
         "mikhaam": "I want (spoken for mikhaaham)",
         "beram": "to go (spoken for beravam)",
         "naanvaayi": "bakery"
        }
       },
       {
        "who": "Neighbour",
        "text": "Baashe, khodaa haafez!",
        "script": "باشه، خداحافظ!",
        "en": "OK, bye!",
        "gloss": {
         "baashe": "OK",
         "khodaa": "God",
         "haafez": "protector (khodaa haafez: goodbye)"
        }
       },
       {
        "who": "You",
        "text": "Khodaa negahdaar!",
        "script": "خدانگهدار!",
        "en": "Take care!",
        "gloss": {
         "khodaa": "God",
         "negahdaar": "keeper (khodaa negahdaar: God keep you)"
        }
       }
      ]
     },
     {
      "topic": "Hotel check-in",
      "situation": "At the front desk of a small hotel in Shiraz.",
      "region": "Shiraaz",
      "lines": [
       {
        "who": "You",
        "text": "Salaam, ye otaagh rezerv kardam.",
        "script": "سلام، یه اتاق رزرو کردم.",
        "en": "Hello, I've booked a room.",
        "gloss": {
         "salaam": "hello",
         "ye": "a, one (spoken for yek)",
         "otaagh": "room",
         "rezerv": "reservation",
         "kardam": "I did (rezerv kardan: to book)"
        }
       },
       {
        "who": "Receptionist",
        "text": "Khosh umadin! Esmetun?",
        "script": "خوش اومدین! اسمتون؟",
        "en": "Welcome! Your name?",
        "gloss": {
         "khosh": "good, glad",
         "umadin": "you came (spoken for aamadid)",
         "esmetun": "your name (spoken for esm-e shomaa)"
        }
       },
       {
        "who": "You",
        "text": "Saaraa Esmit.",
        "script": "سارا اسمیت.",
        "en": "Sarah Smith.",
        "gloss": {
         "saaraa": "Sarah",
         "esmit": "Smith"
        }
       },
       {
        "who": "Receptionist",
        "text": "Bale, otaagh-e sisad-o-panj. Sobhune az haft taa dah-e.",
        "script": "بله، اتاق سیصد و پنج. صبحونه از هفت تا ده‌ه.",
        "en": "Yes, room 305. Breakfast is from seven to ten.",
        "gloss": {
         "otaagh-e": "room",
         "sisad-o-panj": "three hundred and five",
         "sobhune": "breakfast (spoken for sobhaane)",
         "haft": "seven",
         "dah-e": "is ten (spoken for dah ast)"
        }
       },
       {
        "who": "You",
        "text": "Mersi. Vaay-faay daarin?",
        "script": "مرسی. وای‌فای دارین؟",
        "en": "Thanks. Do you have wifi?",
        "gloss": {
         "mersi": "thanks",
         "vaay-faay": "wifi",
         "daarin": "you have (spoken for daarid)"
        }
       },
       {
        "who": "Receptionist",
        "text": "Bale, ramzesh posht-e kaarte.",
        "script": "بله، رمزش پشت کارته.",
        "en": "Yes, the password's on the back of the card.",
        "gloss": {
         "ramzesh": "its password",
         "posht-e": "back of",
         "kaarte": "the card is (spoken: kaart + e)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Haggling at the bazaar",
      "situation": "Buying a block-printed tablecloth in Isfahan's bazaar.",
      "region": "Esfahaan",
      "lines": [
       {
        "who": "You",
        "text": "Aaghaa, in ghalamkaar chand-e?",
        "script": "آقا، این قلمکار چنده؟",
        "en": "Sir, how much is this printed cloth?",
        "gloss": {
         "aaghaa": "sir, Mr",
         "ghalamkaar": "ghalamkar, hand block-printed cloth",
         "chand-e": "how much is it (spoken for chand ast)"
        }
       },
       {
        "who": "Seller",
        "text": "Ghaabel nadaare, ghorbun-e shomaa.",
        "script": "قابل نداره، قربون شما.",
        "en": "It's nothing, it's yours (polite formula).",
        "gloss": {
         "ghaabel": "worthy",
         "nadaare": "doesn't have (spoken for nadaarad)",
         "ghorbun-e": "sacrifice for (polite: 'at your service')"
        }
       },
       {
        "who": "You",
        "text": "Mersi, vali jeddi chand-e?",
        "script": "مرسی، ولی جدی چنده؟",
        "en": "Thanks, but seriously, how much?",
        "gloss": {
         "mersi": "thanks",
         "vali": "but",
         "jeddi": "seriously",
         "chand-e": "how much is it"
        }
       },
       {
        "who": "Seller",
        "text": "Baraaye shomaa, hashtsad hezaar tomun.",
        "script": "برای شما، هشتصد هزار تومن.",
        "en": "For you, eight hundred thousand tomans.",
        "gloss": {
         "hashtsad": "eight hundred",
         "hezaar": "thousand",
         "tomun": "tomans (spoken for tomaan)"
        }
       },
       {
        "who": "You",
        "text": "Vaay, khayli geroon-e! Sheshsad mishe?",
        "script": "وای، خیلی گرونه! ششصد میشه؟",
        "en": "Wow, that's really expensive! Can you do six hundred?",
        "gloss": {
         "vaay": "wow, oh",
         "geroon-e": "it's expensive (spoken for geraan ast)",
         "sheshsad": "six hundred",
         "mishe": "is it possible (spoken for mishavad)"
        }
       },
       {
        "who": "Seller",
        "text": "Na baabaa, zarar mikonam! Haftsad, aakharesh-e.",
        "script": "نه بابا، ضرر می‌کنم! هفتصد، آخرشه.",
        "en": "Come on, I'd be losing money! Seven hundred, final offer.",
        "gloss": {
         "baabaa": "come on (lit. dad)",
         "zarar": "loss",
         "mikonam": "I do (zarar kardan: lose money)",
         "haftsad": "seven hundred",
         "aakharesh-e": "it's the last (spoken)"
        }
       },
       {
        "who": "You",
        "text": "Baashe, haftsad. Dastetun dard nakone.",
        "script": "باشه، هفتصد. دستتون درد نکنه.",
        "en": "OK, seven hundred. Thanks very much.",
        "gloss": {
         "baashe": "OK",
         "haftsad": "seven hundred",
         "dastetun": "your hand",
         "dard": "pain",
         "nakone": "not do (spoken for nakonad; dastetun dard nakone: thank you)"
        }
       }
      ]
     },
     {
      "topic": "Calling the landlord",
      "situation": "The water heater in your flat has broken again.",
      "region": "Tehraan",
      "lines": [
       {
        "who": "You",
        "text": "Alo, salaam aaghaa-ye Rezaayi, bebakhshid mozaahem misham.",
        "script": "الو، سلام آقای رضایی، ببخشید مزاحم می‌شم.",
        "en": "Hello, Mr Rezaei, sorry to bother you.",
        "gloss": {
         "alo": "hello (on the phone)",
         "salaam": "hello",
         "aaghaa-ye": "Mr",
         "bebakhshid": "sorry, excuse me",
         "mozaahem": "a bother",
         "misham": "I become (spoken for mishavam)"
        }
       },
       {
        "who": "Landlord",
        "text": "Khaahesh mikonam, befarmaayin.",
        "script": "خواهش می‌کنم، بفرمایین.",
        "en": "Not at all, go ahead.",
        "gloss": {
         "khaahesh": "request (khaahesh mikonam: not at all)",
         "mikonam": "I do",
         "befarmaayin": "go ahead, please (spoken for befarmaayid)"
        }
       },
       {
        "who": "You",
        "text": "Aabgarmkon-e khune baaz kharaab shode, aab-e garm nadaarim.",
        "script": "آبگرمکن خونه باز خراب شده، آب گرم نداریم.",
        "en": "The flat's water heater has broken again; we've got no hot water.",
        "gloss": {
         "aabgarmkon-e": "water heater of",
         "khune": "house, flat (spoken for khaane)",
         "baaz": "again",
         "kharaab": "broken",
         "shode": "has become",
         "aab-e": "water",
         "garm": "hot",
         "nadaarim": "we don't have"
        }
       },
       {
        "who": "Landlord",
        "text": "Ey baabaa! Hamin hafte-ye pish dorostesh kardan ke.",
        "script": "ای بابا! همین هفتهٔ پیش درستش کردن که.",
        "en": "Oh no! But they fixed it just last week.",
        "gloss": {
         "ey": "oh (annoyed)",
         "baabaa": "(filler, lit. dad)",
         "hamin": "this very",
         "hafte-ye": "week",
         "pish": "ago, last",
         "dorostesh": "fixed it (dorost + -esh)",
         "kardan": "they did (spoken for kardand)"
        }
       },
       {
        "who": "You",
        "text": "Aare, vali dobaare khaamush mishe.",
        "script": "آره، ولی دوباره خاموش میشه.",
        "en": "Yeah, but it keeps going out.",
        "gloss": {
         "aare": "yeah",
         "vali": "but",
         "dobaare": "again",
         "khaamush": "off, out",
         "mishe": "becomes (spoken for mishavad)"
        }
       },
       {
        "who": "Landlord",
        "text": "Baashe, fardaa sobh ye ustaa mifrestam.",
        "script": "باشه، فردا صبح یه اوستا می‌فرستم.",
        "en": "OK, I'll send a repairman tomorrow morning.",
        "gloss": {
         "baashe": "OK",
         "fardaa": "tomorrow",
         "sobh": "morning",
         "ye": "a (spoken for yek)",
         "ustaa": "tradesman, repairman (spoken for ostaad)",
         "mifrestam": "I send"
        }
       },
       {
        "who": "You",
        "text": "Khayli mamnun, lotf mikonin.",
        "script": "خیلی ممنون، لطف می‌کنین.",
        "en": "Thanks so much, that's kind of you.",
        "gloss": {
         "mamnun": "grateful",
         "lotf": "kindness",
         "mikonin": "you do (spoken for mikonid)"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "dast marizaad",
     "wordScript": "دست مریزاد",
     "pos": "idiom",
     "region": "general",
     "ties": 1,
     "meaning": "well done! (praise for skilled work)",
     "note": "Literally 'may your hand not ache'. Said to craftspeople, cooks and anyone who has worked hard. In everyday Tehran speech «dastet dard nakone» does a similar job as 'thank you'.",
     "example": "Be maremmatgar-haa-ye Paasaargaad goftim: dast marizaad!",
     "exScript": "به مرمت‌گرهای پاسارگاد گفتیم: دست مریزاد!",
     "exampleEn": "We told the restorers at Pasargadae: well done!",
     "exGloss": {
      "maremmatgar-haa-ye": "restorers of",
      "paasaargaad": "Pasargadae",
      "goftim": "we said",
      "dast": "hand",
      "marizaad": "may it not ache"
     }
    },
    {
     "word": "yaadegaari",
     "wordScript": "یادگاری",
     "pos": "noun / adjective",
     "region": "general",
     "ties": 2,
     "meaning": "keepsake, souvenir; as a souvenir",
     "note": "From yaad 'memory'. «Aks-e yaadegaari» is a souvenir photo. The same word is used for names people scratch on old walls, which heritage guards do not love.",
     "example": "Jolo-ye Takht-e Jamshid ye aks-e yaadegaari begir!",
     "exScript": "جلوی تخت جمشید یه عکس یادگاری بگیر!",
     "exampleEn": "Take a souvenir photo in front of Persepolis!",
     "exGloss": {
      "jolo-ye": "in front of",
      "takht-e": "throne of (Persepolis)",
      "ye": "a (spoken for yek)",
      "aks-e": "photo",
      "yaadegaari": "souvenir",
      "begir": "take"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "In the stairwell scene, which phrase means 'goodbye'?",
     "options": [
      "Salaam",
      "Khodaa haafez",
      "Mersi",
      "Baashe"
     ],
     "answer": 1,
     "why": "«Khodaa haafez» is literally 'God (be your) protector', the standard goodbye.",
     "lesson": "Salaam is the first word everyone learns, so it feels like the all-purpose greeting, but unlike 'ciao' it only means hello. Baashe ('OK') comes right before the goodbye in the line, which is why it tempts."
    },
    {
     "level": "A2",
     "ref": "news2",
     "q": "In headline 2, what dates from 1857?",
     "options": [
      "The first museum in Shiraz",
      "A famous carpet",
      "The oldest photos of Persepolis",
      "A palace staircase"
     ],
     "answer": 2,
     "why": "«Ghadimitarin aks-haa-ye Takht-e Jamshid» means 'the oldest photos of Persepolis'.",
     "lesson": "Takht-e Jamshid, 'Jamshid's throne', is the Persian name for Persepolis, so readers hunting for the English name miss it. The staircase is in the story, but it is far older than 1857."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Vaghti forushande migeh «ghaabel nadaare», manzuresh chiye?",
     "options": [
      "Jeddi majaani-ye, pul nade",
      "Ta'aarof-e; baayad baaz gheymat ro beporsi",
      "Jens kharaab-e",
      "Maghaaze baste-ast"
     ],
     "answer": 1,
     "why": "«Ghaabel nadaare» ('it's not worthy of you') is taarof, ritual politeness: you thank them and ask the price again, as the buyer does.",
     "lesson": "Taken literally it sounds like 'it's free', so beginners reach for the wallet-free answer. Walking off without paying would be a real faux pas; the offer is meant to be declined."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "Kay be kasi migim «dast marizaad»?",
     "options": [
      "Vaghti kaar-e khubi anjaam daade",
      "Vaghti dastesh dard mikone",
      "Vaghti mikhaad bere safar",
      "Vaghti dir umade"
     ],
     "answer": 0,
     "why": "It is praise for good work, 'may your hand not ache' after all that effort.",
     "lesson": "Because it mentions a hand and pain, learners think it is said to someone who is hurt. It is a blessing on the hand that did the work, not sympathy for an injury."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "Tebgh-e titr-e avval, mehraab kojaa peydaa shod?",
     "options": [
      "Dar aaraamgaah-e Kurosh",
      "Dar Takht-e Jamshid",
      "Dar baazaar-e Vakil",
      "Dar kaarvaansaraa-ye Mozaffari"
     ],
     "answer": 3,
     "why": "The B and C headlines both place it in the Mozaffari caravanserai inside the Pasargadae site.",
     "lesson": "Pasargadae is famous for Cyrus's tomb, so that is where the mind goes. The site also holds much later buildings, like this caravanserai, which is why a mihrab, an Islamic-era feature, fits there."
    },
    {
     "level": "C2",
     "ref": "vocab2",
     "q": "Dar mesaal-e «ye aks-e yaadegaari begir», kalame-ye «ye» chiye?",
     "options": [
      "Shekl-e mohaavere-i-ye «yek»",
      "Harf-e ezaafe",
      "Zamir-e «u»",
      "Pishvand-e fe'l"
     ],
     "answer": 0,
     "why": "In speech yek ('one, a') shrinks to ye: «ye aks» is 'a photo'.",
     "lesson": "In romanised Persian, -ye also spells the ezafe after a vowel (kaarvaansaraa-ye), so a bare ye looks like an ezafe. The ezafe is always joined to the word before it; a free-standing ye is the shortened yek."
    }
   ],
   "tip": {
    "title": "Spoken verb endings",
    "text": "Tehran speech trims verb endings. Written -id becomes -in («befarmaayin», «daarin»), and -ad becomes -e («mishe» for mishavad, «nakone» for nakonad). Some stems shrink too: «mikhaam» for mikhaaham, «beram» for beravam. You will read the long forms and hear the short ones, so learn them in pairs."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Bani-aadam a'zaa-ye yekdigarand ke dar aafarinesh ze yek gowharand.",
    "script": "بنی‌آدم اعضای یکدیگرند / که در آفرینش ز یک گوهرند",
    "gloss": {
     "bani-aadam": "the children of Adam, humankind",
     "a'zaa-ye": "limbs of",
     "yekdigarand": "are (of) one another",
     "aafarinesh": "creation",
     "ze": "from (poetic for az)",
     "gowharand": "are (of one) essence, jewel"
    },
    "literal": "The children of Adam are limbs of one another, made in creation from a single essence.",
    "meaning": "All people are one body: one person's pain is everyone's.",
    "culture": "From the Golestan of Saadi, the 13th-century poet of Shiraz, whose tomb in the city's gardens is still a place of pilgrimage for poetry lovers. Iranian schoolchildren learn these lines by heart."
   }
  }
 },
 "2026-10-11": {
  "es": {
   "news": [
    {
     "topic": "Arte y diseño · Madrid",
     "source": "https://diario.madrid.es/blog/notas-de-prensa/siete-exposiciones-una-intervencion-site-specific-musica-y-microescena-protagonizan-la-programacion-de-otono-de-centrocentro/",
     "levels": {
      "A": {
       "text": "Madrid tiene una exposición gratis sobre el artista Cruz Novillo.",
       "en": "Madrid has a free exhibition about the artist Cruz Novillo.",
       "gloss": {
        "madrid": "Madrid",
        "exposición": "exhibition",
        "gratis": "free",
        "sobre": "about",
        "artista": "artist"
       }
      },
      "B": {
       "text": "CentroCentro abrió el 8 de octubre una gran exposición gratuita sobre José María Cruz Novillo, artista y diseñador.",
       "en": "On 8 October CentroCentro opened a big free exhibition about José María Cruz Novillo, artist and designer.",
       "gloss": {
        "abrió": "opened",
        "octubre": "October",
        "gran": "big, great",
        "exposición": "exhibition",
        "gratuita": "free",
        "sobre": "about",
        "artista": "artist",
        "diseñador": "designer"
       }
      },
      "C": {
       "text": "CentroCentro dedica desde el 8 de octubre una retrospectiva gratuita a José María Cruz Novillo, concebida junto al artista un año antes de su muerte, que reúne obras de 1965 a 2024 más allá de su faceta de diseñador.",
       "en": "Since 8 October CentroCentro has devoted a free retrospective to José María Cruz Novillo, conceived together with the artist a year before his death, bringing together works from 1965 to 2024 beyond his side as a designer.",
       "gloss": {
        "dedica": "devotes",
        "desde": "since",
        "octubre": "October",
        "retrospectiva": "retrospective",
        "gratuita": "free",
        "concebida": "conceived",
        "junto": "together",
        "artista": "artist",
        "año": "year",
        "antes": "before",
        "muerte": "death",
        "reúne": "brings together",
        "obras": "works",
        "allá": "beyond (más allá de)",
        "faceta": "side, facet",
        "diseñador": "designer"
       }
      }
     }
    },
    {
     "topic": "Patrimonio · México",
     "source": "https://www.unotv.com/cultura/japones-devuelve-a-mexico-mascara-prehispanica-estuvo-fuera-50-anos/",
     "levels": {
      "A": {
       "text": "Un coleccionista de Japón devuelve una máscara antigua a México.",
       "en": "A collector from Japan gives an old mask back to Mexico.",
       "gloss": {
        "coleccionista": "collector",
        "japón": "Japan",
        "devuelve": "gives back",
        "máscara": "mask",
        "antigua": "old, ancient",
        "méxico": "Mexico"
       }
      },
      "B": {
       "text": "Un coleccionista japonés devolvió por voluntad propia a México una máscara prehispánica que había comprado años atrás en Francia.",
       "en": "A Japanese collector, of his own free will, gave back to Mexico a pre-Hispanic mask he had bought years earlier in France.",
       "gloss": {
        "coleccionista": "collector",
        "japonés": "Japanese",
        "devolvió": "gave back",
        "voluntad": "will",
        "propia": "own",
        "méxico": "Mexico",
        "máscara": "mask",
        "prehispánica": "pre-Hispanic",
        "había": "had",
        "comprado": "bought",
        "años": "years",
        "atrás": "ago, back",
        "francia": "France"
       }
      },
      "C": {
       "text": "Un coleccionista japonés que pidió el anonimato entregó voluntariamente a la Embajada de México en Tokio una máscara prehispánica adquirida en Francia, en lo que la embajadora Melba Pría describió como la primera devolución voluntaria de patrimonio mexicano lograda en Japón.",
       "en": "A Japanese collector who asked to remain anonymous voluntarily handed the Mexican Embassy in Tokyo a pre-Hispanic mask acquired in France, in what Ambassador Melba Pría described as the first voluntary return of Mexican heritage achieved in Japan.",
       "gloss": {
        "coleccionista": "collector",
        "japonés": "Japanese",
        "pidió": "asked for",
        "anonimato": "anonymity",
        "entregó": "handed over",
        "voluntariamente": "voluntarily",
        "embajada": "embassy",
        "méxico": "Mexico",
        "tokio": "Tokyo",
        "máscara": "mask",
        "prehispánica": "pre-Hispanic",
        "adquirida": "acquired",
        "francia": "France",
        "embajadora": "ambassador",
        "describió": "described",
        "primera": "first",
        "devolución": "return",
        "voluntaria": "voluntary",
        "patrimonio": "heritage",
        "mexicano": "Mexican",
        "lograda": "achieved",
        "japón": "Japan"
       }
      }
     }
    },
    {
     "topic": "Patrimonio · Uruguay",
     "source": "https://www.elobservador.com.uy/cultura-y-espectaculos/dia-del-patrimonio-2026-la-consigna-y-la-agenda-actividades-este-ano-n6058703",
     "levels": {
      "A": {
       "text": "Uruguay celebra el Día del Patrimonio con sus raíces indígenas.",
       "en": "Uruguay celebrates Heritage Day with its indigenous roots.",
       "gloss": {
        "celebra": "celebrates",
        "día": "day",
        "patrimonio": "heritage",
        "raíces": "roots",
        "indígenas": "indigenous"
       }
      },
      "B": {
       "text": "El Día del Patrimonio de Uruguay se celebró el 3 y 4 de octubre, dedicado a las raíces indígenas del país.",
       "en": "Uruguay's Heritage Day was held on 3 and 4 October, dedicated to the country's indigenous roots.",
       "gloss": {
        "día": "day",
        "patrimonio": "heritage",
        "celebró": "celebrated (se celebró: was held)",
        "octubre": "October",
        "dedicado": "dedicated",
        "raíces": "roots",
        "indígenas": "indigenous",
        "país": "country"
       }
      },
      "C": {
       "text": "Unos 560 espacios abrieron sus puertas en el Día del Patrimonio uruguayo, celebrado el 3 y 4 de octubre y dedicado este año a las raíces indígenas, con muestras como «Re-existencias» en el Museo Histórico Nacional.",
       "en": "Some 560 venues opened their doors for Uruguay's Heritage Day, held on 3 and 4 October and dedicated this year to indigenous roots, with shows such as 'Re-existencias' at the National History Museum.",
       "gloss": {
        "espacios": "spaces, venues",
        "abrieron": "opened",
        "puertas": "doors",
        "día": "day",
        "patrimonio": "heritage",
        "uruguayo": "Uruguayan",
        "celebrado": "held, celebrated",
        "octubre": "October",
        "dedicado": "dedicated",
        "año": "year",
        "raíces": "roots",
        "indígenas": "indigenous",
        "muestras": "exhibitions, shows",
        "re-existencias": "re-existences (title)",
        "existencias": "existences",
        "museo": "museum",
        "histórico": "historical",
        "nacional": "national"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Asking for directions",
      "situation": "On a street in Mexico City",
      "region": "México",
      "lines": [
       {
        "who": "You",
        "text": "Disculpe, ¿dónde está el metro?",
        "en": "Excuse me, where's the metro?",
        "gloss": {
         "disculpe": "excuse me (formal)",
         "dónde": "where",
         "metro": "metro, subway"
        }
       },
       {
        "who": "Woman",
        "text": "Siga derecho dos cuadras y luego a la izquierda.",
        "en": "Go straight on for two blocks and then left.",
        "gloss": {
         "siga": "keep going (formal)",
         "derecho": "straight on",
         "dos": "two",
         "cuadras": "blocks",
         "luego": "then",
         "izquierda": "left"
        }
       },
       {
        "who": "You",
        "text": "¿Está lejos?",
        "en": "Is it far?",
        "gloss": {
         "lejos": "far"
        }
       },
       {
        "who": "Woman",
        "text": "No, está cerquita, como cinco minutos caminando.",
        "en": "No, it's really close, about five minutes on foot.",
        "gloss": {
         "cerquita": "really close (cerca + -ita)",
         "cinco": "five",
         "minutos": "minutes",
         "caminando": "walking"
        }
       },
       {
        "who": "You",
        "text": "¡Muchas gracias!",
        "en": "Thanks a lot!",
        "gloss": {
         "muchas": "many",
         "gracias": "thanks"
        }
       },
       {
        "who": "Woman",
        "text": "De nada, que le vaya bien.",
        "en": "You're welcome, all the best.",
        "gloss": {
         "nada": "nothing (de nada: you're welcome)",
         "vaya": "may it go",
         "bien": "well"
        }
       }
      ]
     },
     {
      "topic": "Hotel check-in",
      "situation": "At a small hotel in Seville",
      "region": "España",
      "lines": [
       {
        "who": "Receptionist",
        "text": "Buenas tardes, ¿tiene reserva?",
        "en": "Good afternoon, do you have a booking?",
        "gloss": {
         "buenas": "good",
         "tardes": "afternoon",
         "reserva": "booking"
        }
       },
       {
        "who": "You",
        "text": "Sí, a nombre de Smith, para tres noches.",
        "en": "Yes, under the name Smith, for three nights.",
        "gloss": {
         "nombre": "name",
         "tres": "three",
         "noches": "nights"
        }
       },
       {
        "who": "Receptionist",
        "text": "Vale, ¿me deja el pasaporte, por favor?",
        "en": "OK, can I have your passport, please?",
        "gloss": {
         "vale": "OK (Spain)",
         "deja": "let (me deja: could you give me)",
         "pasaporte": "passport",
         "favor": "favour (por favor: please)"
        }
       },
       {
        "who": "You",
        "text": "Claro, aquí tiene. ¿El desayuno está incluido?",
        "en": "Sure, here you are. Is breakfast included?",
        "gloss": {
         "claro": "of course",
         "aquí": "here",
         "desayuno": "breakfast",
         "incluido": "included"
        }
       },
       {
        "who": "Receptionist",
        "text": "Sí, de ocho a once. Su habitación es la 204, en la segunda planta.",
        "en": "Yes, from eight to eleven. Your room is 204, on the second floor.",
        "gloss": {
         "ocho": "eight",
         "once": "eleven",
         "habitación": "room",
         "segunda": "second",
         "planta": "floor"
        }
       },
       {
        "who": "You",
        "text": "Perfecto, gracias.",
        "en": "Perfect, thanks.",
        "gloss": {
         "perfecto": "perfect",
         "gracias": "thanks"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Returning something",
      "situation": "At a clothes shop in Madrid",
      "region": "España",
      "lines": [
       {
        "who": "You",
        "text": "Hola, mira, quería devolver esta camiseta, que me queda pequeña.",
        "en": "Hi, look, I wanted to return this T-shirt, it's too small for me.",
        "gloss": {
         "hola": "hi",
         "mira": "look",
         "quería": "I wanted",
         "devolver": "to return",
         "camiseta": "T-shirt",
         "queda": "fits (me queda: it's … on me)",
         "pequeña": "small"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Vale, sin problema. ¿Tienes el tique?",
        "en": "OK, no problem. Have you got the receipt?",
        "gloss": {
         "vale": "OK (Spain)",
         "sin": "without",
         "problema": "problem",
         "tienes": "you have",
         "tique": "receipt"
        }
       },
       {
        "who": "You",
        "text": "Sí, aquí está. La compré el sábado.",
        "en": "Yes, here it is. I bought it on Saturday.",
        "gloss": {
         "aquí": "here",
         "compré": "I bought",
         "sábado": "Saturday"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Perfecto. ¿Prefieres cambiarla por otra talla o que te devuelva el dinero?",
        "en": "Great. Would you rather swap it for another size or get your money back?",
        "gloss": {
         "perfecto": "perfect",
         "prefieres": "you prefer",
         "cambiarla": "to swap it",
         "otra": "another",
         "talla": "size",
         "devuelva": "I give back",
         "dinero": "money"
        }
       },
       {
        "who": "You",
        "text": "Pues… si tenéis la M, me la llevo.",
        "en": "Well… if you've got a medium, I'll take that.",
        "gloss": {
         "pues": "well",
         "si": "if",
         "tenéis": "you (pl.) have (Spain)",
         "m": "M (medium)",
         "llevo": "I take"
        }
       },
       {
        "who": "Shop assistant",
        "text": "A ver… sí, aquí tienes. ¡Hecho!",
        "en": "Let's see… yes, here you go. Done!",
        "gloss": {
         "ver": "to see (a ver: let's see)",
         "aquí": "here",
         "tienes": "you have (aquí tienes: here you go)",
         "hecho": "done"
        }
       },
       {
        "who": "You",
        "text": "Genial, gracias, majo.",
        "en": "Great, thanks, you're a star.",
        "gloss": {
         "genial": "great",
         "gracias": "thanks",
         "majo": "nice one, love (friendly, Spain)"
        }
       }
      ]
     },
     {
      "topic": "Voice notes and changing plans",
      "situation": "Voice notes with a friend in Guadalajara",
      "region": "México",
      "lines": [
       {
        "who": "You",
        "text": "¿Qué onda, güey? Oye, ¿sigue en pie lo del sábado?",
        "en": "What's up, mate? Hey, is Saturday still on?",
        "gloss": {
         "qué": "what",
         "onda": "wave (qué onda: what's up)",
         "güey": "mate, dude (Mexico)",
         "oye": "hey, listen",
         "sigue": "is still",
         "pie": "foot (en pie: standing, on)",
         "sábado": "Saturday"
        }
       },
       {
        "who": "Friend",
        "text": "Simón, nomás que mejor a las siete, porque salgo tarde de la chamba.",
        "en": "Yep, only better at seven, because I get off work late.",
        "gloss": {
         "simón": "yep (Mexican slang)",
         "nomás": "just, only (Mexico)",
         "mejor": "better",
         "siete": "seven",
         "porque": "because",
         "salgo": "I leave",
         "tarde": "late",
         "chamba": "work, job (Mexico)"
        }
       },
       {
        "who": "You",
        "text": "Órale, va. ¿Paso por ti o nos vemos allá?",
        "en": "Cool, deal. Shall I pick you up or meet you there?",
        "gloss": {
         "órale": "OK, cool (Mexico)",
         "va": "deal, OK",
         "paso": "I pass by (paso por ti: I pick you up)",
         "ti": "you",
         "vemos": "we see (nos vemos: we meet)",
         "allá": "there"
        }
       },
       {
        "who": "Friend",
        "text": "Pásate por mí, porfa, que mi carro anda en el taller.",
        "en": "Come by for me, please, my car's at the garage.",
        "gloss": {
         "pásate": "come by",
         "mí": "me",
         "porfa": "please (short for por favor)",
         "carro": "car (Mexico)",
         "anda": "is (lit. walks)",
         "taller": "garage, workshop"
        }
       },
       {
        "who": "You",
        "text": "Sale, te mando mensaje cuando vaya en camino.",
        "en": "Sure, I'll text you when I'm on my way.",
        "gloss": {
         "sale": "OK, deal (Mexico)",
         "mando": "I send",
         "mensaje": "message",
         "vaya": "I go",
         "camino": "way, road"
        }
       },
       {
        "who": "Friend",
        "text": "Va, ahí nos vemos. ¡Cuídate!",
        "en": "OK, see you there. Take care!",
        "gloss": {
         "va": "OK",
         "ahí": "there",
         "vemos": "we see",
         "cuídate": "take care"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "currar",
     "pos": "verb · slang",
     "region": "España",
     "ties": 1,
     "meaning": "to work",
     "note": "Regular -ar verb; el curro is 'the job'. Mexico says chambear and la chamba; standard Spanish is trabajar and el trabajo.",
     "example": "Mi prima curra en CentroCentro y dice que la expo de Cruz Novillo es gratis.",
     "exampleEn": "My cousin works at CentroCentro and says the Cruz Novillo show is free.",
     "exGloss": {
      "prima": "cousin (f.)",
      "curra": "works",
      "dice": "says",
      "expo": "exhibition (short)",
      "gratis": "free"
     }
    },
    {
     "word": "devolver",
     "pos": "verb",
     "region": "general",
     "ties": 2,
     "meaning": "to give back, to return (something)",
     "note": "Stem change o→ue: devuelvo, devuelves, devuelve. Irregular participle: devuelto. In Mexico regresar is also common for returning things.",
     "example": "El coleccionista devolvió la máscara a México.",
     "exampleEn": "The collector gave the mask back to Mexico.",
     "exGloss": {
      "coleccionista": "collector",
      "devolvió": "gave back",
      "máscara": "mask",
      "méxico": "Mexico"
     }
    },
    {
     "word": "bárbaro",
     "pos": "adjective · slang",
     "region": "Uruguay / Argentina",
     "ties": 3,
     "meaning": "great, fantastic",
     "note": "Rioplatense praise: ¡Bárbaro! = Great! Feminine bárbara. Spain says genial or guay; Mexico says padre or chido.",
     "example": "El Día del Patrimonio estuvo bárbaro: abrieron un montón de museos.",
     "exampleEn": "Heritage Day was fantastic: loads of museums opened.",
     "exGloss": {
      "día": "day",
      "patrimonio": "heritage",
      "estuvo": "was",
      "bárbaro": "great",
      "abrieron": "they opened",
      "montón": "pile (un montón de: loads of)",
      "museos": "museums"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "On a street in Mexico City you hear «Siga derecho dos cuadras». What should you do?",
     "options": [
      "Turn right after two blocks",
      "Go straight on for two blocks",
      "Take the second street on the left",
      "Wait two minutes"
     ],
     "answer": 1,
     "why": "Derecho here means 'straight on', and cuadras are city blocks: keep going straight for two blocks.",
     "lesson": "Derecho looks almost like derecha, 'right', so learners turn. The -a form is the side (a la derecha); the -o form after a verb of movement means straight ahead."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "In headline 2 the collector «devuelve» the mask to Mexico. What does he do?",
     "options": [
      "He sells it",
      "He shows it",
      "He buys it again",
      "He gives it back"
     ],
     "answer": 3,
     "why": "Devolver means 'to give back, return something'; devuelve is its present form, with o→ue.",
     "lesson": "Volver ('to come back') hides inside it, which pulls people towards the mask travelling or being bought back; de-volver always has someone handing something back."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "En la tienda dices «me queda pequeña». ¿Qué significa?",
     "options": [
      "Me gusta poco.",
      "Es demasiado pequeña para mí.",
      "Queda poca en la tienda.",
      "La quiero más pequeña."
     ],
     "answer": 1,
     "why": "Con ropa, quedar + pronombre dice cómo te sienta: «me queda pequeña» es que la talla es demasiado pequeña para ti.",
     "lesson": "Quedar también significa 'sobrar' (¿queda leche?), y por eso tienta pensar en cantidades; con me, te, le y una prenda habla de la talla."
    },
    {
     "level": "B2",
     "ref": "vocab3",
     "q": "Una amiga uruguaya dice que el Día del Patrimonio estuvo «bárbaro». ¿Qué quiere decir?",
     "options": [
      "Que fue violento.",
      "Que hubo mucha gente extranjera.",
      "Que estuvo buenísimo.",
      "Que fue muy antiguo."
     ],
     "answer": 2,
     "why": "En el Río de la Plata «bárbaro» es un elogio: genial, estupendo.",
     "lesson": "El sentido de diccionario, 'salvaje', es el que tienta; en la charla rioplatense «bárbaro» casi siempre es positivo, como «genial» en España."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "La retrospectiva fue «concebida junto al artista un año antes de su muerte». ¿Qué implica?",
     "options": [
      "Que el artista participó en planearla antes de fallecer.",
      "Que el artista la organizó un año después de morir.",
      "Que se inauguró justo un año después de su muerte.",
      "Que la idea fue solo de los comisarios."
     ],
     "answer": 0,
     "why": "«Junto al artista» indica colaboración, y «un año antes de su muerte» sitúa esa colaboración en vida.",
     "lesson": "Es fácil quedarse con «un año» y «muerte» y leer una fecha de apertura; pero «concebida» habla del diseño de la muestra, no de su inauguración."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "En «una máscara prehispánica adquirida en Francia», ¿qué es «adquirida»?",
     "options": [
      "Un verbo conjugado cuyo sujeto es «coleccionista».",
      "Un sustantivo, como 'adquisición'.",
      "Un adjetivo que concuerda con «Francia».",
      "Un participio que concuerda con «máscara» y equivale a 'que había sido adquirida'."
     ],
     "answer": 3,
     "why": "«Adquirida» es femenino singular porque describe a «máscara»: funciona como una relativa reducida.",
     "lesson": "Como la frase ya tiene un verbo principal lejos («entregó»), tienta leer «adquirida» como otro verbo del coleccionista; un participio sin auxiliar es adjetival y concuerda con el nombre al que describe."
    }
   ],
   "tip": {
    "title": "Wishes take the subjunctive",
    "text": "«Que le vaya bien», the goodbye in today's directions scene, is a wish with an unspoken 'I hope': que + subjunctive (vaya, not va). The same pattern gives «que aproveche» (enjoy your meal) and «que descanses» (sleep well). When a sentence opens with que and no verb before it, expect a wish."
   },
   "fun": {
    "kind": "joke",
    "region": "España",
    "text": "—Mamá, ¿por qué estás delante del ordenador con los ojos cerrados? —Porque el ordenador me ha dicho que cierre las pestañas.",
    "gloss": {
     "mamá": "mum",
     "qué": "what (por qué: why)",
     "estás": "you are",
     "delante": "in front",
     "ordenador": "computer (Spain)",
     "ojos": "eyes",
     "cerrados": "closed",
     "porque": "because",
     "dicho": "said, told",
     "cierre": "I close",
     "pestañas": "eyelashes / browser tabs"
    },
    "literal": "'Mum, why are you sitting in front of the computer with your eyes shut?' 'Because the computer told me to close my eyelashes (tabs).'",
    "meaning": "Pestaña means both 'eyelash' and 'tab' in a browser, so 'close the tabs' becomes 'shut your eyes'.",
    "culture": "Spanish named browser tabs after eyelashes, the little flaps along an edge. Spain says ordenador for computer; Mexico and most of Latin America say computadora, where the joke works just the same."
   }
  },
  "de": {
   "news": [
    {
     "topic": "Kunst · München",
     "source": "https://www.pinakothek-der-moderne.de/ausstellungen/can-you-imagine-part-ii-iii/",
     "levels": {
      "A": {
       "text": "Die Pinakothek der Moderne zeigt jetzt neu Kunst ab 1945.",
       "en": "The Pinakothek der Moderne is now showing art from 1945 on in a new way.",
       "gloss": {
        "pinakothek": "picture gallery (name)",
        "moderne": "modern age (name)",
        "zeigt": "shows",
        "jetzt": "now",
        "neu": "newly, anew",
        "kunst": "art",
        "ab": "from … on"
       }
      },
      "B": {
       "text": "Seit dem 8. Oktober zeigt die Pinakothek der Moderne neu Kunst ab 1945, mit Bacon, Baselitz und einem Raum für Joseph Beuys.",
       "en": "Since 8 October the Pinakothek der Moderne has been showing art from 1945 on afresh, with Bacon, Baselitz and a room for Joseph Beuys.",
       "gloss": {
        "oktober": "October",
        "zeigt": "shows",
        "pinakothek": "picture gallery (name)",
        "moderne": "modern age (name)",
        "neu": "newly, anew",
        "kunst": "art",
        "ab": "from … on",
        "raum": "room"
       }
      },
      "C": {
       "text": "Mit dem zweiten Teil von „Can You Imagine?“ ordnet die Pinakothek der Moderne ihre Sammlung neu: Seit dem 8. Oktober hängen Werke von Francis Bacon, Georg Baselitz und Marlene Dumas in sechs Sälen, dazu kommt ein eigener Raum für Joseph Beuys.",
       "en": "With the second part of 'Can You Imagine?' the Pinakothek der Moderne is rearranging its collection: since 8 October works by Francis Bacon, Georg Baselitz and Marlene Dumas have hung in six galleries, plus a room of its own for Joseph Beuys.",
       "gloss": {
        "zweiten": "second",
        "teil": "part",
        "can": "can (English title)",
        "you": "you (English title)",
        "imagine": "imagine (English title)",
        "ordnet": "arranges",
        "pinakothek": "picture gallery (name)",
        "moderne": "modern age (name)",
        "ihre": "its",
        "sammlung": "collection",
        "neu": "anew",
        "oktober": "October",
        "hängen": "hang",
        "werke": "works",
        "sechs": "six",
        "sälen": "halls, galleries",
        "dazu": "in addition",
        "kommt": "comes",
        "eigener": "own",
        "raum": "room"
       }
      }
     }
    },
    {
     "topic": "Welterbe · Regensburg",
     "source": "https://www.regensburg.de/veranstaltungen/kategorie/20968",
     "levels": {
      "A": {
       "text": "Regensburg feiert 20 Jahre Welterbe mit einer Ausstellung.",
       "en": "Regensburg celebrates 20 years as a World Heritage Site with an exhibition.",
       "gloss": {
        "feiert": "celebrates",
        "jahre": "years",
        "welterbe": "World Heritage",
        "ausstellung": "exhibition"
       }
      },
      "B": {
       "text": "Zum 20. Jubiläum des UNESCO-Welterbes zeigt Regensburg im Salzstadel noch bis 14. Oktober die Ausstellung „Dialog über die Donau“.",
       "en": "For the 20th anniversary of its UNESCO World Heritage status, Regensburg is showing the exhibition 'Dialogue across the Danube' in the Salzstadel until 14 October.",
       "gloss": {
        "jubiläum": "anniversary",
        "unesco-welterbes": "of the UNESCO World Heritage",
        "welterbes": "of the World Heritage",
        "zeigt": "shows",
        "salzstadel": "salt warehouse (name)",
        "noch": "still",
        "bis": "until",
        "oktober": "October",
        "ausstellung": "exhibition",
        "dialog": "dialogue",
        "donau": "Danube"
       }
      },
      "C": {
       "text": "Im Besucherzentrum Welterbe im Salzstadel läuft noch bis zum 14. Oktober die Sonderausstellung „Stadel x Stadel III – Dialog über die Donau“, mit der Regensburg das 20. Jubiläum seines UNESCO-Welterbetitels begeht.",
       "en": "At the World Heritage Visitor Centre in the Salzstadel, the special exhibition 'Stadel x Stadel III – Dialogue across the Danube', with which Regensburg marks the 20th anniversary of its UNESCO World Heritage title, runs until 14 October.",
       "gloss": {
        "besucherzentrum": "visitor centre",
        "welterbe": "World Heritage",
        "salzstadel": "salt warehouse (name)",
        "läuft": "runs",
        "noch": "still",
        "bis": "until",
        "oktober": "October",
        "sonderausstellung": "special exhibition",
        "stadel": "barn, warehouse (Bavarian)",
        "x": "x, versus",
        "iii": "III, three",
        "dialog": "dialogue",
        "donau": "Danube",
        "jubiläum": "anniversary",
        "seines": "of its",
        "unesco-welterbetitels": "of the UNESCO World Heritage title",
        "welterbetitels": "of the World Heritage title",
        "begeht": "celebrates, marks"
       }
      }
     }
    },
    {
     "topic": "Archäologie · Wien",
     "source": "https://www.khm.at/en/exhibitions/crime-scene-ephesus",
     "levels": {
      "A": {
       "text": "In Wien geht es bald um Kleopatra und ein altes Grab.",
       "en": "In Vienna there's soon a show about Cleopatra and an old tomb.",
       "gloss": {
        "wien": "Vienna",
        "geht": "goes (es geht um: it's about)",
        "bald": "soon",
        "kleopatra": "Cleopatra",
        "altes": "old",
        "grab": "grave, tomb"
       }
      },
      "B": {
       "text": "Ab 20. Oktober zeigt das Kunsthistorische Museum in Wien rund 100 Objekte über Kleopatra, Caesar und Augustus.",
       "en": "From 20 October the Kunsthistorisches Museum in Vienna is showing around 100 objects about Cleopatra, Caesar and Augustus.",
       "gloss": {
        "ab": "from",
        "oktober": "October",
        "zeigt": "shows",
        "kunsthistorische": "art-historical",
        "museum": "museum",
        "wien": "Vienna",
        "rund": "around",
        "objekte": "objects",
        "kleopatra": "Cleopatra"
       }
      },
      "C": {
       "text": "Die Schau „Tatort Ephesos – Kleopatra und Rom“, die am 20. Oktober in der Neuen Hofburg öffnet, geht von einem ungelösten Rätsel aus: Wer liegt in dem achteckigen Grab, das österreichische Archäologen vor rund hundert Jahren in Ephesos fanden?",
       "en": "The show 'Crime Scene Ephesus – Cleopatra and Rome', which opens on 20 October in the Neue Hofburg, starts from an unsolved mystery: who lies in the octagonal tomb that Austrian archaeologists found in Ephesus about a hundred years ago?",
       "gloss": {
        "schau": "show",
        "tatort": "crime scene",
        "ephesos": "Ephesus",
        "kleopatra": "Cleopatra",
        "rom": "Rome",
        "oktober": "October",
        "neuen": "New (name)",
        "hofburg": "imperial palace (name)",
        "öffnet": "opens",
        "geht": "goes (geht … aus: starts from)",
        "einem": "an",
        "ungelösten": "unsolved",
        "rätsel": "mystery, riddle",
        "wer": "who",
        "liegt": "lies",
        "achteckigen": "octagonal",
        "grab": "tomb",
        "österreichische": "Austrian",
        "archäologen": "archaeologists",
        "vor": "ago",
        "rund": "around",
        "hundert": "hundred",
        "jahren": "years",
        "fanden": "found"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Ordering at a bakery",
      "situation": "At a bakery in Munich",
      "region": "Bayern",
      "lines": [
       {
        "who": "Baker",
        "text": "Grüß Gott! Was darf's sein?",
        "en": "Hello! What can I get you?",
        "gloss": {
         "grüß": "greet",
         "gott": "God (Grüß Gott: hello)",
         "was": "what",
         "darf's": "may it (darf es)",
         "darf": "may"
        }
       },
       {
        "who": "You",
        "text": "Zwei Brezn und eine Semmel, bitte.",
        "en": "Two pretzels and a bread roll, please.",
        "gloss": {
         "zwei": "two",
         "brezn": "pretzels (Bavarian)",
         "semmel": "bread roll (Bavaria, Austria)",
         "bitte": "please"
        }
       },
       {
        "who": "Baker",
        "text": "Gern. Sonst noch was?",
        "en": "Sure. Anything else?",
        "gloss": {
         "gern": "gladly",
         "sonst": "else",
         "noch": "still, more",
         "was": "something"
        }
       },
       {
        "who": "You",
        "text": "Nein, danke. Was macht das?",
        "en": "No, thanks. How much is that?",
        "gloss": {
         "nein": "no",
         "danke": "thanks",
         "was": "what",
         "macht": "makes (was macht das: how much is it)"
        }
       },
       {
        "who": "Baker",
        "text": "Drei Euro zwanzig, bitte.",
        "en": "Three euros twenty, please.",
        "gloss": {
         "drei": "three",
         "euro": "euros",
         "zwanzig": "twenty",
         "bitte": "please"
        }
       },
       {
        "who": "You",
        "text": "Bitte schön. Stimmt so!",
        "en": "Here you go. Keep the change!",
        "gloss": {
         "bitte": "please",
         "schön": "nicely (bitte schön: here you are)",
         "stimmt": "is right",
         "so": "like that (stimmt so: keep the change)"
        }
       }
      ]
     },
     {
      "topic": "Buying a tram ticket",
      "situation": "At a tram stop in Vienna",
      "region": "Österreich",
      "lines": [
       {
        "who": "You",
        "text": "Entschuldigung, wo kann ich ein Ticket kaufen?",
        "en": "Excuse me, where can I buy a ticket?",
        "gloss": {
         "entschuldigung": "excuse me",
         "wo": "where",
         "ticket": "ticket",
         "kaufen": "buy"
        }
       },
       {
        "who": "Woman",
        "text": "Da drüben beim Automaten. Oder direkt in der Bim.",
        "en": "Over there at the machine. Or right on the tram.",
        "gloss": {
         "da": "there",
         "drüben": "over there",
         "automaten": "(ticket) machine",
         "oder": "or",
         "direkt": "directly",
         "bim": "tram (Vienna)"
        }
       },
       {
        "who": "You",
        "text": "Fährt die Straßenbahn zum Museum?",
        "en": "Does the tram go to the museum?",
        "gloss": {
         "fährt": "goes, drives",
         "straßenbahn": "tram",
         "museum": "museum"
        }
       },
       {
        "who": "Woman",
        "text": "Ja, das sind nur drei Stationen.",
        "en": "Yes, it's only three stops.",
        "gloss": {
         "ja": "yes",
         "nur": "only",
         "drei": "three",
         "stationen": "stops"
        }
       },
       {
        "who": "You",
        "text": "Super, danke schön!",
        "en": "Great, thank you!",
        "gloss": {
         "super": "great",
         "danke": "thanks",
         "schön": "nicely"
        }
       },
       {
        "who": "Woman",
        "text": "Gern geschehen. Baba!",
        "en": "You're welcome. Bye!",
        "gloss": {
         "gern": "gladly",
         "geschehen": "happened (gern geschehen: you're welcome)",
         "baba": "bye (Vienna)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Workplace small talk",
      "situation": "At the coffee machine in a Munich office",
      "region": "Bayern",
      "lines": [
       {
        "who": "Colleague",
        "text": "Servus! Na, auch schon wieder Kaffee?",
        "en": "Hi! Well, coffee again already?",
        "gloss": {
         "servus": "hi / bye (Bavaria, Austria)",
         "na": "well",
         "auch": "also",
         "schon": "already",
         "wieder": "again",
         "kaffee": "coffee"
        }
       },
       {
        "who": "You",
        "text": "Logisch. Ohne Kaffee geht bei mir gar nix.",
        "en": "Obviously. Without coffee I can't function at all.",
        "gloss": {
         "logisch": "obviously, logical",
         "ohne": "without",
         "kaffee": "coffee",
         "geht": "works, goes",
         "bei": "with",
         "mir": "me",
         "gar": "at all",
         "nix": "nothing (colloquial)"
        }
       },
       {
        "who": "Colleague",
        "text": "Geht mir genauso. Hast du die Mail vom Chef gelesen?",
        "en": "Same here. Did you read the boss's email?",
        "gloss": {
         "geht": "goes",
         "mir": "for me",
         "genauso": "just the same",
         "hast": "have",
         "mail": "email",
         "chef": "boss",
         "gelesen": "read"
        }
       },
       {
        "who": "You",
        "text": "Die wegen dem Meeting? Ja, das ist jetzt halt auf Freitag verschoben.",
        "en": "The one about the meeting? Yeah, it's just been moved to Friday.",
        "gloss": {
         "wegen": "because of, about",
         "meeting": "meeting",
         "ja": "yes",
         "jetzt": "now",
         "halt": "just, simply (filler)",
         "freitag": "Friday",
         "verschoben": "postponed, moved"
        }
       },
       {
        "who": "Colleague",
        "text": "Echt? Na gut, dann hab ich am Donnerstag wenigstens a bisserl Ruhe.",
        "en": "Really? Oh well, then at least I'll get a bit of peace on Thursday.",
        "gloss": {
         "echt": "really",
         "na": "well",
         "gut": "good",
         "dann": "then",
         "hab": "have",
         "donnerstag": "Thursday",
         "wenigstens": "at least",
         "a": "a (Bavarian)",
         "bisserl": "little bit (Bavarian)",
         "ruhe": "peace, quiet"
        }
       },
       {
        "who": "You",
        "text": "Eben. So, ich muss weiter. Bis später!",
        "en": "Exactly. Right, I need to get on. See you later!",
        "gloss": {
         "eben": "exactly",
         "so": "right, so",
         "weiter": "on, further",
         "bis": "until",
         "später": "later"
        }
       }
      ]
     },
     {
      "topic": "Chatting with a neighbour",
      "situation": "On the stairs of a building in Regensburg",
      "region": "Bayern",
      "lines": [
       {
        "who": "Neighbour",
        "text": "Grüß Gott! Sie wohnen doch neu im zweiten Stock, oder?",
        "en": "Hello! You've just moved into the second floor, haven't you?",
        "gloss": {
         "grüß": "greet",
         "gott": "God (Grüß Gott: hello)",
         "wohnen": "live",
         "doch": "surely, after all",
         "neu": "newly",
         "zweiten": "second",
         "stock": "floor, storey",
         "oder": "or (oder?: right?)"
        }
       },
       {
        "who": "You",
        "text": "Genau, seit zwei Wochen. Ich bin Alex.",
        "en": "That's right, for two weeks now. I'm Alex.",
        "gloss": {
         "genau": "exactly",
         "bin": "am",
         "zwei": "two",
         "wochen": "weeks"
        }
       },
       {
        "who": "Neighbour",
        "text": "Freut mich, Huber. Und, haben Sie sich schon eingelebt?",
        "en": "Nice to meet you, I'm Huber. So, have you settled in yet?",
        "gloss": {
         "freut": "pleases (freut mich: nice to meet you)",
         "mich": "me",
         "schon": "already, yet",
         "eingelebt": "settled in"
        }
       },
       {
        "who": "You",
        "text": "So langsam. Nur die Waschmaschine im Keller hab ich noch nicht kapiert.",
        "en": "Bit by bit. Only I still haven't figured out the washing machine in the cellar.",
        "gloss": {
         "so": "so",
         "langsam": "slowly",
         "nur": "only",
         "waschmaschine": "washing machine",
         "keller": "cellar",
         "hab": "have",
         "noch": "still, yet",
         "kapiert": "got, understood (colloquial)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Ach, die spinnt manchmal. Da müssen S' zweimal drücken, dann geht's.",
        "en": "Oh, it plays up sometimes. You have to press twice, then it works.",
        "gloss": {
         "ach": "oh",
         "spinnt": "is acting up (lit. is crazy)",
         "manchmal": "sometimes",
         "da": "then, there",
         "s": "you (Sie, Bavarian)",
         "zweimal": "twice",
         "drücken": "press",
         "dann": "then",
         "geht's": "it works"
        }
       },
       {
        "who": "You",
        "text": "Ah, gut zu wissen! Danke Ihnen.",
        "en": "Ah, good to know! Thank you.",
        "gloss": {
         "ah": "ah",
         "gut": "good",
         "wissen": "know",
         "danke": "thanks",
         "ihnen": "you (formal)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Gern. Und wenn was is, einfach klingeln.",
        "en": "Sure. And if anything's up, just ring the bell.",
        "gloss": {
         "gern": "gladly",
         "wenn": "if",
         "was": "something",
         "is": "is (Bavarian)",
         "einfach": "just, simply",
         "klingeln": "ring the bell"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "Hingucker",
     "article": "der",
     "pos": "noun · colloquial",
     "region": "general",
     "ties": 1,
     "meaning": "eye-catcher, the thing everyone looks at",
     "note": "Plural die Hingucker. From hingucken, 'to look over there'; gucken is northern and central German; Bavarians would rather say schauen.",
     "example": "Der Beuys-Raum ist der Hingucker in der Pinakothek.",
     "exampleEn": "The Beuys room is the eye-catcher at the Pinakothek.",
     "exGloss": {
      "beuys-raum": "Beuys room",
      "raum": "room",
      "hingucker": "eye-catcher",
      "pinakothek": "picture gallery (name)"
     }
    },
    {
     "word": "Brotzeit",
     "article": "die",
     "pos": "noun",
     "region": "Bayern",
     "ties": 2,
     "meaning": "snack, a cold bite of bread, sausage or cheese",
     "note": "Plural die Brotzeiten. Brotzeit machen = to have a snack break, at any time of day. Swabia: Vesper; Austria: Jause; standard: Imbiss.",
     "example": "Nach der Ausstellung im Salzstadel machen wir Brotzeit an der Donau.",
     "exampleEn": "After the exhibition in the Salzstadel we'll have a snack by the Danube.",
     "exGloss": {
      "ausstellung": "exhibition",
      "salzstadel": "salt warehouse (name)",
      "machen": "make, do",
      "wir": "we",
      "brotzeit": "snack",
      "donau": "Danube"
     }
    },
    {
     "word": "Sackerl",
     "article": "das",
     "pos": "noun",
     "region": "Österreich",
     "ties": 3,
     "meaning": "(shopping) bag",
     "note": "Plural die Sackerl. Standard German: die Tüte. You'll also hear Sackerl in Bavaria; Swiss German says das Säckli.",
     "example": "Im Museumsshop bekomme ich ein Sackerl für den Kleopatra-Katalog.",
     "exampleEn": "In the museum shop I get a bag for the Cleopatra catalogue.",
     "exGloss": {
      "museumsshop": "museum shop",
      "bekomme": "get",
      "sackerl": "bag",
      "kleopatra-katalog": "Cleopatra catalogue",
      "katalog": "catalogue"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "The Munich baker says «Was darf's sein?». What do they mean?",
     "options": [
      "Where are you from?",
      "What can I get you?",
      "What does it cost?",
      "Is that all?"
     ],
     "answer": 1,
     "why": "Literally 'what may it be?': the standard shop question for 'what would you like?'.",
     "lesson": "Darf sounds like asking permission, so learners hear 'what is allowed?'; in shops dürfen is simply the polite form, like English 'may I help you?'."
    },
    {
     "level": "A2",
     "ref": "vocab3",
     "q": "In a Vienna museum shop you're offered «ein Sackerl». What is it?",
     "options": [
      "A little bag",
      "A small coin",
      "A sweet",
      "A receipt"
     ],
     "answer": 0,
     "why": "Sackerl is the Austrian word for a bag; in Germany you'd usually hear Tüte.",
     "lesson": "The -erl ending makes it sound like a treat or a pastry, but -erl is just the Austrian and Bavarian 'little': a Sackerl is a little Sack."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Die Kollegin sagt: «Ohne Kaffee geht bei mir gar nix.» Was meint sie?",
     "options": [
      "Sie trinkt keinen Kaffee.",
      "Der Kaffeeautomat ist kaputt.",
      "Ohne Kaffee funktioniert sie nicht richtig.",
      "Sie geht ohne Kaffee nach Hause."
     ],
     "answer": 2,
     "why": "«Es geht nichts» heißt 'nichts funktioniert'; «nix» ist die Umgangsform von «nichts».",
     "lesson": "«Geht» lässt an Gehen denken, also an einen Weg nach Hause; in «es geht» bedeutet gehen aber 'funktionieren, möglich sein'."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "„Nach der Ausstellung machen wir Brotzeit an der Donau.“ Was ist eine Brotzeit?",
     "options": [
      "Eine Bäckerei",
      "Die Mittagspause im Büro",
      "Eine Brotsorte aus Regensburg",
      "Ein kleiner, meist kalter Imbiss mit Brot, Wurst oder Käse"
     ],
     "answer": 3,
     "why": "In Bayern ist die Brotzeit ein kleiner Imbiss, meist kalt und zu jeder Tageszeit.",
     "lesson": "Wörtlich klingt «Brot-Zeit» nach einer Uhrzeit oder einer festen Pause; gemeint ist das Essen selbst, deshalb sagt man «Brotzeit machen»."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "Was bedeutet «ordnet ihre Sammlung neu» in Schlagzeile 1?",
     "options": [
      "Sie verkauft Teile der Sammlung.",
      "Sie präsentiert die Sammlung in einer neuen Anordnung.",
      "Sie kauft neue Werke.",
      "Sie schließt die Sammlung."
     ],
     "answer": 1,
     "why": "Neu ordnen heißt umstellen und anders hängen: dieselben Bestände, eine neue Präsentation.",
     "lesson": "«Neu» lässt an Neuerwerbungen denken; hier ist es aber ein Adverb zu «ordnet» und beschreibt die Art des Ordnens, nicht neue Objekte."
    },
    {
     "level": "C2",
     "ref": "news3",
     "q": "In «Wer liegt in dem achteckigen Grab, das österreichische Archäologen … fanden?»: Worauf bezieht sich «das»?",
     "options": [
      "Auf «Grab»",
      "Auf «Rätsel»",
      "Auf «Schau»",
      "Es ist ein Demonstrativpronomen ohne Bezug."
     ],
     "answer": 0,
     "why": "«das» ist ein Relativpronomen im Neutrum und bezieht sich auf das unmittelbar davorstehende «Grab».",
     "lesson": "«Rätsel» ist auch Neutrum und steht früher im Satz, daher die Verwechslung; gefunden wurde aber das Grab, das Rätsel ist bis heute ungelöst."
    }
   ],
   "tip": {
    "title": "Wegen: genitive on paper, dative in speech",
    "text": "In the office scene, «die wegen dem Meeting?» uses the dative. Written standard German wants the genitive, «wegen des Meetings», and that's what you'll read in a newspaper. In everyday speech, especially in the south, the dative is normal and nobody blinks; just keep the genitive for formal emails and letters."
   },
   "fun": {
    "kind": "saying",
    "region": "Bayern",
    "text": "Schau ma moi, dann seng ma scho.",
    "gloss": {
     "schau": "look",
     "ma": "we (Bavarian)",
     "moi": "just, once (Bavarian mal)",
     "dann": "then",
     "seng": "see (Bavarian sehen)",
     "scho": "already, then (Bavarian schon)"
    },
    "literal": "Let's have a look, then we'll see.",
    "meaning": "Let's wait and see; no point worrying about it yet.",
    "culture": "A very Bavarian shrug: when plans are unclear, the weather's uncertain or the boss wants a forecast, this is the calm answer. It sums up the southern ideal of Gelassenheit, staying relaxed, and you'll hear it in offices as much as in beer gardens."
   }
  },
  "it": {
   "news": [
    {
     "topic": "Archeologia · Lazio",
     "source": "https://siviaggia.it/notizie/scoperti-nuovi-reperti-archeologici-aquinum-lazio/605089/",
     "levels": {
      "A": {
       "text": "Ad Aquinum gli archeologi trovano un altare romano di marmo.",
       "en": "At Aquinum, archaeologists find a Roman marble altar.",
       "gloss": {
        "ad": "at",
        "archeologi": "archaeologists",
        "trovano": "find",
        "altare": "altar",
        "romano": "Roman",
        "marmo": "marble"
       }
      },
      "B": {
       "text": "Ad Aquinum, nel Lazio, gli archeologi dell'Università del Salento hanno trovato un altare votivo di marmo e un cippo decorato.",
       "en": "At Aquinum, in Lazio, archaeologists from the University of Salento have found a marble votive altar and a decorated stone marker.",
       "gloss": {
        "ad": "at",
        "archeologi": "archaeologists",
        "dell'università": "of the University",
        "università": "university",
        "trovato": "found",
        "altare": "altar",
        "votivo": "votive",
        "marmo": "marble",
        "cippo": "stone marker, cippus",
        "decorato": "decorated"
       }
      },
      "C": {
       "text": "La diciottesima campagna di scavo dell'Università del Salento ad Aquinum ha riportato alla luce un altare votivo in marmo, il cui frammento permette di ricomporre un'iscrizione già nota e di identificare le divinità a cui era dedicato.",
       "en": "The University of Salento's eighteenth dig season at Aquinum has brought to light a marble votive altar, whose fragment makes it possible to piece together an already known inscription and identify the gods it was dedicated to.",
       "gloss": {
        "diciottesima": "eighteenth",
        "campagna": "campaign, season",
        "scavo": "excavation",
        "dell'università": "of the University",
        "università": "university",
        "ad": "at",
        "riportato": "brought back",
        "luce": "light",
        "altare": "altar",
        "votivo": "votive",
        "marmo": "marble",
        "cui": "whose, which",
        "frammento": "fragment",
        "permette": "allows",
        "ricomporre": "to reassemble",
        "un'iscrizione": "an inscription",
        "iscrizione": "inscription",
        "già": "already",
        "nota": "known",
        "identificare": "to identify",
        "divinità": "gods, deities",
        "era": "was",
        "dedicato": "dedicated"
       }
      }
     }
    },
    {
     "topic": "Arte · Firenze",
     "source": "https://www.wantedinrome.com/whatson/florence-exhibition-explores-artemisia-gentileschis-tuscan-years.html",
     "levels": {
      "A": {
       "text": "A Firenze apre una mostra sulla pittrice Artemisia Gentileschi.",
       "en": "In Florence an exhibition opens about the painter Artemisia Gentileschi.",
       "gloss": {
        "firenze": "Florence",
        "apre": "opens",
        "mostra": "exhibition",
        "sulla": "on the, about the",
        "pittrice": "painter (woman)"
       }
      },
      "B": {
       "text": "Dal 21 ottobre il Museo degli Innocenti di Firenze racconta gli anni fiorentini di Artemisia Gentileschi, con due quadri di Caravaggio.",
       "en": "From 21 October Florence's Museo degli Innocenti tells the story of Artemisia Gentileschi's Florentine years, with two paintings by Caravaggio.",
       "gloss": {
        "ottobre": "October",
        "museo": "museum",
        "innocenti": "innocents (name)",
        "firenze": "Florence",
        "racconta": "tells",
        "fiorentini": "Florentine",
        "due": "two",
        "quadri": "paintings"
       }
      },
      "C": {
       "text": "Il Museo degli Innocenti dedica dal 21 ottobre la prima mostra agli anni che Artemisia Gentileschi trascorse nella Firenze dei Medici, dove nel 1616 divenne la prima donna ammessa all'Accademia delle Arti del Disegno.",
       "en": "From 21 October the Museo degli Innocenti devotes the first exhibition to the years Artemisia Gentileschi spent in Medici Florence, where in 1616 she became the first woman admitted to the Academy of the Arts of Drawing.",
       "gloss": {
        "museo": "museum",
        "innocenti": "innocents (name)",
        "dedica": "devotes",
        "ottobre": "October",
        "prima": "first",
        "mostra": "exhibition",
        "agli": "to the",
        "trascorse": "spent",
        "firenze": "Florence",
        "dove": "where",
        "divenne": "became",
        "donna": "woman",
        "ammessa": "admitted",
        "all'accademia": "to the Academy",
        "accademia": "academy",
        "arti": "arts",
        "disegno": "drawing, design"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Ordering at a café",
      "situation": "At the counter of a bar in Rome",
      "lines": [
       {
        "who": "Barista",
        "text": "Buongiorno! Cosa prende?",
        "en": "Good morning! What are you having?",
        "gloss": {
         "buongiorno": "good morning",
         "cosa": "what",
         "prende": "you take (formal)"
        }
       },
       {
        "who": "You",
        "text": "Un cappuccino e un cornetto, per favore.",
        "en": "A cappuccino and a croissant, please.",
        "gloss": {
         "cappuccino": "cappuccino",
         "cornetto": "croissant",
         "favore": "favour (per favore: please)"
        }
       },
       {
        "who": "Barista",
        "text": "Il cornetto vuoto o alla crema?",
        "en": "The croissant plain or with custard?",
        "gloss": {
         "cornetto": "croissant",
         "vuoto": "empty, plain",
         "crema": "custard, cream"
        }
       },
       {
        "who": "You",
        "text": "Alla crema, grazie. Quanto pago?",
        "en": "With custard, thanks. How much do I owe?",
        "gloss": {
         "crema": "custard",
         "grazie": "thanks",
         "quanto": "how much",
         "pago": "I pay"
        }
       },
       {
        "who": "Barista",
        "text": "Due euro e cinquanta.",
        "en": "Two euros fifty.",
        "gloss": {
         "due": "two",
         "euro": "euros",
         "cinquanta": "fifty"
        }
       },
       {
        "who": "You",
        "text": "Ecco a lei. Buona giornata!",
        "en": "Here you are. Have a nice day!",
        "gloss": {
         "ecco": "here is",
         "buona": "good",
         "giornata": "day"
        }
       }
      ]
     },
     {
      "topic": "Asking for directions",
      "situation": "In the centre of Florence",
      "lines": [
       {
        "who": "You",
        "text": "Scusi, per il Museo degli Innocenti?",
        "en": "Excuse me, which way to the Museo degli Innocenti?",
        "gloss": {
         "scusi": "excuse me (formal)",
         "museo": "museum",
         "innocenti": "innocents (name)"
        }
       },
       {
        "who": "Man",
        "text": "Vada dritto, poi giri a destra in piazza.",
        "en": "Go straight on, then turn right at the square.",
        "gloss": {
         "vada": "go (formal)",
         "dritto": "straight",
         "poi": "then",
         "giri": "turn (formal)",
         "destra": "right",
         "piazza": "square"
        }
       },
       {
        "who": "You",
        "text": "È lontano?",
        "en": "Is it far?",
        "gloss": {
         "lontano": "far"
        }
       },
       {
        "who": "Man",
        "text": "No, cinque minuti a piedi.",
        "en": "No, five minutes on foot.",
        "gloss": {
         "no": "no",
         "cinque": "five",
         "minuti": "minutes",
         "piedi": "feet (a piedi: on foot)"
        }
       },
       {
        "who": "You",
        "text": "Grazie mille!",
        "en": "Thanks a lot!",
        "gloss": {
         "grazie": "thanks",
         "mille": "thousand"
        }
       },
       {
        "who": "Man",
        "text": "Prego, si figuri!",
        "en": "You're welcome, not at all!",
        "gloss": {
         "prego": "you're welcome",
         "figuri": "imagine (si figuri: don't mention it)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Complaining about a late delivery",
      "situation": "On the phone to an online shop in Milan",
      "lines": [
       {
        "who": "You",
        "text": "Pronto, buongiorno. Chiamo per un ordine che doveva arrivare martedì.",
        "en": "Hello, good morning. I'm calling about an order that was due on Tuesday.",
        "gloss": {
         "pronto": "hello (on the phone)",
         "buongiorno": "good morning",
         "chiamo": "I'm calling",
         "ordine": "order",
         "doveva": "was supposed to",
         "arrivare": "arrive",
         "martedì": "Tuesday"
        }
       },
       {
        "who": "Clerk",
        "text": "Mi dà il numero dell'ordine, per cortesia?",
        "en": "Could you give me the order number, please?",
        "gloss": {
         "dà": "give (formal)",
         "numero": "number",
         "dell'ordine": "of the order",
         "ordine": "order",
         "cortesia": "courtesy (per cortesia: please)"
        }
       },
       {
        "who": "You",
        "text": "Sì, è il 4521. Insomma, sono passati tre giorni e ancora niente.",
        "en": "Yes, it's 4521. Look, three days have gone by and still nothing.",
        "gloss": {
         "sì": "yes",
         "insomma": "well, look (impatient)",
         "passati": "passed",
         "tre": "three",
         "giorni": "days",
         "ancora": "still",
         "niente": "nothing"
        }
       },
       {
        "who": "Clerk",
        "text": "Ha ragione, mi scusi. Vedo che il pacco è fermo in magazzino.",
        "en": "You're right, I'm sorry. I can see the parcel is stuck in the warehouse.",
        "gloss": {
         "ragione": "reason (ha ragione: you're right)",
         "scusi": "excuse (mi scusi: I'm sorry)",
         "vedo": "I see",
         "pacco": "parcel",
         "fermo": "stuck, still",
         "magazzino": "warehouse"
        }
       },
       {
        "who": "You",
        "text": "Dai, non è possibile! E quando arriva?",
        "en": "Come on, that can't be right! So when will it arrive?",
        "gloss": {
         "dai": "come on",
         "possibile": "possible",
         "quando": "when",
         "arriva": "arrives"
        }
       },
       {
        "who": "Clerk",
        "text": "Domani entro mezzogiorno, glielo garantisco.",
        "en": "Tomorrow by midday, I promise you.",
        "gloss": {
         "domani": "tomorrow",
         "entro": "by, within",
         "mezzogiorno": "midday",
         "glielo": "it to you",
         "garantisco": "I guarantee"
        }
       },
       {
        "who": "You",
        "text": "Va bene, speriamo. Grazie.",
        "en": "OK, let's hope so. Thanks.",
        "gloss": {
         "va": "goes (va bene: OK)",
         "bene": "well",
         "speriamo": "let's hope",
         "grazie": "thanks"
        }
       }
      ]
     },
     {
      "topic": "Changing plans",
      "situation": "Texting a friend in Bologna",
      "lines": [
       {
        "who": "Friend",
        "text": "Ciao! Stasera pizza, confermato?",
        "en": "Hi! Pizza tonight, still on?",
        "gloss": {
         "ciao": "hi",
         "stasera": "tonight",
         "pizza": "pizza",
         "confermato": "confirmed"
        }
       },
       {
        "who": "You",
        "text": "Uffa, scusami, mi è uscito un impegno di lavoro. Possiamo fare domani?",
        "en": "Ugh, sorry, a work thing has come up. Can we do tomorrow?",
        "gloss": {
         "uffa": "ugh (annoyed)",
         "scusami": "sorry (to a friend)",
         "uscito": "come up (lit. gone out)",
         "impegno": "commitment",
         "lavoro": "work",
         "possiamo": "can we",
         "fare": "do",
         "domani": "tomorrow"
        }
       },
       {
        "who": "Friend",
        "text": "Boh, domani ho calcetto… facciamo giovedì?",
        "en": "Dunno, tomorrow I've got five-a-side… shall we do Thursday?",
        "gloss": {
         "boh": "dunno",
         "domani": "tomorrow",
         "ho": "I have",
         "calcetto": "five-a-side football",
         "facciamo": "let's do",
         "giovedì": "Thursday"
        }
       },
       {
        "who": "You",
        "text": "Giovedì perfetto. Alle otto da Gino?",
        "en": "Thursday's perfect. At eight at Gino's?",
        "gloss": {
         "giovedì": "Thursday",
         "perfetto": "perfect",
         "alle": "at the",
         "otto": "eight"
        }
       },
       {
        "who": "Friend",
        "text": "Ci sto! Prenoto io.",
        "en": "I'm in! I'll book.",
        "gloss": {
         "sto": "I stay (ci sto: I'm in)",
         "prenoto": "I book"
        }
       },
       {
        "who": "You",
        "text": "Grande, a giovedì allora!",
        "en": "Great, see you Thursday then!",
        "gloss": {
         "grande": "great (lit. big)",
         "giovedì": "Thursday",
         "allora": "then"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "un sacco",
     "pos": "idiom",
     "region": "general",
     "ties": 1,
     "meaning": "a lot, loads",
     "note": "Un sacco di + noun = lots of; after a verb on its own: mi piace un sacco, I like it loads. Plainer Italian: molto, tanti.",
     "example": "Ad Aquinum ci sono un sacco di pietre antiche.",
     "exampleEn": "At Aquinum there are loads of ancient stones.",
     "exGloss": {
      "ad": "at",
      "sacco": "sack (un sacco di: loads of)",
      "pietre": "stones",
      "antiche": "ancient"
     }
    },
    {
     "word": "figurati!",
     "pos": "interjection",
     "region": "general",
     "ties": 2,
     "meaning": "don't mention it, not at all",
     "note": "To someone you call Lei: si figuri! As a reaction it can also mean 'no way!': «Hai visto la mostra?» «Figurati, non ho tempo!»",
     "example": "«Grazie per il biglietto per la mostra di Artemisia!» «Figurati!»",
     "exampleEn": "'Thanks for the ticket to the Artemisia exhibition!' 'Don't mention it!'",
     "exGloss": {
      "grazie": "thanks",
      "biglietto": "ticket",
      "mostra": "exhibition",
      "figurati": "don't mention it"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "The barista asks «Cosa prende?». What does it mean?",
     "options": [
      "What are you having?",
      "How much do you pay?",
      "Where are you going?",
      "Do you take sugar?"
     ],
     "answer": 0,
     "why": "Prendere, 'to take', is how Italians order: «prendo un caffè». «Cosa prende?» is the polite 'what are you having?'.",
     "lesson": "Prende looks like English 'take', so 'do you take sugar?' tempts; without zucchero it's just the question for your order, in the formal Lei form."
    },
    {
     "level": "A2",
     "ref": "vocab1",
     "q": "«Ad Aquinum ci sono un sacco di pietre antiche.» What does «un sacco di» mean?",
     "options": [
      "a bag of",
      "a few",
      "lots of",
      "broken"
     ],
     "answer": 2,
     "why": "Un sacco di is everyday Italian for 'lots of', 'loads of'.",
     "lesson": "Sacco really is 'sack', so 'a bag of stones' is the literal trap; in conversation it means 'loads', like English 'a ton of'."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Al telefono dici: «Insomma, sono passati tre giorni e ancora niente.» Che cosa esprime «insomma»?",
     "options": [
      "Una somma di numeri.",
      "Impazienza e fastidio.",
      "Una domanda gentile.",
      "Un ringraziamento."
     ],
     "answer": 1,
     "why": "Qui «insomma» esprime impazienza: 'be', il punto è che sono passati tre giorni'.",
     "lesson": "Viene da 'in somma', cioè 'in conclusione', e si pensa ai numeri; nella conversazione è soprattutto un segnale di fastidio o un modo per tirare le somme."
    },
    {
     "level": "B2",
     "ref": "vocab2",
     "q": "«Grazie per il biglietto!» «Figurati!» Che cosa vuol dire «figurati» qui?",
     "options": [
      "Immaginati la mostra!",
      "Fai attenzione!",
      "Che bella figura!",
      "Ma di niente, non c'è di che."
     ],
     "answer": 3,
     "why": "«Figurati» risponde a un grazie: 'ma ti pare, di niente'. A chi dai del Lei dici «si figuri».",
     "lesson": "Figurarsi significa davvero 'immaginarsi', quindi tenta la prima risposta; detto dopo un grazie serve a minimizzare il favore."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "In «un altare votivo in marmo, il cui frammento permette…», a che cosa si riferisce «il cui»?",
     "options": [
      "All'altare",
      "All'università",
      "Alla campagna di scavo",
      "All'iscrizione"
     ],
     "answer": 0,
     "why": "«Il cui frammento» = 'il frammento del quale': è il frammento dell'altare.",
     "lesson": "L'articolo «il» concorda con «frammento», la cosa posseduta, non con il possessore; per questo non aiuta a trovare il riferimento e si rischia di risalire troppo indietro nella frase."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "«…gli anni che Artemisia Gentileschi trascorse nella Firenze dei Medici»: che cos'è «trascorse»?",
     "options": [
      "Un participio passato femminile plurale.",
      "Un passato remoto, terza persona singolare.",
      "Un congiuntivo presente.",
      "Un imperativo."
     ],
     "answer": 1,
     "why": "«Trascorse» è il passato remoto di trascorrere, soggetto Artemisia: il tempo della narrazione storica scritta.",
     "lesson": "Accanto a «anni» sembra un participio accordato (le ore trascorse), ma «anni» è maschile: un participio sarebbe «trascorsi». La -e finale è la desinenza del passato remoto."
    }
   ],
   "tip": {
    "title": "Scusi or scusa: the polite Lei",
    "text": "Italians use Lei for strangers, and the verb takes the 'she' form: «Cosa prende?», «Vada dritto, poi giri a destra». The same goes for 'excuse me': «scusi» to a stranger, «scusa» to a friend, and «si figuri» versus «figurati». In speech you rarely hear the word Lei itself, so listen for the endings."
   },
   "fun": {
    "kind": "idiom",
    "region": "Italia",
    "text": "Acqua in bocca!",
    "gloss": {
     "acqua": "water",
     "bocca": "mouth"
    },
    "literal": "Water in the mouth!",
    "meaning": "Keep it to yourself! Don't tell anyone.",
    "culture": "You can't talk with a mouthful of water, so Italians say it when sharing a secret or a surprise, often with a finger to the lips. The answer is usually a solemn nod; saying anything would spill the water."
   }
  },
  "ar": {
   "news": [
    {
     "topic": "Athar · al-Su'uudiyya",
     "source": "https://aawsat.com/%D9%8A%D9%88%D9%85%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B1%D9%82/5025176-%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D8%AA%D9%8F%D8%B3%D8%AC%D9%91%D9%84-202-%D9%85%D9%88%D9%82%D8%B9-%D8%A3%D8%AB%D8%B1%D9%8A-%D8%AC%D8%AF%D9%8A%D8%AF-%D8%A8%D8%A7%D9%84%D8%B3%D8%AC%D9%84-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%A2%D8%AB%D8%A7%D8%B1",
     "levels": {
      "A": {
       "text": "Al-Su'uudiyya tusajjil 202 mawqi' atharii jadiid.",
       "script": "السعودية تسجل 202 موقع أثري جديد.",
       "en": "Saudi Arabia registers 202 new archaeological sites.",
       "gloss": {
        "al-su'uudiyya": "Saudi Arabia",
        "tusajjil": "registers",
        "mawqi": "site",
        "atharii": "archaeological",
        "jadiid": "new"
       }
      },
      "B": {
       "text": "Sajjalat hay'at al-turaath 202 mawqi' atharii jadiid fi al-Riyaadh wa-Asiir wa-Haa'il.",
       "script": "سجلت هيئة التراث 202 موقع أثري جديد في الرياض وعسير وحائل.",
       "en": "The Heritage Commission registered 202 new archaeological sites in Riyadh, Asir and Hail.",
       "gloss": {
        "sajjalat": "registered (f.)",
        "hay'at": "commission of",
        "al-turaath": "the heritage",
        "mawqi": "site",
        "atharii": "archaeological",
        "jadiid": "new",
        "al-riyaadh": "Riyadh",
        "wa-asiir": "and Asir",
        "wa-haa'il": "and Hail"
       }
      },
      "C": {
       "text": "Waththaqat hay'at al-turaath al-Su'uudiyya 202 mawqi' atharii jadiid fi al-sijill al-watanii lil-athaar, minhaa aabaar hajariyya wa-nuquush thamuudiyya wa-funuun sakhriyya.",
       "script": "وثّقت هيئة التراث السعودية 202 موقع أثري جديد في السجل الوطني للآثار، منها آبار حجرية ونقوش ثمودية وفنون صخرية.",
       "en": "The Saudi Heritage Commission has documented 202 new archaeological sites in the National Antiquities Register, among them stone wells, Thamudic inscriptions and rock art.",
       "gloss": {
        "waththaqat": "documented (f.)",
        "hay'at": "commission of",
        "al-turaath": "the heritage",
        "al-su'uudiyya": "Saudi",
        "mawqi": "site",
        "atharii": "archaeological",
        "jadiid": "new",
        "al-sijill": "the register",
        "al-watanii": "the national",
        "lil-athaar": "for antiquities",
        "minhaa": "among them",
        "aabaar": "wells",
        "hajariyya": "stone (adj.)",
        "wa-nuquush": "and inscriptions",
        "thamuudiyya": "Thamudic",
        "wa-funuun": "and arts",
        "sakhriyya": "rock (adj.)"
       }
      }
     }
    },
    {
     "topic": "Athar · Misr",
     "source": "https://rtarabic.com/culture/1833773-%D8%B9%D8%AB%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D9%84%D8%A3%D9%88%D9%84-%D9%85%D8%B1%D8%A9-%D9%83%D8%B4%D9%81-%D8%A3%D8%AB%D8%B1%D9%8A-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%D9%8A-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D9%8A%D8%AD%D9%84-%D9%84%D8%BA%D8%B2-%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9/",
     "levels": {
      "A": {
       "text": "Fi Misr, al-hafaa'ir takshif buyuutan qadiima fi hisn.",
       "script": "في مصر، الحفائر تكشف بيوتاً قديمة في حصن.",
       "en": "In Egypt, excavations uncover old houses in a fort.",
       "gloss": {
        "al-hafaa'ir": "the excavations",
        "takshif": "uncover",
        "buyuutan": "houses",
        "qadiima": "old",
        "hisn": "fort"
       }
      },
      "B": {
       "text": "Kashafat al-hafaa'ir fi Tall al-Abqa'iin bil-Buhayra an mujamma' sakanii dakhm min al-tuub al-labin.",
       "script": "كشفت الحفائر في تل الأبقعين بالبحيرة عن مجمع سكني ضخم من الطوب اللبن.",
       "en": "Excavations at Tell al-Abqain in Beheira uncovered a huge residential complex of mud brick.",
       "gloss": {
        "kashafat": "uncovered (f.)",
        "al-hafaa'ir": "the excavations",
        "tall": "mound, tell",
        "al-abqa'iin": "al-Abqain (place)",
        "bil-buhayra": "in Beheira",
        "mujamma": "complex",
        "sakanii": "residential",
        "dakhm": "huge",
        "al-tuub": "the brick",
        "al-labin": "mud (brick)"
       }
      },
      "C": {
       "text": "A'lanat wizaarat al-siyaaha wal-athaar al-Misriyya kashfan jadiidan fi hisn askarii min asr al-dawla al-hadiitha bi-Tall al-Abqa'iin, haythu zahara mujamma' sakanii dakhm mushayyad min al-tuub al-labin.",
       "script": "أعلنت وزارة السياحة والآثار المصرية كشفاً جديداً في حصن عسكري من عصر الدولة الحديثة بتل الأبقعين، حيث ظهر مجمع سكني ضخم مشيد من الطوب اللبن.",
       "en": "Egypt's Ministry of Tourism and Antiquities announced a new find in a New Kingdom military fort at Tell al-Abqain, where a huge residential complex built of mud brick came to light.",
       "gloss": {
        "a'lanat": "announced (f.)",
        "wizaarat": "ministry of",
        "al-siyaaha": "tourism",
        "wal-athaar": "and antiquities",
        "al-misriyya": "Egyptian",
        "kashfan": "a discovery",
        "jadiidan": "new",
        "hisn": "fort",
        "askarii": "military",
        "asr": "era",
        "al-dawla": "the state, kingdom",
        "al-hadiitha": "the new, modern",
        "bi-tall": "at Tell",
        "al-abqa'iin": "al-Abqain (place)",
        "haythu": "where",
        "zahara": "appeared",
        "mujamma": "complex",
        "sakanii": "residential",
        "dakhm": "huge",
        "mushayyad": "built",
        "al-tuub": "the brick",
        "al-labin": "mud (brick)"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Ordering a drink",
      "situation": "At a juice stand in Beirut",
      "region": "Lebanon",
      "lines": [
       {
        "who": "Seller",
        "text": "Ahlan! Shu baddak?",
        "script": "أهلاً! شو بدك؟",
        "en": "Hi! What would you like?",
        "gloss": {
         "ahlan": "hi, welcome",
         "shu": "what (Lebanon)",
         "baddak": "you want (to a man)"
        }
       },
       {
        "who": "You",
        "text": "Baddi asiir laymuun, iza bitriid.",
        "script": "بدي عصير ليمون، إذا بتريد.",
        "en": "I'd like a lemonade, please.",
        "gloss": {
         "baddi": "I want",
         "asiir": "juice",
         "laymuun": "lemon",
         "iza": "if",
         "bitriid": "you please (iza bitriid: please)"
        }
       },
       {
        "who": "Seller",
        "text": "Kbiir aw zghiir?",
        "script": "كبير أو زغير؟",
        "en": "Large or small?",
        "gloss": {
         "kbiir": "big",
         "aw": "or",
         "zghiir": "small (Lebanon)"
        }
       },
       {
        "who": "You",
        "text": "Zghiir. Addeesh?",
        "script": "زغير. قديش؟",
        "en": "Small. How much?",
        "gloss": {
         "zghiir": "small",
         "addeesh": "how much (Lebanon)"
        }
       },
       {
        "who": "Seller",
        "text": "Tlett dolaraat.",
        "script": "تلت دولارات.",
        "en": "Three dollars.",
        "gloss": {
         "tlett": "three (Lebanon)",
         "dolaraat": "dollars"
        }
       },
       {
        "who": "You",
        "text": "Tfaddal. Shukran!",
        "script": "تفضل. شكراً!",
        "en": "Here you go. Thanks!",
        "gloss": {
         "tfaddal": "here you are",
         "shukran": "thanks"
        }
       }
      ]
     },
     {
      "topic": "Taking a taxi",
      "situation": "Getting a taxi in Cairo",
      "region": "Egypt",
      "lines": [
       {
        "who": "You",
        "text": "Law samaht, truuh il-mathaf il-Masri?",
        "script": "لو سمحت، تروح المتحف المصري؟",
        "en": "Excuse me, do you go to the Egyptian Museum?",
        "gloss": {
         "law": "if",
         "samaht": "you allowed (law samaht: excuse me)",
         "truuh": "you go",
         "il-mathaf": "the museum",
         "il-masri": "the Egyptian"
        }
       },
       {
        "who": "Driver",
        "text": "Aywa, itfaddal.",
        "script": "أيوه، اتفضل.",
        "en": "Yes, get in.",
        "gloss": {
         "aywa": "yes (Egypt)",
         "itfaddal": "please, go ahead"
        }
       },
       {
        "who": "You",
        "text": "Bi-kaam?",
        "script": "بكام؟",
        "en": "How much?",
        "gloss": {
         "bi-kaam": "for how much",
         "kaam": "how many, how much"
        }
       },
       {
        "who": "Driver",
        "text": "Il-addaad shaghghaal.",
        "script": "العداد شغال.",
        "en": "The meter's running.",
        "gloss": {
         "il-addaad": "the meter",
         "shaghghaal": "working, on"
        }
       },
       {
        "who": "You",
        "text": "Tamaam. Hina ala il-yimiin, law samaht.",
        "script": "تمام. هنا على اليمين، لو سمحت.",
        "en": "Great. Here on the right, please.",
        "gloss": {
         "tamaam": "fine, great",
         "hina": "here (Egypt)",
         "il-yimiin": "the right",
         "law": "if",
         "samaht": "you allowed (law samaht: please)"
        }
       },
       {
        "who": "Driver",
        "text": "Wisilna! Ma'a il-salaama.",
        "script": "وصلنا! مع السلامة.",
        "en": "We're here! Goodbye.",
        "gloss": {
         "wisilna": "we've arrived",
         "il-salaama": "safety (ma'a il-salaama: goodbye)"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "At the pharmacy",
      "situation": "At a pharmacy in Riyadh",
      "region": "Saudi",
      "lines": [
       {
        "who": "Pharmacist",
        "text": "Hala! Wish tibgha?",
        "script": "هلا! وش تبغى؟",
        "en": "Hi! What can I get you?",
        "gloss": {
         "hala": "hi (Gulf)",
         "wish": "what (Saudi)",
         "tibgha": "you want (Saudi)"
        }
       },
       {
        "who": "You",
        "text": "Ana ta'baan shwayy, indi suda' min ams.",
        "script": "أنا تعبان شوي، عندي صداع من أمس.",
        "en": "I'm a bit unwell, I've had a headache since yesterday.",
        "gloss": {
         "ta'baan": "tired, unwell",
         "shwayy": "a bit",
         "indi": "I have",
         "suda": "headache",
         "ams": "yesterday"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Salaamtak! Fiik haraara?",
        "script": "سلامتك! فيك حرارة؟",
        "en": "Get well soon! Have you got a temperature?",
        "gloss": {
         "salaamtak": "(I wish) your safety, get well",
         "fiik": "in you (fiik …?: do you have …?)",
         "haraara": "fever, heat"
        }
       },
       {
        "who": "You",
        "text": "La, bas raasi yiwja'ni marra.",
        "script": "لا، بس راسي يوجعني مرة.",
        "en": "No, but my head really hurts.",
        "gloss": {
         "bas": "but, just",
         "raasi": "my head",
         "yiwja'ni": "hurts me",
         "marra": "really, very (Saudi)"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Khudh haadha, habba kill thamaan saa'aat, w ishrab mooya waajid.",
        "script": "خذ هذا، حبة كل ثمان ساعات، واشرب موية واجد.",
        "en": "Take this, one pill every eight hours, and drink lots of water.",
        "gloss": {
         "khudh": "take",
         "haadha": "this",
         "habba": "pill",
         "kill": "every",
         "thamaan": "eight",
         "saa'aat": "hours",
         "w": "and",
         "ishrab": "drink",
         "mooya": "water (Gulf)",
         "waajid": "a lot (Gulf)"
        }
       },
       {
        "who": "You",
        "text": "Zeen, bi-kam?",
        "script": "زين، بكم؟",
        "en": "OK, how much?",
        "gloss": {
         "zeen": "good, OK",
         "bi-kam": "for how much",
         "kam": "how much"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Ashara riyaal. Allah yishfiik!",
        "script": "عشرة ريال. الله يشفيك!",
        "en": "Ten riyals. Get well soon!",
        "gloss": {
         "ashara": "ten",
         "riyaal": "riyals",
         "allah": "God",
         "yishfiik": "may (He) heal you"
        }
       }
      ]
     },
     {
      "topic": "Changing plans",
      "situation": "Voice notes with a friend in Beirut",
      "region": "Lebanon",
      "lines": [
       {
        "who": "Friend",
        "text": "Marhaba! Bukra mnitla' sawa, sah?",
        "script": "مرحبا! بكرا منطلع سوا، صح؟",
        "en": "Hi! We're going out together tomorrow, right?",
        "gloss": {
         "marhaba": "hello",
         "bukra": "tomorrow",
         "mnitla": "we go out (Lebanon)",
         "sawa": "together",
         "sah": "right"
        }
       },
       {
        "who": "You",
        "text": "Ya reet, bas tili'li shighl bukra. Fiina na'mela ba'd bukra?",
        "script": "يا ريت، بس طلعلي شغل بكرا. فينا نعملها بعد بكرا؟",
        "en": "I wish, but some work's come up tomorrow. Can we do it the day after?",
        "gloss": {
         "ya": "oh",
         "reet": "wish (ya reet: I wish)",
         "bas": "but",
         "tili'li": "came up for me",
         "shighl": "work",
         "bukra": "tomorrow",
         "fiina": "we can (Lebanon)",
         "na'mela": "we do it"
        }
       },
       {
        "who": "Friend",
        "text": "Akiid, ma fi mushkle. Ayya saa'a?",
        "script": "أكيد، ما في مشكلة. أيّا ساعة؟",
        "en": "Sure, no problem. What time?",
        "gloss": {
         "akiid": "sure, of course",
         "ma": "not",
         "mushkle": "problem (Lebanon)",
         "ayya": "which",
         "saa'a": "hour, time"
        }
       },
       {
        "who": "You",
        "text": "Shi sab'a, iza bi-zabbit ma'ak.",
        "script": "شي سبعة، إذا بيزبط معك.",
        "en": "Around seven, if that works for you.",
        "gloss": {
         "shi": "some, around (Lebanon)",
         "sab'a": "seven",
         "iza": "if",
         "bi-zabbit": "it works, suits (Lebanon)",
         "zabbit": "works out",
         "ma'ak": "with you"
        }
       },
       {
        "who": "Friend",
        "text": "Tamaam, bi-zabbit. Yalla, bshuufak!",
        "script": "تمام، بيزبط. يلا، بشوفك!",
        "en": "Great, that works. Right, see you!",
        "gloss": {
         "tamaam": "great, fine",
         "bi-zabbit": "it works",
         "zabbit": "works out",
         "yalla": "come on, right then",
         "bshuufak": "I'll see you"
        }
       },
       {
        "who": "You",
        "text": "Yalla, salaam!",
        "script": "يلا، سلام!",
        "en": "OK, bye!",
        "gloss": {
         "yalla": "OK then",
         "salaam": "bye (lit. peace)"
        }
       }
      ]
     }
    ]
   },
   "vocab": [
    {
     "word": "zeen",
     "wordScript": "زين",
     "pos": "adjective",
     "region": "Saudi",
     "ties": 1,
     "meaning": "good, nice; OK",
     "note": "Used across the Gulf. Egyptian: kwayyis; Lebanese: mniih; MSA: jayyid. On its own it means 'OK, fine'.",
     "example": "Al-makaan zeen, khallna nruuh nshuuf al-nuquush.",
     "exScript": "المكان زين، خلنا نروح نشوف النقوش.",
     "exampleEn": "The place is nice, let's go and see the inscriptions.",
     "exGloss": {
      "al-makaan": "the place",
      "zeen": "nice, good",
      "khallna": "let's",
      "nruuh": "we go",
      "nshuuf": "we see",
      "al-nuquush": "the inscriptions"
     }
    },
    {
     "word": "kamaan",
     "wordScript": "كمان",
     "pos": "adverb",
     "region": "Egypt",
     "ties": 2,
     "meaning": "also, too; more",
     "note": "Same word in Lebanon. Saudi often says ba'd (ana ba'd, me too); MSA: aydan. «Kamaan waahid» = one more.",
     "example": "Il-hisn da adiim awi, w fiih beyuut kamaan.",
     "exScript": "الحصن ده قديم أوي، وفيه بيوت كمان.",
     "exampleEn": "This fort is really old, and there are houses in it too.",
     "exGloss": {
      "il-hisn": "the fort",
      "da": "this (Egypt)",
      "adiim": "old (Egypt drops q)",
      "awi": "very (Egypt)",
      "w": "and",
      "fiih": "there is, in it",
      "beyuut": "houses",
      "kamaan": "too"
     }
    }
   ],
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "The Beirut juice seller asks «Shu baddak?». What does it mean?",
     "options": [
      "What would you like?",
      "What's your name?",
      "How much?",
      "Where are you from?"
     ],
     "answer": 0,
     "why": "Shu is Lebanese 'what' and baddak 'you want': 'what do you want?', the everyday way to take an order.",
     "lesson": "Baddak changes with who's talking: baddi 'I want', baddak to a man, baddik to a woman. Learners who only memorised baddi often don't recognise it as the same word."
    },
    {
     "level": "A2",
     "ref": "vocab2",
     "q": "«Il-hisn da adiim awi, w fiih beyuut kamaan.» What does «kamaan» mean?",
     "options": [
      "only",
      "also, too",
      "still",
      "very"
     ],
     "answer": 1,
     "why": "Kamaan is Egyptian (and Lebanese) for 'also, too': there are houses in the fort too.",
     "lesson": "It comes at the end of the sentence where English might put 'still' or 'very', so learners guess an intensifier; the 'very' here is awi, and kamaan just adds something."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Fi al-saydaliyya qaala al-saydalii «Salaamtak!». Maa ma'naahaa?",
     "options": [
      "Ma'a al-salaama, ilaa al-liqaa'",
      "Atamannaa laka al-shifaa'",
      "Ahlan wa sahlan bika",
      "Kam al-thaman?"
     ],
     "answer": 1,
     "why": "«Salaamtak» tuqaalu li-l-mariid: atamannaa laka al-salaama min al-marad.",
     "lesson": "Al-kalima min jadhr «salaam» mithla «ma'a al-salaama», fa-yazunnu al-muta'allim annahaa tahiyyat wadaa'; laakinnahaa du'aa' li-man huwa ta'baan."
    },
    {
     "level": "B2",
     "ref": "vocab1",
     "q": "Fi al-lahja al-Su'uudiyya, maa ma'naa «zeen» fi «al-makaan zeen»?",
     "options": [
      "Waasi'",
      "Ba'iid",
      "Jayyid, hasan",
      "Qadiim"
     ],
     "answer": 2,
     "why": "«Zeen» fi al-Khaliij ya'ni jayyid aw hasan, wa tuqaalu wahdahaa bi-ma'naa «tayyib, muwaafiq».",
     "lesson": "Fi al-fushaa «zayyana» ya'ni jammala, fa-yazunnu ba'd al-muta'allimiin anna «zeen» tasif al-shakl faqat; laakinnahaa fi al-kalaam al-yawmii kalimat istihsaan aamma."
    },
    {
     "level": "C1",
     "ref": "news1",
     "q": "Maa ma'naa «al-sijill al-watanii lil-athaar» fi al-khabar al-awwal?",
     "options": [
      "Mathaf watanii",
      "Kitaab taariikh madrasii",
      "Hay'a li-l-siyaaha",
      "Qaa'ima rasmiyya tuwaththiq al-mawaaqi' al-athariyya"
     ],
     "answer": 3,
     "why": "Al-sijill qaa'ima rasmiyya; idaafat al-mawqi' ilayhi ya'ni tawthiiquhu wa-l-i'tiraaf bihi.",
     "lesson": "Kalimat «watanii» tuuhii bi-l-mathaf al-watanii, fa-yakhtaaruhu al-ba'd; laakin al-sijill laa yu'rad fiihi shay', innamaa yudawwan fiihi."
    },
    {
     "level": "C2",
     "ref": "news2",
     "q": "Fi «haythu zahara mujamma' sakanii dakhm», maa wazifat «haythu»?",
     "options": [
      "Tadullu ala al-makaan: fi al-hisn nafsihi",
      "Tadullu ala al-zaman: indamaa",
      "Tadullu ala al-sabab: li-anna",
      "Tadullu ala al-shart: idhaa"
     ],
     "answer": 0,
     "why": "«Haythu» hunaa zarf makaan: fi al-hisn nafsihi zahara al-mujamma'.",
     "lesson": "Fi al-kitaaba al-sahafiyya tusta'malu «haythu» kathiiran li-l-ta'liil (haythu inna…), fa-yakhtaar al-muta'allim «li-anna»; laakinnahaa hunaa ta'uudu ala al-makaan."
    }
   ],
   "tip": {
    "title": "My, your: endings, not words",
    "text": "Arabic puts 'my' and 'your' on the end of the word: «raasi», my head; «salaamtak», your safety. -i means 'my', -ak 'your' to a man, -ik 'your' to a woman. 'Want' works the same way in Lebanon: «baddi», I want (literally 'my wish'), «baddak», you want."
   },
   "fun": {
    "kind": "joke",
    "region": "Egypt",
    "text": "Il-mudarris: Leeh gayy mit'akhkhar? Il-tilmiiz: Ashaan il-yafta ala il-tarii' bit'uul «Madrasa, hadda il-sur'a»!",
    "script": "المدرس: ليه جاي متأخر؟ التلميذ: عشان اليافطة على الطريق بتقول «مدرسة، هدّي السرعة»!",
    "gloss": {
     "il-mudarris": "the teacher",
     "leeh": "why (Egypt)",
     "gayy": "coming",
     "mit'akhkhar": "late",
     "il-tilmiiz": "the pupil",
     "ashaan": "because (Egypt)",
     "il-yafta": "the sign",
     "il-tarii": "the road",
     "bit'uul": "says",
     "madrasa": "school",
     "hadda": "slow down",
     "il-sur'a": "the speed"
    },
    "literal": "Teacher: Why are you coming in late? Pupil: Because the sign on the road says 'School, slow down'!",
    "meaning": "The pupil takes a road sign meant for drivers as an order for himself.",
    "culture": "Egyptian humour loves the cheeky pupil who outwits the teacher with a literal reading; jokes like this are swapped in classrooms and family WhatsApp groups. Note the Egyptian sounds: gayy with a hard g, and 'tarii'' and 'bit'uul' where other dialects keep the q."
   }
  },
  "zh": {
   "news": [
    {
     "topic": "Jīngjì · Běijīng",
     "source": "https://www.bloomberg.com/news/articles/2026-10-10/china-s-ndrc-pledges-more-policy-tools-to-meet-economic-targets",
     "levels": {
      "A": {
       "text": "Zhōngguó yào gěi jīngjì gèng duō zhīchí.",
       "script": "中国要给经济更多支持。",
       "en": "China wants to give the economy more support.",
       "gloss": {
        "yào": "wants to / will",
        "gěi": "give",
        "jīngjì": "economy",
        "gèng": "even more",
        "duō": "many / much",
        "zhīchí": "support"
       }
      },
      "B": {
       "text": "Guójiā Fāgǎiwěi shuō, jīnnián huì zhǔnbèi gèng duō zhèngcè gōngjù, bāngzhù jīngjì dádào mùbiāo.",
       "script": "国家发改委说，今年会准备更多政策工具，帮助经济达到目标。",
       "en": "China's National Development and Reform Commission said it will prepare more policy tools this year to help the economy reach its targets.",
       "gloss": {
        "guójiā": "national / state",
        "fāgǎiwěi": "Development and Reform Commission (short name)",
        "shuō": "said",
        "jīnnián": "this year",
        "zhǔnbèi": "prepare",
        "gèng": "even more",
        "duō": "many",
        "zhèngcè": "policy",
        "gōngjù": "tools",
        "bāngzhù": "help",
        "jīngjì": "economy",
        "dádào": "reach",
        "mùbiāo": "target"
       }
      },
      "C": {
       "text": "Guójiā Fāzhǎn hé Gǎigé Wěiyuánhuì zhǔrèn Zhèng Shānjié biǎoshì, jiāng jiādà nìzhōuqī tiáojié lìdù, chǔbèi gèng duō zēngliàng zhèngcè gōngjù, bìng jiākuài tuījìn zhòngdà xiàngmù yǐ kuòdà nèixū.",
       "script": "国家发展和改革委员会主任郑栅洁表示，将加大逆周期调节力度，储备更多增量政策工具，并加快推进重大项目以扩大内需。",
       "en": "Zheng Shanjie, head of the National Development and Reform Commission, said China will step up counter-cyclical support, hold more new policy tools in reserve and speed up major projects to expand domestic demand.",
       "gloss": {
        "guójiā": "national",
        "fāzhǎn": "development",
        "gǎigé": "reform",
        "wěiyuánhuì": "commission",
        "zhǔrèn": "head / director",
        "biǎoshì": "stated",
        "jiāng": "will (formal)",
        "jiādà": "increase",
        "nìzhōuqī": "counter-cyclical",
        "tiáojié": "adjustment",
        "lìdù": "strength / intensity",
        "chǔbèi": "hold in reserve",
        "gèng": "even more",
        "duō": "many",
        "zēngliàng": "incremental / additional",
        "zhèngcè": "policy",
        "gōngjù": "tools",
        "bìng": "and also",
        "jiākuài": "speed up",
        "tuījìn": "push forward",
        "zhòngdà": "major",
        "xiàngmù": "projects",
        "yǐ": "in order to",
        "kuòdà": "expand",
        "nèixū": "domestic demand"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Paying and numbers",
      "situation": "Paying at a noodle shop",
      "lines": [
       {
        "who": "You",
        "text": "Lǎobǎn, duōshao qián?",
        "script": "老板，多少钱？",
        "en": "Excuse me (boss), how much is it?",
        "gloss": {
         "lǎobǎn": "boss (how you address a shop owner)",
         "duōshao": "how much",
         "qián": "money"
        }
       },
       {
        "who": "Owner",
        "text": "Yì wǎn niúròu miàn, èrshíbā kuài.",
        "script": "一碗牛肉面，二十八块。",
        "en": "One bowl of beef noodles, twenty-eight yuan.",
        "gloss": {
         "wǎn": "bowl",
         "niúròu": "beef",
         "miàn": "noodles",
         "èrshíbā": "twenty-eight",
         "kuài": "yuan (spoken)"
        }
       },
       {
        "who": "You",
        "text": "Kěyǐ yòng Wēixìn ma?",
        "script": "可以用微信吗？",
        "en": "Can I pay with WeChat?",
        "gloss": {
         "yòng": "use",
         "wēixìn": "WeChat"
        }
       },
       {
        "who": "Owner",
        "text": "Kěyǐ, nín sǎo zhège.",
        "script": "可以，您扫这个。",
        "en": "Sure, scan this.",
        "gloss": {
         "nín": "you (polite)",
         "sǎo": "scan"
        }
       },
       {
        "who": "You",
        "text": "Hǎo le, xièxie!",
        "script": "好了，谢谢！",
        "en": "Done, thanks!",
        "gloss": {
         "hǎo": "good / done",
         "xièxie": "thank you"
        }
       },
       {
        "who": "Owner",
        "text": "Màn zǒu!",
        "script": "慢走！",
        "en": "Take care! (lit. walk slowly)",
        "gloss": {
         "màn": "slowly",
         "zǒu": "walk / go"
        }
       }
      ]
     },
     {
      "topic": "Family",
      "situation": "A new friend asks about your family",
      "lines": [
       {
        "who": "Friend",
        "text": "Nǐ jiā yǒu jǐ kǒu rén?",
        "script": "你家有几口人？",
        "en": "How many people are in your family?",
        "gloss": {
         "jiā": "family / home",
         "jǐ": "how many",
         "kǒu": "measure word for family members (lit. mouth)"
        }
       },
       {
        "who": "You",
        "text": "Sì kǒu: bàba, māma, gēge hé wǒ.",
        "script": "四口：爸爸、妈妈、哥哥和我。",
        "en": "Four: dad, mum, my older brother and me.",
        "gloss": {
         "sì": "four",
         "kǒu": "measure word for family members",
         "bàba": "dad",
         "māma": "mum",
         "gēge": "older brother"
        }
       },
       {
        "who": "Friend",
        "text": "Nǐ gēge zuò shénme gōngzuò?",
        "script": "你哥哥做什么工作？",
        "en": "What does your brother do?",
        "gloss": {
         "gēge": "older brother",
         "zuò": "do",
         "shénme": "what",
         "gōngzuò": "job / work"
        }
       },
       {
        "who": "You",
        "text": "Tā shì lǎoshī, zài Chéngdū.",
        "script": "他是老师，在成都。",
        "en": "He's a teacher, in Chengdu.",
        "gloss": {
         "lǎoshī": "teacher"
        }
       },
       {
        "who": "Friend",
        "text": "Zhēn hǎo!",
        "script": "真好！",
        "en": "How nice!",
        "gloss": {
         "zhēn": "really",
         "hǎo": "good"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "At the pharmacy",
      "situation": "You have a sore throat and go to a chemist",
      "lines": [
       {
        "who": "Pharmacist",
        "text": "Nín hǎo, nǎr bù shūfu?",
        "script": "您好，哪儿不舒服？",
        "en": "Hello, what's bothering you?",
        "gloss": {
         "nín": "you (polite)",
         "hǎo": "good",
         "nǎr": "where",
         "shūfu": "comfortable / well"
        }
       },
       {
        "who": "You",
        "text": "Wǒ zhè liǎng tiān hóulóng tòng, hái yǒudiǎnr késou.",
        "script": "我这两天喉咙痛，还有点儿咳嗽。",
        "en": "My throat's been sore the last couple of days, and I've got a bit of a cough.",
        "gloss": {
         "liǎng": "two",
         "tiān": "days",
         "hóulóng": "throat",
         "tòng": "sore / painful",
         "yǒudiǎnr": "a bit",
         "késou": "cough"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Fāshāo ma?",
        "script": "发烧吗？",
        "en": "Any fever?",
        "gloss": {
         "fāshāo": "have a fever"
        }
       },
       {
        "who": "You",
        "text": "Méi fāshāo, jiù shì sǎngzi bú tài shūfu.",
        "script": "没发烧，就是嗓子不太舒服。",
        "en": "No fever, it's just my throat that's not great.",
        "gloss": {
         "méi": "not (have)",
         "fāshāo": "fever",
         "sǎngzi": "throat (everyday word)",
         "tài": "too / very",
         "shūfu": "comfortable"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Nà nín shìshi zhège hóupiàn, yì tiān sān cì, yí cì liǎng piàn.",
        "script": "那您试试这个喉片，一天三次，一次两片。",
        "en": "Then try these throat lozenges, three times a day, two at a time.",
        "gloss": {
         "nín": "you (polite)",
         "shìshi": "try",
         "hóupiàn": "throat lozenges",
         "tiān": "day",
         "sān": "three",
         "cì": "times",
         "liǎng": "two",
         "piàn": "tablets"
        }
       },
       {
        "who": "You",
        "text": "Xíng, wǒ jiù yào zhège ba. Néng shuā yībǎo ma?",
        "script": "行，我就要这个吧。能刷医保吗？",
        "en": "OK, I'll take these. Can I pay with my medical insurance card?",
        "gloss": {
         "xíng": "OK",
         "yào": "want / take",
         "néng": "can",
         "shuā": "swipe",
         "yībǎo": "medical insurance (card)"
        }
       },
       {
        "who": "Pharmacist",
        "text": "Kěyǐ, nín bǎ kǎ gěi wǒ.",
        "script": "可以，您把卡给我。",
        "en": "Yes, give me the card.",
        "gloss": {
         "nín": "you (polite)",
         "bǎ": "(puts the object before the verb)",
         "kǎ": "card",
         "gěi": "give"
        }
       }
      ]
     },
     {
      "topic": "Chatting with a neighbour",
      "situation": "You meet your neighbour at the gate of your housing compound",
      "lines": [
       {
        "who": "Neighbour",
        "text": "Ēi, chī le ma?",
        "script": "欸，吃了吗？",
        "en": "Hey, have you eaten?",
        "gloss": {
         "ēi": "hey",
         "chī": "eat"
        }
       },
       {
        "who": "You",
        "text": "Hái méi ne, gāng xiàbān. Nín ne?",
        "script": "还没呢，刚下班。您呢？",
        "en": "Not yet, I've just finished work. You?",
        "gloss": {
         "méi": "not yet",
         "gāng": "just",
         "xiàbān": "finish work",
         "nín": "you (polite)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Wǒ gāng mǎi cài huílai. Duì le, míngtiān xiǎoqū tíng shuǐ, nǐ zhīdao ma?",
        "script": "我刚买菜回来。对了，明天小区停水，你知道吗？",
        "en": "I've just got back from buying groceries. Oh right, the water's off in the compound tomorrow, did you know?",
        "gloss": {
         "gāng": "just",
         "mǎi": "buy",
         "cài": "vegetables / groceries",
         "huílai": "come back",
         "duì": "right",
         "xiǎoqū": "housing compound",
         "tíng": "stop",
         "shuǐ": "water",
         "zhīdao": "know"
        }
       },
       {
        "who": "You",
        "text": "Á? Tíng duō jiǔ a?",
        "script": "啊？停多久啊？",
        "en": "What? For how long?",
        "gloss": {
         "á": "huh? what?",
         "tíng": "stop",
         "duō": "how",
         "jiǔ": "long (time)",
         "a": "(softening particle)"
        }
       },
       {
        "who": "Neighbour",
        "text": "Tīngshuō shàngwǔ shí diǎn dào xiàwǔ sì diǎn.",
        "script": "听说上午十点到下午四点。",
        "en": "Apparently from ten in the morning to four in the afternoon.",
        "gloss": {
         "tīngshuō": "I hear / apparently",
         "shàngwǔ": "morning",
         "shí": "ten",
         "diǎn": "o'clock",
         "dào": "to",
         "xiàwǔ": "afternoon",
         "sì": "four"
        }
       },
       {
        "who": "You",
        "text": "Xíng, nà wǒ jīntiān wǎnshang xiān jiē diǎnr shuǐ. Xièxie nín a!",
        "script": "行，那我今天晚上先接点儿水。谢谢您啊！",
        "en": "OK, then I'll store some water tonight. Thanks!",
        "gloss": {
         "xíng": "OK",
         "wǎnshang": "evening",
         "xiān": "first / beforehand",
         "jiē": "collect (water)",
         "diǎnr": "a bit",
         "shuǐ": "water",
         "xièxie": "thank",
         "nín": "you (polite)",
         "a": "(friendly particle)"
        }
       }
      ]
     }
    ]
   },
   "quote": {
    "text": "Xué ér bù sī zé wǎng, sī ér bù xué zé dài.",
    "script": "学而不思则罔，思而不学则殆。",
    "en": "Learning without thinking leaves you lost; thinking without learning leaves you in danger.",
    "gloss": {
     "xué": "learn",
     "ér": "but / and",
     "sī": "think",
     "zé": "then",
     "wǎng": "confused, lost",
     "dài": "in danger"
    },
    "who": "Kǒngzǐ (Confucius)",
    "when": "5th century BC",
    "about": "Confucius, China's most influential teacher, said this in the Analects; it is still the classic Chinese argument that study and reflection need each other, and teachers quote it to pupils today."
   },
   "lit": {
    "text": "Yù qióng qiān lǐ mù, gèng shàng yì céng lóu.",
    "script": "欲穷千里目，更上一层楼。",
    "en": "If you want to see a thousand li further, climb one more storey.",
    "gloss": {
     "yù": "wish to",
     "qióng": "reach the end of",
     "qiān": "thousand",
     "lǐ": "li (Chinese mile)",
     "mù": "eye / sight",
     "gèng": "further",
     "shàng": "climb",
     "céng": "storey",
     "lóu": "tower / building"
    },
    "author": "Wáng Zhīhuàn",
    "work": "Dēng Guànquè Lóu (On Stork Tower)",
    "when": "8th century (Tang dynasty)",
    "about": "The closing couplet of a four-line Tang poem about climbing a tower above the Yellow River; children learn it by heart and its last line has become an everyday wish to go one step further."
   },
   "vocab": {
    "A": [
     {
      "word": "duōshao qián",
      "wordScript": "多少钱",
      "pos": "phrase",
      "region": "general",
      "ties": "phrase1",
      "meaning": "how much (does it cost)?",
      "note": "The question you'll use most when shopping. Kuài is the spoken word for yuan.",
      "example": "Zhè bēi nǎichá duōshao qián?",
      "exScript": "这杯奶茶多少钱？",
      "exampleEn": "How much is this cup of milk tea?",
      "exGloss": {
       "bēi": "cup",
       "nǎichá": "milk tea",
       "duōshao": "how much",
       "qián": "money"
      }
     },
     {
      "word": "gōngzuò",
      "wordScript": "工作",
      "pos": "noun / verb",
      "region": "general",
      "ties": "phrase2",
      "meaning": "job; to work",
      "note": "The same word is the noun and the verb: zuò shénme gōngzuò? is 'what job do you do?'",
      "example": "Wǒ māma zài yīyuàn gōngzuò.",
      "exScript": "我妈妈在医院工作。",
      "exampleEn": "My mum works at a hospital.",
      "exGloss": {
       "māma": "mum",
       "yīyuàn": "hospital",
       "gōngzuò": "works"
      }
     }
    ],
    "B": [
     {
      "word": "bù shūfu",
      "wordScript": "不舒服",
      "pos": "phrase",
      "region": "general",
      "ties": "phrase1",
      "meaning": "not feeling well, uncomfortable",
      "note": "The polite, vague way to say you're ill; nobody will ask for details.",
      "example": "Wǒ jīntiān yǒudiǎnr bù shūfu, xiǎng qǐngjià.",
      "exScript": "我今天有点儿不舒服，想请假。",
      "exampleEn": "I'm not feeling too well today, I'd like to take the day off.",
      "exGloss": {
       "yǒudiǎnr": "a bit",
       "shūfu": "well / comfortable",
       "xiǎng": "would like to",
       "qǐngjià": "ask for leave"
      }
     },
     {
      "word": "zhèngcè",
      "wordScript": "政策",
      "pos": "noun",
      "region": "general",
      "ties": "news",
      "meaning": "policy",
      "note": "Very common in everyday talk: people discuss the latest 'new policy' on housing, cars or subsidies.",
      "example": "Xīn zhèngcè chūlai le, dàjiā dōu zài tǎolùn.",
      "exScript": "新政策出来了，大家都在讨论。",
      "exampleEn": "The new policy is out and everyone's talking about it.",
      "exGloss": {
       "xīn": "new",
       "zhèngcè": "policy",
       "chūlai": "come out",
       "dàjiā": "everyone",
       "tǎolùn": "discuss"
      }
     }
    ],
    "C": [
     {
      "word": "gèng shàng yì céng lóu",
      "wordScript": "更上一层楼",
      "pos": "idiom",
      "region": "general",
      "ties": "lit",
      "meaning": "to go one step further, do even better",
      "note": "From the Tang poem; today it's a stock phrase of encouragement in speeches, exams and sport.",
      "example": "Zhè cì kǎo de bú cuò, xià cì zài gèng shàng yì céng lóu!",
      "exScript": "这次考得不错，下次再更上一层楼！",
      "exampleEn": "You did well in this exam; next time go one step further!",
      "exGloss": {
       "cì": "time",
       "kǎo": "take an exam",
       "cuò": "wrong (bú cuò = not bad)",
       "xià": "next",
       "zài": "again",
       "gèng": "further",
       "shàng": "climb",
       "céng": "storey",
       "lóu": "tower"
      }
     },
     {
      "word": "jiādà lìdù",
      "wordScript": "加大力度",
      "pos": "phrase",
      "region": "general",
      "ties": "news",
      "meaning": "to step up efforts, push harder",
      "note": "Officialese that has leaked into office talk, often said with a sigh or a wink.",
      "example": "Lǎobǎn shuō jīnnián yào jiādà lìdù, wǒmen yòu yào jiābān le.",
      "exScript": "老板说今年要加大力度，我们又要加班了。",
      "exampleEn": "The boss says we're stepping things up this year, so it's overtime again.",
      "exGloss": {
       "lǎobǎn": "boss",
       "shuō": "says",
       "jīnnián": "this year",
       "yào": "will",
       "jiādà": "increase",
       "lìdù": "effort / intensity",
       "yòu": "again",
       "jiābān": "work overtime"
      }
     }
    ]
   },
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "At the noodle shop you ask 'Duōshao qián?'. What are you asking?",
     "options": [
      "How much is it?",
      "Where is it?",
      "How many bowls?",
      "What time is it?"
     ],
     "answer": 0,
     "why": "Duōshao means 'how much' and qián means 'money', so you're asking the price.",
     "lesson": "Duōshao also counts things, which tempts people to read it as 'how many bowls'; with qián after it, it's always about price."
    },
    {
     "level": "A2",
     "ref": "news",
     "q": "In the headline 'Zhōngguó yào gěi jīngjì gèng duō zhīchí', what does China want to give the economy?",
     "options": [
      "Less money",
      "A new name",
      "More support",
      "More holidays"
     ],
     "answer": 2,
     "why": "Gèng duō zhīchí means 'more support'.",
     "lesson": "Gěi (give) comes before the receiver, jīngjì, and the thing given comes last; learners sometimes take the last word for the receiver."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Yàojìshī shuō 'yì tiān sān cì, yí cì liǎng piàn'. Yì tiān yígòng chī jǐ piàn?",
     "options": [
      "Liǎng piàn",
      "Sān piàn",
      "Wǔ piàn",
      "Liù piàn"
     ],
     "answer": 3,
     "why": "Sān cì (three times) × liǎng piàn (two tablets) = liù piàn, six a day.",
     "lesson": "Learners often add the numbers (2+3=5) because they hear them side by side; cì is 'times', so it multiplies."
    },
    {
     "level": "B2",
     "ref": "phrase2",
     "q": "Línjū shuō 'míngtiān xiǎoqū tíng shuǐ'. Zhè shì shénme yìsi?",
     "options": [
      "Shuǐ hěn guì",
      "Míngtiān méiyǒu shuǐ",
      "Shuǐ hěn rè",
      "Yào mǎi shuǐ"
     ],
     "answer": 1,
     "why": "Tíng means 'stop', so tíng shuǐ is a water cut: no water tomorrow.",
     "lesson": "Tíng is best known from tíngchē (parking), so it's easy to miss that here it means the supply is switched off; tíng diàn is a power cut."
    },
    {
     "level": "C1",
     "ref": "lit",
     "q": "'Yù qióng qiān lǐ mù, gèng shàng yì céng lóu' de yìsi shì shénme?",
     "options": [
      "Lóu tài gāo, bù yīnggāi shàngqu",
      "Qiān lǐ zhī wài yǒu yí zuò lóu",
      "Xiǎng kàn de gèng yuǎn, jiù yào zài shàng yì céng",
      "Shīrén zhù zài lóu shàng"
     ],
     "answer": 2,
     "why": "Yù qióng qiān lǐ mù: to see to the end of a thousand li; gèng shàng yì céng lóu: climb one more storey. To see further, go higher.",
     "lesson": "Qiān lǐ looks like a distance to a place, so people imagine a tower far away; here it measures how far the eye can see."
    },
    {
     "level": "C2",
     "ref": "quote",
     "q": "Kǒngzǐ shuō 'xué ér bù sī zé wǎng'. Zhǐ xué bù sī huì zěnmeyàng?",
     "options": [
      "Huì míhu, nòng bù qīngchu",
      "Huì hěn wēixiǎn",
      "Huì xué de gèng kuài",
      "Huì wàngjì lǎoshī"
     ],
     "answer": 0,
     "why": "Wǎng means confused or lost: learning without thinking leaves you muddled.",
     "lesson": "Dài (danger) is the result of the other half, thinking without learning; the two halves mirror each other, so they're easy to swap."
    }
   ],
   "tip": {
    "title": "Le: something has changed",
    "text": "At the end of a sentence, le often marks a new situation rather than the past. Xià yǔ le (下雨了) means 'It's started raining'; Wǒ bú è le (我不饿了) means 'I'm not hungry any more'. Think 'now, unlike before' rather than 'past tense'."
   },
   "fun": {
    "kind": "saying",
    "region": "general",
    "text": "Yì fēn qián yì fēn huò.",
    "script": "一分钱一分货。",
    "gloss": {
     "fēn": "fen (a cent)",
     "qián": "money",
     "huò": "goods"
    },
    "literal": "One cent of money, one cent of goods.",
    "meaning": "You get what you pay for.",
    "culture": "Shopkeepers say it to justify a higher price, and shoppers say it ruefully when a bargain falls apart; it's a market-stall philosophy everyone in China knows."
   }
  },
  "ru": {
   "news": [
    {
     "topic": "Ekonomika · Rossiya",
     "source": "https://ria.ru/20261005/minfin-2122318590.html",
     "levels": {
      "A": {
       "text": "Minfin pokupayet bolshe valyuty i zolota.",
       "script": "Минфин покупает больше валюты и золота.",
       "en": "The Finance Ministry is buying more foreign currency and gold.",
       "gloss": {
        "minfin": "Finance Ministry",
        "pokupayet": "is buying",
        "bolshe": "more",
        "valyuty": "foreign currency",
        "zolota": "gold"
       }
      },
      "B": {
       "text": "Minfin obyavil, chto s 7 oktyabrya po 6 noyabrya kupit valyutu i zoloto na 279 milliardov rubley.",
       "script": "Минфин объявил, что с 7 октября по 6 ноября купит валюту и золото на 279 миллиардов рублей.",
       "en": "The Finance Ministry announced that from 7 October to 6 November it will buy foreign currency and gold worth 279 billion roubles.",
       "gloss": {
        "minfin": "Finance Ministry",
        "obyavil": "announced",
        "oktyabrya": "of October",
        "noyabrya": "of November",
        "kupit": "will buy",
        "valyutu": "foreign currency",
        "zoloto": "gold",
        "milliardov": "billion",
        "rubley": "roubles"
       }
      },
      "C": {
       "text": "Minfin rezko narastit pokupki valyuty i zolota po byudzhetnomu pravilu, do 12,7 milliarda rubley v den, i analitiki zhdut davleniya na rubl.",
       "script": "Минфин резко нарастит покупки валюты и золота по бюджетному правилу, до 12,7 миллиарда рублей в день, и аналитики ждут давления на рубль.",
       "en": "The Finance Ministry will sharply step up its purchases of currency and gold under the budget rule, to 12.7 billion roubles a day, and analysts expect pressure on the rouble.",
       "gloss": {
        "minfin": "Finance Ministry",
        "rezko": "sharply",
        "narastit": "will step up",
        "pokupki": "purchases",
        "valyuty": "of foreign currency",
        "zolota": "of gold",
        "byudzhetnomu": "budget (adj.)",
        "pravilu": "rule",
        "milliarda": "billion",
        "rubley": "roubles",
        "den": "day",
        "analitiki": "analysts",
        "zhdut": "expect",
        "davleniya": "pressure",
        "rubl": "rouble"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Time and days",
      "situation": "Asking a passer-by outside a museum",
      "region": "Moskva",
      "lines": [
       {
        "who": "You",
        "text": "Izvinite, skolko seychas vremeni?",
        "script": "Извините, сколько сейчас времени?",
        "en": "Excuse me, what time is it?",
        "gloss": {
         "izvinite": "excuse me",
         "skolko": "how much",
         "seychas": "now",
         "vremeni": "time"
        }
       },
       {
        "who": "Passer-by",
        "text": "Rovno tri.",
        "script": "Ровно три.",
        "en": "Three o'clock exactly.",
        "gloss": {
         "rovno": "exactly",
         "tri": "three"
        }
       },
       {
        "who": "You",
        "text": "A muzey segodnya rabotayet?",
        "script": "А музей сегодня работает?",
        "en": "And is the museum open today?",
        "gloss": {
         "muzey": "museum",
         "rabotayet": "is open (lit. works)"
        }
       },
       {
        "who": "Passer-by",
        "text": "Net, v ponedelnik vykhodnoy. Prikhodite zavtra.",
        "script": "Нет, в понедельник выходной. Приходите завтра.",
        "en": "No, Monday is its day off. Come tomorrow.",
        "gloss": {
         "ponedelnik": "Monday",
         "vykhodnoy": "day off",
         "prikhodite": "come"
        }
       },
       {
        "who": "You",
        "text": "Spasibo!",
        "script": "Спасибо!",
        "en": "Thank you!",
        "gloss": {
         "spasibo": "thank you"
        }
       }
      ]
     },
     {
      "topic": "Shopping",
      "situation": "Buying bread and milk at a corner shop",
      "lines": [
       {
        "who": "Shop assistant",
        "text": "Zdravstvuyte! Chto vam?",
        "script": "Здравствуйте! Что вам?",
        "en": "Hello! What can I get you?",
        "gloss": {
         "zdravstvuyte": "hello",
         "vam": "to you"
        }
       },
       {
        "who": "You",
        "text": "Mne odin baton i pol-litra moloka, pozhaluysta.",
        "script": "Мне один батон и пол-литра молока, пожалуйста.",
        "en": "A loaf and half a litre of milk, please.",
        "gloss": {
         "mne": "to me (I'd like)",
         "odin": "one",
         "baton": "loaf (long white loaf)",
         "pol-litra": "half a litre",
         "moloka": "of milk",
         "pozhaluysta": "please"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Paket nuzhen?",
        "script": "Пакет нужен?",
        "en": "Do you need a bag?",
        "gloss": {
         "paket": "(plastic) bag",
         "nuzhen": "needed"
        }
       },
       {
        "who": "You",
        "text": "Net, spasibo. Kartoy mozhno?",
        "script": "Нет, спасибо. Картой можно?",
        "en": "No, thanks. Can I pay by card?",
        "gloss": {
         "spasibo": "thanks",
         "kartoy": "by card",
         "mozhno": "is it possible"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Konechno. Sto dvadtsat rubley.",
        "script": "Конечно. Сто двадцать рублей.",
        "en": "Of course. A hundred and twenty roubles.",
        "gloss": {
         "konechno": "of course",
         "sto": "hundred",
         "dvadtsat": "twenty",
         "rubley": "roubles"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Flat problems",
      "situation": "Phoning your landlady about the washing machine",
      "lines": [
       {
        "who": "You",
        "text": "Allo, Irina Petrovna? Eto Anya iz sorok vtoroy kvartiry.",
        "script": "Алло, Ирина Петровна? Это Аня из сорок второй квартиры.",
        "en": "Hello, Irina Petrovna? It's Anya from flat forty-two.",
        "gloss": {
         "allo": "hello (on the phone)",
         "sorok": "forty",
         "vtoroy": "second",
         "kvartiry": "of the flat"
        }
       },
       {
        "who": "Landlady",
        "text": "Da, Anechka, chto sluchilos?",
        "script": "Да, Анечка, что случилось?",
        "en": "Yes, Anya dear, what's happened?",
        "gloss": {
         "sluchilos": "happened"
        }
       },
       {
        "who": "You",
        "text": "Da tut stiralka opyat slomalas, voda vsya na polu.",
        "script": "Да тут стиралка опять сломалась, вода вся на полу.",
        "en": "Well, the washing machine's broken again, there's water all over the floor.",
        "gloss": {
         "da": "well (filler)",
         "tut": "here",
         "stiralka": "washing machine (colloquial)",
         "opyat": "again",
         "slomalas": "broke",
         "voda": "water",
         "vsya": "all",
         "polu": "floor"
        }
       },
       {
        "who": "Landlady",
        "text": "Oy, blin... Ladno, ya mastera zavtra prishlyu.",
        "script": "Ой, блин... Ладно, я мастера завтра пришлю.",
        "en": "Oh, darn... OK, I'll send a repairman tomorrow.",
        "gloss": {
         "oy": "oh",
         "blin": "darn (lit. pancake)",
         "ladno": "OK",
         "mastera": "repairman",
         "prishlyu": "will send"
        }
       },
       {
        "who": "You",
        "text": "A vo skolko primerno? Ya do shesti na rabote.",
        "script": "А во сколько примерно? Я до шести на работе.",
        "en": "Roughly what time? I'm at work until six.",
        "gloss": {
         "skolko": "how much (vo skolko = at what time)",
         "primerno": "roughly",
         "shesti": "six",
         "rabote": "work"
        }
       },
       {
        "who": "Landlady",
        "text": "Nu, davay posle semi, khorosho?",
        "script": "Ну, давай после семи, хорошо?",
        "en": "Well, let's say after seven, all right?",
        "gloss": {
         "nu": "well",
         "davay": "let's",
         "posle": "after",
         "semi": "seven",
         "khorosho": "all right"
        }
       },
       {
        "who": "You",
        "text": "Dogovorilis, spasibo bolshoye!",
        "script": "Договорились, спасибо большое!",
        "en": "Deal, thanks a lot!",
        "gloss": {
         "dogovorilis": "agreed, deal",
         "spasibo": "thanks",
         "bolshoye": "big"
        }
       }
      ]
     },
     {
      "topic": "Making plans by voice note",
      "situation": "Swapping voice messages with a friend about Saturday",
      "lines": [
       {
        "who": "Masha",
        "text": "Privet! Slushay, ty v subbotu svobodna?",
        "script": "Привет! Слушай, ты в субботу свободна?",
        "en": "Hi! Listen, are you free on Saturday?",
        "gloss": {
         "privet": "hi",
         "slushay": "listen",
         "subbotu": "Saturday",
         "svobodna": "free (said to a woman)"
        }
       },
       {
        "who": "You",
        "text": "Vrode da. A chto?",
        "script": "Вроде да. А что?",
        "en": "I think so. Why?",
        "gloss": {
         "vrode": "seems, I think"
        }
       },
       {
        "who": "Masha",
        "text": "Poshli v kino? Tam novyy film vyshel, govoryat, klassnyy.",
        "script": "Пошли в кино? Там новый фильм вышел, говорят, классный.",
        "en": "Fancy the cinema? There's a new film out, people say it's great.",
        "gloss": {
         "poshli": "let's go",
         "kino": "cinema",
         "novyy": "new",
         "film": "film",
         "vyshel": "came out",
         "govoryat": "they say",
         "klassnyy": "great, cool"
        }
       },
       {
        "who": "You",
        "text": "Davay! Tolko ne rano, ya vysypatsya khochu.",
        "script": "Давай! Только не рано, я высыпаться хочу.",
        "en": "Let's! Just not early, I want a lie-in.",
        "gloss": {
         "davay": "let's (do it)",
         "tolko": "only",
         "rano": "early",
         "vysypatsya": "sleep in",
         "khochu": "want"
        }
       },
       {
        "who": "Masha",
        "text": "Okey, togda na shest vechera. Ya bilety kuplyu.",
        "script": "Окей, тогда на шесть вечера. Я билеты куплю.",
        "en": "OK, then six in the evening. I'll get the tickets.",
        "gloss": {
         "okey": "OK",
         "togda": "then",
         "shest": "six",
         "vechera": "in the evening",
         "bilety": "tickets",
         "kuplyu": "will buy"
        }
       },
       {
        "who": "You",
        "text": "Super, do subboty!",
        "script": "Супер, до субботы!",
        "en": "Great, see you Saturday!",
        "gloss": {
         "super": "great",
         "subboty": "Saturday"
        }
       }
      ]
     }
    ]
   },
   "quote": {
    "text": "Kratkost — sestra talanta.",
    "script": "Краткость — сестра таланта.",
    "en": "Brevity is the sister of talent.",
    "gloss": {
     "kratkost": "brevity",
     "sestra": "sister",
     "talanta": "of talent"
    },
    "who": "Anton Chekhov",
    "when": "1889",
    "about": "Chekhov, master of the short story, wrote this in a letter to his brother Alexander; Russians quote it whenever someone keeps a speech or text short, or teasingly when they don't."
   },
   "lit": {
    "text": "Moy dyadya samykh chestnykh pravil, / Kogda ne v shutku zanemog, / On uvazhat sebya zastavil / I luchshe vydumat ne mog.",
    "script": "Мой дядя самых честных правил, / Когда не в шутку занемог, / Он уважать себя заставил / И лучше выдумать не мог.",
    "en": "My uncle, a man of most honest principles, when he fell ill in earnest, made everyone respect him and couldn't have thought up anything better.",
    "gloss": {
     "moy": "my",
     "dyadya": "uncle",
     "samykh": "most",
     "chestnykh": "honest",
     "pravil": "principles (lit. rules)",
     "shutku": "jest",
     "zanemog": "fell ill (old-fashioned)",
     "uvazhat": "respect",
     "sebya": "himself",
     "zastavil": "made, forced",
     "luchshe": "better",
     "vydumat": "think up",
     "mog": "could"
    },
    "author": "Aleksandr Pushkin",
    "work": "Yevgeniy Onegin",
    "when": "1825–1832",
    "about": "The opening lines of Pushkin's novel in verse, in which young Onegin grumbles about nursing a rich dying uncle; almost every Russian can recite them, and their ironic tone sets up the whole novel."
   },
   "vocab": {
    "A": [
     {
      "word": "pozhaluysta",
      "wordScript": "пожалуйста",
      "pos": "adverb",
      "region": "general",
      "ties": "phrase2",
      "meaning": "please; also 'you're welcome'",
      "note": "One word does both jobs: you say it when asking and when someone thanks you. Often clipped to 'pozhalsta' in speech.",
      "example": "Dayte, pozhaluysta, khleb.",
      "exScript": "Дайте, пожалуйста, хлеб.",
      "exampleEn": "Give me some bread, please.",
      "exGloss": {
       "dayte": "give",
       "pozhaluysta": "please",
       "khleb": "bread"
      }
     },
     {
      "word": "pokupat",
      "wordScript": "покупать",
      "pos": "verb",
      "region": "general",
      "ties": "news",
      "meaning": "to buy (regularly, or in progress)",
      "note": "Its partner kupit means to buy once and get it done: ya kuplyu, 'I'll buy (it)'.",
      "example": "Lyudi pokupayut zoloto.",
      "exScript": "Люди покупают золото.",
      "exampleEn": "People are buying gold.",
      "exGloss": {
       "lyudi": "people",
       "pokupayut": "buy, are buying",
       "zoloto": "gold"
      }
     }
    ],
    "B": [
     {
      "word": "blin",
      "wordScript": "блин",
      "pos": "slang",
      "region": "general",
      "ties": "phrase1",
      "meaning": "darn, dang (lit. pancake)",
      "note": "A polite stand-in for a much ruder word that starts the same way; fine to say in front of anyone.",
      "example": "Blin, ya klyuchi ot kvartiry zabyl!",
      "exScript": "Блин, я ключи от квартиры забыл!",
      "exampleEn": "Darn, I've forgotten the keys to the flat!",
      "exGloss": {
       "blin": "darn",
       "klyuchi": "keys",
       "kvartiry": "flat",
       "zabyl": "forgot"
      }
     },
     {
      "word": "vysypatsya",
      "wordScript": "высыпаться",
      "pos": "verb",
      "region": "general",
      "ties": "phrase2",
      "meaning": "to get enough sleep, have a lie-in",
      "note": "One verb for what English needs a phrase for; the one-off form is vyspatsya: ya vysplyus, 'I'll catch up on sleep'.",
      "example": "V voskresenye ya nakonets vysplyus.",
      "exScript": "В воскресенье я наконец высплюсь.",
      "exampleEn": "On Sunday I'll finally get a proper sleep.",
      "exGloss": {
       "voskresenye": "Sunday",
       "nakonets": "finally",
       "vysplyus": "will get enough sleep"
      }
     }
    ],
    "C": [
     {
      "word": "ne v shutku",
      "wordScript": "не в шутку",
      "pos": "idiom",
      "region": "general",
      "ties": "lit",
      "meaning": "seriously, for real (lit. not in jest)",
      "note": "Still used today; zanemog (fell ill) from the same line is old-fashioned, today you'd say zabolel.",
      "example": "On ne v shutku obidelsya.",
      "exScript": "Он не в шутку обиделся.",
      "exampleEn": "He was offended for real.",
      "exGloss": {
       "shutku": "jest",
       "obidelsya": "took offence"
      }
     },
     {
      "word": "kurs",
      "wordScript": "курс",
      "pos": "noun",
      "region": "general",
      "ties": "news",
      "meaning": "exchange rate (also a course)",
      "note": "In everyday talk kurs nearly always means the dollar or yuan rate; people check it like the weather.",
      "example": "Kakoy segodnya kurs dollara?",
      "exScript": "Какой сегодня курс доллара?",
      "exampleEn": "What's the dollar rate today?",
      "exGloss": {
       "kakoy": "what, which",
       "kurs": "rate",
       "dollara": "of the dollar"
      }
     }
    ]
   },
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "The passer-by says 'v ponedelnik vykhodnoy'. What does that tell you about the museum?",
     "options": [
      "It opens at three",
      "It's closed on Mondays",
      "It's free on Mondays",
      "It's open every day"
     ],
     "answer": 1,
     "why": "Ponedelnik is Monday and vykhodnoy is a day off, so the museum is closed on Mondays.",
     "lesson": "Vykhodnoy looks like vykhod (exit, way out), so it's tempting to read it as 'open'; as a noun it means a day off."
    },
    {
     "level": "A2",
     "ref": "vocab1",
     "q": "In the shop you say 'Mne odin baton..., pozhaluysta'. What does 'pozhaluysta' mean here?",
     "options": [
      "Thank you",
      "Excuse me",
      "Hello",
      "Please"
     ],
     "answer": 3,
     "why": "When you ask for something, pozhaluysta means 'please'.",
     "lesson": "People hear pozhaluysta after spasibo too and think it means 'thank you'; there it means 'you're welcome', the reply, not the thanks."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Pochemu Anya zvonit Irine Petrovne?",
     "options": [
      "Net goryachey vody",
      "Ona poteryala klyuchi",
      "Slomalas stiralka",
      "Ona khochet platit pozzhe"
     ],
     "answer": 2,
     "why": "Anya says 'stiralka opyat slomalas': the washing machine has broken again.",
     "lesson": "Voda (water) on the floor pulls people toward a water problem, but the water is the result; stiralka, the washing machine, is what broke."
    },
    {
     "level": "B2",
     "ref": "phrase2",
     "q": "Masha govorit: 'Poshli v kino?' Chto ona predlagayet?",
     "options": [
      "Poyti v kino vmeste",
      "Kupit novyy film",
      "Ostatsya doma",
      "Poyti na rabotu"
     ],
     "answer": 0,
     "why": "Poshli is a casual 'let's go', so Masha suggests going to the cinema together.",
     "lesson": "Poshli is also the past tense 'they went', so learners read it as a report; with a question mark and no subject it's an invitation."
    },
    {
     "level": "C1",
     "ref": "news",
     "q": "V novosti: 'analitiki zhdut davleniya na rubl'. Chto eto znachit?",
     "options": [
      "Rubl mozhet ukrepitsya",
      "Rubl mozhet oslabet",
      "Analitiki prodayut rubli",
      "Minfin perestal pokupat valyutu"
     ],
     "answer": 1,
     "why": "When the ministry buys a lot of foreign currency, demand for it rises and the rouble comes under pressure: it may weaken.",
     "lesson": "Zhdut sounds like 'wait for' and suggests something good is coming; here it means 'expect', and davleniye na rubl is bad news for the rouble."
    },
    {
     "level": "C2",
     "ref": "lit",
     "q": "Pushkin pishet: 'kogda ne v shutku zanemog'. Chto sluchilos s dyadey?",
     "options": [
      "On rasserdilsya",
      "On poshutil",
      "On seryozno zabolel",
      "On uyekhal v derevnyu"
     ],
     "answer": 2,
     "why": "Zanemog is an old word for 'fell ill', and ne v shutku means 'seriously': the uncle fell gravely ill.",
     "lesson": "Shutka (a joke) catches the eye, so readers guess he joked; ne v shutku negates it, and the unfamiliar verb carries the real meaning."
    }
   ],
   "tip": {
    "title": "Ty or vy: two words for 'you'",
    "text": "Russian has two words for 'you'. Ty is for friends, family and children; vy is for strangers, older people and colleagues, and it's also the plural. The verb changes with it: Ty znayesh? / Vy znayete? (Do you know?). Moving to ty is a small social step, often offered with 'Davay na ty'."
   },
   "fun": {
    "kind": "joke",
    "region": "general",
    "text": "— Vovochka, kem ty khochesh stat? — Pensionerom! Otdykhayesh, a tebe platyat.",
    "script": "— Вовочка, кем ты хочешь стать? — Пенсионером! Отдыхаешь, а тебе платят.",
    "gloss": {
     "kem": "as whom, what",
     "ty": "you",
     "khochesh": "want",
     "stat": "become",
     "pensionerom": "a pensioner",
     "otdykhayesh": "you rest",
     "tebe": "to you",
     "platyat": "they pay"
    },
    "literal": "— Vovochka, what do you want to be? — A pensioner! You rest and they pay you.",
    "meaning": "A child's cheeky logic about the dream job.",
    "culture": "Vovochka is the cheeky schoolboy hero of countless Russian jokes, always outsmarting his teacher with answers that are rude logic rather than rude words."
   }
  },
  "fa": {
   "news": [
    {
     "topic": "Eghtesaad · Tehraan",
     "source": "https://www.iranintl.com/en/202610076990",
     "levels": {
      "A": {
       "text": "Baank-e markazi dolaar mifrushad.",
       "script": "بانک مرکزی دلار می‌فروشد.",
       "en": "The central bank is selling dollars.",
       "gloss": {
        "baank-e": "bank (of)",
        "markazi": "central",
        "dolaar": "dollar(s)",
        "mifrushad": "sells, is selling"
       }
      },
      "B": {
       "text": "Baank-e markazi goft taa do milyaard dolaar eskenaas zir-e gheymat-e baazaar mifrushad.",
       "script": "بانک مرکزی گفت تا دو میلیارد دلار اسکناس زیر قیمت بازار می‌فروشد.",
       "en": "The central bank said it would sell up to two billion dollars in banknotes below the market price.",
       "gloss": {
        "baank-e": "bank (of)",
        "markazi": "central",
        "goft": "said",
        "do": "two",
        "milyaard": "billion",
        "dolaar": "dollars",
        "eskenaas": "banknotes",
        "zir-e": "below",
        "gheymat-e": "price (of)",
        "baazaar": "market",
        "mifrushad": "sells, will sell"
       }
      },
      "C": {
       "text": "Baank-e markazi baraaye mahaar-e soghut-e riyaal, ke dolaar raa be nazdik-e do milyun-o haftsad hezaar riyaal resaande, arze-ye taa do milyaard dolaar eskenaas raa paayintar az nerkh-e baazaar-e aazaad aaghaaz karde ast.",
       "script": "بانک مرکزی برای مهار سقوط ریال، که دلار را به نزدیک دو میلیون و هفتصد هزار ریال رسانده، عرضهٔ تا دو میلیارد دلار اسکناس را پایین‌تر از نرخ بازار آزاد آغاز کرده است.",
       "en": "To curb the fall of the rial, which has pushed the dollar to nearly 2.7 million rials, the central bank has begun offering up to two billion dollars in banknotes below the free-market rate.",
       "gloss": {
        "baank-e": "bank (of)",
        "markazi": "central",
        "mahaar-e": "curbing (of)",
        "soghut-e": "fall (of)",
        "riyaal": "rial",
        "dolaar": "dollar(s)",
        "nazdik-e": "close to",
        "do": "two",
        "milyun-o": "million and",
        "haftsad": "seven hundred",
        "hezaar": "thousand",
        "resaande": "has brought",
        "arze-ye": "offering (of)",
        "milyaard": "billion",
        "eskenaas": "banknotes",
        "paayintar": "lower",
        "nerkh-e": "rate (of)",
        "baazaar-e": "market (of)",
        "aazaad": "free",
        "aaghaaz": "start",
        "karde": "has done (aaghaaz karde = has begun)"
       }
      }
     }
    }
   ],
   "phrases": {
    "A": [
     {
      "topic": "Introducing yourself",
      "situation": "Meeting someone at a friend's party",
      "region": "Tehraan",
      "lines": [
       {
        "who": "You",
        "text": "Salaam, man Saaraam.",
        "script": "سلام، من سارام.",
        "en": "Hi, I'm Sara.",
        "gloss": {
         "salaam": "hello",
         "saaraam": "I'm Sara (Saaraa + am)"
        }
       },
       {
        "who": "Reza",
        "text": "Salaam, man Rezaam. Khoshbakhtam!",
        "script": "سلام، من رضام. خوشبختم!",
        "en": "Hi, I'm Reza. Nice to meet you!",
        "gloss": {
         "salaam": "hello",
         "rezaam": "I'm Reza (Rezaa + am)",
         "khoshbakhtam": "nice to meet you (lit. I'm fortunate)"
        }
       },
       {
        "who": "You",
        "text": "Manam hamintor. Shomaa ahl-e kojaayin?",
        "script": "منم همینطور. شما اهل کجایین؟",
        "en": "Likewise. Where are you from?",
        "gloss": {
         "manam": "me too (spoken man ham)",
         "hamintor": "likewise",
         "ahl-e": "from, native of",
         "kojaayin": "where are you (spoken kojaa hastid)"
        }
       },
       {
        "who": "Reza",
        "text": "Ahl-e Shiraazam, vali tu Tehraan kaar mikonam.",
        "script": "اهل شیرازم، ولی تو تهران کار می‌کنم.",
        "en": "I'm from Shiraz, but I work in Tehran.",
        "gloss": {
         "ahl-e": "from, native of",
         "shiraazam": "I'm (from) Shiraz",
         "vali": "but",
         "tu": "in (spoken dar)",
         "kaar": "work",
         "mikonam": "I do"
        }
       },
       {
        "who": "You",
        "text": "Che jaaleb! Man az Landanam.",
        "script": "چه جالب! من از لندنم.",
        "en": "How interesting! I'm from London.",
        "gloss": {
         "che": "how",
         "jaaleb": "interesting",
         "landanam": "I'm (from) London"
        }
       }
      ]
     },
     {
      "topic": "Taking a taxi",
      "situation": "Stopping a shared taxi on the street",
      "region": "Tehraan",
      "lines": [
       {
        "who": "You",
        "text": "Aaghaa, Meydun-e Tajrish mirin?",
        "script": "آقا، میدون تجریش می‌رین؟",
        "en": "Excuse me, are you going to Tajrish Square?",
        "gloss": {
         "aaghaa": "sir",
         "meydun-e": "square (of), spoken meydaan",
         "mirin": "are you going (spoken miravid)"
        }
       },
       {
        "who": "Driver",
        "text": "Befarmaayin, savaar shin.",
        "script": "بفرمایین، سوار شین.",
        "en": "Go ahead, get in.",
        "gloss": {
         "befarmaayin": "please, go ahead",
         "savaar": "on board",
         "shin": "become (spoken shavid; savaar shin = get in)"
        }
       },
       {
        "who": "You",
        "text": "Chand mishe?",
        "script": "چند می‌شه؟",
        "en": "How much will it be?",
        "gloss": {
         "chand": "how much",
         "mishe": "it becomes (spoken mishavad)"
        }
       },
       {
        "who": "Driver",
        "text": "Sisad taa.",
        "script": "سیصد تا.",
        "en": "Three hundred (thousand tomans).",
        "gloss": {
         "sisad": "three hundred (here 300,000 tomans: 'thousand' is dropped)",
         "taa": "(counter word)"
        }
       },
       {
        "who": "You",
        "text": "Baashe, mersi.",
        "script": "باشه، مرسی.",
        "en": "OK, thanks.",
        "gloss": {
         "baashe": "OK",
         "mersi": "thanks"
        }
       }
      ]
     }
    ],
    "B": [
     {
      "topic": "Workplace small talk",
      "situation": "Arriving late at the office",
      "region": "Tehraan",
      "lines": [
       {
        "who": "Colleague",
        "text": "Sobh bekheyr! Che khabar?",
        "script": "صبح بخیر! چه خبر؟",
        "en": "Morning! What's new?",
        "gloss": {
         "sobh": "morning",
         "bekheyr": "good (lit. with goodness)",
         "che": "what",
         "khabar": "news"
        }
       },
       {
        "who": "You",
        "text": "Salaamati. Vaay, emruz tu teraafik kaamelan gir kardam.",
        "script": "سلامتی. وای، امروز تو ترافیک کاملاً گیر کردم.",
        "en": "All good. Ugh, today I got totally stuck in traffic.",
        "gloss": {
         "salaamati": "all good (lit. health)",
         "vaay": "oh, ugh",
         "tu": "in (spoken)",
         "teraafik": "traffic",
         "kaamelan": "completely",
         "gir": "stuck",
         "kardam": "I did (gir kardam = I got stuck)"
        }
       },
       {
        "who": "Colleague",
        "text": "Az Hemmat umadi? Un ke hamishe ghofle.",
        "script": "از همت اومدی؟ اون که همیشه قفله.",
        "en": "Did you come along the Hemmat expressway? That's always jammed.",
        "gloss": {
         "umadi": "you came (spoken aamadi)",
         "un": "that (spoken aan)",
         "hamishe": "always",
         "ghofle": "is jammed (lit. is locked, spoken)"
        }
       },
       {
        "who": "You",
        "text": "Aare dige. Ye chaayi bokhoram, haalam jaa biyaad.",
        "script": "آره دیگه. یه چایی بخورم، حالم جا بیاد.",
        "en": "Yeah, exactly. Let me have a tea and feel human again.",
        "gloss": {
         "aare": "yeah",
         "dige": "you know, exactly (filler)",
         "ye": "a (spoken yek)",
         "chaayi": "tea",
         "bokhoram": "let me drink",
         "haalam": "my state",
         "jaa": "place",
         "biyaad": "come (haalam jaa biyaad = I recover)"
        }
       },
       {
        "who": "Colleague",
        "text": "Boro, manam alaan miyaam. Yaadet nare, jalase saa'at-e dah shoru mishe.",
        "script": "برو، منم الان میام. یادت نره، جلسه ساعت ده شروع می‌شه.",
        "en": "Go on, I'm coming too. Don't forget, the meeting starts at ten.",
        "gloss": {
         "boro": "go",
         "manam": "me too",
         "alaan": "now",
         "miyaam": "I'm coming (spoken miaayam)",
         "yaadet": "your memory",
         "nare": "doesn't go (yaadet nare = don't forget)",
         "jalase": "meeting",
         "saa'at-e": "hour (of), at",
         "dah": "ten",
         "shoru": "start",
         "mishe": "becomes (spoken mishavad)"
        }
       },
       {
        "who": "You",
        "text": "Mamnun ke yaadam andaakhti!",
        "script": "ممنون که یادم انداختی!",
        "en": "Thanks for reminding me!",
        "gloss": {
         "mamnun": "thanks",
         "yaadam": "my memory",
         "andaakhti": "you threw (yaadam andaakhti = you reminded me)"
        }
       }
      ]
     },
     {
      "topic": "Returning something",
      "situation": "Bringing back a shirt that doesn't fit",
      "lines": [
       {
        "who": "You",
        "text": "Bebakhshid, diruz in pirhan ro kharidam, vali saayzesh behem nemikhore.",
        "script": "ببخشید، دیروز این پیرهن رو خریدم، ولی سایزش بهم نمی‌خوره.",
        "en": "Excuse me, I bought this shirt yesterday, but it's not my size.",
        "gloss": {
         "bebakhshid": "excuse me",
         "diruz": "yesterday",
         "pirhan": "shirt (spoken pirahan)",
         "ro": "(object marker, spoken raa)",
         "kharidam": "I bought",
         "vali": "but",
         "saayzesh": "its size",
         "behem": "to me (spoken be man)",
         "nemikhore": "doesn't fit (lit. doesn't eat, spoken nemikhorad)"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Faktoresh ro daarin?",
        "script": "فاکتورش رو دارین؟",
        "en": "Have you got the receipt?",
        "gloss": {
         "faktoresh": "its receipt",
         "ro": "(object marker)",
         "daarin": "you have (spoken daarid)"
        }
       },
       {
        "who": "You",
        "text": "Aare, injaast. Mishe avazesh konin?",
        "script": "آره، اینجاست. می‌شه عوضش کنین؟",
        "en": "Yes, here it is. Could you exchange it?",
        "gloss": {
         "aare": "yes",
         "injaast": "here it is",
         "mishe": "is it possible",
         "avazesh": "exchange it",
         "konin": "you do (spoken konid)"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Pas nemigirim, vali avaz mikonim. Ye saayz bozorgtar mikhaayin?",
        "script": "پس نمی‌گیریم، ولی عوض می‌کنیم. یه سایز بزرگ‌تر می‌خواین؟",
        "en": "We don't take returns, but we do exchanges. Do you want a size bigger?",
        "gloss": {
         "pas": "back",
         "nemigirim": "we don't take",
         "vali": "but",
         "avaz": "exchange",
         "mikonim": "we do",
         "ye": "a",
         "saayz": "size",
         "bozorgtar": "bigger",
         "mikhaayin": "you want (spoken mikhaahid)"
        }
       },
       {
        "who": "You",
        "text": "Aare, mersi. Rangesh ham hamin baashe.",
        "script": "آره، مرسی. رنگش هم همین باشه.",
        "en": "Yes, thanks. The same colour, please.",
        "gloss": {
         "aare": "yes",
         "mersi": "thanks",
         "rangesh": "its colour",
         "hamin": "this same",
         "baashe": "let it be"
        }
       },
       {
        "who": "Shop assistant",
        "text": "Chashm, alaan miyaaram.",
        "script": "چشم، الان میارم.",
        "en": "Sure, I'll bring it right away.",
        "gloss": {
         "chashm": "sure, gladly (lit. eye)",
         "alaan": "now",
         "miyaaram": "I'll bring (spoken miaavaram)"
        }
       }
      ]
     }
    ]
   },
   "quote": {
    "text": "Tavaanaa bovad har ke daanaa bovad, ze daanesh del-e pir bornaa bovad.",
    "script": "توانا بود هر که دانا بود، ز دانش دل پیر برنا بود.",
    "en": "Whoever is wise is powerful; through knowledge an old heart grows young.",
    "gloss": {
     "tavaanaa": "powerful, able",
     "bovad": "is (literary)",
     "daanaa": "wise",
     "ze": "from, through (literary az)",
     "daanesh": "knowledge",
     "del-e": "heart (of)",
     "pir": "old",
     "bornaa": "young (literary)"
    },
    "who": "Ferdowsi",
    "when": "c. 1010",
    "about": "Ferdowsi, the poet of the Shahnameh who kept the Persian language and its old stories alive, wrote this line; its first half is the best-known motto of learning in Iran, printed in schoolbooks and on school walls."
   },
   "lit": {
    "text": "Cheshmhaa raa baayad shost, jur-e digar baayad did.",
    "script": "چشم‌ها را باید شست، جور دیگر باید دید.",
    "en": "We must wash our eyes and see in another way.",
    "gloss": {
     "cheshmhaa": "eyes",
     "baayad": "must",
     "shost": "wash",
     "jur-e": "way, kind (of)",
     "digar": "other",
     "did": "see"
    },
    "author": "Sohraab Sepehri",
    "work": "Sedaa-ye Paa-ye Aab (The Sound of Water's Footsteps)",
    "when": "1965",
    "about": "From Sepehri's long, gentle poem about seeing the world afresh; this line is one of the most quoted in modern Persian poetry, a call to look at ordinary things without old habits."
   },
   "vocab": {
    "A": [
     {
      "word": "khoshbakhtam",
      "wordScript": "خوشبختم",
      "pos": "phrase",
      "region": "general",
      "ties": "phrase1",
      "meaning": "nice to meet you",
      "note": "Literally 'I am fortunate'. The reply is manam hamintor, 'likewise'.",
      "example": "Khoshbakhtam, man daaneshju hastam.",
      "exScript": "خوشبختم، من دانشجو هستم.",
      "exampleEn": "Nice to meet you, I'm a student.",
      "exGloss": {
       "khoshbakhtam": "nice to meet you",
       "daaneshju": "student",
       "hastam": "I am"
      }
     },
     {
      "word": "chand",
      "wordScript": "چند",
      "pos": "question word",
      "region": "general",
      "ties": "phrase2",
      "meaning": "how much? how many?",
      "note": "Chand mishe? ('how much will it be?') is the everyday way to ask a price.",
      "example": "Taa forudgaah chand mishe?",
      "exScript": "تا فرودگاه چند می‌شه؟",
      "exampleEn": "How much is it to the airport?",
      "exGloss": {
       "forudgaah": "airport",
       "chand": "how much",
       "mishe": "it becomes"
      }
     }
    ],
    "B": [
     {
      "word": "geroon",
      "wordScript": "گرون",
      "pos": "adjective",
      "region": "Tehraan",
      "ties": "news",
      "meaning": "expensive (spoken form of geraan)",
      "note": "Tehran speech turns aan into un: geraan → geroon, khiyaabaan → khiyaabun.",
      "example": "Dolaar baaz geroon shod.",
      "exScript": "دلار باز گرون شد.",
      "exampleEn": "The dollar has gone up again.",
      "exGloss": {
       "dolaar": "dollar",
       "baaz": "again",
       "geroon": "expensive",
       "shod": "became"
      }
     },
     {
      "word": "gir kardan",
      "wordScript": "گیر کردن",
      "pos": "verb",
      "region": "general",
      "ties": "phrase1",
      "meaning": "to get stuck",
      "note": "Works for traffic, lifts, zips and problems alike.",
      "example": "Tu aasaansor gir kardam!",
      "exScript": "تو آسانسور گیر کردم!",
      "exampleEn": "I got stuck in the lift!",
      "exGloss": {
       "tu": "in",
       "aasaansor": "lift",
       "gir": "stuck",
       "kardam": "I did"
      }
     }
    ],
    "C": [
     {
      "word": "jur-e digar",
      "wordScript": "جور دیگر",
      "pos": "phrase",
      "region": "general",
      "ties": "lit",
      "meaning": "another way, differently",
      "note": "Used freely today; in speech often jur-e dige.",
      "example": "Baayad be in mas'ale jur-e digari negaah kard.",
      "exScript": "باید به این مسئله جور دیگری نگاه کرد.",
      "exampleEn": "We need to look at this problem differently.",
      "exGloss": {
       "baayad": "must",
       "mas'ale": "problem, issue",
       "jur-e": "way (of)",
       "digari": "another",
       "negaah": "look",
       "kard": "do (negaah kard = look)"
      }
     },
     {
      "word": "nerkh",
      "wordScript": "نرخ",
      "pos": "noun",
      "region": "general",
      "ties": "news",
      "meaning": "rate, going price",
      "note": "Nerkh-e dolaar, the dollar rate, is checked daily by many Iranians.",
      "example": "Nerkh-e dolaar emruz chande?",
      "exScript": "نرخ دلار امروز چنده؟",
      "exampleEn": "What's the dollar rate today?",
      "exGloss": {
       "nerkh-e": "rate (of)",
       "dolaar": "dollar",
       "chande": "how much is it (spoken chand ast)"
      }
     }
    ]
   },
   "quiz": [
    {
     "level": "A1",
     "ref": "phrase1",
     "q": "Reza says 'Khoshbakhtam!'. What does he mean?",
     "options": [
      "Goodbye",
      "Nice to meet you",
      "I'm happy today",
      "Thank you"
     ],
     "answer": 1,
     "why": "Khoshbakhtam is what you say when you meet someone: 'nice to meet you'.",
     "lesson": "Its literal meaning, 'I am fortunate', pulls people toward 'I'm happy'; it's a fixed greeting, not a mood."
    },
    {
     "level": "A2",
     "ref": "news",
     "q": "In the headline 'Baank-e markazi dolaar mifrushad', what is the central bank doing?",
     "options": [
      "Buying gold",
      "Closing banks",
      "Printing rials",
      "Selling dollars"
     ],
     "answer": 3,
     "why": "Mifrushad means 'sells', and dolaar is 'dollars'.",
     "lesson": "The verb comes last in Farsi; learners who expect it in the middle may guess from dolaar alone that the bank is buying."
    },
    {
     "level": "B1",
     "ref": "phrase1",
     "q": "Hamkaar mige: «Yaadet nare, jalase saa'at-e dah shoru mishe.» 'Yaadet nare' ye'ni chi?",
     "options": [
      "Faraamush nakon",
      "Naro",
      "Dir nakon",
      "Yaad begir"
     ],
     "answer": 0,
     "why": "Yaadet nare, 'let it not go from your memory', means 'don't forget' (faraamush nakon).",
     "lesson": "Nare looks like 'don't go', so people think the colleague is saying 'don't leave'; the subject is yaadet, your memory."
    },
    {
     "level": "B2",
     "ref": "phrase2",
     "q": "Forushande mige «pas nemigirim, vali avaz mikonim». Ye'ni chi?",
     "options": [
      "Pul ro pas midan",
      "Jens ro avaz mikonan, vali pul ro pas nemidan",
      "Faghat faktor migiran",
      "Pirhan ro nemifrushan"
     ],
     "answer": 1,
     "why": "Pas nemigirim: we don't take it back; avaz mikonim: we exchange it. You get another size, not your money.",
     "lesson": "Pas on its own suggests 'back' and a refund; the negative nemigirim is what rules a refund out."
    },
    {
     "level": "C1",
     "ref": "lit",
     "q": "Sohraab Sepehri mige «cheshmhaa raa baayad shost». Manzuresh chiye?",
     "options": [
      "Baayad pish-e cheshm-pezeshk raft",
      "Baayad gerye kard",
      "Baayad donyaa raa taaze va bi pishdaavari did",
      "Baayad cheshmhaa raa bast"
     ],
     "answer": 2,
     "why": "Washing the eyes is a metaphor: clear away old habits and see the world freshly, jur-e digar.",
     "lesson": "Shostan is a very physical verb, so a literal reading (go to the eye doctor) tempts; the second half, jur-e digar baayad did, shows it's about a way of seeing."
    },
    {
     "level": "C2",
     "ref": "quote",
     "q": "Ferdowsi mige «tavaanaa bovad har ke daanaa bovad». 'Tavaanaa' ye'ni chi?",
     "options": [
      "Mehrabaan",
      "Ghavi va ghaader",
      "Javaan",
      "Daanaa"
     ],
     "answer": 1,
     "why": "Tavaanaa means able, powerful: whoever is wise is powerful.",
     "lesson": "Tavaanaa and daanaa rhyme and sit side by side, so readers take them as synonyms; the line's point is that one leads to the other."
    }
   ],
   "tip": {
    "title": "No gender: one word for he and she",
    "text": "Farsi has no grammatical gender. U means both 'he' and 'she', and adjectives never change to agree: pesar-e khub (a good boy) and dokhtar-e khub (a good girl) use the same khub. In casual speech un covers 'he', 'she' and 'that'."
   },
   "fun": {
    "kind": "joke",
    "region": "general",
    "text": "Khar-e Mollaa gom shod va u shokr kard. Porsidan: «Cheraa?» Goft: «Khodaa-ro shokr ke savaaresh nabudam, vagarna manam gom mishodam!»",
    "script": "خر ملا گم شد و او شکر کرد. پرسیدند: «چرا؟» گفت: «خدا رو شکر که سوارش نبودم، وگرنه منم گم می‌شدم!»",
    "gloss": {
     "khar-e": "donkey (of)",
     "mollaa": "Molla (Nasreddin)",
     "gom": "lost",
     "shod": "became",
     "shokr": "thanks",
     "kard": "did (shokr kard = gave thanks)",
     "porsidan": "they asked (spoken porsidand)",
     "cheraa": "why",
     "goft": "he said",
     "khodaa-ro": "God (spoken khodaa raa)",
     "savaaresh": "riding it",
     "nabudam": "I wasn't",
     "vagarna": "otherwise",
     "manam": "me too",
     "mishodam": "I would have been"
    },
    "literal": "Molla's donkey got lost and he gave thanks. They asked: 'Why?' He said: 'Thank God I wasn't riding it, or I'd have got lost too!'",
    "meaning": "A gently absurd way of looking on the bright side.",
    "culture": "Mollaa Nasreddin, the wise fool of Persian, Turkish and Central Asian tales, is the star of hundreds of short jokes that Iranians learn as children."
   }
  }
 }
};

if (typeof window !== "undefined") window.DAILY = LINGUA_DAILY;
if (typeof module !== "undefined") module.exports = LINGUA_DAILY;
