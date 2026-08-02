# Changelog

All notable changes to the artefact. Mirrors Section 13 (Release history) of
`docs/programme-authority.html`, which remains the source of truth. Defects
found during verification are named, never quietly fixed.

## v3.1 — 2026-08-02

Design system step 9: the KIL linking-table substrate (BL-WEB-30/31, XDMH-200).

- Read-only first cut of the five M2M linking tables (KISIL spec §3):
  `workstream_artefacts`, `artefact_insights`, `insight_signals`,
  `insight_decisions`, `artefact_decisions`. Built live per collection from
  the declared-relation registry, classified by the KIL stage of each
  relation's endpoints.
- New **Linking tables** view on the Traceability walk page: row counts,
  sample rows, and an honest declaration of every relation that fits no
  canonical transition — nothing silently dropped.
- First real test named in KISIL-TOC-001: for the native collection, only
  11 of 46 declared relations classify into the five tables. The finding is
  informative, not a bug — most native relations (`partOf`, `equivalentTo`,
  `derivedFrom`) sit within one KIL stage rather than crossing the canonical
  W→A→I→S→D transitions.
- **Defect found and fixed:** `KIL_TABLES` was empty at cold boot.
  `loadCollection()` never runs for the initial page view — the native
  collection's EDGES/DECLARED are built by separate one-time top-level code
  in an earlier chunk, a pattern already in the codebase. The build hook
  was silently skipped until an explicit top-level call was added,
  mirroring that existing pattern.
- Verified: build + degraded + verify green; table population checked
  directly against live state, not just rendered output, across two
  collections.

## v3.0 — 2026-08-02

**The design-system migration is complete.** Steps 7 and 8.

- **Step 7 (v2.8):** the three silent ring truncations become declared "+N
  more" aggregate beads stating cardinality and listing every member —
  nothing silently dropped (BL-WEB-12/14 advanced; defect named).
- **Step 8 (v3.0): BL-WEB-01 closed — the second doctrine failure fixed.**
  The build emits every collection as semantic HTML (headings, lists,
  relation triples, declared gaps) into a noscript block; proven working
  with JavaScript disabled. The interactive web is now formally a
  progressive enhancement. Pipeline: build → degraded → verify.
- Both doctrine failures recorded at v2.0 are now closed.

## v2.7 — 2026-08-02

Design system step 6: the traceability walk (BL-WEB-32).

- New portal page (ninth): pick a root, walk its evidence down the KIL chain.
  Swim-columns in causation order; SVG edges under real HTML cards, drawn
  from the live relation registry — asserted solid, entailed dashed.
- Four representations of one walk: Graph / Timeline / Audit trail / Register.
- Roots are Decision entities where a collection has them; where it does not,
  the gap is stated and the most-evidenced nodes stand in.
- Defect found and fixed: none. Verified: 9 pages × 6 collections × 2 themes.

## v2.6 — 2026-08-02

Design system step 5: the node inspector.

- 2×2 provenance quadrant in the detail rail: Attributes (class, taxonomy,
  KIL stage) | Provenance (thread, status verbatim, source link) / Outgoing |
  Inbound edges, every edge clickable for graph navigation.
- Edge lists come from the live registry: declared relations are asserted;
  materialised inverse assertions carry a dashed INFERRED pill — the
  asserted/entailed distinction is surfaced, never collapsed.
- Advances BL-WEB-19/41 (provenance per node).
- Defect found and fixed: none. Verified: 8 pages × 6 collections × 2 themes.

## v2.5 — 2026-08-02

Design system step 4: the edge grammar.

- Typed relation edges: epistemic state carried by stroke pattern (inferred
  dashed, induced dotted) with the word in a hover title and a "why?" stub
  pointing at the planned axiom-chain view (BL-WEB-21). Decision-inbound
  edges take authority gold (live only where a collection carries Decisions).
- Lineage edge class (`.edge-lin`) inheriting the source node's state, with a
  degraded pulse variant (killed by reduced motion) — substrate for the
  traceability walk (step 6).
