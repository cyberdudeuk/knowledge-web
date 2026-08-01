#!/usr/bin/env node
/**
 * Assemble src/*.html (filename order) into dist/the-web.html,
 * then syntax-check every inline <script> with `node --check`.
 *
 * The syntax check is the whole point. A template literal with an unbalanced
 * brace produces a file that loads and silently does nothing; this catches it
 * before a browser ever sees it.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const OUT = join(ROOT, 'dist', 'the-web.html');
const TMP = join(ROOT, '.tmp');

const c = { g: s => `\x1b[32m${s}\x1b[0m`, r: s => `\x1b[31m${s}\x1b[0m`,
            y: s => `\x1b[33m${s}\x1b[0m`, d: s => `\x1b[2m${s}\x1b[0m` };

const chunks = readdirSync(SRC).filter(f => f.endsWith('.html')).sort();
if (!chunks.length) { console.error(c.r('No chunks found in src/')); process.exit(1); }

console.log(c.d(`Assembling ${chunks.length} chunks`));
let html = '';
for (const f of chunks) {
  const body = readFileSync(join(SRC, f), 'utf8');
  html += body;
  console.log(c.d(`  ${f.padEnd(34)} ${String(body.length).padStart(7)} bytes`));
}

/* ---- structural sanity ----
   Count against markup only. The retreat pop-out builds a whole document inside a
   JS template string, so counting raw text would flag three false positives. */
const problems = [];
const markup = html.replace(/<script>[\s\S]*?<\/script>/g, '<script></script>');
const count = (needle) => markup.split(needle).length - 1;
if (count('<!DOCTYPE') !== 1) problems.push(`expected exactly one DOCTYPE, found ${count('<!DOCTYPE')}`);
if (count('<body') !== 1) problems.push(`expected exactly one <body, found ${count('<body')}`);
if (count('</body>') !== 1) problems.push(`expected exactly one </body>, found ${count('</body>')}`);
const openScripts = html.split('<script>').length - 1, closeScripts = html.split('<\/script>').length - 1;
if (openScripts !== closeScripts) problems.push(`${openScripts} <script> vs ${closeScripts} </script>`);
const code = html.replace(/<!--[\s\S]*?-->/g, '');
if (/\b(localStorage|sessionStorage)\b/.test(code))
  problems.push('storage API used — forbidden by ADR-W08');

/* ---- syntax-check every inline script ---- */
rmSync(TMP, { recursive: true, force: true });
mkdirSync(TMP, { recursive: true });
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
let failed = 0;
scripts.forEach((s, i) => {
  const p = join(TMP, `s${String(i).padStart(2, '0')}.js`);
  writeFileSync(p, s);
  try {
    execFileSync(process.execPath, ['--check', p], { stdio: 'pipe' });
  } catch (e) {
    failed++;
    console.error(c.r(`\n  SYNTAX ERROR in inline script #${i}`));
    console.error(c.d(String(e.stderr || e.message).split('\n').slice(0, 6).join('\n')));
  }
});

if (problems.length) {
  console.error(c.r('\nStructural problems:'));
  problems.forEach(p => console.error(c.r('  · ' + p)));
}
if (failed || problems.length) {
  console.error(c.r(`\nBuild FAILED — ${failed} script error(s), ${problems.length} structural problem(s)`));
  process.exit(1);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
rmSync(TMP, { recursive: true, force: true });

console.log(c.g(`\n✓ Build OK`));
console.log(`  ${scripts.length} inline scripts checked`);
console.log(`  ${(html.length / 1024).toFixed(0)} KB → dist/the-web.html`);
