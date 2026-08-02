# The Knowledge Web

![Version](https://img.shields.io/badge/version-3.6-1d70b8)
[![check](https://github.com/cyberdudeuk/knowledge-web/actions/workflows/check.yml/badge.svg)](https://github.com/cyberdudeuk/knowledge-web/actions/workflows/check.yml)
![Status](https://img.shields.io/badge/status-prototype_·_AMBER_by_design-c05600)
![Licence](https://img.shields.io/badge/licence-Apache--2.0-00703c)
![Delivery](https://img.shields.io/badge/delivery-single_HTML_file-4c2c92)
![Runtime deps](https://img.shields.io/badge/runtime_dependencies-none-00703c)
![Offline](https://img.shields.io/badge/works-air--gapped-00703c)
![Fonts](https://img.shields.io/badge/fonts-system_stacks_only-00703c)
![Accessibility](https://img.shields.io/badge/contrast-AA_verified_both_themes-1d70b8)
![Keyboard](https://img.shields.io/badge/keyboard-every_bead_reachable-1d70b8)
![Storage](https://img.shields.io/badge/storage_APIs-none_(ADR--W08)-6b7280)
![Language](https://img.shields.io/badge/English-UK_only-6b7280)
![Node](https://img.shields.io/badge/node-%E2%89%A518_(build_only)-5F5E5A)
![Verified](https://img.shields.io/badge/verified-9_pages_%C3%97_6_collections_%C3%97_2_themes-1d70b8)
![Doctrine](https://img.shields.io/badge/asserted_%E2%89%A0_inferred_%E2%89%A0_induced-never_collapsed-4c2c92)
![Gaps](https://img.shields.io/badge/every_collection-declares_its_gaps-946b00)

A navigable, ontology-backed map of a body of work — UK government data
standards, governance and knowledge-management artefacts — delivered as **one
self-contained HTML file** that works offline, with no build-time dependency
the user must install and no runtime dependency beyond what is vendored.

Open `dist/the-web.html` in any modern browser. That is the product.

> Repository name note: the GitHub repository is `knowledge-web`; the artefact,
> folder and package are `the-web`. The naming decision is recorded as open —
> see docs/NAMING.md for why vocabulary decisions are never made silently here.

**New to this? Read [GETTING-STARTED.md](GETTING-STARTED.md) first — it is
written for someone who has never used a terminal or Claude Code.**

## What it does

- **Six collections** (below), each rendered as an orb web: threads radiating
  from a hub, beads on the threads, a spiral crossing them. Sit at the hub,
  pluck a thread, walk a radius.
- **An ontology layer** — classes, object properties, individuals, and a
  reasoner that shows what follows by entailment and says plainly when nothing
  does. Class is encoded by *shape*, never colour alone.
- **A controlled-vocabulary layer** — taxonomy, thesaurus, glossary, data
  dictionary and the KIL/KSL knowledge ladders.
- **Stratified views** — tilt the web and every bead lifts onto the layer it
  belongs to (KIL synthesis stage, ontology depth, taxonomy, ring), with
  risers showing relations that cross levels.
- **Declared gaps** — every collection states what is missing (`repairs[]`).
  A collection with no declared gaps is not trusted. Making absence visible is
  this system's distinctive claim.
- **Guided routes, global search, shareable URL state, a full user manual**,
  dark/light themes, high-contrast and colour-safe palettes, and a text list
  view rendering the same content as the picture.

## Quick start

```bash
npm install && npx playwright install chromium
npm run check     # build + verify — should end "All checks passed"
npm run serve     # then open http://localhost:8080
```

Requires Node 18+ (build/verify scripts only — the artefact itself needs
nothing). The Playwright download (~95 MB) is the headless browser that runs
the accessibility and contrast checks.

## Repository layout

| Path | What it is |
|---|---|
| `CLAUDE.md` | Operating rules — the contract. Claude Code reads it every session. |
| `src/*.html` | Ordered build chunks, concatenated by filename. **Edit these.** |
| `dist/the-web.html` | The assembled artefact. **Generated — never edit by hand.** |
| `scripts/build.mjs` | Assemble + `node --check` every inline script |
| `scripts/verify.mjs` | The definition of done, executable |
| `scripts/serve.mjs` | Local static server |
| `docs/programme-authority.html` | Governance record — a **sibling** of the code, not a child. Charter, doctrine, ADRs, augmentation register, RAID, release history. |
| `docs/BACKLOG.md` | Standing backlog, ~58 traced items |
| `docs/DESIGN-SYSTEM.md` | Design system spec v1 — graph-first, lineage-led |
| `docs/DOCTRINE.md` | Why the code is shaped the way it is (wrapper chains, escapes) |
| `docs/NAMING.md` | KISIL / KIL / KSL vocabulary register — read before touching a term |
| `docs/USER-TESTING-PLAN.md` | Staged usability testing plan (BL-WEB-04) |

## The build loop

```bash
npm run build     # assemble ~22 chunks, syntax-check every inline script
npm run verify    # headless render: console errors, routing, keyboard reach,
                  # AA contrast in both themes, 390px overflow, URL round-trip
npm run check     # both
```

A change is **done** when build and verify pass, every bead is
keyboard-reachable with an accessible name, AA contrast holds in both themes,
nothing overflows at 390px, all six collections work — and any defect found is
**named in the release history and the commit**, never quietly fixed.

Commit convention:

```
<area>: <what changed>

Defect found and fixed: <or "none">
Verified: build + verify pass, N collections, both themes
```

## The six collections

| Collection | Shape | Source |
|---|---|---|
| This build | 5 threads · 26 beads | Conversation history |
| CDA Live Register | 5 domains · 26 beads · 499 assets | `CDA_Live_Dashboard_Template.xlsx` |
| Classification v5.0 | 7 domains · 54 beads · 57 topics | `UK_Gov_Data_Standards_Classification_v5_0_DRAFT.xlsx` |
| GDS Catalogue 2026 | 9 areas · 60 beads · 173 items | `GDS_Products_and_Services_Catalogue_-_2026.xlsx` |
| Standards Crosswalks | 9 vocabularies · 22 beads · 212 terms | `Data_Cataloguing_Standards_and_Tooling_Crosswalks.xlsx` |
| Mission alignment | 6 threads · 35 beads | Plan for Change · GDS blueprint · SDR · NDL |

## Doctrine (the short version)

1. **Augmentation, not dependency** — AI accelerates human work; it is never
   the only path to an outcome.
2. **Registered fallback** — no assisted capability ships without its manual
   counterpart in the Augmentation Register.
3. **Degraded-mode completeness** — with every service unavailable the
   artefact still performs its core function. *Both recorded failures are
   fixed: the font CDN (v2.1) and the static no-JS render (v3.0) — the
   artefact now works with JavaScript disabled.*
4. **Human-in-the-loop on consequence** — anything that drafts, decides or
   acts surfaces for explicit review.

Plus: UK English only · asserted ≠ inferred ≠ induced, never collapsed ·
nothing colour-only, picture-only or audio-only · no storage APIs (ADR-W08) ·
honest labelling never obscured · vocabulary decisions belong to the owner.

## Design system

`docs/DESIGN-SYSTEM.md` defines the v2.1+ visual layer: a four-layer token
architecture (neutral · taxonomic · epistemic · authority-gold), system font
stacks (nothing fetched at runtime), a typed node/edge grammar where outline
style carries epistemic state, a traceability-walk view, aggregate-first
level of detail, and an eight-step migration path that keeps `npm run check`
green at every step. **All eight steps are complete as of v3.0.**

## Status

**Prototype. AMBER by design.** Synthetic and self-supplied data only; no live
system is contacted. Open risks are carried visibly in the Authority's RAID
log — including that the build is verified by automation but has not yet been
tested by users (see `docs/USER-TESTING-PLAN.md` for the staged plan), and
that the ontology has not been ratified by a vocabulary owner.

Current focus, in order:

1. ~~`BL-WEB-05` version control~~ — **closed** by this repository
2. ~~`BL-WEB-02` remove the font CDN~~ — **closed** in v2.1
3. ~~`BL-WEB-01` degraded-mode static render~~ — **closed** in v3.0; the
   artefact works with JavaScript disabled
4. `BL-WEB-04` usability testing — staged; formal testing gates any move to
   internal use

## Contributing

This is a personal project. See [CONTRIBUTING.md](CONTRIBUTING.md) and
`CLAUDE.md`. The one-sentence version: edit chunks not the bundle, run
`npm run check` before every commit, name your defects, and never guess at
vocabulary — flag it and ask.

Also see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and
[SECURITY.md](SECURITY.md) (please report vulnerabilities privately, not as
a public issue). Every push and pull request against `main` runs the same
`npm run check` build-and-verify pipeline via GitHub Actions.

## Licence

[Apache-2.0](LICENSE).
