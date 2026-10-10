/* Lingua — daily news + vocab reader.
   Languages are listed in content/languages.js; fresh days in content/daily.js. */

const C = window.CONTENT;
const ORDER = window.LANGUAGES || Object.keys(C);
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const PER_DAY = window.PER_DAY || 3;

/* The chosen CEFR level is remembered per language: someone else can set
   Spanish to A2 without touching your German. */
function levelFor(lang){
  const saved = localStorage.getItem('lingua.level.' + lang);
  return LEVELS.includes(saved) ? saved : (C[lang].defaultLevel || 'B1');
}
function setLevel(lang, lvl){ localStorage.setItem('lingua.level.' + lang, lvl); }

/* Each day holds one question per level. Show the three sitting closest to the
   chosen level, leaning upward on a tie, then order them easiest-first. */
function pickQuiz(day, level, count){
  const target = LEVELS.indexOf(level);
  return day.quiz.slice()
    .sort((a, b) => {
      const da = Math.abs(LEVELS.indexOf(a.level) - target);
      const db = Math.abs(LEVELS.indexOf(b.level) - target);
      return da - db || LEVELS.indexOf(b.level) - LEVELS.indexOf(a.level);
    })
    .slice(0, count || 3)
    .sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));
}
const saved = localStorage.getItem('lingua.lang');
const S = {
  lang: (saved && C[saved]) ? saved : ORDER[0],
  offset: 0,          // 0 = today, -1 = yesterday, ...
};

/* ---------- day selection ---------- */
const EPOCH = Date.UTC(2026, 0, 1);
function dayIndex(lang){
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const n = Math.floor((today - EPOCH) / 86400000) + S.offset;
  const len = C[lang].days.length;
  if (!len) return -1;                 // language with no archive
  return ((n % len) + len) % len;
}
/* A freshly researched day for the date on screen wins; otherwise fall back
   to the built-in archive so there is always something to read. */
function dateKey(){
  const d = dayDate();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}
function pickDay(lang){
  const fresh = (window.DAILY || {})[dateKey()];
  if (fresh && fresh[lang]) return { day: fresh[lang], fresh: true };
  const i = dayIndex(lang);
  return { day: i < 0 ? null : C[lang].days[i], fresh: false };
}

function dayDate(){
  const d = new Date();
  d.setDate(d.getDate() + S.offset);
  return d;
}


/* Headlines come in three versions: A (A1–A2), B (B1–B2), C (C1–C2). Show the
   one for the chosen level, falling back to the nearest band, then to the
   single-version text older days carry. */
function variant(item, level){
  const L = item.levels;
  if (!L) return item;
  const order = { A: ['A', 'B', 'C'], B: ['B', 'A', 'C'], C: ['C', 'B', 'A'] }[level[0]] || ['B', 'A', 'C'];
  for (const b of order) if (L[b]) return Object.assign({}, item, L[b], { band: b });
  return item;
}


/* ---------- pronunciation (the device's built-in voices) ----------
   One switch in the top bar. With sound on, tapping a word also says it.
   "listen" links read whole sentences whether or not the switch is on.
   Arabic and Mandarin are spoken from the real script, never the romanised
   text, so single romanised words stay silent. */
const SPEECH = 'speechSynthesis' in window;
let soundOn = false;
try { soundOn = localStorage.getItem('lingua.sound') === 'on'; } catch (e) {}

