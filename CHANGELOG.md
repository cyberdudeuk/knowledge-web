# Changelog

All notable changes to the artefact. Mirrors Section 13 (Release history) of
`docs/programme-authority.html`, which remains the source of truth. Defects
found during verification are named, never quietly fixed.

## v3.7 — 2026-08-03

Continuing the autonomous backlog pass. Seven more items closed, two
more documented as blocked on missing data.

**Closed:**
- **BL-WEB-08** — accessibility statement: what's verified, what isn't
  (risks R-01/R-04 named directly), how to report a barrier.
- **BL-WEB-09** — print stylesheet. Printing used to produce a black
  rectangle; `@media print` now shows the existing text version instead.
- **BL-WEB-13** — the Subject-tier gap (already declared once in
  repairs) now also stated on every topic bead directly.
- **BL-WEB-23** — SKOS export of the taxonomy/thesaurus, both of which
  were already authored SKOS-shaped.
- **BL-WEB-21** — every inferred fact in the OWL explorer now states
  the actual rule that produced it (subsumption, domain, range,
  transitivity, symmetry), not an unexplained "inferred" label.
- **BL-WEB-44** — evidence-pack export for a single selected bead
  (Markdown: title, facts, provenance, relations). Not yet the full
  multi-bead version the item describes.
- **BL-WEB-51** — a performance budget, declared and tested every run,
  not just declared. The ceiling was set after measuring real behaviour.

**Documented as genuinely blocked, not faked:**
- **BL-WEB-16** joins BL-WEB-15/33 in the same class of gap: the actual
  per-row data the item names (GDS status strings, DAM Category values)
  doesn't exist anywhere in this codebase, only aggregate claims.

**Two real defects found in my own new code before either shipped:**
- The performance-budget test's first cut measured "did this time out"
  rather than real elapsed time (numbers suspiciously equal to its own
  timeout) — rewritten to match this file's own proven fixed-wait
  pattern instead of inventing a different one.
- The inference-explanation logic checked property-domain/range before
  subsumption, so a class reachable both ways could get attributed to a
  coincidentally matching but unrelated edge. Fixed by checking
  subsumption first.

Both caught by testing the new code against real data, not by assuming
it worked because it ran without error.

Verified throughout: build + verify pass, 6 collections, dark/light
themes, at every step. Each item committed and pushed individually as
it landed — this entry is a summary, not the record of what happened
when.

## v3.6 — 2026-08-03

