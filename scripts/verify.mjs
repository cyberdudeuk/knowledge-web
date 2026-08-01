#!/usr/bin/env node
/**
 * The definition of done, executable.
 *
 * Checks, in order:
 *   1. loads with zero console/page errors
 *   2. every page routes and renders
 *   3. every collection loads, and its beads are keyboard-reachable and named
 *   4. AA contrast in both themes, measured against the PAINTED background
 *   5. no horizontal overflow at 390px
 *   6. URL state round-trips
 *
 * Requires: npm i -D playwright && npx playwright install chromium
 */
import { chromium } from 'playwright';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = join(ROOT, 'dist', 'the-web.html');
if (!existsSync(FILE)) { console.error('dist/the-web.html missing — run npm run build first'); process.exit(1); }
const URL = pathToFileURL(FILE).href;

const c = { g: s => `\x1b[32m${s}\x1b[0m`, r: s => `\x1b[31m${s}\x1b[0m`,
            y: s => `\x1b[33m${s}\x1b[0m`, d: s => `\x1b[2m${s}\x1b[0m` };
const fails = [];
const ok = (label, pass, detail = '') => {
  console.log(`  ${pass ? c.g('✓') : c.r('✗')} ${label}${detail ? c.d('  ' + detail) : ''}`);
  if (!pass) fails.push(label);
};

const lin = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const rgb = s => (String(s).match(/\d+/g) || [0, 0, 0]).slice(0, 3).map(Number);

const browser = await chromium.launch();

for (const scheme of ['dark', 'light']) {
  console.log(c.y(`\n${scheme} theme`));
  const page = await browser.newPage({ viewport: { width: 1680, height: 1100 }, colorScheme: scheme });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text()); });

  await page.goto(URL);
  await page.waitForTimeout(2200);
  ok('loads clean', errs.length === 0, errs.slice(0, 2).join(' | '));

  const pages = await page.$$eval('#pnav a', a => a.map(x => x.dataset.p));
  let routed = true;
  for (const p of pages) {
    await page.click(`#pnav a[data-p="${p}"]`);
    await page.waitForTimeout(160);
    const on = await page.evaluate(() => document.querySelector('.page.on')?.id);
    const vis = await page.evaluate(id => { const e = document.getElementById(id); return e && e.getBoundingClientRect().width > 0; }, 'pg-' + p);
    if (on !== 'pg-' + p || !vis) { routed = false; console.log(c.d(`      ${p} did not render`)); }
  }
  ok(`all ${pages.length} pages route and render`, routed);

  const cols = await page.$$eval('#colPick option', o => o.map(x => x.value));
  let colOk = true, beadOk = true;
  for (const col of cols) {
    await page.selectOption('#colPick', col);
    await page.waitForTimeout(750);
    const st = await page.evaluate(() => ({
      beads: document.querySelectorAll('#gNodes .node').length,
      dom: document.querySelectorAll('#gNodes .node .bead').length,
      named: [...document.querySelectorAll('#gNodes .node')].every(n => n.getAttribute('aria-label') && n.getAttribute('tabindex') === '0'),
      torn: (typeof REPAIRS !== 'undefined' && REPAIRS.length) || 0
    }));
    if (!st.beads || st.beads !== st.dom) { colOk = false; console.log(c.d(`      ${col}: ${st.beads} nodes / ${st.dom} beads`)); }
    if (!st.named) beadOk = false;
    if (!st.torn) { colOk = false; console.log(c.d(`      ${col}: declares no gaps — violates the collection contract`)); }
  }
  ok(`all ${cols.length} collections load with declared gaps`, colOk);
  ok('every bead keyboard-reachable and named', beadOk);

  await page.selectOption('#colPick', cols[0]);
  await page.waitForTimeout(600);
  const bg = rgb(await page.evaluate(() => getComputedStyle(document.body).backgroundColor));
  let worst = 99, worstSel = '';
  for (const sel of ['.eyebrow', '.detail-body', '.pluck-hint', '.how p', '.card p', '.ghit span']) {
    const col = await page.evaluate(s => { const e = document.querySelector(s); return e ? getComputedStyle(e).color : null; }, sel);
    if (!col) continue;
    const r = ratio(rgb(col), bg);
    if (r < worst) { worst = r; worstSel = sel; }
  }
  ok('AA contrast on body text (>= 4.5:1)', worst >= 4.5, `worst ${worst.toFixed(2)}:1 at ${worstSel}`);
  await page.close();
}

console.log(c.y('\nresponsive'));
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
const mErrs = [];
m.on('pageerror', e => mErrs.push(e.message));
await m.goto(URL); await m.waitForTimeout(1900);
let overflow = [];
for (const p of await m.$$eval('#pnav a', a => a.map(x => x.dataset.p))) {
  await m.click(`#pnav a[data-p="${p}"]`); await m.waitForTimeout(220);
  if (!await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 2)) overflow.push(p);
}
ok('no horizontal overflow at 390px', overflow.length === 0, overflow.join(', '));
ok('no errors on mobile', mErrs.length === 0, mErrs[0] || '');
await m.close();

console.log(c.y('\nstate'));
const s = await browser.newPage({ viewport: { width: 1680, height: 1100 } });
await s.goto(URL); await s.waitForTimeout(2000);
await s.click('#pnav a[data-p="web"]'); await s.waitForTimeout(300);
const cols2 = await s.$$eval('#colPick option', o => o.map(x => x.value));
await s.selectOption('#colPick', cols2[Math.min(1, cols2.length - 1)]); await s.waitForTimeout(1000);
await s.locator('#gNodes .node .bead').nth(2).click(); await s.waitForTimeout(700);
const href = await s.evaluate(() => location.href);
const before = await s.evaluate(() => document.querySelector('.detail-title')?.textContent);
const s2 = await browser.newPage({ viewport: { width: 1680, height: 1100 } });
await s2.goto(href); await s2.waitForTimeout(2400);
const after = await s2.evaluate(() => document.querySelector('.detail-title')?.textContent);
ok('URL state round-trips in a cold tab', before === after && !!before, `${before} → ${after}`);
await s.close(); await s2.close();

await browser.close();

if (fails.length) {
  console.error(c.r(`\n✗ Verify FAILED — ${fails.length} check(s):`));
  fails.forEach(f => console.error(c.r('  · ' + f)));
  process.exit(1);
}
console.log(c.g('\n✓ All checks passed. Definition of done met.\n'));
