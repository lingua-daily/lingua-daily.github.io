window.CONTENT = window.CONTENT || {};

window.CONTENT.de = {
  label: "Deutsch",
  flag: "🇩🇪",
  world: "German-speaking",
  defaultLevel: "C1",                          // level the daily digest is built at
  focus: "Bavaria — Munich and Regensburg",    // where the headlines are weighted

  base: {
    "der":"the","die":"the","das":"the / that","den":"the","dem":"the","des":"of the",
    "ein":"a","eine":"a","einen":"a","einem":"a","einer":"a / one","eines":"of a",
    "und":"and","oder":"or","aber":"but","sondern":"but rather",
    "in":"in","im":"in the","an":"at / on","am":"at the / on the","auf":"on",
    "für":"for","mit":"with","von":"from / of","vom":"from the","zu":"to","zum":"to the","zur":"to the",
    "bei":"at / near","beim":"at the","nach":"after / to","aus":"out of / from",
    "über":"over / about","unter":"under / among","durch":"through","um":"at / around",
    "gegen":"against","ohne":"without","seit":"since","während":"during","neben":"next to",
    "ist":"is","sind":"are","war":"was","waren":"were","sein":"to be / his",
    "hat":"has","haben":"to have / have","hatte":"had","habe":"I have",
    "wird":"becomes / will","werden":"become / will","wurde":"became / was","wurden":"were",
    "kann":"can","können":"can / to be able","muss":"must","müssen":"must",
    "nicht":"not","kein":"no / none","keine":"no / none","nichts":"nothing",
    "sich":"oneself","es":"it","er":"he / it","sie":"she / they / you (formal)",
    "ich":"I","du":"you","wir":"we","ihr":"you (pl.) / her","man":"one / people",
    "mich":"me","mir":"to me","dich":"you","dir":"to you","uns":"us",
    "seine":"his / its","seinen":"his","seinem":"his","ihre":"her / their","ihren":"her / their",
    "mein":"my","meine":"my",
    "dies":"this","diese":"this / these","dieser":"this","diesem":"this","diesen":"this",
    "als":"as / than / when","wie":"how / like","auch":"also","schon":"already",
    "noch":"still / yet","mehr":"more","sehr":"very","nur":"only","wieder":"again",
    "so":"so / like that","dann":"then","immer":"always","nie":"never","hier":"here","da":"there",
    "jedes":"each / every","jeder":"each / every","jede":"each / every","jedem":"each / every","jeden":"each / every",
    "heute":"today","morgen":"tomorrow / morning","abend":"evening",
    "jahr":"year","jahre":"years","jahren":"years","jahrhundert":"century",
    "zwei":"two","drei":"three","vier":"four","fünf":"five","sechs":"six","zehn":"ten",
    "september":"September","november":"November","august":"August",
    "deutschland":"Germany","deutschlands":"Germany's","deutschen":"German","deutscher":"German",
    "deutsche":"German","deutsch":"German","bayern":"Bavaria","bayerische":"Bavarian",
    "bayerischen":"Bavarian","münchen":"Munich","münchner":"Munich (adj.)",
    "regensburg":"Regensburg (Danube city in Bavaria)","berlin":"Berlin",
    "welt":"world","stadt":"city","neue":"new","neuen":"new","neues":"new",
    "bis":"until / to","dna":"DNA","eu":"EU","bundesliga":"Bundesliga","festival":"festival"
  },

  days: [
    /* ================= DAY 1 ================= */
    {
      news: [
        {
          topic: "Geschichte · Regensburg",
          text: "Regensburg bewahrt als einzige deutsche Großstadt einen fast vollständig erhaltenen mittelalterlichen Stadtkern.",
          en: "Regensburg is the only large German city that has preserved an almost completely intact medieval old town.",
          gloss: {
            "bewahrt":"preserves","einzige":"only / sole","großstadt":"major city","fast":"almost",
            "vollständig":"completely","erhaltenen":"preserved / intact","mittelalterlichen":"medieval",
            "stadtkern":"city core / old town"
          }
        },
        {
          topic: "Wissenschaft · München",
          text: "In Garching bei München erforscht das Max-Planck-Institut für Quantenoptik das Verhalten von Licht und Materie.",
          en: "In Garching near Munich, the Max Planck Institute of Quantum Optics investigates the behaviour of light and matter.",
          gloss: {
            "garching":"Garching (research town north of Munich)","erforscht":"researches / investigates",
            "institut":"institute","quantenoptik":"quantum optics","verhalten":"behaviour",
            "licht":"light","materie":"matter"
          }
        },
        {
          topic: "Geschichte · Bayern",
          text: "Ludwig II. ließ Schloss Neuschwanstein bauen und starb, bevor es fertig wurde.",
          en: "Ludwig II had Neuschwanstein Castle built and died before it was finished.",
          gloss: {
            "ludwig":"Ludwig (Bavarian king, 1845–1886)","ließ":"had (something done) / let",
            "schloss":"castle / palace","bauen":"to build","starb":"died","bevor":"before","fertig":"finished"
          }
        },
        {
          topic: "Kunst · München",
          text: "Die Alte Pinakothek in München zeigt eine der ältesten Gemäldesammlungen der Welt.",
          en: "The Alte Pinakothek in Munich shows one of the oldest painting collections in the world.",
          gloss: {
            "alte":"old","pinakothek":"picture gallery","zeigt":"shows","ältesten":"oldest",
            "gemäldesammlungen":"painting collections"
          }
        },
        {
          topic: "Archäologie · Regensburg",
          text: "Das römische Legionslager Castra Regina gab Regensburg im Jahr 179 seinen Namen.",
          en: "The Roman legionary fortress Castra Regina gave Regensburg its name in the year 179.",
          gloss: {
            "römische":"Roman","legionslager":"legionary camp / fortress","gab":"gave","namen":"name"
          }
        }
      ],
      vocab: [
        {
          word: "Servus", pos: "interjection · dialect", region: "Bayern · Österreich",
          meaning: "hi — and also bye",
          note: "Bavaria and Austria, both directions. From Latin *servus* (“your servant”). North Germany would find it charming but wouldn't say it; there it's «hallo» / «tschüss».",
          example: "Servus, schön dich zu sehen!",
          exampleEn: "Hi, good to see you!",
          exGloss: { "servus":"hi / bye (Bav./Aus.)", "schön":"nice / lovely", "sehen":"to see" }
        },
        {
          word: "Feierabend", article: "der", pos: "noun", region: "general",
          meaning: "the end of the workday — clocking-off time, and the free evening that follows",
          note: "No English equivalent. «Feierabend machen» = to knock off. «Schönen Feierabend!» is a normal goodbye to a colleague.",
          example: "Ich mache jetzt Feierabend, bis morgen!",
          exampleEn: "I'm knocking off for the day now, see you tomorrow!",
          exGloss: { "mache":"make / do", "feierabend":"end of the workday", "jetzt":"now" }
        },
        {
          word: "doch", pos: "particle · everyday", region: "general",
          meaning: "yes it is! (contradicting a negative) — or a softener meaning “go on, why don't you”",
          note: "Two jobs. As an answer it reverses a negative: «Du kommst nicht?» — «Doch!» = Yes, I am. Inside a sentence it nudges.",
          example: "Komm doch mit, es wird bestimmt lustig.",
          exampleEn: "Come along, why don't you — it'll definitely be fun.",
          exGloss: { "komm":"come", "doch":"go on / why don't you", "mit":"along / with", "bestimmt":"definitely", "lustig":"fun / funny" }
        },
        {
          word: "krass", pos: "adjective · slang", region: "general",
          meaning: "intense, wild, insane — good or bad depending on tone",
          note: "Youth slang that went mainstream nationwide. «Das ist ja krass!» works for a great concert and for a car crash alike.",
          example: "Das Konzert gestern war echt krass.",
          exampleEn: "That concert yesterday was absolutely wild.",
          exGloss: { "konzert":"concert", "gestern":"yesterday", "echt":"really / genuinely", "krass":"intense / wild" }
        },
        {
          word: "Tüte", article: "die", pos: "noun", region: "Deutschland",
          meaning: "bag (the paper or plastic kind from a shop)",
          note: "Standard in Germany. Austria says «das Sackerl», Switzerland «das Säckli» or «der Sack» — asking for a «Tüte» in Vienna marks you instantly as German.",
          example: "Brauchen Sie eine Tüte für die Einkäufe?",
          exampleEn: "Do you need a bag for your shopping?",
          exGloss: { "brauchen":"need", "tüte":"bag", "einkäufe":"purchases / shopping" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “castle”?",
          options:["die Stadt","das Schloss","der Name","das Licht"], answer:1,
          why:"«Das Schloss» = castle or palace. It also means “lock” — same word.",
          lesson:"«Schloss» has two meanings — castle and lock. Learn them as a pair; context always separates them." },
        { level:"A2", q:"“Ludwig II. starb, bevor es fertig wurde.” What does «fertig» mean?",
          options:["famous","expensive","finished","empty"], answer:2,
          why:"«Fertig» = finished, ready. «Ich bin fertig» = I'm done.",
          lesson:"«Fertig» is one of the most useful words in daily German: finished, ready, done. «Bist du fertig?» = are you ready?" },
        { level:"B1", q:"Ergänze: Regensburg ___ einen mittelalterlichen Stadtkern.",
          options:["bewahren","bewahrst","bewahrt","bewahret"], answer:2,
          why:"Regensburg ist dritte Person Singular, also «bewahrt».",
          lesson:"Städtenamen sind immer dritte Person Singular, egal wie groß die Stadt ist: Regensburg bewahrt, nicht bewahren." },
        { level:"B2", q:"«Ludwig II. ließ Neuschwanstein bauen» bedeutet:",
          options:["Er baute es selbst","Er ließ es von anderen bauen","Er verbot den Bau","Er wollte es bauen"], answer:1,
          why:"«Lassen» + Infinitiv ist kausativ: man veranlasst etwas, tut es aber nicht selbst.",
          lesson:"Wenn du «Er baute es selbst» gewählt hast: «lassen» + Infinitiv verschiebt die Handlung auf andere. Ludwig hat keinen Stein gesetzt." },
        { level:"C1", q:"«Das Legionslager gab Regensburg seinen Namen.» In welchem Fall steht «Regensburg»?",
          options:["Akkusativ","Genitiv","Nominativ","Dativ"], answer:3,
          why:"«Geben» nimmt ein Dativobjekt (wem?) und ein Akkusativobjekt (was?). Regensburg bekommt — also Dativ.",
          lesson:"Frag bei «geben» immer: wem? und was? Das Wem-Objekt steht im Dativ — hier Regensburg, das den Namen bekommt." },
        { level:"C2", q:"«Als einzige deutsche Großstadt» drückt aus:",
          options:["Eine Vermutung","Eine Einschränkung: keine andere Großstadt tut das","Einen Vergleich mit Österreich","Eine Steigerung über die Zeit"], answer:1,
          why:"«Als einzige/r» isoliert das Subjekt von allen anderen — exklusiv, nicht bloß hervorhebend.",
          lesson:"«Als einzige» heißt nicht «besonders». Es schließt alle anderen aus — eine Exklusivbehauptung, die man belegen können muss." }
      ]
    },

    /* ================= DAY 2 ================= */
    {
      news: [
        {
          topic: "Geschichte · Bayern",
          text: "Das bayerische Reinheitsgebot von 1516 gilt als eines der ältesten Lebensmittelgesetze der Welt.",
          en: "The Bavarian beer purity law of 1516 is regarded as one of the oldest food laws in the world.",
          gloss: {
            "reinheitsgebot":"purity law (beer: water, malt, hops)","gilt":"is considered / counts as",
            "ältesten":"oldest","lebensmittelgesetze":"food laws"
          }
        },
        {
          topic: "Technik · München",
          text: "Das Deutsche Museum in München ist eines der größten Technikmuseen der Welt.",
          en: "The Deutsches Museum in Munich is one of the largest science and technology museums in the world.",
          gloss: {
            "museum":"museum","größten":"largest","technikmuseen":"technology museums"
          }
        },
        {
          topic: "Natur · Bayern",
          text: "Der Nationalpark Bayerischer Wald war 1970 der erste Nationalpark Deutschlands.",
          en: "The Bavarian Forest National Park was Germany's first national park in 1970.",
          gloss: {
            "nationalpark":"national park","bayerischer":"Bavarian","wald":"forest","erste":"first"
          }
        },
        {
          topic: "Wissenschaft",
          text: "Alexander von Humboldt begründete auf seinen Reisen die moderne Naturgeographie.",
          en: "Alexander von Humboldt founded modern physical geography on his travels.",
          gloss: {
            "begründete":"founded / established","reisen":"travels / journeys","moderne":"modern",
            "naturgeographie":"physical geography"
          }
        },
        {
          topic: "Geschichte",
          text: "Die Berliner Mauer fiel am 9. November 1989 und veränderte Europa für immer.",
          en: "The Berlin Wall fell on 9 November 1989 and changed Europe forever.",
          gloss: {
            "berliner":"Berlin (adj.)","mauer":"wall","fiel":"fell","veränderte":"changed","europa":"Europe"
          }
        }
      ],
      vocab: [
        {
          word: "Brotzeit", article: "die", pos: "noun · dialect", region: "Bayern",
          meaning: "a cold snack meal — bread, cheese, cold cuts, radish, taken mid-morning or late afternoon",
          note: "Bavarian institution, not just a word. The rest of Germany says «Vesper» (southwest) or just «Snack». «Brotzeit machen» = to take that break.",
          example: "Um halb elf machen wir Brotzeit.",
          exampleEn: "At half past ten we take our snack break.",
          exGloss: { "halb":"half", "elf":"eleven", "brotzeit":"cold snack meal (Bav.)" }
        },
        {
          word: "Grüß Gott", pos: "greeting · dialect", region: "Bayern · Österreich",
          meaning: "hello (lit. “greet God”)",
          note: "The standard daytime greeting in Bavaria and Austria, entirely secular in practice. Say it in Hamburg and you'll get a look; say «Moin» there instead.",
          example: "Grüß Gott, ich hätte gern zwei Brezn.",
          exampleEn: "Hello, I'd like two pretzels please.",
          exGloss: { "grüß":"greet", "gott":"God", "hätte":"would have / would like", "gern":"gladly", "brezn":"pretzels (Bav. for Brezeln)" }
        },
        {
          word: "Bock haben (auf etwas)", pos: "idiom · slang", region: "general",
          meaning: "to be up for something, to feel like it (lit. to have a billy goat)",
          note: "Very common, slightly casual, nationwide. Negative: «keinen Bock haben» = to not be arsed. Takes «auf» + accusative.",
          example: "Hast du Bock auf Kino heute Abend?",
          exampleEn: "Are you up for the cinema tonight?",
          exGloss: { "hast":"you have", "bock":"desire / urge (lit. billy goat)", "kino":"cinema" }
        },
        {
          word: "Kater", article: "der", pos: "noun · colloquial", region: "general",
          meaning: "hangover (and also: a tomcat)",
          note: "«Ich habe einen Kater» — literally “I have a tomcat.” The pun is deliberate and ancient.",
          example: "Nach der Wiesn hatte ich einen fürchterlichen Kater.",
          exampleEn: "After Oktoberfest I had a terrible hangover.",
          exGloss: { "wiesn":"Oktoberfest (Bav. — “the meadow”)", "hatte":"had", "fürchterlichen":"terrible", "kater":"hangover" }
        },
        {
          word: "abholen", pos: "verb · separable", region: "general",
          meaning: "to pick someone or something up, to collect",
          note: "Separable: the «ab» jumps to the end — «ich hole dich ab». Perfect tense wraps around it: «abgeholt».",
          example: "Ich hole dich um acht am Bahnhof ab.",
          exampleEn: "I'll pick you up at eight at the station.",
          exGloss: { "hole":"fetch / get", "acht":"eight", "bahnhof":"train station", "ab":"(prefix of abholen)" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “forest”?",
          options:["der Wald","die Welt","das Wort","der Weg"], answer:0,
          why:"«Der Wald» = forest. Watch the near-miss «die Welt» = world.",
          lesson:"«Wald» and «Welt» differ by one vowel and mean forest and world. Say them out loud next to each other once and the pair sticks." },
        { level:"A2", q:"“Eines der größten Technikmuseen der Welt.” What does «größten» mean?",
          options:["greenest","largest","greyest","oldest"], answer:1,
          why:"Superlative of «groß» (big): größer → am größten.",
          lesson:"German superlatives end in -sten after der/die/das: der größte, der älteste, der schnellste." },
        { level:"B1", q:"Ergänze: Die Berliner Mauer ___ am 9. November 1989.",
          options:["fallen","gefallen","fiel","fällte"], answer:2,
          why:"«Fallen» ist stark: fallen – fiel – gefallen. «Fällte» kommt von «fällen» (einen Baum fällen).",
          lesson:"«Fallen» (fiel, gefallen) ist intransitiv — etwas fällt von selbst. «Fällen» (fällte) ist transitiv — man fällt einen Baum." },
        { level:"B2", q:"«Eines der ältesten Lebensmittelgesetze» — warum steht «Gesetze» im Genitiv Plural?",
          options:["Weil «eines» ein Teil aus einer Gruppe herausgreift","Weil «alt» den Genitiv verlangt","Weil es ein Passivsatz ist","Weil «Gesetz» immer Genitiv ist"], answer:0,
          why:"«Eines der …» heißt “one of the …” — das Ganze steht im Genitiv Plural, der herausgegriffene Teil im Nominativ.",
          lesson:"«Eines der …» ist eine feste Konstruktion: Nominativ Singular vorne, Genitiv Plural hinten. Lern sie als ganzen Block." },
        { level:"C1", q:"«Gilt als eines der ältesten Gesetze» — «gelten als» bedeutet:",
          options:["gültig sein für","bezahlen","als etwas angesehen werden","gehören zu"], answer:2,
          why:"«Gelten als» = to be regarded as. Ohne «als» heißt «gelten» einfach: gültig sein.",
          lesson:"«Gelten» allein heißt gültig sein; «gelten als» heißt angesehen werden als. Die Präposition trägt die ganze Bedeutung." },
        { level:"C2", q:"«Begründete die moderne Naturgeographie» — «begründen» heißt hier:",
          options:["eine Begründung geben","etwas ins Leben rufen","etwas widerlegen","etwas beenden"], answer:1,
          why:"Zwei Bedeutungen: etwas begründen = to justify, aber auch = to found. Das Objekt entscheidet — eine Disziplin gründet man.",
          lesson:"Ein Verb, zwei Bedeutungen: eine These begründen (justify) und eine Disziplin begründen (found). Das Objekt entscheidet." }
      ]
    },

    /* ================= DAY 3 ================= */
    {
      news: [
        {
          topic: "Musik · München",
          text: "Richard Strauss wurde in München geboren und dirigierte später an der dortigen Hofoper.",
          en: "Richard Strauss was born in Munich and later conducted at the court opera there.",
          gloss: {
            "geboren":"born","dirigierte":"conducted","später":"later","dortigen":"there / local",
            "hofoper":"court opera"
          }
        },
        {
          topic: "Architektur · Regensburg",
          text: "Die Steinerne Brücke in Regensburg überspannt seit dem zwölften Jahrhundert die Donau.",
          en: "The Stone Bridge in Regensburg has spanned the Danube since the twelfth century.",
          gloss: {
            "steinerne":"stone (adj.)","brücke":"bridge","überspannt":"spans","zwölften":"twelfth",
            "donau":"the Danube"
          }
        },
        {
          topic: "Paläontologie · Bayern",
          text: "Der Urvogel Archaeopteryx wurde im Solnhofener Plattenkalk in Bayern gefunden.",
          en: "The primeval bird Archaeopteryx was found in the Solnhofen limestone in Bavaria.",
          gloss: {
            "urvogel":"primeval bird","solnhofener":"of Solnhofen (Bavarian quarry town)",
            "plattenkalk":"lithographic limestone","gefunden":"found"
          }
        },
        {
          topic: "Wissenschaft",
          text: "Einstein veröffentlichte 1905 vier Aufsätze, die die Physik grundlegend veränderten.",
          en: "In 1905 Einstein published four papers that fundamentally changed physics.",
          gloss: {
            "veröffentlichte":"published","aufsätze":"papers / essays","physik":"physics",
            "grundlegend":"fundamentally","veränderten":"changed"
          }
        },
        {
          topic: "Geschichte",
          text: "Gutenberg druckte um 1450 in Mainz die erste Bibel mit beweglichen Lettern.",
          en: "Around 1450 in Mainz, Gutenberg printed the first Bible using movable type.",
          gloss: {
            "gutenberg":"Gutenberg (inventor of movable-type printing)","druckte":"printed",
            "mainz":"Mainz (city on the Rhine)","erste":"first","bibel":"Bible",
            "beweglichen":"movable","lettern":"letters / type"
          }
        }
      ],
      vocab: [
        {
          word: "Grüezi", pos: "greeting · dialect", region: "Schweiz",
          meaning: "hello",
          note: "Swiss German, from «Gott grüez i» (God greet you). Plural / formal: «Grüezi mitenand». The Swiss also say «Merci vielmal» for thanks — French loan, standard there, odd in Germany.",
          example: "Grüezi, chönd Sie mir hälfe?",
          exampleEn: "Hello, could you help me?",
          exGloss: { "grüezi":"hello (Swiss)", "chönd":"can (Swiss for können)", "hälfe":"to help (Swiss for helfen)" }
        },
        {
          word: "Semmel", article: "die", pos: "noun · dialect", region: "Bayern · Österreich",
          meaning: "bread roll",
          note: "One object, a map of words: «Semmel» in Bavaria and Austria, «Brötchen» in most of Germany, «Schrippe» in Berlin, «Weggli» in Switzerland, «Rundstück» in Hamburg.",
          example: "Zwei Semmeln und einen Kaffee, bitte.",
          exampleEn: "Two rolls and a coffee, please.",
          exGloss: { "semmeln":"bread rolls (Bav./Aus.)", "kaffee":"coffee", "bitte":"please" }
        },
        {
          word: "die Nase voll haben", pos: "idiom", region: "general",
          meaning: "to be fed up, to have had enough (lit. to have the nose full)",
          note: "Takes «von» + dative for the thing you're sick of. Blunter than «genug haben».",
          example: "Ich habe die Nase voll von diesem Wetter.",
          exampleEn: "I've had it up to here with this weather.",
          exGloss: { "nase":"nose", "voll":"full", "diesem":"this", "wetter":"weather" }
        },
        {
          word: "gemütlich", pos: "adjective", region: "general",
          meaning: "cosy, unhurried, warmly comfortable",
          note: "A cultural keyword — «die Gemütlichkeit» is what a Munich beer garden, a slow Sunday and a warm living room share. Also means taking your time: «immer schön gemütlich».",
          example: "Wir haben einen gemütlichen Abend im Biergarten verbracht.",
          exampleEn: "We spent a cosy evening in the beer garden.",
          exGloss: { "gemütlichen":"cosy", "abend":"evening", "biergarten":"beer garden", "verbracht":"spent" }
        },
        {
          word: "wissen", pos: "verb · irregular", region: "general",
          meaning: "to know (a fact)",
          note: "Odd present tense: ich weiß, du weißt, er weiß, wir wissen. Past: wusste. Contrast «kennen» = to know a person or place.",
          example: "Ich weiß nicht, wo mein Schlüssel ist.",
          exampleEn: "I don't know where my key is.",
          exGloss: { "weiß":"I know", "wo":"where", "schlüssel":"key" }
        }
      ],
      quiz: [
        { level:"A1", q:"Which word means “bridge”?",
          options:["der Berg","die Brücke","das Brot","der Bruder"], answer:1,
          why:"«Die Brücke» = bridge. «Berg» mountain, «Brot» bread, «Bruder» brother.",
          lesson:"Four B-words worth separating early: Berg (mountain), Brücke (bridge), Brot (bread), Bruder (brother)." },
        { level:"A2", q:"“Richard Strauss wurde in München geboren.” This means he was:",
          options:["buried in Munich","born in Munich","famous in Munich","married in Munich"], answer:1,
          why:"«Geboren werden» = to be born. «Ich wurde 1990 geboren».",
          lesson:"«Geboren werden» is always passive in German — you don't “born”, you “are born”: ich wurde 1990 geboren." },
        { level:"B1", q:"Ergänze: Einstein ___ 1905 vier Aufsätze.",
          options:["veröffentlicht","veröffentlichte","veröffentlichen","veröffentlichten"], answer:1,
          why:"Präteritum, dritte Person Singular: veröffentlichte. Die Pluralform «veröffentlichten» passt nicht zu «Einstein».",
          lesson:"Präteritum Singular endet auf -e: veröffentlichte. Die Endung -en gehört zum Plural «sie veröffentlichten»." },
        { level:"B2", q:"«Überspannt seit dem zwölften Jahrhundert die Donau» — «seit» + Dativ zeigt:",
          options:["Eine abgeschlossene Handlung","Eine Zukunftsabsicht","Eine Handlung, die andauert","Einen Grund"], answer:2,
          why:"«Seit» markiert einen Zeitpunkt in der Vergangenheit, von dem an etwas bis heute gilt — deshalb steht das Verb im Präsens.",
          lesson:"Deutsch nimmt bei «seit» das Präsens, Englisch das Perfekt: «seit 1146 überspannt sie» = has spanned since 1146." },
        { level:"C1", q:"«Der Urvogel wurde gefunden» ist:",
          options:["Passiv Präteritum","Aktiv Perfekt","Konjunktiv II","Futur II"], answer:0,
          why:"«Wurde» + Partizip II = Vorgangspassiv im Präteritum. Mit «war gefunden» wäre es Zustandspassiv.",
          lesson:"«Wurde» + Partizip beschreibt einen Vorgang (etwas geschieht). «War» + Partizip beschreibt einen Zustand (etwas ist bereits so)." },
        { level:"C2", q:"«Dirigierte später an der dortigen Hofoper» — «dortig» ist:",
          options:["Ein Ortsadverb","Eine Präposition","Ein Adjektiv, das auf den vorher genannten Ort verweist","Ein Zeitadverb"], answer:2,
          why:"«Dortig» ist ein deklinierbares Adjektiv aus «dort» — es greift den schon genannten Ort auf, hier München.",
          lesson:"«Dortig», «hiesig», «damalig» sind Adjektive aus Adverbien. Sie greifen einen schon genannten Ort oder Zeitpunkt auf und werden dekliniert." }
      ]
    }
  ]
};