- One shared context-stroke arrowhead marker serves every edge type.
- States come from edge data only — the mechanism never invents one.
- Defect found and fixed: none. Verified: 8 pages × 6 collections × 2 themes.

## v2.4 — 2026-08-01

Owner ruling applied: one layer, one data model.

- **KIL underpins KISIL; KISL and KSL are abbreviations of KISIL.** The
  three-way collision dissolves into one layer with three spellings.
- The inferred five-band ladder formerly carried as KSL is **retired** —
  stratification dimension, reference-page section, OWL axiom, tour stop and
  manual text removed; dormant per-node `kisil` keys kept for history.
- Naming register rewritten with the ruling and a record of the resolution.
- Closes BL-WEB-36 and BL-WEB-37; retires risk I-01.
- Defect found and fixed: none. Verified: 8 pages × 6 collections × 2 themes.

## v2.3 — 2026-08-01

Vocabulary defect fixed (corpus survey C5).

- `const KISIL` (holding the KSL bands) renamed `KSL`; glossary corrected so
  KISIL is the layer, never a ladder; audit addendum added to docs/NAMING.md.
- KIL/KISIL Body of Work Index and vocabulary reconciliation published to
  Confluence; labelled Jira epic XDMH-195 with seven issues.

## v2.2 — 2026-08-01

Design system step 3: the node grammar.

- Epistemic outline grammar on every bead — outline *style* carries the state
  (asserted solid · inferred dashed · induced dotted · stub broken), hue stays
  taxonomic, and the word travels in the aria-label, tooltip and a new
  epistemic pill in the detail rail. The mechanism never invents a state:
  everything defaults to asserted until the data says otherwise.
- Two-line node labels — ontology class over instance name, revealed on hover,
  focus and selection; tracked correctly through strata projection.
- Discrete 1–5 pip meter primitive (`pips()`) for impact and confidence,
  labelled with value stated, rendered in the detail rail where data carries
  scores (BL-WEB-15/33 groundwork).
- Defect found and fixed: none. Verified: 8 pages × 6 collections × 2 themes.

## v2.1 — 2026-08-01

Design system steps 1–2. **BL-WEB-02 closed.**

- External font CDN removed; Newsreader/Archivo/JetBrains Mono replaced by
  system serif/sans/mono stacks behind `--display/--body/--mono` tokens
  (96 declarations across 8 chunks). Named type scale added. The artefact
  renders identically on an air-gapped machine.
- New token layers: taxonomic categorical ramp; epistemic status
  (asserted/inferred/induced/stub/gated) with light-theme and colour-safe
  derivations; authority gold; density switch.
- README rewritten in full; repository established (BL-WEB-05 closed) with
  history pushed to github.com/cyberdudeuk/knowledge-web, tagged v2.0.
- Defect found and fixed: none.

## v2.0

- Global search across the whole portal; display preferences popover; full
  view state in the URL with Copy view; Applications page with 11 worked
  cases; Mission alignment collection; live validation of all 71 GDS product
  links; KISIL/KIL/KSL naming made coherent throughout.
- Defects found and fixed: footer selector collision; hashchange dropping
  query state; mobile table overflow.

## v1.1

- Classification upgraded v4.4 → v5.0 (7 domains, 57 topics, endorsement
  status). CDA Live Register added (499 assets, 116 fields, 130 sheets).
  Standards & Tooling Crosswalks added (61 concepts, 212 terms). Five
  collections total.
- Defect found and fixed: malformed template literal caught by generator
  syntax check.

## v1.0

- Portal shell, hash routing, home landing, collection registry with three
  collections, KISIL/KIL/KSL reconciliation, spider relocated to the title
  row.

## v0.9

- Spider demonstrator: Protégé-shaped explorer with reasoner, stratified 3D
  view, eagle lens and stoop.
- Defects found and fixed: illegal invocation; label occlusion in strata
  (mitigated).
