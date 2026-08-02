# The Knowledge Web design system — specification v1

**Purpose:** rebuild the-web's visual layer around what it actually is — an
ontology-backed knowledge graph — with lineage and traceability as first-class
visual concerns, not decoration.

**Grounding:** an audit of nine of the owner's prototypes (kil-portal,
knowledge-hub-v2, ea_dashboard, mog-navigator, the pulseflow series,
cross_government_portal_v2, gov_ddat_command_centre, Whitehall Connect) plus
the-web's own doctrine and backlog. Where this spec asserts a pattern, it is a
pattern the owner has already evolved independently in two or more prototypes;
where it invents, it says so.

**Trace:** BL-WEB-01, 02, 12, 14, 15, 19, 21, 30–33, 41, 54 · CLAUDE.md doctrine.

---

## 1. Principles (inherited, non-negotiable)

1. Nothing is colour-only, picture-only or audio-only. Every state is a triple:
   hue + word + shape.
2. Asserted ≠ inferred ≠ induced. Never collapsed; each has its own token,
   label and treatment (§4).
3. Every collection declares its gaps. Absence is rendered, not omitted.
4. Provenance over machine confidence. Show where a claim came from and who
   stands behind it; where a score must appear it is a labelled, discrete
   value, never a colour.
5. The graph is generated from the data registries, never drawn by hand — a
   map that cannot drift from the artefact.
6. Access and absence are visible states. A gated or missing node renders as
   gated or missing; it is never silently pruned.
7. Degraded-mode completeness: the semantic HTML rendering is the base layer;
   the interactive graph is progressive enhancement over it (closes BL-WEB-01).

## 2. Token architecture

Four independent layers. Component CSS reads tokens only; themes re-derive
values, they never branch components (the Whitehall Connect pattern).

### 2.1 Neutral layer (themed)

Keep the-web's names — they are good — but re-derive both themes properly:

```
--night --deep --dusk --ridge        surfaces, 4-step depth ladder
--silk --moth --faint                text ladder (AA at every step, both themes)
--glass --glass-solid --shadow       chrome
```

