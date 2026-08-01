# The Web

A navigable, ontology-backed map of a body of work. One self-contained HTML file,
no runtime dependency, works offline.

**New to this? Read [GETTING-STARTED.md](GETTING-STARTED.md) first.**

## Quick start

```bash
npm install && npx playwright install chromium
npm run check     # build + verify
npm run serve     # http://localhost:8080
```

## What is here

| Path | What it is |
|---|---|
| `CLAUDE.md` | Operating rules. Claude Code reads this automatically every session. |
| `src/*.html` | Ordered build chunks. **Edit these.** |
| `dist/the-web.html` | The assembled artefact. **Generated — never edit.** |
| `scripts/build.mjs` | Assemble + syntax-check every inline script |
| `scripts/verify.mjs` | The definition of done, executable |
| `docs/programme-authority.html` | Governance record. A sibling, not a child. |
| `docs/BACKLOG.md` | 58 items, 3 closed |
| `docs/DOCTRINE.md` | Why the code is shaped the way it is |
| `docs/NAMING.md` | KISIL / KIL / KSL register — read before touching a term |

## Six collections

| Collection | Shape | Source |
|---|---|---|
| This build | 5 threads · 26 beads | Conversation history |
| CDA Live Register | 5 domains · 26 beads · 499 assets | `CDA_Live_Dashboard_Template.xlsx` |
| Classification v5.0 | 7 domains · 54 beads · 57 topics | `UK_Gov_Data_Standards_Classification_v5_0_DRAFT.xlsx` |
| GDS Catalogue 2026 | 9 areas · 60 beads · 173 items | `GDS_Products_and_Services_Catalogue_-_2026.xlsx` |
| Standards Crosswalks | 9 vocabularies · 22 beads · 212 terms | `Data_Cataloguing_Standards_and_Tooling_Crosswalks.xlsx` |
| Mission alignment | 6 threads · 35 beads | Plan for Change · GDS blueprint · SDR · NDL |

## Status

**AMBER by design.** Prototype, synthetic and self-supplied data only, no live system
contacted. Three doctrine failures carried openly as P1 backlog items — see the
Authority, §2.

## Top three P1s

- `BL-WEB-05` version control — **closed by this repo existing**
- `BL-WEB-04` assisted-usability testing with five participants — open since v1.0
- `BL-WEB-01` / `BL-WEB-02` degraded-mode render and removing the font CDN
