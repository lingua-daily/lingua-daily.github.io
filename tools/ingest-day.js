#!/usr/bin/env node
/* Validates one freshly written day and merges it into content/daily.js.
   Usage: node bin/ingest-day.js path/to/day.json
   Exit 0 = ingested (warnings may print), 1 = rejected, nothing written.

   day.json shape:
   { "date": "2026-09-30",
     "es": { "news":[3], "vocab":[3], "quiz":[6] },
     "de": { ... }, "it": { ... }, ... }

   Counts follow each language's `perDay` (default LINGUA_PER_DAY). A language
   left out is skipped with a warning — its research may have fallen through —
   and the rest still ingest. Languages with `script: true` must also carry the
   original script. Re-ingesting a date merges into what is already there. */

const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const WORD = /[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*/gu;
const KEEP_DAYS = 14;

const sb = { window: { CONTENT: {} }, module: { exports: {} } };
vm.createContext(sb);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sb, { filename: f });
load('content/languages.js');
const LANGS = sb.window.LANGUAGES, PER_DAY = sb.window.PER_DAY || 3;
LANGS.forEach(c => load('content/' + c + '.js'));
load('content/daily.js');
const DAILY = sb.window.DAILY || {};

const file = process.argv[2];
if (!file) { console.error('usage: ingest-day.js day.json'); process.exit(1); }
let day;
try { day = JSON.parse(fs.readFileSync(file, 'utf8')); }
catch (e) { console.error('REJECTED: not valid JSON — ' + e.message); process.exit(1); }

const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);
const str = (v, where) => { if (typeof v !== 'string' || !v.trim()) err(where + ' must be a non-empty string'); };
const obj = (v, where) => { if (!v || typeof v !== 'object' || Array.isArray(v)) err(where + ' must be an object'); };

if (!/^\d{4}-\d{2}-\d{2}$/.test(day.date || '')) err('date must be YYYY-MM-DD');

