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
 }
};

if (typeof window !== "undefined") window.DAILY = LINGUA_DAILY;
if (typeof module !== "undefined") module.exports = LINGUA_DAILY;
