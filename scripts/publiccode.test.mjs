// publiccode.yml (18 Nov 2026): describes the repository to public sector software catalogues. It repeats facts
// CITATION.cff holds (version, licence), so it can drift when one is updated and not the other. The official parser
// (publiccode-parser-go) checks the schema; these tests check what it cannot, and each rule has a deliberate break.
import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";

const EMAIL = /[\w.+-]+@[\w-]+\.[\w.-]+/;
const top = (text, key) => (text.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]+?)['"]?\\s*$`, "m")) || [])[1];

export function problems(pc, cff) {
  const out = [];
  if (top(pc, "softwareVersion") !== top(cff, "version")) out.push("softwareVersion does not match CITATION.cff version");
  if (top(pc, "releaseDate") !== top(cff, "date-released")) out.push("releaseDate does not match CITATION.cff date-released");
  const licence = (pc.match(/^ {2}license:\s*(.+)$/m) || [])[1] || "";
  const cffLicence = top(cff, "license");
  if (cffLicence && !licence.includes(cffLicence)) out.push(`legal.license does not include the CITATION.cff licence ${cffLicence}`);
  if (EMAIL.test(pc)) out.push("an email address is published: contact is by the contact form only");
  if (/^ {2,}- name:.*\n {4,}(email|phone):/m.test(pc)) out.push("a maintenance contact carries more than a group name");
  if (!/^ {4}features:\n {4}- \S/m.test(pc)) out.push("description.en.features is empty");
  return out;
}

const pc = readFileSync("publiccode.yml", "utf8");
const cff = readFileSync("CITATION.cff", "utf8");

test("publiccode.yml agrees with CITATION.cff and the contact rules", () => {
  assert.deepEqual(problems(pc, cff), []);
});

test("each publiccode.yml rule fails on a deliberate break", () => {
  const breaks = {
    "softwareVersion": pc.replace(/^softwareVersion:.*$/m, "softwareVersion: 0.0.0"),
    "legal.license": pc.replace(/^ {2}license:.*$/m, "  license: GPL-3.0-only"),
    "email address": pc + "\n# someone@example.org\n",
    "maintenance contact": pc.replace(/(^ {2}- name:.*$)/m, "$1\n    email: x"),
    "features": pc.replace(/^ {4}features:\n( {4}- .*\n)+/m, "    features: []\n"),
  };
  for (const [label, text] of Object.entries(breaks)) {
    assert.ok(problems(text, cff).some((p) => p.includes(label)), `not caught: ${label}`);
  }
});
