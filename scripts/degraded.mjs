/* ============================================================
   Degraded-mode render (BL-WEB-01; design system step 8).
   Loads the assembled artefact once in a headless browser,
   extracts every collection as semantic HTML — headings, lists,
   relation triples, declared gaps — and injects the result as a
   <noscript> block, so with JavaScript disabled the artefact
   still answers: what is here, what relates to what, what is
   missing, and how do we know. The interactive web is a
   progressive enhancement over this content.
   ============================================================ */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/the-web.html', import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage();
page.on('pageerror', e => { console.error('✗ page error during extraction:', e.message); process.exitCode = 1; });
await page.goto('file://' + DIST);
await page.waitForFunction(() => typeof COLLECTIONS !== 'undefined' && typeof loadCollection === 'function');

const ids = await page.evaluate(() => Object.keys(COLLECTIONS));
const parts = [];
for (const id of ids){
  parts.push(await page.evaluate((cid) => {
    loadCollection(cid);
    const col = COLLECTIONS[cid];
    let h = `<section><h2>${esc(col.label)}</h2>`;
    STRANDS.forEach(s => {
      h += `<h3>${esc(s.label)}</h3><ul>`;
      s.nodes.forEach((nd, j) => {
        const nid = s.id + ':' + j;
        h += `<li><strong>${esc(nd.t)}</strong> — ${esc(CLSOF(nid))}` +
             `${nd.open ? ' · still open' : ''}. ${esc(nd.b)}</li>`;
      });
      h += '</ul>';
    });
    if (DECLARED.length){
      h += `<h3>Relations · ${DECLARED.length} asserted</h3><ul>`;
      DECLARED.forEach(e => { const a = byKey[e.from], b = byKey[e.to];
        if (a && b) h += `<li>${esc(a.nd.t)} — ${esc(PROPOF(e.prop).label)} → ${esc(b.nd.t)}</li>`; });
      h += '</ul>';
    }
    if (REPAIRS.length){
      h += `<h3>Declared gaps · ${REPAIRS.length}</h3><ul>`;
      REPAIRS.forEach(r => h += `<li><strong>${esc(r.t)}</strong> ${esc(r.d)}</li>`);
      h += '</ul>';
    }
    return h + '</section>';
  }, id));
}
await browser.close();

let dist = readFileSync(DIST, 'utf8');
/* idempotent: strip any previous block before injecting */
dist = dist.replace(/<noscript id="degraded">[\s\S]*?<\/noscript>\n?/, '');
const block =
  `<noscript id="degraded"><div style="max-width:76ch;margin:0 auto;padding:26px;` +
  `font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.6">` +
  `<h1>The Web — text rendering</h1>` +
  `<p><strong>JavaScript is unavailable, and that is fine.</strong> This is the ` +
  `degraded-mode rendering: every collection as headings, lists, relation triples ` +
  `and declared gaps — the same content the interactive web draws, which is a ` +
  `progressive enhancement over this page. Nothing below requires any service, ` +
  `font or script to be fetched.</p>` + parts.join('') + `</div></noscript>\n`;
const bodyOpen = dist.match(/<body[^>]*>/);
if (!bodyOpen) { console.error('✗ no <body> tag found'); process.exit(1); }
dist = dist.replace(bodyOpen[0], bodyOpen[0] + '\n' + block);
writeFileSync(DIST, dist);

if (parts.length !== ids.length || !dist.includes('id="degraded"')){
  console.error('✗ degraded render incomplete'); process.exit(1);
}
console.log(`✓ Degraded render injected — ${ids.length} collections, ${(block.length / 1024).toFixed(0)} KB of semantic HTML in <noscript>`);