Density becomes a token override, not a mode:
`[data-density="comfortable"]` raises the four `--pad-*` tokens. Default stays
dense (the owner's consistent 11–13px instinct).

### 2.2 Taxonomic layer (categorical)

One muted, near-equal-luminance categorical ramp bound to **taxonomy terms,
never chart indices** (the owner's palette, identical across knowledge-hub and
ea_dashboard):

```
--cat-1:#0F6E56  --cat-2:#185FA5  --cat-3:#534AB7  --cat-4:#BA7517
--cat-5:#993C1D  --cat-6:#A32D2D  --cat-7:#5F5E5A  --cat-8:#0C447C
```

Each hue ships as an `ink / fill / wash` triple (chip text, chip background,
panel wash), light and dark derivations. Collection colours (`--sc-*`) become
aliases into this ramp.

### 2.3 Epistemic layer — the load-bearing addition

The mog-navigator provenance tokens, extended to the-web's doctrine. Every
node, edge and datum carries exactly one epistemic state:

| Token | Meaning | Word | Shape cue | Base hue |
|---|---|---|---|---|
| `--ep-asserted` | stated in a source | ASSERTED | solid outline | green `#00703c` |
| `--ep-inferred` | follows by entailment | INFERRED | dashed outline | purple `#4c2c92` |
| `--ep-induced` | regularity observed in data | INDUCED | dotted outline | amber `#c05600` |
| `--ep-stub` | designed seam, not yet built | TARGET | broken outline | grey `#6b7280` |
| `--ep-gated` | exists, access restricted | GATED | lock glyph, 40% opacity | slate |

Rendered as an uppercase pill immediately preceding the datum, always with the
word. Confidence (BL-WEB-15/33) rides alongside as a **discrete 1–5 pip meter**
(the kil-portal ScoreBar), labelled `n/5`, colour inherited from the node's
category — never a lone colour, never an unlabelled percentage.

### 2.4 Authority layer

Gold `#946b00` (dark: `#d4b45a`) is reserved for **committed decisions and
ratified vocabulary** — a fifth state outside health/epistemic semantics
(the Whitehall Connect pattern). A Decision node is the only ellipse in the
graph; everything upstream is rectangular. Selection/focus keeps the-web's
amber; the two never share a surface.

## 3. Typography — closes BL-WEB-02

No webfonts. System stacks preserving the three roles:

```
--display: ui-serif, 'Iowan Old Style', Georgia, 'Times New Roman', serif;
--body:    system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
--mono:    ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
```

Serif = titles, big numerals, editorial standfirsts (the owner's
serif-for-ceremony instinct). Mono = everything machine-generated: IDs, hashes,
counts, dates, key hints — human prose is never mono. Named scale:
`--fs-xs:11 --fs-sm:12 --fs-base:13 --fs-md:15 --fs-lg:18 --fs-xl:23`.
Micro-eyebrows: 9.5–10.5px, 500–700, letter-spaced, uppercase (unchanged).
Stat values get `font-variant-numeric: tabular-nums`.

## 4. The graph grammar

### 4.1 Nodes

- **Shape = ontology class** (existing doctrine, kept: circle, square,
  diamond, triangle, hex, cross).
- **Outline style = epistemic state** (§2.3) — solid, dashed, dotted, broken.
- **Fill/stroke hue = taxonomy category** (§2.2).
- **Size/weight = quantified impact** where the data carries it (BL-WEB-33).
- **Two-line labels: class over instance** — 11px/700 uppercase class name
  above the instance name (the Whitehall Connect node idiom). At small zoom
  the class line drops first.
- Open items keep broken outlines; gated nodes render locked, never pruned.

### 4.2 Edges

A typed edge grammar replacing the current single route/chord pair:

| Edge type | Stroke | Direction |
|---|---|---|
| structural (taxonomy/ring) | thin, neutral | none |
| relation (object property) | solid, category hue | arrowhead |
| inference | dashed, `--ep-inferred` | arrowhead + "why?" affordance (BL-WEB-21) |
| lineage/derivation | solid 2px, inherits **source** node's state | arrowhead |
| lineage, degraded/unverified | dashed + slow pulse (killed by reduced-motion) | arrowhead |
| decision-inbound | recoloured gold | arrowhead |

One shared SVG `<marker>` for arrowheads. Edge labels: 9px mono, on demand.

### 4.3 The traceability walk — new primary view (BL-WEB-32)

The kil-portal four-tier evidence chain generalised, rendered as
**SVG-under-HTML**: a z-0 SVG carries the Bézier edges; the nodes are real
HTML cards on top — selectable text, real focus rings, accessible names.

- Left rail (280px): candidate roots (Decisions first); selected inverts;
  re-click deselects.
- Canvas: named, numbered swim-columns ordered by causation —
  `1 SOURCE → 2 TRANSFORM → 3 REVIEW → 4 DECISION` — column count derived
  from the actual walk, fan-out driving each tier's grid.
- Every card: type icon + uppercase kicker + category left-stripe + epistemic
  pill + pip meter where scored.
- Beneath: the four-tab provenance stack for the selected subject —
  **Graph / Timeline / Audit trail / Register** — one subject, four
  representations.
- Empty state designed: icon + "Select a decision to walk its evidence."

### 4.4 The node inspector

The knowledge-hub provenance quadrant, adopted as the standard detail panel:
2×2 hairline grid — Attributes | Provenance (source, extraction date, status
verbatim) / Outgoing edges | Inbound edges (counted backlinks) — plus the
epistemic pill row and a mono canonical-ID line with a "conforms to" column
where a standard applies (DCAT/SKOS/ORG), feeding BL-WEB-20/22/23.

### 4.5 Level of detail — closes the BL-WEB-12 gap

Aggregate-first, three rungs:

1. **Cluster cards** (>~60 visible nodes): a grid of category cards — colour
   dot, member count, gap count, endorsement gradient (BL-WEB-54). Clicking
   drills through by *navigating and applying the filter* (the knowledge-hub
   handoff), never by silently zooming.
2. **The web** (≤~60 nodes): the existing orb layout, with the new node/edge
   grammar. Aggregate beads state their cardinality and open on click
   (BL-WEB-14) instead of "Guidance · 17 items" dead-ends.
3. **The walk** (one root): the traceability view, §4.3.

The strata projection is retained as the layered lens across rungs 2–3.
A tube-map alternate rendering of the taxonomy is a candidate later addition —
noted, not committed.

### 4.6 Navigation

- The dragline trail evolves into the **journey ribbon**: the whole traversal
  as clickable chips with `→` separators, not just a tail.
- Global search (pluck) stays; add grouped results with mono key hints.
- Every view keeps one contextual primary action in its header.

## 5. Degraded mode is the foundation (BL-WEB-01)

The build emits, before any script, a static semantic rendering of every
collection — headings, lists, relation triples as nested lists, provenance as
definition lists — using only the neutral and epistemic *text* treatments. The
interactive graph hydrates over it. With JavaScript disabled the artefact still
answers "what is here, what relates to what, what is missing, and how do we
know". The existing list view becomes this layer rather than duplicating it.

## 6. Non-goals

- No force-directed layout. The owner's taste across nine prototypes is
  structured tiers and typed cards; the orb and the walk are deterministic.
- No charting library, no runtime fetches, no storage APIs (ADR-W08).
- No numeric machine-confidence badges without provenance beside them.

## 7. Migration path (each step leaves `npm run check` green)

| Step | Change | Chunks | Closes |
|---|---|---|---|
| 1 | System font stacks, remove CDN links; named type scale | 10 | BL-WEB-02 |
| 2 | Token restructure: neutral/taxonomic/epistemic/authority layers, both themes re-derived, density switch | 10, 11 | groundwork |
| 3 | Node grammar: epistemic outlines, two-line labels, pip meter primitive | 40, 20 | BL-WEB-15 part |
| 4 | Edge grammar + shared marker; inference edges with "why?" stub | 40, 45 | BL-WEB-21 part |
| 5 | Node inspector quadrant replaces current detail rail body | 44, 61 | BL-WEB-19/41 part |
| 6 | Traceability walk view (new chunk `64-traceability.html`) | new | BL-WEB-32 |
| 7 | Cluster-card LoD rung + drill-through | new chunk | BL-WEB-12/14 |
| 8 | Degraded-mode static emission in the build script | scripts, 20 | BL-WEB-01 |

Steps 1–2 are one session. Every step lands with the defect-naming commit
convention, verified in both themes across all six collections.
