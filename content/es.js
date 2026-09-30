window.CONTENT = window.CONTENT || {};

window.CONTENT.es = {
  label: "Español",
  flag: "🇪🇸",
  world: "Spanish-speaking",
  defaultLevel: "C2",          // level the daily digest is built at
  focus: "Spain and Mexico",   // where the headlines are weighted

  /* Function words + high-frequency verbs. Applied to every sentence unless an
     item's own gloss overrides the same key. All keys lowercase. */
  base: {
    "el":"the","la":"the","los":"the","las":"the","lo":"the / it",
    "un":"a","una":"a","unos":"some","unas":"some",
    "de":"of / from","del":"of the","a":"to","al":"to the","en":"in / on",
    "y":"and","e":"and","o":"or","u":"or","que":"that / which","con":"with",
    "por":"for / by","para":"for / in order to","se":"itself / oneself",
    "su":"his / her / their","sus":"his / her / their","mi":"my","mis":"my",
    "me":"me / myself","te":"you","le":"to him / her","les":"to them","nos":"us",
    "es":"is","son":"are","era":"was","fue":"was / went","fueron":"were",
    "está":"is (located/state)","están":"are","estoy":"I am","estamos":"we are",
    "ser":"to be","estar":"to be (state)","hay":"there is / there are",
    "ha":"has","han":"have","he":"I have","tiene":"has","tienen":"they have",
    "tengo":"I have","tener":"to have","no":"not / no","sí":"yes",
    "más":"more / most","menos":"less","muy":"very","también":"also",
    "pero":"but","como":"like / as","cuando":"when","donde":"where",
    "este":"this","esta":"this","estos":"these","estas":"these",
    "ese":"that","esa":"that","eso":"that","esos":"those","esas":"those",
    "todo":"all / everything","toda":"all","todos":"all / everyone","todas":"all",
    "ya":"already / now","entre":"between / among","sobre":"about / on",
    "desde":"since / from","hasta":"until / up to","sin":"without","tras":"after",
    "cada":"each / every","otro":"other","otra":"other","dos":"two","tres":"three",
    "cuatro":"four","cinco":"five","mil":"thousand","año":"year","años":"years",
    "día":"day","días":"days","mes":"month","noche":"night","noches":"nights",
    "hoy":"today","mañana":"tomorrow / morning","ahora":"now","siempre":"always",
    "nunca":"never","aquí":"here","allí":"there","allá":"over there",
    "mucho":"a lot","muchos":"many","poco":"little","gente":"people",
    "vez":"time / occasion","veces":"times","así":"so / like this",
    "primera":"first","primer":"first","español":"Spanish","española":"Spanish",
    "mundo":"world","va":"goes","van":"they go","voy":"I go","da":"gives","dar":"to give",
    "septiembre":"September","agosto":"August","noviembre":"November",
    "españa":"Spain","méxico":"Mexico","madrid":"Madrid"
  },

  days: [
    /* ================= DAY 1 ================= */
    {
      news: [
        {
          topic: "Arqueología · España",
          text: "Un hueso de elefante hallado en Córdoba podría ser la primera prueba directa de elefantes de guerra cartagineses en la península.",
          en: "An elephant bone found in Córdoba could be the first direct evidence of Carthaginian war elephants on the peninsula.",
          gloss: {
            "hueso":"bone","elefante":"elephant","hallado":"found","córdoba":"Córdoba (city in Andalusia)",
            "podría":"could","prueba":"proof / evidence","directa":"direct","elefantes":"elephants",
            "guerra":"war","cartagineses":"Carthaginian","península":"peninsula"
          }
        },
        {
          topic: "Ciencia · España",
          text: "El observatorio del Roque de los Muchachos, en La Palma, alberga el mayor telescopio óptico del mundo.",
          en: "The Roque de los Muchachos observatory on La Palma houses the largest optical telescope in the world.",
          gloss: {
            "observatorio":"observatory","roque":"crag / rock","muchachos":"boys / lads",
            "palma":"palm","alberga":"houses / shelters","mayor":"largest / greater",
            "telescopio":"telescope","óptico":"optical"
          }
        },
        {
          topic: "Historia · México",
          text: "La imprenta llegó a México en 1539, casi un siglo antes que a las colonias inglesas.",
          en: "The printing press reached Mexico in 1539, almost a century before it reached the English colonies.",
          gloss: {
            "imprenta":"printing press","llegó":"arrived / reached","casi":"almost","siglo":"century",
            "antes":"before","colonias":"colonies","inglesas":"English"
          }
        },
        {
          topic: "Arte · España",
          text: "«Las meninas» de Velázquez lleva siglos estudiándose por su desconcertante juego de miradas.",
          en: "Velázquez's “Las Meninas” has been studied for centuries for its disorienting play of gazes.",
          gloss: {
            "meninas":"ladies-in-waiting","lleva":"has spent / has been","siglos":"centuries",
            "estudiándose":"being studied","desconcertante":"disconcerting / baffling",
            "juego":"play / game","miradas":"gazes / looks"
          }
        },
        {
          topic: "Ciencia · México",
          text: "Investigadores mexicanos estudian el genoma del maíz para entender su domesticación hace nueve mil años.",
          en: "Mexican researchers are studying the maize genome to understand its domestication nine thousand years ago.",
          gloss: {
            "investigadores":"researchers","mexicanos":"Mexican","estudian":"study","genoma":"genome",
            "maíz":"maize / corn","entender":"to understand","domesticación":"domestication",
            "hace":"ago / makes","nueve":"nine"
          }
        }
      ],
      vocab: [
        {
          word: "curro", article: "el", pos: "noun · slang", region: "España",
          meaning: "job, work (the everyday word for your gig)",
          note: "Spain only. Argentina/Uruguay say «el laburo», Mexico «la chamba». Verb: currar = to work.",
          example: "Mañana no tengo curro, así que podemos vernos.",
          exampleEn: "I don't have work tomorrow, so we can meet up.",
          exGloss: { "curro":"job / work", "podemos":"we can", "vernos":"see each other / meet up" }
        },
        {
          word: "¿qué onda?", pos: "idiom · slang", region: "México",
          meaning: "what's up? / how's it going?",
          note: "Mexico's default greeting among friends. «Buena onda» = a good vibe or a nice person; «mala onda» the opposite. Spain would say «¿qué tal?» or «¿qué pasa?».",
          example: "¿Qué onda, ya llegaste al centro?",
          exampleEn: "Hey, have you got downtown yet?",
          exGloss: { "onda":"wave / vibe", "llegaste":"you arrived", "centro":"centre / downtown" }
        },
        {
          word: "tener ganas de", pos: "idiom", region: "general",
          meaning: "to feel like (doing something), to be up for it",
          note: "Tener is irregular: tengo, tienes, tiene, tenemos, tenéis, tienen. «Tener muchas ganas» = to really be looking forward to it.",
          example: "No tengo ganas de salir esta noche.",
          exampleEn: "I don't feel like going out tonight.",
          exGloss: { "ganas":"desire / urge", "salir":"to go out" }
        },
        {
          word: "vale", pos: "interjection · slang", region: "España",
          meaning: "okay, got it, sounds good",
          note: "Spain's most-used filler word. Mexico says «órale», «sale» or «va» in the same slot; «vale» there sounds foreign.",
          example: "Vale, nos vemos allí sobre las nueve.",
          exampleEn: "Okay, see you there around nine.",
          exGloss: { "vale":"okay", "vemos":"we see", "sobre":"around / about", "nueve":"nine" }
        },
        {
          word: "quedar", pos: "verb", region: "general",
          meaning: "to meet up, to arrange to meet",
          note: "Regular -ar. Two other senses worth knowing: «queda poco» = there's little left, and reflexive «quedarse» = to stay.",
          example: "¿Quedamos a las ocho en la plaza?",
          exampleEn: "Shall we meet at eight in the square?",
          exGloss: { "quedamos":"shall we meet / we meet", "ocho":"eight", "plaza":"square / plaza" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “bone”?",
          options:["la guerra","la prueba","el hueso","el mundo"], answer:2,
          why:"«Hueso» = bone. «Guerra» is war, «prueba» is proof, «mundo» is world.",
          lesson:"Las tres opciones descartadas son sustantivos igual de frecuentes: guerra, prueba, mundo. Repásalas en bloque." },
        { level:"A2", q:"“La imprenta llegó a México en 1539.” What does «llegó» mean?",
          options:["it arrived","it left","it printed","it grew"], answer:0,
          why:"«Llegar» = to arrive. Preterite third person: llegó.",
          lesson:"«Llegar» se confunde con «dejar» o «salir». Fija la pareja: llegar = arrive, salir = leave." },
        { level:"B1", q:"Completa: El observatorio ___ el mayor telescopio del mundo.",
          options:["albergan","alberga","albergas","albergad"], answer:1,
          why:"El sujeto «el observatorio» es tercera persona del singular, así que el verbo es «alberga».",
          lesson:"El error típico es concordar con el sustantivo más cercano al verbo. Busca siempre el sujeto real: aquí «el observatorio», singular." },
        { level:"B2", q:"«Podría ser la primera prueba directa» — ¿qué matiz aporta «podría»?",
          options:["Afirma el hallazgo con certeza","Niega el hallazgo","Presenta el hallazgo como probable pero no confirmado","Indica que ya está confirmado"], answer:2,
          why:"El condicional «podría» marca una hipótesis prudente: es posible, no seguro.",
          lesson:"Si elegiste la certeza, recuerda que en prensa científica el condicional señala cautela: «podría» se usa cuando el hallazgo aún no está confirmado." },
        { level:"C1", q:"«Lleva siglos estudiándose» equivale a:",
          options:["Se estudia desde hace siglos","Se estudiará durante siglos","Se estudió una vez hace siglos","Dejó de estudiarse hace siglos"], answer:0,
          why:"«Llevar» + tiempo + gerundio expresa una acción que empezó en el pasado y sigue vigente.",
          lesson:"El fallo habitual es leer «lleva» como pasado cerrado. «Llevar» + gerundio siempre llega hasta el presente: la acción sigue." },
        { level:"C2", q:"«Desconcertante juego de miradas» — el adjetivo sugiere que la obra:",
          options:["Resulta sencilla de interpretar","Desestabiliza la posición del espectador","Es de composición simétrica","Fue pintada con prisa"], answer:1,
          why:"«Desconcertar» es descolocar. El cuadro no confunde por error: descoloca deliberadamente a quien mira.",
          lesson:"Si lo leíste como algo negativo o accidental, ajústalo: en crítica de arte «desconcertante» es elogio — la obra descoloca a propósito." }
      ]
    },

    /* ================= DAY 2 ================= */
    {
      news: [
        {
          topic: "Arqueología · México",
          text: "Los arqueólogos siguen excavando el Templo Mayor bajo el centro histórico de la Ciudad de México.",
          en: "Archaeologists are still excavating the Templo Mayor beneath the historic centre of Mexico City.",
          gloss: {
            "arqueólogos":"archaeologists","siguen":"continue / keep on","excavando":"excavating",
            "templo":"temple","mayor":"greater / main","bajo":"under","centro":"centre",
            "histórico":"historic","ciudad":"city"
          }
        },
        {
          topic: "Historia · España",
          text: "El Archivo de Indias de Sevilla conserva millones de páginas sobre el imperio español en América.",
          en: "The Archive of the Indies in Seville preserves millions of pages on the Spanish empire in the Americas.",
          gloss: {
            "archivo":"archive","indias":"the Indies","sevilla":"Seville","conserva":"preserves / keeps",
            "millones":"millions","páginas":"pages","imperio":"empire","américa":"the Americas"
          }
        },
        {
          topic: "Arquitectura · España",
          text: "La Sagrada Familia lleva más de ciento cuarenta años en obras y se acerca por fin a su torre más alta.",
          en: "The Sagrada Família has been under construction for more than a hundred and forty years and is finally nearing its tallest tower.",
          gloss: {
            "sagrada":"sacred / holy","familia":"family","lleva":"has spent","ciento":"hundred",
            "cuarenta":"forty","obras":"construction works","acerca":"approaches","fin":"end",
            "torre":"tower","alta":"tall / high"
          }
        },
        {
          topic: "Literatura · España",
          text: "El «Quijote» de Cervantes se considera la primera novela moderna de Europa.",
          en: "Cervantes's “Don Quixote” is considered the first modern novel in Europe.",
          gloss: {
            "considera":"is considered","novela":"novel","moderna":"modern","europa":"Europe"
          }
        },
        {
          topic: "Medicina · España",
          text: "España lidera el mundo en donación de órganos desde hace más de tres décadas.",
          en: "Spain has led the world in organ donation for more than three decades.",
          gloss: {
            "lidera":"leads","donación":"donation","órganos":"organs","décadas":"decades","hace":"ago"
          }
        }
      ],
      vocab: [
        {
          word: "echar de menos", pos: "idiom", region: "España",
          meaning: "to miss (a person or thing)",
          note: "Spain. Mexico and the rest of Latin America say «extrañar»: «te extraño» = I miss you. Note the «a»: «echo de menos a mi hermana».",
          example: "Echo de menos la comida de mi abuela.",
          exampleEn: "I miss my grandmother's cooking.",
          exGloss: { "echo":"I throw / I miss", "comida":"food / cooking", "abuela":"grandmother" }
        },
        {
          word: "chamba", article: "la", pos: "noun · slang", region: "México",
          meaning: "job, gig, work",
          note: "Mexico, Peru, Central America. Verb: chambear = to work. Spain's equivalent is «el curro».",
          example: "Consiguió chamba en un restaurante del centro.",
          exampleEn: "He got a job at a restaurant downtown.",
          exGloss: { "consiguió":"got / obtained", "chamba":"job / gig", "restaurante":"restaurant" }
        },
        {
          word: "soler", pos: "verb · irregular (o → ue)", region: "general",
          meaning: "to usually do something, to tend to",
          note: "Stem-changing: suelo, sueles, suele, solemos, soléis, suelen. Always followed by an infinitive, and there is no clean one-word English equivalent.",
          example: "Suelo desayunar café y pan dulce.",
          exampleEn: "I usually have coffee and sweet bread for breakfast.",
          exGloss: { "suelo":"I usually", "desayunar":"to have breakfast", "café":"coffee", "pan":"bread", "dulce":"sweet" }
        },
        {
          word: "ponerse las pilas", pos: "idiom", region: "general",
          meaning: "to get your act together, to step it up (lit. to put your batteries in)",
          note: "Poner is irregular: pongo, pones… and the command is «pon» → «¡ponte las pilas!». Understood everywhere.",
          example: "Ponte las pilas que el examen es mañana.",
          exampleEn: "Get your act together — the exam is tomorrow.",
          exGloss: { "ponte":"put on (yourself)", "pilas":"batteries", "examen":"exam" }
        },
        {
          word: "cruda", article: "la", pos: "noun · slang", region: "México",
          meaning: "hangover",
          note: "Mexico. Spain and most of South America say «la resaca». The adjective «crudo/a» on its own just means raw or unripe.",
          example: "Tengo una cruda terrible, no me hables fuerte.",
          exampleEn: "I have a terrible hangover, don't talk loudly to me.",
          exGloss: { "cruda":"hangover (Mex.)", "terrible":"terrible", "hables":"talk (subjunctive)", "fuerte":"loud / strong" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “century”?",
          options:["el mes","el siglo","el día","el año"], answer:1,
          why:"«Siglo» = century. «Año» is year, «mes» month, «día» day.",
          lesson:"Fija la escala de una vez y no vuelvas a dudar: día < mes < año < siglo." },
        { level:"A2", q:"“España lidera el mundo en donación de órganos.” What does «lidera» mean?",
          options:["leads","loses","learns","allows"], answer:0,
          why:"«Liderar» = to lead. The noun is «el líder».",
          lesson:"«Liderar» viene de «líder». Cuando una palabra española suena a un préstamo inglés, casi siempre significa lo mismo." },
        { level:"B1", q:"Completa: Los arqueólogos ___ excavando el Templo Mayor.",
          options:["sigue","seguir","siguen","seguido"], answer:2,
          why:"«Los arqueólogos» es plural, así que el verbo es «siguen». «Seguir» + gerundio = to keep on doing.",
          lesson:"El sujeto es «los arqueólogos», plural. Cuenta el sujeto entero, no el sustantivo que quede pegado al verbo." },
        { level:"B2", q:"«Desde hace más de tres décadas» indica:",
          options:["Una acción terminada hace treinta años","Una acción que empezó hace treinta años y continúa","Una acción que empezará en treinta años","Una acción repetida cada treinta años"], answer:1,
          why:"«Desde hace» abre un periodo que llega hasta el presente. Sin «desde», «hace tres décadas» sería un punto cerrado en el pasado.",
          lesson:"Toda la diferencia está en «desde». «Hace tres décadas» cierra el pasado; «desde hace tres décadas» lo trae hasta hoy." },
        { level:"C1", q:"«Se considera la primera novela moderna» — la construcción «se considera» es:",
          options:["Pasiva refleja / impersonal","Reflexiva con sujeto explícito","Imperativo","Condicional"], answer:0,
          why:"El «se» borra al agente: no importa quién lo considera. Equivale a «es considerada».",
          lesson:"Si lo leíste como reflexivo («se considera a sí mismo»), fíjate en que no hay agente humano posible. Eso delata la pasiva refleja." },
        { level:"C2", q:"«Lleva más de ciento cuarenta años en obras» — «en obras» significa:",
          options:["En exposición","En venta","Bajo construcción","En ruinas"], answer:2,
          why:"«Estar en obras» es la fórmula fija para algo en construcción o reforma — la verás en carteles de calle por toda España.",
          lesson:"«Obra» en singular es la producción de un artista; en plural, y sobre todo «en obras», es construcción. El número cambia el sentido." }
      ]
    },

    /* ================= DAY 3 ================= */
    {
      news: [
        {
          topic: "Prehistoria · España",
          text: "Las cuevas de Altamira guardan pinturas rupestres de hace unos catorce mil años.",
          en: "The caves of Altamira hold cave paintings from around fourteen thousand years ago.",
          gloss: {
            "cuevas":"caves","altamira":"Altamira (Cantabrian cave site)","guardan":"keep / hold",
            "pinturas":"paintings","rupestres":"rock / cave (adj.)","hace":"ago","unos":"about / some",
            "catorce":"fourteen"
          }
        },
        {
          topic: "Arqueología · México",
          text: "Cada equinoccio, miles de visitantes ven bajar la sombra de una serpiente por la pirámide de Chichén Itzá.",
          en: "Every equinox, thousands of visitors watch the shadow of a serpent descend the pyramid at Chichén Itzá.",
          gloss: {
            "equinoccio":"equinox","miles":"thousands","visitantes":"visitors","ven":"see / watch",
            "bajar":"to go down / descend","sombra":"shadow","serpiente":"serpent / snake",
            "pirámide":"pyramid"
          }
        },
        {
          topic: "Lengua · México",
          text: "México es el país con más hispanohablantes del mundo, más de ciento treinta millones.",
          en: "Mexico is the country with the most Spanish speakers in the world — over a hundred and thirty million.",
          gloss: {
            "país":"country","hispanohablantes":"Spanish speakers","ciento":"hundred",
            "treinta":"thirty","millones":"million"
          }
        },
        {
          topic: "Arte · México",
          text: "Frida Kahlo pintó cincuenta y cinco autorretratos, más de un tercio de toda su obra.",
          en: "Frida Kahlo painted fifty-five self-portraits, more than a third of her entire body of work.",
          gloss: {
            "pintó":"painted","cincuenta":"fifty","autorretratos":"self-portraits","tercio":"third",
            "obra":"work / body of work"
          }
        },
        {
          topic: "Historia · España",
          text: "El Camino de Santiago cruza el norte de España desde hace más de mil años.",
          en: "The Camino de Santiago has crossed northern Spain for more than a thousand years.",
          gloss: {
            "camino":"way / road","santiago":"St James","cruza":"crosses","norte":"north","hace":"ago"
          }
        }
      ],
      vocab: [
        {
          word: "órale", pos: "interjection · slang", region: "México",
          meaning: "wow / go on / alright then — agreement, surprise or encouragement, depending on tone",
          note: "Mexico's most versatile interjection. «¡Órale!» flat = wow; rising = come on, hurry; as an answer = sure, deal. Spain has no single equivalent.",
          example: "Órale, no sabía que hablabas alemán.",
          exampleEn: "Wow, I didn't know you spoke German.",
          exGloss: { "órale":"wow / go on", "sabía":"I knew", "hablabas":"you spoke", "alemán":"German" }
        },
        {
          word: "cacharro", article: "el", pos: "noun · colloquial", region: "España",
          meaning: "gadget, thing, piece of junk",
          note: "Affectionately dismissive — an old car, a dead appliance, any device whose name you can't be bothered with. Mexico would say «el chunche» or «el aparato».",
          example: "Este cacharro ya no funciona, hay que tirarlo.",
          exampleEn: "This thing doesn't work any more, we have to throw it out.",
          exGloss: { "cacharro":"gadget / junk", "funciona":"works", "tirarlo":"to throw it out" }
        },
        {
          word: "caber", pos: "verb · irregular", region: "general",
          meaning: "to fit (into a space)",
          note: "Very irregular: yo quepo (present), cupe / cupo (preterite), cabré (future). «No cabe duda» = there's no doubt.",
          example: "No cabe ni una persona más en el metro.",
          exampleEn: "Not one more person fits on the metro.",
          exGloss: { "cabe":"fits", "ni":"not even", "persona":"person", "metro":"metro / subway" }
        },
        {
          word: "estar hecho polvo", pos: "idiom", region: "España",
          meaning: "to be exhausted, wiped out (lit. to be made into dust)",
          note: "Agrees with the speaker: hecho / hecha, hechos / hechas. Can also describe an object that's wrecked. Mexico prefers «estar molido» or «estar muerto».",
          example: "Después del turno estoy hecho polvo.",
          exampleEn: "After the shift I'm completely wiped out.",
          exGloss: { "después":"after", "turno":"shift", "hecho":"made", "polvo":"dust / powder" }
        },
        {
          word: "chisme", article: "el", pos: "noun · colloquial", region: "México · España",
          meaning: "gossip; in Mexico also: a thingamajig",
          note: "Shared across both, but the second sense is Mexican — «pásame ese chisme» = hand me that doodad. Verb: chismear / chismorrear.",
          example: "Cuéntame el chisme de la fiesta del sábado.",
          exampleEn: "Tell me the gossip from Saturday's party.",
          exGloss: { "cuéntame":"tell me", "chisme":"gossip", "fiesta":"party", "sábado":"Saturday" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “cave”?",
          options:["la casa","la calle","la clase","la cueva"], answer:3,
          why:"«Cueva» = cave. «Casa» house, «calle» street, «clase» class.",
          lesson:"Cuatro palabras en c- que se confunden constantemente: casa, calle, clase, cueva. Apréndelas juntas." },
        { level:"A2", q:"“Frida Kahlo pintó cincuenta y cinco autorretratos.” «Pintó» is:",
          options:["the past tense of “to paint”","the future of “to paint”","a noun meaning “painter”","the present tense of “to paint”"], answer:0,
          why:"Preterite of «pintar», third person singular — a finished action at a definite time.",
          lesson:"La tilde manda: «pinto» = I paint, «pintó» = he/she painted. Un solo acento cambia el tiempo verbal." },
        { level:"B1", q:"Completa: Las cuevas de Altamira ___ pinturas de hace catorce mil años.",
          options:["guarda","guardan","guardar","guardado"], answer:1,
          why:"«Las cuevas» es plural, así que el verbo va en plural: «guardan».",
          lesson:"«Las cuevas» es plural aunque «Altamira» esté justo delante del verbo. No dejes que el nombre propio te arrastre al singular." },
        { level:"B2", q:"«Miles de visitantes ven bajar la sombra» — «ven bajar» es:",
          options:["Voz pasiva","Futuro perifrástico","Verbo de percepción + infinitivo","Subjuntivo"], answer:2,
          why:"Ver, oír y sentir se construyen directamente con infinitivo: «la vi salir», «lo oí llegar».",
          lesson:"Con ver, oír y sentir no hace falta «que»: se dice «la vi salir», no «la vi que salió»." },
        { level:"C1", q:"«Más de un tercio de toda su obra» — aquí «obra» significa:",
          options:["El conjunto de su producción artística","Una construcción","Una obra de teatro","Un trabajo manual"], answer:0,
          why:"«Obra» en singular puede designar todo el corpus de un artista. En plural, «obras», suele significar construcción.",
          lesson:"Si pensaste en una construcción, es el error clásico. Aquí «su obra» pertenece a una pintora: es su corpus entero." },
        { level:"C2", q:"«Hace más de mil años» y «desde hace más de mil años» se diferencian en que:",
          options:["Son idénticos","El primero implica continuidad","El segundo marca continuidad hasta el presente","El segundo se refiere al futuro"], answer:2,
          why:"«Hace X» sitúa un punto en el pasado; «desde hace X» abre un periodo que sigue abierto hoy.",
          lesson:"Misma trampa que antes. Comprueba siempre preguntando: ¿sigue pasando hoy? Si sí, necesitas «desde»." }
      ]
    }
  ]
};
