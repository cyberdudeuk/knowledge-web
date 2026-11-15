// Regression tests for the CodeQL findings fixed in v3.10 (15 November 2026).
import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync, readdirSync} from "node:fs";

const src = f => readFileSync("src/" + f, "utf8");

test("URL state keeps only known keys and looks them up as own properties (CodeQL #11, #12)", () => {
  const s = src("62-search-state-alignment.html");
  assert.match(s, /const q = Object\.create\(null\), KNOWN = \[/);
  assert.match(s, /Object\.hasOwn\(COLLECTIONS, q\.c\)/);
  assert.match(s, /Object\.hasOwn\(STRAT_BY, q\.x\)/);
  assert.doesNotMatch(s, /COLLECTIONS\[q\.c\]/);
});

test("the reasoner's query echo escapes the chosen class and property (CodeQL #7)", () => {
  assert.match(src("48-owl-explorer.html"), /<b>\$\{esc\(A\)\}<\/b> and <i>\$\{esc\(P\)\}<\/i>/);
});

test("no page loads script from another host (CodeQL #9, #10)", () => {
  const pages = ["dist/the-web.html", "kmap/knowledge-map.html"];
  for (const p of pages) assert.doesNotMatch(readFileSync(p, "utf8"), /<script[^>]+src="(https?:)?\/\//, p);
  for (const f of readdirSync("kmap/vendor").filter(f => f.endsWith(".js"))) assert.ok(readFileSync("kmap/vendor/" + f).length > 1000, f);
});

test("every workflow declares read-only default permissions (CodeQL #1)", () => {
  for (const f of readdirSync(".github/workflows")) assert.match(readFileSync(".github/workflows/" + f, "utf8"), /^permissions:(?: read-all$|\n {2}contents: read)/m, f);
});
