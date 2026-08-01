#!/usr/bin/env node
/* Minimal static server, so the artefact can be opened over http rather than file://
   (needed to test the retreat pop-out and clipboard APIs properly). */
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json' };
const PORT = process.env.PORT || 8080;
createServer((req, res) => {
  const url = req.url === '/' ? '/dist/the-web.html' : decodeURIComponent(req.url.split('?')[0]);
  const file = join(ROOT, url);
  if (!file.startsWith(ROOT) || !existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(PORT, () => console.log(`\n  The Web → http://localhost:${PORT}\n  Ctrl+C to stop\n`));
