/* ============================================================
   ADD A LANGUAGE HERE.

   1. Copy content/es.js to content/fr.js (or whatever code).
   2. Change the key at the top: window.CONTENT.fr = { ... }
   3. Add the code to the list below.
   Both the web app and the daily email pick it up automatically.
   ============================================================ */

var LINGUA_LANGUAGES = ["es", "de", "it", "ar", "zh"];

/* Default number of headlines, words and quiz questions shown per language.
   A language can override it with `perDay` in its own file. */
var LINGUA_PER_DAY = 3;

/* Works in the browser and in the build scripts alike. */
if (typeof window !== "undefined") { window.LANGUAGES = LINGUA_LANGUAGES; window.PER_DAY = LINGUA_PER_DAY; }
if (typeof module !== "undefined") module.exports = LINGUA_LANGUAGES;
