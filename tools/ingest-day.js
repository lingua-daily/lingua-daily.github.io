#!/usr/bin/env node
/* Validates one freshly written day and merges it into content/daily.js.
   Usage: node bin/ingest-day.js path/to/day.json
   Exit 0 = ingested (warnings may print), 1 = rejected, nothing written.

   day.json shape:
   { "date": "2026-09-30",
     "es": { "news":[1], "phrases":{A,B}, "quote":{}, "lit":{},
             "vocab":{A,B,C}, "quiz":[6], "tip":{}, "fun":{} },
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
// every quote and literature line ever shown, so none repeats
const USED_FILE = path.join(ROOT, 'tools/used.json');
const USED = fs.existsSync(USED_FILE) ? JSON.parse(fs.readFileSync(USED_FILE, 'utf8')) : [];
const normText = t => String(t || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

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

  // one headline: the day's top story for that culture, written at three levels
  if (!Array.isArray(d.news) || d.news.length !== 1) err(`${L}: news needs exactly 1 headline (the day's top story)`);
  (d.news || []).forEach((n, i) => {
    const w = `${L} headline`;
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

  // C levels: a famous quote and a line of literature from the culture, never reused
  for (const [k, fields] of [['quote', ['who', 'when', 'about']], ['lit', ['author', 'work', 'when', 'about']]]){
    const x = d[k], w = `${L} ${k}`;
    if (!x || typeof x !== 'object') { err(`${w}: missing — C levels show a ${k === 'quote' ? 'famous quote' : 'line of literature'}`); continue; }
    ['text', 'en', ...fields].forEach(f => str(x[f], `${w}.${f}`));
    obj(x.gloss, `${w}.gloss`);
    if (SCRIPT) str(x.script, `${w}.script`);
    if (String(x.text).split(/\s+/).length > 45) warn(`${w}: keep it to a line or two`);
    coverage(lang, x.text, x.gloss, w);
    const key = normText(x.text);
    const prev = USED.find(u => u.lang === lang && u.date !== day.date && u.key === key);
    if (prev) err(`${w}: already used on ${prev.date} — pick another`);
  }

  // vocab per level band, each word tied to something that band actually shows
  const TIES = { A: ['news', 'phrase1', 'phrase2'], B: ['news', 'phrase1', 'phrase2'], C: ['news', 'quote', 'lit'] };
  const V = d.vocab;
  if (!V || typeof V !== 'object' || Array.isArray(V)) err(`${L}: vocab must be { "A": [${N}], "B": [${N}], "C": [${N}] }, one set per level band`);
  else for (const band of ['A', 'B', 'C']){
    const list = V[band];
    if (!Array.isArray(list) || list.length !== N) { err(`${L}: vocab.${band} needs exactly ${N} words`); continue; }
    list.forEach((v, i) => {
      const w = `${L} vocab.${band} ${i + 1}`;
      ['word', 'pos', 'region', 'meaning', 'note', 'example', 'exampleEn'].forEach(k => str(v[k], `${w}.${k}`));
      obj(v.exGloss, `${w}.exGloss`);
      if (!TIES[band].includes(v.ties)) err(`${w}.ties must be one of ${TIES[band].join(', ')} — what the ${band} level shows`);
      if (SCRIPT){ str(v.wordScript, `${w}.wordScript`); str(v.exScript, `${w}.exScript`); }
      coverage(lang, v.example, v.exGloss, w + ' example');
    });
  }

  if (!d.tip || typeof d.tip !== 'object') err(`${L}: needs a tip { title, text } about how the language works`);
  else {
    str(d.tip.title, `${L} tip.title`); str(d.tip.text, `${L} tip.text`);
    if (String(d.tip.text).length > 450) warn(`${L} tip: keep it under ~450 characters`);
  }

  // conversation content: two scenes per band, shown at A1–A2 and B1–B2
  const P = d.phrases;
  if (!P || typeof P !== 'object' || Array.isArray(P)) err(`${L}: phrases must be { "A": [2 scenes], "B": [2 scenes] }`);
  else for (const band of ['A', 'B']){
    const list = P[band], maxLines = band === 'A' ? 6 : 8, minLines = band === 'A' ? 3 : 4;
    if (!Array.isArray(list) || list.length !== 2) { err(`${L}: phrases.${band} needs exactly 2 scenes`); continue; }
    list.forEach((sc, si) => {
      const w = `${L} phrases.${band} ${si + 1}`;
      ['topic', 'situation'].forEach(k => str(sc[k], `${w}.${k}`));
      if (!Array.isArray(sc.lines) || sc.lines.length < minLines || sc.lines.length > maxLines) { err(`${w}: needs ${minLines} to ${maxLines} lines`); return; }
      sc.lines.forEach((ln, li) => {
        const wl = `${w} line ${li + 1}`;
        ['text', 'en'].forEach(k => str(ln[k], `${wl}.${k}`));
        obj(ln.gloss, `${wl}.gloss`);
        if (SCRIPT) str(ln.script, `${wl}.script`);
        coverage(lang, ln.text, ln.gloss, wl);
      });
    });
  }

  const f = d.fun;
  if (!f || typeof f !== 'object') err(`${L}: needs a fun item { kind, text, gloss, literal, meaning, culture }`);
  else {
    if (!['idiom', 'saying', 'joke'].includes(f.kind)) err(`${L} fun.kind must be idiom, saying or joke`);
    ['text', 'meaning', 'culture'].forEach(k => str(f[k], `${L} fun.${k}`));
    obj(f.gloss, `${L} fun.gloss`);
    if (SCRIPT) str(f.script, `${L} fun.script`);
    coverage(lang, f.text, f.gloss, `${L} fun`);
  }

  // quiz: two per band, each testing only what that band shows
  const q = d.quiz || [];
  if (q.length !== 6) err(`${L}: quiz needs exactly 6 questions`);
  const lv = q.map(x => x.level).sort().join(',');
  if (lv !== LEVELS.join(',')) err(`${L}: quiz needs one question at each level ${LEVELS.join(' ')}, got ${lv}`);
  q.forEach((x, i) => {
    const w = `${L} quiz ${x.level || i + 1}`, band = String(x.level || '')[0];
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
    const ok = TIES[band] ? [...TIES[band], ...Array.from({ length: N }, (_, k) => 'vocab' + (k + 1))] : [];
    if (!ok.includes(x.ref)) err(`${w}.ref must name something the ${band || '?'} level shows: ${ok.join(', ')}`);
  });
  for (const band of ['A', 'B', 'C']){
    const refs = q.filter(x => String(x.level)[0] === band).map(x => x.ref || '');
    if (refs.length && refs.every(r => r.startsWith('vocab'))) err(`${L}: the ${band} questions can't both be vocab — test the headline${band === 'C' ? ', quote or literature' : ' or a scene'} too`);
  }
  if (new Set(q.map(x => x.answer)).size < 2) warn(`${L}: every answer is in the same position`);
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
const kept = USED.filter(u => !(u.date === day.date && present.includes(u.lang)));
for (const lang of present) for (const k of ['quote', 'lit']){
  const x = day[lang][k];
  kept.push({ date: day.date, lang, kind: k, by: x.who || x.author, key: normText(x.text) });
}
fs.mkdirSync(path.dirname(USED_FILE), { recursive: true });
fs.writeFileSync(USED_FILE, JSON.stringify(kept, null, 1) + '\n');
// On the website repo, bump version.json so every browser loads the new lesson at once.
const ver = path.join(ROOT, 'version.json');
if (fs.existsSync(ver)) fs.writeFileSync(ver, JSON.stringify({ v: new Date().toISOString().replace(/\D/g, '').slice(0, 14) }) + '\n');

console.log(`INGESTED ${day.date} (${present.join(', ')}) — ${warnings.length} warning(s). Days on hand: ${keep.join(', ')}`);
