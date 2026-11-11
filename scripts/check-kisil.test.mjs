// Deliberate-break tests: each KISIL check must fail on a broken copy.
import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { checkKisil } from "./check-kisil.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
function broken(edit) {
  const d = mkdtempSync(join(tmpdir(), "kisil-"));
  cpSync(join(root, "docs"), join(d, "docs"), { recursive: true });
  cpSync(join(root, "CHANGELOG.md"), join(d, "CHANGELOG.md"));
  edit(d);
  const out = checkKisil(d);
  rmSync(d, { recursive: true, force: true });
  return out.join("\n");
}
const sub = (d, f, a, b) => { const p = join(d, f); writeFileSync(p, readFileSync(p, "utf8").replace(a, b)); };

test("clean tree passes", () => assert.equal(checkKisil(root).length, 0));
test("K1 catches a committed source with no file", () =>
  assert.match(broken((d) => sub(d, "docs/kisil/SOURCES.md", "| not in repository |", "| committed |")), /K1/));
test("K1 catches an invalid status", () =>
  assert.match(broken((d) => sub(d, "docs/kisil/SOURCES.md", "| location unknown |", "| maybe |")), /K1/));
test("K2 catches a backlog section missing from the record", () =>
  assert.match(broken((d) => sub(d, "docs/kisil/RECORD.md", "## §6 Scaling path", "## Scaling path")), /K2 §6/));
test("K3 catches an unsourced statement", () =>
  assert.match(broken((d) => sub(d, "docs/kisil/RECORD.md", "- A write API exists", "- A write API exists (no source) x\n- An invented claim\n- A write API exists")), /K3 unsourced/));
test("K3 catches a citation past the end of a file", () =>
  assert.match(broken((d) => sub(d, "docs/kisil/RECORD.md", "docs/BACKLOG.md:54", "docs/BACKLOG.md:9999")), /K3 .*beyond end/));
test("K4 catches a definition line that moved", () =>
  assert.match(broken((d) => sub(d, "docs/NAMING.md", "| **KSL** |", "| KSL |")), /K4/));
