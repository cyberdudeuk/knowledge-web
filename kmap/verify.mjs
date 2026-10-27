// Verify the Knowledge Map: run its in-page self-checks in both themes and at 390px,
// then prove a sample of checks fails on deliberately broken copies.
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const src = readFileSync(new URL('./knowledge-map.html', import.meta.url), 'utf8');
const wrap = s => '<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + s + '</body></html>';
const dir = mkdtempSync(join(tmpdir(), 'kmap-'));
const write = (name, s) => { const f = join(dir, name); writeFileSync(f, wrap(s)); return 'file://' + f; };

// Each mutation must make the named check fail. Anchors are literal text in the page.
const NEGATIVE = [
  ['a register row points at a missing node', '"hive-nav", "named", 37]', '"hive-navX", "named", 37]', 'points at a node that exists'],
  ['a personal title is stored', '["ASWgRxcMsEiaJNLDuw6jT7", null,', '["ASWgRxcMsEiaJNLDuw6jT7", "x",', 'No personal artefact'],
  ['a new artefact is given a node by guess', '"DAM Return and DAM Desk", "2026-10-27", null, "new"', '"DAM Return and DAM Desk", "2026-10-27", "dam", "new"', 'given no node by guess'],
  ['the footer uses the team inbox', 'href="mailto:emanuel.silva@dsit.gov.uk"', 'href="mailto:GDSDataManagement@dsit.gov.uk"', 'own work address'],
  ['The Web is linked to the GitHub gap again', "  ['web-v38','web-repo','released from'", "  ['web','G-git','open','S','x'],\n  ['web-v38','web-repo','released from'", 'linked to the “not yet on GitHub” gap'],
];

let failures = 0;
const say = (ok, msg) => { console.log((ok ? '✓ ' : '✗ ') + msg); if (!ok) failures++; };
const browser = await chromium.launch();
async function checks(url, opts) {
  const page = await browser.newPage(opts); const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  await page.goto(url); await page.waitForTimeout(1500);
  const c = await page.evaluate(() => window.KMAP_CHECKS || []);
  return { page, errs, c };
}
const good = write('good.html', src);
for (const scheme of ['light', 'dark']) {
  const { page, errs, c } = await checks(good, { viewport: { width: 1500, height: 1000 }, colorScheme: scheme });
  say(errs.length === 0, `${scheme}: no page errors`);
  const bad = c.filter(x => !x.pass).map(x => x.name);
  say(c.length > 0 && bad.length === 0, `${scheme}: ${c.length} self-checks pass${bad.length ? ' — failing: ' + bad.join('; ') : ''}`);
  await page.close();
}
{
  const { page } = await checks(good, { viewport: { width: 390, height: 844 } });
  for (const v of ['map', 'graph', 'index', 'insights', 'paths', 'about']) {
    await page.evaluate(x => setView(x), v); await page.waitForTimeout(120);
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    say(ov <= 1, `390px: no overflow on ${v}`);
  }
  await page.close();
}
for (const [name, from, to, expect] of NEGATIVE) {
  if (!src.includes(from)) { say(false, `negative test anchor missing: ${name}`); continue; }
  const { page, c } = await checks(write('neg.html', src.replace(from, to)), { viewport: { width: 1500, height: 1000 } });
  say(c.some(x => !x.pass && x.name.includes(expect)), `negative: ${name} → refused`);
  await page.close();
}
await browser.close();
console.log(failures ? `\n${failures} failure(s)` : '\nAll Knowledge Map checks passed.');
process.exit(failures ? 1 : 0);
