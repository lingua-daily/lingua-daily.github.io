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
 }
};

if (typeof window !== "undefined") window.DAILY = LINGUA_DAILY;
if (typeof module !== "undefined") module.exports = LINGUA_DAILY;
