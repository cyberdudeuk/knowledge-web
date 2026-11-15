// Lints the built page's scripts (D-LINT-01; secure development standard, 15 November 2026).
// The page is assembled from src/*.html chunks. Its classic <script> blocks share one global scope in the browser,
// so they are joined and linted as one script, taken from dist/the-web.html. Any finding fails.
//
// Allowed on purpose, each for a stated reason (see docs/DOCTRINE.md on the wrapper chains):
// - no-func-assign: later chunks wrap earlier functions by reassigning them.
// - no-redeclare: a later chunk may replace an earlier function outright (45-route-lighting replaces 43-movement's
//   routeBetween with one that can avoid a bead).
// - empty catch blocks: optional features fail closed and silently.
// - refreshHome: set on window by 61-portal-pages, so the linter cannot see it as a declaration.
//
// Self-test first: a duplicate object key and an undefined name must both be reported.
// Run: node scripts/lint-page.mjs   (needs the dev dependencies: npm ci)
import {readFileSync} from "fs";
import {ESLint} from "eslint";
import js from "@eslint/js";
import globals from "globals";

const config = [
  js.configs.recommended,
  {
    languageOptions: {ecmaVersion: 2024, sourceType: "script", globals: {...globals.browser, refreshHome: "readonly"}},
    rules: {
      "no-func-assign": "off",
      "no-redeclare": "off",
      "no-empty": ["error", {allowEmptyCatch: true}],
      "no-unused-vars": ["error", {args: "none", caughtErrors: "none", varsIgnorePattern: "^_"}],
    },
  },
];
const eslint = new ESLint({overrideConfigFile: true, overrideConfig: config});
const lint = async code => (await eslint.lintText(code, {filePath: "page.js"}))[0].messages;

const planted = new Set((await lint('const C={a:1,b:2,a:3};console.log(C,notDefinedAnywhere);')).map(m => m.ruleId));
if (!planted.has("no-dupe-keys") || !planted.has("no-undef")) {
  console.error("FAIL self-test: the page linter did not catch a planted duplicate key and undefined name", [...planted]);
  process.exit(1);
}

const page = process.argv[2] || "dist/the-web.html";
const html = readFileSync(page, "utf8");
const scripts = [...html.matchAll(/<script(?![^>]*type="application\/(?:ld\+)?json)(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const code = scripts.join("\n;\n");
const lines = code.split("\n");
const ms = await lint(code);
for (const m of ms) {
  const l = lines[m.line - 1] || "";
  console.error(`${page}:${m.line}:${m.column} ${m.ruleId} ${m.message} | ${l.slice(Math.max(0, m.column - 60), m.column + 40).trim()}`);
}
if (ms.length) { console.error(`FAIL ${ms.length} finding(s) in the page's scripts`); process.exit(1); }
console.log(`PASS ${scripts.length} page scripts linted as one, no findings; self-test caught a duplicate key and an undefined name`);
