# Changelog

All notable changes to the artefact. Mirrors Section 13 (Release history) of
`docs/programme-authority.html`, which remains the source of truth. Defects
found during verification are named, never quietly fixed.

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