A full pass through the standing backlog (owner: "do all of the things
that do not require actions from me"). Nine items closed or advanced,
two honestly documented as blocked on missing data rather than faked.

**Closed:**
- **BL-WEB-12 / BL-WEB-14** (hygiene) — both were delivered together in
  v2.8's declared-aggregate pattern but stayed marked open ever since.
  Verified against live code before closing.
- **BL-WEB-54** — endorsement/consultation maturity now has its own
  outline channel (`.mat-partial`) and an explicit pill, distinct from
  the epistemic asserted/inferred/induced system; Endorsed/Draft already
  had adequate signals, only Partially Endorsed was genuinely invisible.
- **BL-WEB-28** — import/export collection JSON, no storage API. Found
  and fixed two real defects along the way: the Collections page never
  rendered a card for the `align` collection (spliced in by a later
  chunk, after the page's one-time render already ran), and my own
  first-cut fix for that re-wiped the import UI on every re-render.
- **BL-WEB-19** — a dedicated Provenance panel (source, row count,
  extraction date, truncation) for 5 of 6 collections. Extraction date
  is honestly "not recorded" rather than invented.
- **BL-WEB-56** — the one real link check this estate has ever had now
  surfaces as an explicit stamp in that same panel. Left open on the
  "scheduled" half — a static file has no server to schedule from.
- **BL-WEB-41** — created-by role and review status added to the
  node-inspector's Provenance quadrant, both a genuinely universal fact
  (AI-drafted, not owner-reviewed — risk R-04), not fabricated detail.
- **BL-WEB-32** (hygiene) — delivered in v2.7, never marked done.
- **BL-WEB-07** — manual counterparts defined for the three
  still-missing Augmentation Register entries, each reusing a mechanism
  that already exists rather than proposing new work.

**Documented as genuinely blocked, not faked:**
- **BL-WEB-15** and **BL-WEB-33** — both ask for real per-item scored
  data (mapping confidence; impact/confidence/severity) to drive visual
  encoding. Neither exists anywhere in this codebase — only hand-authored
  aggregate claims. The rendering mechanisms are real and ready; the
  source data to drive them from is not present in this repository.

Verified throughout: build + verify pass, 6 collections, dark/light
themes, keyboard reach and 390px checked at each step. Each item
committed and pushed individually as it landed — this entry is a
summary, not the record of what happened when.

## v3.5 — 2026-08-02

Entity resolution scaffold for the CDA register (BL-WEB-53).

- New resolver (`ORG_ALIASES`/`resolveOrg`/`deptDisplay` in
  `src/60-collections.html`) normalises department strings on ingest,
  demonstrated against the two variant pairs that actually appear in the
  CDA collection's own data (ONS → Office for National Statistics, DfE →
  Department for Education) — the original recorded string is kept
  visible alongside the resolved name, never silently overwritten.
- New **"What was resolved"** panel on the Collections page (only shown
  for collections that declare a `resolutions[]`), mirroring the existing
  "What is torn" pattern: canonical name, and what it was merged from.
- **Honest about scope, not a full fix**: the collection's own repairs
  entry ("Department names are uncontrolled") was rewritten to state
  plainly that this resolves 2 of the estate's known variant pairs, not
  the asserted 115 — `CDA_Live_Dashboard_Template.xlsx` itself was never
  checked into this repository, only a pre-aggregated 5-domain summary,
  so the other ~112 strings can't be resolved from here. The mechanism
  is real and ready to run at full scale; the source data is not present
  to run it against. Nothing was fabricated to make this look more done
  than it is.
- Also closed in this pass: **BL-WEB-32** (Decision traceability view)
  was found marked open in `docs/BACKLOG.md` despite being delivered in
  v2.7 — the release note names it explicitly. Verified live against the
  actual root-selection and causation-order logic before closing it.
- Verified: build + verify pass, 6 collections, dark/light themes; the
  new panel checked live (correct 2-pair resolution, correct exclusion
  of the un-exercised DEFRA/Defra pair, keyboard-reachable, no 390px
  overflow).

## v3.4 — 2026-08-02

Navigation findability pass (BL-WEB-59) — three fixes direct from the owner's own use.

- **Display button now shows its own state.** A small badge counts how many
  display preferences (theme, contrast, palette, text size, motion, voice)
  are non-default, visible without opening the popover. Never colour-only —
  the count and an updated `aria-label` carry the same information a sighted
  user gets from the badge colour.
- **Persistent page-identity label.** The already-sticky top bar now carries
  a plain "Viewing · <page>" label alongside the nav tabs, a second,
  harder-to-miss cue than the amber tab underline alone.
- **The "how to move" legend is on Explore, where the graph is** — it was
  being relocated onto Home (below the fold) instead of staying on the
  Explore page it was authored for. Fixed with a one-line deletion, not a
  rewrite. A compact always-visible mini-legend now also sits beside the
  stage itself, linking through to the fuller manual reference. The
  "press ? for help" hint is now visible to sighted users, not only
  announced to screen readers.
- **Defect found and fixed:** the `Manual` control button in the display bar
  silently did nothing when clicked — its click listener was bound (in the
  pre-portal-shell code) to the original modal-opening `openManual`, before
  a later reassignment repointed the *function* to page-based navigation;
  the already-registered listener still held the stale reference. The
  keyboard `?` shortcut was unaffected (it calls `openManual()` live, not a
  captured reference) and masked the bug. Found while wiring a new button to
  the same control. Fixed by clone-and-replace, the same technique already
  used elsewhere in this file for an identical class of staleness.
- Also caught in passing: the OS-preference auto-init (when the browser
  reports `prefers-color-scheme: light`) still hardcoded the old two-way
  toggle's "Dark" label from before the OCDO skin (v3.3) made theme a
  three-way cycle. Now reads the same `THEME_NEXT_LABEL` table the click
  handler uses, so it correctly shows "OCDO skin" as the next option.
- Verified: build + verify pass for dark/light; OCDO skin, keyboard reach,
  and 390px overflow checked separately by hand.

## v3.3 — 2026-08-02

A second visual identity: the OCDO skin.

- New **OCDO skin** theme option, alongside Dark and Light (`Display` control
  now cycles Dark → Light → OCDO skin → Dark). Colour and type character
  inspired by a UK government data-standards design system referenced by the
  owner: a deep-navy "immersive" canvas, a light-weight sans display face in
  place of the original serif, and the same uppercase-tracked mono treatment
  the-web already used for signal text. All values are colour and type
  choices only — the-web has no affiliation with that programme, so its
  specific wordmarks, outcome names and footer chain are not reproduced.
- Implemented as a third `[data-theme]` block in `src/11-themes.html`,
  redefining the same token set every other theme uses (including
  `--display`, so every heading site-wide follows the swap with no
  per-selector overrides) — no new markup, no new JS beyond extending the
  existing theme toggle from a two-way flip to a three-way cycle.
- Verified: build + verify pass for dark/light (unchanged); OCDO skin
  checked separately — AA contrast against its navy ground ranges 6.8:1 to
  16.6:1 across all text/accent token pairs (better than either shipped
  theme), sans-display propagation confirmed on the portal shell headings,
  no console errors across all nine pages.

## v3.2 — 2026-08-02

A seventh guided tour, for colleagues.

- New tour "For colleagues — where does this touch your work?": six stops
  built to be watched with someone else — the traceability walk, the
  linking-tables honesty view, a real 499-asset collection, the
  declared-gaps mechanism — closing on one direct question rather than an
  ask to adopt anything.
- First piece of a colleague-facing materials package (deck, one-pager,
  video script alongside it) — deliberately separate from the formal
  KIL/KISIL submission track, which is paused pending real-person testing.
- **Defect found and fixed:** two tour stops changed the underlying data
  but not the page, stranding the viewer on the Walk page while narrating
  the Explore view. Caught by checking live page state stop-by-stop, not
  by visual inspection alone.
- Verified: build + verify green; tour walked end to end against live state.

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
