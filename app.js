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
function renderGlossed(text, gloss, container){
  container.innerHTML = '';
  let last = 0, m;
  WORD.lastIndex = 0;
  while ((m = WORD.exec(text)) !== null){
    if (m.index > last) container.append(document.createTextNode(text.slice(last, m.index)));
    const span = document.createElement('span');
    span.className = 'w';
    span.textContent = m[0];
    const en = lookup(m[0], gloss);
    if (en){
      span.classList.add('has');
      span.dataset.en = en;
      span.addEventListener('click', () => toggleWord(span));
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
  renderKey(data);
  document.getElementById('tipbox').innerHTML = '';

  const ol = document.getElementById('news');
  const grid = document.getElementById('vocab');
  ol.innerHTML = '';
  grid.innerHTML = '';
  if (!day){
    ol.innerHTML = '<li class="empty">No lesson for this date yet — the morning task writes one each day.</li>';
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('footNote').textContent = data.label + ' · nothing written for this date';
    resetReveal();
    return;
  }

  // news
  day.news.slice(0, n).forEach(item => {
    const li = document.createElement('li');

    if (item.topic){
      const k = document.createElement('span');
      k.className = 'kicker';
      k.textContent = item.topic;
      li.append(k);
    }

    const p = document.createElement('div');
    p.className = 'sent';
    renderGlossed(item.text, item.gloss, p);
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
    renderGlossed(v.example, v.exGloss, ex);
    card.append(ex);
    if (showScript && v.exScript) card.append(scriptLine(v.exScript, lang, 'script'));

    const exen = document.createElement('div');
    exen.className = 'exen';
    exen.textContent = v.exampleEn;
    card.append(exen);

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
function renderKey(data){
  const box = document.getElementById('keybox');
  box.innerHTML = '';
  if (!data.key) return;
  const k = data.key;
  const d = document.createElement('details');
  d.className = 'keyd';
  d.open = true;
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
  const root = document.getElementById('news');
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