const LANG_TAG = { es: 'es-ES', de: 'de-DE', it: 'it-IT', ar: 'ar-SA', zh: 'zh-CN', ru: 'ru-RU', fa: 'fa-IR' };
const REGION_TAG = [
  [/méxico|mexico/i, 'es-MX'], [/argentina/i, 'es-AR'], [/colombia/i, 'es-CO'],
  [/perú|peru|chile|cuba|guatemala|venezuela|ecuador|bolivia/i, 'es-US'],
  [/österreich|austria/i, 'de-AT'], [/schweiz|switzerland/i, 'de-CH'],
  [/egypt|misr|masr/i, 'ar-EG'], [/leban|lubnan/i, 'ar-LB'], [/saudi|su'udiyya/i, 'ar-SA'],
  [/taiwan/i, 'zh-TW']
];
function speechTag(lang, region){
  for (const [re, tag] of REGION_TAG) if (region && re.test(region) && tag.slice(0, 2) === lang) return tag;
  return LANG_TAG[lang];
}
/* Prefer natural voices: enhanced/premium and Google voices first, and skip
   Apple's novelty and robotic voices (Grandma, Rocko, Zarvox…). */
const NOVELTY = /^(Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley|Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Kathy|Ralph)\b/i;
function voiceScore(v){
  return (/premium|enhanced|neural/i.test(v.name) ? 4 : 0) + (/google/i.test(v.name) ? 3 : 0) +
         (v.localService ? 1 : 0) - (NOVELTY.test(v.name) ? 10 : 0);
}
function pickVoice(tag){
  if (!SPEECH) return null;
  const voices = speechSynthesis.getVoices().slice().sort((x, y) => voiceScore(y) - voiceScore(x));
  const norm = v => v.lang.replace('_', '-').toLowerCase();
  const want = tag.toLowerCase(), base = want.slice(0, 2);
  // exact region first; for Latin American Spanish prefer any other LatAm voice over Spain's
  return voices.find(v => norm(v) === want)
      || (base === 'es' && want !== 'es-es' && voices.find(v => /^es-(mx|us|419)/.test(norm(v))))
      || voices.find(v => norm(v) === LANG_TAG[base].toLowerCase())
      || voices.find(v => norm(v).startsWith(base))
      || null;
}
/* Show "listen" whenever the device can speak at all. If its voice list hasn't
   loaded yet (common on iPhone), assume yes; the voice is chosen at tap time. */
function canSpeak(lang){
  if (!SPEECH) return false;
  return speechSynthesis.getVoices().length === 0 || !!pickVoice(LANG_TAG[lang]);
}
function speak(text, lang, region){
  if (!SPEECH || !text) return;
  const tag = speechTag(lang, region), voice = pickVoice(tag);
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (voice){ u.voice = voice; u.lang = voice.lang; }
  else u.lang = tag;                // let the device pick its own voice for the language
  u.rate = 0.9;                     // a touch slower than normal speech
  speechSynthesis.speak(u);
}
/* A small text link ("listen") for a whole sentence. Nothing if the device has no voice. */
function listenLink(text, lang, region){
  if (!text || !canSpeak(lang)) return null;
  const a = document.createElement('button');
  a.className = 'listen';
  a.textContent = 'listen';
  a.onclick = () => speak(text, lang, region);
  return a;
}
function wordSay(lang, region){
  if (C[lang].script) return null;        // romanised words can't be voiced reliably
  return word => speak(word, lang, region);
}
function regionOf(topic){ return topic && topic.includes('·') ? topic.split('·').pop().trim() : ''; }

/* ---------- word glossing ---------- */
const WORD = /[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*/gu;

function norm(s){ return s.toLowerCase().replace(/[’']/g, "'"); }

function lookup(token, gloss){
  const base = C[S.lang].base || {};
  const k = norm(token);
  if (gloss && gloss[k] !== undefined) return gloss[k];
  if (base[k] !== undefined) return base[k];
  // German compounds & hyphenated forms: try the last segment
  if (/[-']/.test(k)) {
    const tail = k.split(/[-']/).pop();
    if (gloss && gloss[tail] !== undefined) return gloss[tail];
    if (base[tail] !== undefined) return base[tail];
  }
  return null;
}

/* Renders text into a container, each word a clickable <span>. */
function renderGlossed(text, gloss, container, say){
  container.innerHTML = '';
  let last = 0, m;
  WORD.lastIndex = 0;
  while ((m = WORD.exec(text)) !== null){
    if (m.index > last) container.append(document.createTextNode(text.slice(last, m.index)));
    const span = document.createElement('span');
    const m0 = m[0];
    span.className = 'w';
    span.textContent = m0;
    const en = lookup(m[0], gloss);
    if (en){
      span.classList.add('has');
      span.dataset.en = en;
      span.addEventListener('click', () => { toggleWord(span); if (soundOn && say) say(m0); });
    }
    container.append(span);
    last = m.index + m[0].length;
  }
  if (last < text.length) container.append(document.createTextNode(text.slice(last)));
}

function toggleWord(span, force){
  const on = force !== undefined ? force : !span.classList.contains('on');
  span.classList.toggle('on', on);
  const existing = span.querySelector('.gl');
  if (on && !existing){
    const g = document.createElement('span');
    g.className = 'gl';
    g.textContent = span.dataset.en;
    span.append(g);
  } else if (!on && existing){
    existing.remove();
  }
}

function setAllWords(root, on){
  root.querySelectorAll('.w.has').forEach(s => toggleWord(s, on));
}

/* ---------- render ---------- */
function render(){
  const lang = S.lang, data = C[lang], { day, fresh } = pickDay(lang);
  const n = data.perDay || PER_DAY;
  const bandName = { A: 'written for A1–A2', B: 'written for B1–B2', C: 'written for C1–C2' };
  // Arabic script / Chinese characters appear only from B1 up
  const showScript = !!data.script && LEVELS.indexOf(levelFor(lang)) >= 2;

  document.getElementById('worldLabel').textContent = data.world;
  document.documentElement.lang = lang;

  // day label
  const d = dayDate();
  const label = S.offset === 0 ? 'Today' : S.offset === -1 ? 'Yesterday'
    : d.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric' });
  document.getElementById('dayLabel').textContent = label;

  // language tabs
  const tabs = document.getElementById('langtabs');
  tabs.innerHTML = '';
  (window.LANGUAGES || Object.keys(C)).forEach(code => {
    const b = document.createElement('button');
    b.textContent = (C[code].flag ? C[code].flag + '  ' : '') + C[code].label;
    b.setAttribute('aria-selected', String(code === lang));
    b.onclick = () => { S.lang = code; localStorage.setItem('lingua.lang', code); render(); };
    tabs.append(b);
  });

  renderLevelPicker(lang);
  renderKey(data, levelFor(lang));
  document.getElementById('tipbox').innerHTML = '';

  const ol = document.getElementById('news');
  const grid = document.getElementById('vocab');
  ol.innerHTML = '';
  grid.innerHTML = '';
  document.getElementById('phrases').innerHTML = '';
  document.getElementById('alphabet').innerHTML = '';
  // the alphabet course doesn't depend on the day's news, so it shows even before a lesson exists
  if (levelFor(lang)[0] === 'B' && data.alphabet) renderAlphabet(data.alphabet, lang);
  if (!day){
    document.getElementById('newsBand').textContent = '';
    ol.innerHTML = '<li class="empty">No lesson for this date yet — the morning task writes one each day.</li>';
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('footNote').textContent = data.label + ' · nothing written for this date';
    resetReveal();
    return;
  }

  // news
  const level = levelFor(lang);
  // tell the reader which version of the headlines they're seeing
  document.getElementById('newsBand').textContent =
    day.news.some(it => it.levels) ? bandName[level[0]] : '';
  /* A and B levels get one headline plus two everyday-conversation scenes,
     a two-thirds split towards usable speech; C gets the full headlines.
     Older days stored a plain array of beginner scenes. */
  const P = Array.isArray(day.phrases) ? { A: day.phrases } : (day.phrases || {});
  const scenes = level[0] === 'C' ? null : P[level[0]];
  const conversational = Array.isArray(scenes) && scenes.length > 0;
  if (conversational) renderPhrases(scenes, lang, level[0]);
  day.news.slice(0, conversational ? 1 : n).map(it => variant(it, level)).forEach(item => {
    const li = document.createElement('li');

    if (item.topic){
      const k = document.createElement('span');
      k.className = 'kicker';
      k.textContent = item.topic;
      li.append(k);
    }

    const p = document.createElement('div');
    p.className = 'sent';
    renderGlossed(item.text, item.gloss, p, wordSay(lang, regionOf(item.topic)));
    li.append(p);
    if (showScript && item.script) li.append(scriptLine(item.script, lang, 'script'));

    const row = document.createElement('div');
    row.className = 'fullrow';
    const btn = document.createElement('button');
    btn.className = 'fulltoggle';
    btn.textContent = 'full translation';
    const full = document.createElement('div');
    full.className = 'full';
    full.textContent = item.en;
    btn.onclick = () => {
      const on = !full.classList.contains('on');
      full.classList.toggle('on', on);
      btn.textContent = on ? 'hide translation' : 'full translation';
    };
    row.append(btn);
    const hl = listenLink(item.script || item.text, lang, regionOf(item.topic));
    if (hl) row.append(hl);
    if (item.source){
      const a = document.createElement('a');
      a.className = 'src';
      a.href = item.source;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'source';
      row.append(a);
    }
    row.append(full);
    li.append(row);

    ol.append(li);
  });

  // grammar / structure tip — new each day
  if (day.tip){
    const box = document.getElementById('tipbox');
    const t = document.createElement('div');
    t.className = 'tip';
    const h = document.createElement('div');
    h.className = 'tiphead';
    h.textContent = 'How the language works · ' + day.tip.title;
    const b = document.createElement('div');
    b.textContent = day.tip.text;
    t.append(h, b);
    box.append(t);
  }

  // just for fun — an idiom, saying or joke with the culture behind it
  if (day.fun){
    const f = day.fun, box = document.getElementById('tipbox');
    const c = document.createElement('div');
    c.className = 'fun';
    const h = document.createElement('div');
    h.className = 'funhead';
    h.textContent = 'Just for fun · ' + ({ idiom: 'idiom', saying: 'saying', joke: 'joke' }[f.kind] || f.kind) +
      (f.region && f.region !== 'general' ? ' · ' + f.region : '');
    const line = document.createElement('div');
    line.className = 'funtext';
    renderGlossed(f.text, f.gloss, line, wordSay(lang, f.region));
    c.append(h, line);
    const fl = listenLink(f.script || f.text, lang, f.region);
    if (fl){ const r = document.createElement('div'); r.className = 'fullrow'; r.append(fl); c.append(r); }
    if (showScript && f.script) c.append(scriptLine(f.script, lang, 'script'));
    const rows = [['Literally', f.literal], [f.kind === 'joke' ? 'Why it’s funny' : 'Meaning', f.meaning], ['The culture', f.culture]];
    rows.filter(([, v]) => v).forEach(([k, v]) => {
      const p = document.createElement('div');
      p.className = 'funrow';
      const b = document.createElement('b');
      b.textContent = k + ' ';
      p.append(b, document.createTextNode(v));
      c.append(p);
    });
    box.append(c);
  }

  // vocab
  day.vocab.slice(0, n).forEach(v => {
    const card = document.createElement('div');
    card.className = 'card';

    const top = document.createElement('div');
    top.className = 'cardtop';
    const term = document.createElement('span');
    term.className = 'term';
    if (v.article) term.innerHTML = '<span class="art">' + v.article + '</span> ';
    term.append(document.createTextNode(v.word));
    term.onclick = () => { if (soundOn) speak(v.wordScript || v.word.replace(/[?!¿¡]/g, ''), lang, v.region); };
    if (showScript && v.wordScript) term.append(' ', scriptLine(v.wordScript, lang, 'wscript', 'span'));
    const pos = document.createElement('span');
    pos.className = 'pos' + (/slang|idiom/i.test(v.pos) ? ' slang' : '');
    pos.textContent = v.pos;
    top.append(term, pos);
    if (v.ties){
      const t = document.createElement('span');
      t.className = 'ties';
      t.textContent = '↔ headline ' + v.ties;
      top.append(t);
    }
    if (v.region && v.region !== 'general'){
      const r = document.createElement('span');
      r.className = 'region';
      r.textContent = v.region;
      top.append(r);
    }
    card.append(top);

    const mean = document.createElement('div');
    mean.className = 'mean';
    mean.textContent = v.meaning;
    mean.title = 'click to reveal';
    mean.onclick = () => mean.classList.toggle('on');
    card.append(mean);

    if (v.note){
      const n = document.createElement('div');
      n.className = 'note';
      n.textContent = v.note;
      card.append(n);
    }

    const ex = document.createElement('div');
    ex.className = 'ex';
    renderGlossed(v.example, v.exGloss, ex, wordSay(lang, v.region));
    card.append(ex);
    if (showScript && v.exScript) card.append(scriptLine(v.exScript, lang, 'script'));

    const exen = document.createElement('div');
    exen.className = 'exen';
    exen.textContent = v.exampleEn;
    card.append(exen);
    const vl = listenLink(v.exScript || v.example, lang, v.region);
    if (vl){ const r = document.createElement('div'); r.className = 'fullrow'; r.append(vl); card.append(r); }

    grid.append(card);
  });

  renderQuiz(day, lang, n);

  document.getElementById('footNote').textContent =
    data.label + (fresh ? ' · researched fresh for this date'
                        : ' · from the built-in archive (no fresh day for this date)');

  resetReveal();
}

/* Original script under the romanised line — right-to-left for Arabic. */
function scriptLine(text, lang, cls, tag){
  const el = document.createElement(tag || 'div');
  el.className = cls;
  el.lang = lang;
  if (lang === 'ar') el.dir = 'rtl';
  el.textContent = text;
  return el;
}

/* Permanent reading key (tone marks, romanisation) for languages that need one. */
function renderKey(data, level){
  const box = document.getElementById('keybox');
  box.innerHTML = '';
  if (!data.key) return;
  const k = data.key;
  const d = document.createElement('details');
  d.className = 'keyd';
  d.open = !level || level[0] === 'A';   // open for beginners, folded away after
  const sum = document.createElement('summary');
  sum.textContent = k.title;
  d.append(sum);
  if (k.intro){ const p = document.createElement('p'); p.textContent = k.intro; d.append(p); }
  const tbl = document.createElement('div');
  tbl.className = 'keyrows';
  k.rows.forEach(([mark, how, ex]) => {
    const m = document.createElement('span'); m.className = 'kmark'; m.textContent = mark;
    const h = document.createElement('span'); h.textContent = how;
    const e = document.createElement('span'); e.className = 'kex'; e.textContent = ex;
    tbl.append(m, h, e);
  });
  d.append(tbl);
  if (k.note){ const p = document.createElement('p'); p.className = 'knote'; p.textContent = k.note; d.append(p); }
  box.append(d);
}

/* ---------- everyday phrases (beginner levels) ---------- */
function renderPhrases(scenes, lang, band){
  const box = document.getElementById('phrases');
  const head = document.createElement('div');
  head.className = 'phrasehead';
  head.textContent = band === 'B' ? 'Everyday conversation' : 'Everyday phrases';
  box.append(head);
  scenes.forEach(sc => {
    const card = document.createElement('div');
    card.className = 'scene';
    const t = document.createElement('div');
    t.className = 'scenetitle';
    t.textContent = sc.topic;
    card.append(t);
    if (sc.situation){
      const sit = document.createElement('div');
      sit.className = 'situation';
      sit.textContent = sc.situation;
      card.append(sit);
    }
    sc.lines.forEach(ln => {
      const row = document.createElement('div');
      row.className = 'pline';
      if (ln.who){
        const who = document.createElement('span');
        who.className = 'who';
        who.textContent = ln.who;
        row.append(who);
      }
      const txt = document.createElement('span');
      txt.className = 'ptext';
      renderGlossed(ln.text, ln.gloss, txt, wordSay(lang, sc.region));
      row.append(txt);
      const l = listenLink(ln.script || ln.text, lang, sc.region);
      if (l) row.append(l);
      const en = document.createElement('div');
      en.className = 'full pen';
      en.textContent = ln.en;
      row.append(en);
      card.append(row);
    });
    const tog = document.createElement('button');
    tog.className = 'fulltoggle';
    tog.textContent = 'show English';
    tog.onclick = () => {
      const on = !card.querySelector('.pen.on');
      card.querySelectorAll('.pen').forEach(e => e.classList.toggle('on', on));
      tog.textContent = on ? 'hide English' : 'show English';
    };
    const r = document.createElement('div');
    r.className = 'fullrow';
    r.append(tog);
    card.append(r);
    box.append(card);
  });
}

/* ---------- alphabet course (B1–B2, script languages) ----------
   One short lesson a day per reader, counted from the first day they saw it,
   with the previous lesson's letters as a quick review. Tap a tile to flip it. */
function abcLesson(lang, total){
  const key = 'lingua.abc.' + lang;
  let st = null;
  try { st = JSON.parse(localStorage.getItem(key)); } catch (e) {}
  if (!st || !st.start){ st = { start: Date.now(), shift: 0 }; try { localStorage.setItem(key, JSON.stringify(st)); } catch (e) {} }
  const days = Math.floor((Date.now() - st.start) / 86400000) + (st.shift || 0);
  return { i: ((days % total) + total) % total, st, key };
}
function renderAlphabet(abc, lang){
  const box = document.getElementById('alphabet');
  const total = abc.lessons.length, pos = abcLesson(lang, total), L = abc.lessons[pos.i];
  const card = document.createElement('div');
  card.className = 'abc';

  const head = document.createElement('div');
  head.className = 'abchead';
  const t = document.createElement('span');
  t.textContent = abc.title + ' · ' + (pos.i + 1) + ' of ' + total + ': ' + L.title;
  const nav = document.createElement('span');
  nav.className = 'abcnav';
  [['‹', -1], ['›', 1]].forEach(([label, step]) => {
    const b = document.createElement('button');
    b.className = 'ghost small';
    b.textContent = label;
    b.onclick = () => {
      pos.st.shift = (pos.st.shift || 0) + step;
      try { localStorage.setItem(pos.key, JSON.stringify(pos.st)); } catch (e) {}
      render();
    };
    nav.append(b);
  });
  head.append(t, nav);
  card.append(head);

  const grid = document.createElement('div');
  grid.className = 'abcgrid';
  L.letters.forEach(l => {
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.lang = lang;
    tile.innerHTML = '<span class="glyph"></span><span class="tname"></span><span class="tback"></span>';
    tile.querySelector('.glyph').textContent = l.char;
    tile.querySelector('.tname').textContent = l.name;
    tile.querySelector('.tback').textContent = l.sound + ' · ' + l.exScript + ' ' + l.exRoman + ', ' + l.exEn;
    tile.onclick = () => { tile.classList.toggle('flip'); if (tile.classList.contains('flip')) speak(l.exScript, lang); };
    grid.append(tile);
  });
  card.append(grid);

  if (pos.i > 0){
    const rev = document.createElement('div');
    rev.className = 'abcreview';
    rev.append('Review: ');
    abc.lessons[pos.i - 1].letters.forEach(l => {
      const chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = l.char;
      chip.title = 'tap to check';
      chip.onclick = () => { chip.textContent = chip.textContent === l.char ? l.char + ' = ' + l.name : l.char; };
      rev.append(chip);
    });
    card.append(rev);
  }
  box.append(card);
}

/* ---------- level picker ---------- */
function renderLevelPicker(lang){
  const level = levelFor(lang);
  document.getElementById('quizLevel').textContent = level;

  const sel = document.getElementById('levelSel');
  sel.innerHTML = '';
  LEVELS.forEach(l => {
    const o = document.createElement('option');
    o.value = l;
    o.textContent = l + (l === C[lang].defaultLevel ? ' · default' : '');
    o.selected = l === level;
    sel.append(o);
  });
  sel.onchange = () => { setLevel(lang, sel.value); render(); };
}

/* ---------- quiz ---------- */
function renderQuiz(day, lang, count){
  const level = levelFor(lang);
  const box = document.getElementById('quiz');
  box.innerHTML = '';

  pickQuiz(day, level, count).forEach((q, qi) => {
    const item = document.createElement('div');
    item.className = 'q';

    const head = document.createElement('div');
    head.className = 'qhead';
    const text = document.createElement('span');
    text.className = 'qtext';
    text.textContent = q.q;
    head.append(text);
    item.append(head);

    const opts = document.createElement('div');
    opts.className = 'opts';

    /* Get it wrong and the lesson is not optional — it explains the mistake,
       not just the answer. Get it right and the explanation is there if you
       want it, behind a toggle. */
    const lesson = document.createElement('div');
    lesson.className = 'lesson';
    lesson.innerHTML = '<span class="lessonhead">Where that went wrong</span>';
    lesson.append(document.createTextNode(q.lesson || q.why));

    const why = document.createElement('div');
    why.className = 'why';
    why.textContent = q.why;

    const explain = document.createElement('button');
    explain.className = 'explain';
    explain.textContent = 'why?';
    explain.onclick = () => {
      const on = !why.classList.contains('on');
      why.classList.toggle('on', on);
      explain.textContent = on ? 'hide' : 'why?';
    };

    q.options.forEach((label, i) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = label;
      b.onclick = () => {
        if (item.classList.contains('done')) return;
        item.classList.add('done');
        opts.querySelectorAll('.opt').forEach((o, oi) => {
          o.disabled = true;
          if (oi === q.answer) o.classList.add('right');
        });
        if (i === q.answer){
          explain.classList.add('on');          // optional clarification
        } else {
          b.classList.add('wrong');
          lesson.classList.add('on');           // mandatory correction
          why.classList.add('on');
        }
      };
      opts.append(b);
    });

    item.append(opts, explain, lesson, why);
    box.append(item);
  });
}

document.getElementById('resetQuiz').onclick = () => render();

/* ---------- reveal-all buttons ---------- */
let newsRevealed = false, vocabRevealed = false;
function resetReveal(){
  newsRevealed = false; vocabRevealed = false;
  document.getElementById('revealNews').textContent = 'Reveal all English';
  document.getElementById('revealVocab').textContent = 'Reveal all English';
}
document.getElementById('revealNews').onclick = () => {
  newsRevealed = !newsRevealed;
  const root = document.getElementById('newsPanel');
  setAllWords(root, newsRevealed);
  root.querySelectorAll('.full').forEach(f => f.classList.toggle('on', newsRevealed));
  root.querySelectorAll('.fulltoggle').forEach(b => b.textContent = newsRevealed ? 'hide translation' : 'full translation');
  document.getElementById('revealNews').textContent = newsRevealed ? 'Hide English' : 'Reveal all English';
};
document.getElementById('revealVocab').onclick = () => {
  vocabRevealed = !vocabRevealed;
  const root = document.getElementById('vocab');
  setAllWords(root, vocabRevealed);
  root.querySelectorAll('.mean').forEach(m => m.classList.toggle('on', vocabRevealed));
  root.querySelectorAll('.exen').forEach(m => m.classList.toggle('on', vocabRevealed));
  document.getElementById('revealVocab').textContent = vocabRevealed ? 'Hide English' : 'Reveal all English';
};

/* ---------- day nav + theme ---------- */
document.getElementById('prevDay').onclick = () => { S.offset--; render(); };
document.getElementById('nextDay').onclick = () => { S.offset++; render(); };

const soundBtn = document.getElementById('soundBtn');
function paintSound(){
  soundBtn.textContent = soundOn ? '🔊' : '🔇';
  soundBtn.title = soundOn ? 'Sound on: tapping a word says it' : 'Sound off: tap to hear words as you tap them';
}
if (SPEECH){
  soundBtn.hidden = false;
  paintSound();
  soundBtn.onclick = () => {
    soundOn = !soundOn;
    try { localStorage.setItem('lingua.sound', soundOn ? 'on' : 'off'); } catch (e) {}
    paintSound();
    if (!soundOn) speechSynthesis.cancel();
  };
  // voices load after the page; redraw once so "listen" links appear
  speechSynthesis.onvoiceschanged = () => { speechSynthesis.onvoiceschanged = null; render(); };
}

const themeBtn = document.getElementById('themeBtn');
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('lingua.theme', t);
}
applyTheme(localStorage.getItem('lingua.theme') ||
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.onclick = () =>
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');

render();
