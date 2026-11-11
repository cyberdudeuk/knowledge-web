// KISIL record checks. Defect that created this check (2026-11-11): the KISIL
// specification existed only outside version control, and a first draft of
// RECORD.md cited the wrong line numbers. These checks keep the register and
// the record honest.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export function checkKisil(root) {
  const problems = [];
  const read = (p) => readFileSync(join(root, p), "utf8");
  const lines = (p) => read(p).split("\n");

  // K1: every committed source has its file
  const rows = read("docs/kisil/SOURCES.md").split("\n").filter((l) => /^\| S\d+ /.test(l));
  if (!rows.length) problems.push("K1 no source rows");
  for (const r of rows) {
    const c = r.split("|").map((x) => x.trim());
    const [id, , , , status] = c.slice(1);
    if (!["committed", "not in repository", "location unknown"].includes(status)) problems.push(`K1 ${id} bad status: ${status}`);
    if (status === "committed" && !existsSync(join(root, "docs/kisil/originals")) ) problems.push(`K1 ${id} committed but docs/kisil/originals/ is missing`);
  }

  // K2: every KISIL section cited by the backlog appears in the record
  const cited = new Set([...read("docs/BACKLOG.md").matchAll(/KISIL §(\d)/g)].map((m) => m[1]));
  const record = read("docs/kisil/RECORD.md");
  for (const n of cited) if (!new RegExp(`^## §${n} `, "m").test(record)) problems.push(`K2 §${n} cited in BACKLOG.md but absent from RECORD.md`);

  // K3: every statement in the record names a source, and each file:line citation resolves
  for (const l of record.split("\n").filter((x) => x.startsWith("- "))) {
    if (!/\((docs|CHANGELOG|README)[^)]*\)/.test(l)) problems.push(`K3 unsourced: ${l.slice(0, 60)}`);
  }
  for (const m of record.matchAll(/(docs\/[\w./-]+\.md):(\d+)((?:, :\d+)*)/g)) {
    const f = m[1]; if (!existsSync(join(root, f))) { problems.push(`K3 missing file ${f}`); continue; }
    const n = lines(f).length;
    const nums = [m[2], ...[...m[3].matchAll(/:(\d+)/g)].map((x) => x[1])].map(Number);
    for (const k of nums) if (k < 1 || k > n) problems.push(`K3 ${f}:${k} beyond end of file (${n} lines)`);
  }
  // K4: the definitional citations point at lines that contain the term they define
  const naming = lines("docs/NAMING.md");
  for (const [ln, term] of [[85, "KISIL"], [90, "KIL"], [86, "KISL"], [89, "KSL"]]) {
    if (!naming[ln - 1] || !naming[ln - 1].includes(`**${term}**`)) problems.push(`K4 docs/NAMING.md:${ln} no longer defines ${term}; update RECORD.md citations`);
  }
  return problems;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const p = checkKisil(root);
  if (p.length) { console.error(p.join("\n")); process.exit(1); }
  console.log("KISIL record checks passed (K1 to K4)");
}
