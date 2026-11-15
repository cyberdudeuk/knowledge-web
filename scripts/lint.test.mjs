// D-LINT-01: no linter ran (only node --check). These tests keep the lint in the check and prove it can fail.
import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync, writeFileSync, mkdtempSync} from "node:fs";
import {execFileSync} from "node:child_process";
import {tmpdir} from "node:os";
import {join} from "node:path";

test("npm run check runs the linters", () => {
  const p = JSON.parse(readFileSync("package.json", "utf8"));
  assert.match(p.scripts.check, /npm run lint/);
  assert.match(p.scripts.lint, /eslint \./);
  assert.match(p.scripts.lint, /lint-page\.mjs/);
});

test("the page linter fails on a page with a duplicate key", () => {
  const dir = mkdtempSync(join(tmpdir(), "kw-lint-"));
  const bad = readFileSync("dist/the-web.html", "utf8").replace("<script>", "<script>const PLANTED={a:1,a:2};console.log(PLANTED);");
  writeFileSync(join(dir, "bad.html"), bad);
  assert.throws(() => execFileSync("node", ["scripts/lint-page.mjs", join(dir, "bad.html")], {stdio: "pipe"}), /no-dupe-keys/);
});