function coverage(lang, text, gloss, where){
  const base = C(lang).base || {};
  const miss = [];
  for (const m of String(text).matchAll(WORD)){
    const k = m[0].toLowerCase().replace(/[’']/g, "'");
    if ((gloss && k in gloss) || k in base) continue;
    const tail = k.split(/[-']/).pop();
    if (/[-']/.test(k) && ((gloss && tail in gloss) || tail in base)) continue;
    miss.push(m[0]);
  }
  if (miss.length) warn(`${where}: no gloss for ${[...new Set(miss)].join(', ')} (fine only if these are proper nouns)`);
  for (const k of Object.keys(gloss || {})) if (k !== k.toLowerCase()) err(`${where}: gloss key "${k}" must be lowercase`);
}
const C = lang => sb.window.CONTENT[lang];

const present = LANGS.filter(l => day[l]);
if (!present.length) err('no languages in this day');
LANGS.filter(l => !day[l]).forEach(l => warn(`${l.toUpperCase()}: not in this day — skipped`));
Object.keys(day).filter(k => k !== 'date' && !LANGS.includes(k)).forEach(k => err(`"${k}" is not a language in content/languages.js`));

for (const lang of present){
  const d = day[lang], L = lang.toUpperCase();
  const N = C(lang).perDay || PER_DAY, SCRIPT = !!C(lang).script;

  if (!Array.isArray(d.news) || d.news.length !== N) err(`${L}: news needs exactly ${N} items`);
  (d.news || []).forEach((n, i) => {
    const w = `${L} news ${i + 1}`;
    ['topic', 'source'].forEach(k => str(n[k], `${w}.${k}`));
    if (n.source && !/^https?:\/\//.test(n.source)) err(`${w}.source must be a URL`);
    if (!n.levels || typeof n.levels !== 'object') { err(`${w}: needs levels { A, B, C }, the headline written three ways`); return; }
    for (const band of ['A', 'B', 'C']){
      const v = n.levels[band], wb = `${w} (${band})`;
      if (!v) { err(`${wb}: missing`); continue; }
      ['text', 'en'].forEach(k => str(v[k], `${wb}.${k}`));
      obj(v.gloss, `${wb}.gloss`);
      // one sentence only; a full stop straight after a digit is an ordinal («191.»), not a sentence end
      const ends = String(v.text).match(/[^\d][.!?](\s|$)/g) || [];
      if (ends.length > 1) warn(`${wb}: looks like more than one sentence`);
      if (band === 'A' && String(v.text).split(/\s+/).length > 14) warn(`${wb}: A-level headline is long; aim for about 12 words`);
      if (SCRIPT) str(v.script, `${wb}.script (original script)`);
      coverage(lang, v.text, v.gloss, wb);
    }
    const a = n.levels.A && n.levels.A.text, c = n.levels.C && n.levels.C.text;
    if (a && c && a.trim() === c.trim()) err(`${w}: the A and C versions are identical; write one for each level`);
  });

  if (!Array.isArray(d.vocab) || d.vocab.length !== N) err(`${L}: vocab needs exactly ${N} items`);
  (d.vocab || []).forEach((v, i) => {
    const w = `${L} vocab ${i + 1}`;
    ['word', 'pos', 'region', 'meaning', 'note', 'example', 'exampleEn'].forEach(k => str(v[k], `${w}.${k}`));
    obj(v.exGloss, `${w}.exGloss`);
    if (!Number.isInteger(v.ties) || v.ties < 1 || v.ties > N) err(`${w}.ties must be the headline number it belongs to (1–${N})`);
    if (SCRIPT){ str(v.wordScript, `${w}.wordScript`); str(v.exScript, `${w}.exScript`); }
    coverage(lang, v.example, v.exGloss, w + ' example');
  });

  if (!d.tip || typeof d.tip !== 'object') err(`${L}: needs a tip { title, text } about how the language works`);
  else {
    str(d.tip.title, `${L} tip.title`); str(d.tip.text, `${L} tip.text`);
    if (String(d.tip.text).length > 450) warn(`${L} tip: keep it under ~450 characters`);
  }

  // beginner content: two everyday-phrase scenes, shown at A1–A2
  if (!Array.isArray(d.phrases) || d.phrases.length !== 2) err(`${L}: needs phrases, exactly 2 everyday scenes`);
  (d.phrases || []).forEach((sc, si) => {
    const w = `${L} phrases ${si + 1}`;
    ['topic', 'situation'].forEach(k => str(sc[k], `${w}.${k}`));
    if (!Array.isArray(sc.lines) || sc.lines.length < 3 || sc.lines.length > 8) { err(`${w}: needs 3 to 8 lines`); return; }
    sc.lines.forEach((ln, li) => {
      const wl = `${w} line ${li + 1}`;
      ['text', 'en'].forEach(k => str(ln[k], `${wl}.${k}`));
      obj(ln.gloss, `${wl}.gloss`);
      if (SCRIPT) str(ln.script, `${wl}.script`);
      coverage(lang, ln.text, ln.gloss, wl);
    });
  });

  const f = d.fun;
  if (!f || typeof f !== 'object') err(`${L}: needs a fun item { kind, text, gloss, literal, meaning, culture }`);
  else {
    if (!['idiom', 'saying', 'joke'].includes(f.kind)) err(`${L} fun.kind must be idiom, saying or joke`);
    ['text', 'meaning', 'culture'].forEach(k => str(f[k], `${L} fun.${k}`));
    obj(f.gloss, `${L} fun.gloss`);
    if (SCRIPT) str(f.script, `${L} fun.script`);
    coverage(lang, f.text, f.gloss, `${L} fun`);
  }

  const q = d.quiz || [];
  const aRefs = q.filter(x => x.level === 'A1' || x.level === 'A2').map(x => x.ref || '');
  if (!aRefs.some(r => r.startsWith('phrase'))) err(`${L}: the A1 or A2 quiz question must reinforce a phrase scene (ref phrase1 or phrase2)`);
  if (q.length !== 6) err(`${L}: quiz needs exactly 6 questions`);
  const lv = q.map(x => x.level).sort().join(',');
  if (lv !== LEVELS.join(',')) err(`${L}: quiz needs one question at each level ${LEVELS.join(' ')}, got ${lv}`);
  q.forEach((x, i) => {
    const w = `${L} quiz ${x.level || i + 1}`;
    ['q', 'why', 'lesson'].forEach(k => str(x[k], `${w}.${k}`));
    if (!Array.isArray(x.options) || x.options.length !== 4) err(`${w}: needs 4 options`);
    else {
      const opts = x.options.map(o => String(o).trim().toLowerCase());
      if (new Set(opts).size !== 4) err(`${w}: options must all be different`);
      if (opts.some(o => o.length < 2)) err(`${w}: an option is empty or a single character`);
    }
    if (String(x.q || '').trim().length < 12) err(`${w}: question is too short to be real`);
    if (x.why && x.lesson && x.why.trim() === x.lesson.trim()) err(`${w}: lesson just repeats why`);
    if (!Number.isInteger(x.answer) || x.answer < 0 || x.answer > 3) err(`${w}: answer must be 0–3`);
    const m = /^(news|vocab|phrase)([1-9])$/.exec(x.ref || '');
    if (!m || +m[2] > (m[1] === 'phrase' ? 2 : N)) err(`${w}.ref must name what it reinforces: news1–news${N}, vocab1–vocab${N} or phrase1–phrase2`);
  });
  const refs = q.map(x => x.ref || '');
  if (refs.filter(r => r.startsWith('news')).length < 2) err(`${L}: at least 2 quiz questions must reinforce a headline`);
  if (refs.filter(r => r.startsWith('vocab')).length < 2) err(`${L}: at least 2 quiz questions must reinforce a vocab word`);
  if (new Set(q.map(x => x.answer)).size < 2) warn(`${L}: every answer is in the same position`);
  const tied = new Set((d.vocab || []).map(v => v.ties));
  if (N > 1 && tied.size < 2) warn(`${L}: all vocab ties to one headline — spread it out`);
}

warnings.forEach(w => console.log('warning: ' + w));
if (errors.length){
  errors.forEach(e => console.log('ERROR:   ' + e));
  console.log(`REJECTED — ${errors.length} error(s), nothing written.`);
  process.exit(1);
}

DAILY[day.date] = Object.assign({}, DAILY[day.date], Object.fromEntries(present.map(l => [l, day[l]])));
const keep = Object.keys(DAILY).sort().slice(-KEEP_DAYS);
const out = Object.fromEntries(keep.map(k => [k, DAILY[k]]));

fs.writeFileSync(path.join(ROOT, 'content/daily.js'),
`/* Written by bin/ingest-day.js — don't edit by hand.
   Freshly researched days, keyed by local date. Pruned to the last ${KEEP_DAYS}. */
var LINGUA_DAILY = ${JSON.stringify(out, null, 1)};

if (typeof window !== "undefined") window.DAILY = LINGUA_DAILY;
if (typeof module !== "undefined") module.exports = LINGUA_DAILY;
`, 'utf8');
// On the website repo, bump version.json so every browser loads the new lesson at once.
const ver = path.join(ROOT, 'version.json');
if (fs.existsSync(ver)) fs.writeFileSync(ver, JSON.stringify({ v: new Date().toISOString().replace(/\D/g, '').slice(0, 14) }) + '\n');

console.log(`INGESTED ${day.date} (${present.join(', ')}) — ${warnings.length} warning(s). Days on hand: ${keep.join(', ')}`);
