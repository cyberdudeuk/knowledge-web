# Standing backlog

59 items. Generated from `docs/programme-authority.html`, which remains the
source of truth. **Trace** cites the source that demands the item.

| ID | Item | Pri | Phase | Trace |
|---|---|---|---|---|
| **BL-WEB-01** | Degraded-mode render. Emit a static, semantic HTML rendering of every collection — headings, lists, tables, relation triples — that displays with JavaScript disabled. The interactive web becomes progressive enhancement over it. | DONE | 1 | T-03, SELF |
| **BL-WEB-02** | Remove the external font dependency. Ship a system-font stack with an optional embedded subset, so the artefact renders correctly on an air-gapped or egress-restricted desktop. | DONE | 1 | T-03, SELF |
| **BL-WEB-03** | Collection authoring pipeline. Generate a collection from a source file — xlsx, csv, JSON-LD, a register export — through a declared mapping, with a reviewable mapping report. The single item that turns a demonstrator into a platform. | P1 | 1 | IA-06, GDS, STD |
| **BL-WEB-04** | Assisted-usability testing with five participants, at least one screen-reader user and one keyboard-only user. UCD means tested, not designed-to. | P1 | 1 | MG-NFR-002 |
| **BL-WEB-05** | Version control the code line. The prototype exists only as build-session output. Establish a repository and tagged releases. | DONE | 0 | R-02 |
| **BL-WEB-06** | Shareable state. Encode collection, selection, view mode and zoom in the URL so a view can be cited in a governance pack. | DONE | 1 | IA-07 |
| **BL-WEB-07** | Complete the augmentation register. Define manual counterparts for AUG-06, 07 and 08 before those capabilities ship. | P1 | 2 | T-02 |
| **BL-WEB-08** | Accessibility statement in the artefact, naming what has been verified, what has not, and how to report a barrier. | P2 | 1 | MG-NFR-002 |
| **BL-WEB-09** | Print and PDF stylesheet. Governance packs are still circulated on paper; the web currently prints as a dark rectangle. | P2 | 2 | MG-FR-015 |
| **BL-WEB-10** | Global search across beads, glossary, thesaurus, dictionary, ontology and manual — not only the current web. | DONE | 1 | IA-10 |
| **BL-WEB-11** | Collapse display preferences into one popover, separating them from modes and destinations. | DONE | 1 | IA-03 |
| **BL-WEB-12** | Layout that scales past ~60 beads. Rings currently truncate: Data Standards category 5 shows 9 of 15 topics. Needs growth, clustering or level-of-detail. | DONE | 2 | STD, SELF |
| **BL-WEB-13** | Third taxonomy tier. The classification defines Category > Topic > Subject; Subject is modelled but unpopulated. Support the depth so it is visibly empty rather than silently absent. | P2 | 2 | STD |
| **BL-WEB-14** | Drill-in from an aggregate bead to its members. A GDS bead currently says "Guidance · 17 items" without listing the seventeen. | DONE | 2 | GDS |
| **BL-WEB-15** | Mapping confidence as a first-class visual channel. 120 of 173 GDS mappings are inferred and 26 flagged for review; the web should encode that, not just report it. | P1 | 2 | GDS, ADR-W03 |
| **BL-WEB-16** | Controlled-list validation on ingest. Free-text status fields ("Published", "Published ", "Up to date") cannot be counted. Flag uncontrolled fields at collection build. | P2 | 2 | GDS |
| **BL-WEB-17** | Compendium collection set — the Data Governance Playbook plus siblings across the end-to-end discipline, sharing one ontology and thesaurus. | P2 | 3 | IA target |
| **BL-WEB-18** | Cross-collection navigation. Bridge, search and the ontology should reach across loaded collections, not only within one. | P2 | 3 | MG-G6 |
| **BL-WEB-19** | Collection provenance block — source file, extraction date, row counts, what was truncated and why. **Shipped for 5 of 6 collections** (web/cda/std/gds/xwalk; align not yet covered). Extraction date honestly declared as "not recorded" rather than fabricated — it was never tracked at build time. | DONE | 2 | MG-NFR-004 |
| **BL-WEB-20** | OWL round-trip. Import and export Turtle and JSON-LD so the ontology meets real vocabularies and returns to Protégé. | P1 | 2 | DCAT, ADR-W09 |
| **BL-WEB-21** | Explanation of inference. "Why is this inferred?" showing the axiom chain. Without it the reasoner asks for trust it has not earned. | P1 | 2 | T-04 |
| **BL-WEB-22** | Adopt DCAT-UK-AP as an ontology import — dcat:Dataset, Distribution, DataService, Catalog — so a collection can be expressed in the profile government actually mandates. | P1 | 2 | DCAT, MG-IR005 |
| **BL-WEB-23** | SKOS export of the thesaurus, with the taxonomy as a concept scheme. | P2 | 2 | MG 2.3.4 |
| **BL-WEB-24** | Duplicate and near-duplicate detection across and within collections, presented as "possible match", never as judgement. | P2 | 3 | MG-FR-009 |
| **BL-WEB-25** | Cardinality and property-chain axioms, plus equivalent-class definitions, taking the reasoner beyond its current subset. | P3 | 3 | ADR-W09 |
| **BL-WEB-26** | SHACL validation of a collection against a shape file, mirroring the DCAT-UK-AP validation step. | P2 | 3 | DCAT §6 |
| **BL-WEB-27** | Write-back. Annotate a bead, mark a torn strand mended, add a node. A read-only map ages out of date. | P1 | 3 | SELF |
| **BL-WEB-28** | Import and export collection JSON, so work survives a reload without any storage API. | DONE | 1 | ADR-W08 |
| **BL-WEB-29** | Occlusion mitigation in the stratified view — auto-nudge coincident beads, or offer an exploded layout. | P2 | 2 | SELF |
| **BL-WEB-30** | Adopt the KIL entity model natively — Workstream, Artefact, Insight, Signal, Decision as first-class collection entities rather than a derived reading of ontology class. **First cut in v3.1**: the five stages are classified live via `kilOf()`; entities are still read *through* ontology class, not authored as native KIL types. | P2 | 2 | KISIL §2 |
| **BL-WEB-31** | Many-to-many linking tables. Implement workstream_artefacts, artefact_insights, insight_signals, insight_decisions, artefact_decisions as the relation substrate. **Read-only substrate shipped in v3.1** — `KIL_TABLES`, built live from the declared-relation registry per collection, visible in the Traceability walk's new Linking tables tab. Only 11 of 46 native-collection relations classify; 35 are honestly declared unclassified (ontology relations like `partOf`/`equivalentTo` don't fit the five canonical transitions). Write API (KISIL §5) not started. | P1 | 2 | KISIL §3, XDMH-200 |
| **BL-WEB-32** | Decision traceability view. Given a Decision, walk back through insights to artefacts to workstream — the KISIL GET /decisions/{id}/traceability rendered as a lit route on the web. | DONE | 2 | KISIL §4 |
| **BL-WEB-33** | Quantified metadata drives the visual. impact and confidence (1–5) and severity should set bead weight and route prominence, so high-impact low-confidence findings surface automatically. | P1 | 2 | KISIL §2 |
| **BL-WEB-34** | Impact-analysis propagation. When an artefact is superseded or redacted, flag every downstream insight and decision that relied on it. | P2 | 3 | KISIL §3 |
| **BL-WEB-35** | Signal promotion. Allow an insight to be promoted to a signal with severity, and render signals distinctly. | P2 | 3 | KISIL §2 |
| **BL-WEB-36** | Confirm or correct the KSL ladder with its owner, or retire it now that the canonical KISIL is known. | DONE | 1 | ADR-W06 |
| **BL-WEB-37** | Resolve the three-way KIL collision across DSIT/GDS artefacts: Knowledge Integration Layer, Keystone Up the Chain, and the Observatory view. One wins; the others are renamed. | DONE | 0 | IA-11 |
| **BL-WEB-40** | Separate discovery metadata from access decisions. A bead should be discoverable while its content is not, with an access route rather than the content. | P1 | 2 | MG-FR-006 |
| **BL-WEB-41** | Provenance record per node — source URI, created-by role, version, lineage, review status. | P1 | 2 | MG-NFR-004 |
| **BL-WEB-42** | Quality assessment — clarity, evidence and reuse scores with reviewer role, rendered as a visible state on each bead. | P2 | 3 | MG-FR-008 |
| **BL-WEB-43** | Access request routing. Where a bead is restricted, route the user to the owning team rather than to a dead end. | P2 | 3 | MG-FR-007 |
| **BL-WEB-44** | Evidence pack export — a collated, citable pack of selected beads, their relations and their provenance, for governance and business-case reuse. | P1 | 2 | MG-FR-015 |
| **BL-WEB-45** | Change Impact Radar view — recurring blockers, capability gaps and restructure risk across collections. | P3 | 4 | MG 1.9 |
| **BL-WEB-46** | Reusable pattern lifecycle — reusable, deprecated, superseded, under review — visible in search and on the bead. | P3 | 4 | MG-FR-014 |
| **BL-WEB-47** | Audit log of curation, publication and export actions once any write capability exists. | P2 | 3 | MG-NFR-007 |
| **BL-WEB-48** | Multi-user. Comments, shared selections, a shared collection registry. | P3 | 4 | MG 1.5 |
| **BL-WEB-49** | Supabase-then-Azure backing for any persisted collection, mirroring the KISIL scaling path rather than inventing another. | P3 | 4 | KISIL §6 |
| **BL-WEB-50** | Project-scope collections. Conversations held inside a project are invisible to the current build; those radii are missing rather than absent. | P2 | 1 | SELF |
| **BL-WEB-51** | Performance budget. Declare and test a ceiling — first paint, interaction latency at N beads, memory. | P2 | 2 | SELF |
| **BL-WEB-52** | Content review of every string against GDS content design standards. Written to intent, never reviewed by a content designer. | P2 | 2 | MG-NFR-001 |
| **BL-WEB-53** | Entity resolution on ingest. The CDA register carries 115 distinct department strings for a far smaller set of organisations — ONS and Office for National Statistics, DfE and Department for Education, DEFRA and Defra all count separately. Any departmental figure drawn from it today is wrong. Resolve on ingest and show what was merged. **Scaffold shipped in v3.5**: a working resolver (`ORG_ALIASES`/`resolveOrg`) and a "What was resolved" panel, demonstrated against the 2 of 3 known variant pairs that actually appear in this collection's data (`CDA_DOM`). Not the full fix — `CDA_Live_Dashboard_Template.xlsx` itself isn't in this repository, only a pre-aggregated 5-domain summary, so the other ~112 strings can't be resolved until the real source register is available. | P1 | 1 | CDA |
| **BL-WEB-54** | Endorsement and consultation state as a visual channel. v5.0 carries Endorsed, Partially Endorsed and Draft per topic, and is out for consultation. A reader should see the maturity gradient without reading a status column. | DONE | 2 | STD5, DSA brief |
| **BL-WEB-55** | Load the Rosetta Stone as the shared concept layer rather than as one collection among five — 61 canonical concepts across ten profiles is the natural bridge between every other collection. | P2 | 3 | Crosswalks |
| **BL-WEB-56** | Scheduled link revalidation. Live checking found 12 of 71 GDS product links now redirect and 3 are broken, while the workbook's own audit column still records them as verified. A verification stamp records when a link was checked, not whether it still resolves to the same place. | P1 | 1 | GDS, SELF |
| **BL-WEB-57** | Mission and priority fields in the source registers. The alignment map in this build is asserted, not evidenced. Until the classification and the CDA register carry mission, GDS-priority and NDL-kickstarter fields, it cannot be validated or maintained. | P1 | 2 | Alignment |
| **BL-WEB-58** | SDR findings need owners in the classification. The six systemic challenges from the State of Digital Government Review map to no standards domain that would evidence progress against them. | P2 | 2 | SDR |
| **BL-WEB-59** | Navigation findability pass, direct from real product-owner use: a visible state indicator on the Display control (previously silent when non-default), a persistent page-identity label in the sticky top bar, and the spider-navigation legend moved onto the Explore page with a compact always-visible variant beside the stage and a visible "press ? for manual" hint. | DONE | 1 | MG-NFR-002, SELF |

## Do these first

1. **BL-WEB-04** usability testing. Open since v1.0. Staged in
   `docs/USER-TESTING-PLAN.md`: Stage 0 self-audit with VoiceOver and
   keyboard-only now; Stage 1 informal cold readers; Stage 2 the formal
   protocol, the gate for internal adoption and the only stage that closes it.
   With BL-WEB-01/02 both closed in v3.0, this is the last standing P1 of the
   original "do these first" list.

## Closed

- **BL-WEB-12** layout scaling past ~60 beads, and **BL-WEB-14** drill-in from an aggregate bead to its members — both delivered together in v2.8's "declared aggregate" pattern (`+N more topics/types` beads listing every member, applied to all three collections that truncated: CDA asset types, Classification topics, GDS delivery types). Both marked open in this table ever since, despite the v2.8 release note explicitly naming the fix. Found and fixed while resuming backlog work (2026-08-02).

- **BL-WEB-32** decision traceability view — delivered in v2.7 as the traceability walk (a ninth portal page): roots are Decision entities where they exist, otherwise the most-evidenced nodes with the missing-Decisions gap stated; swim-columns in KIL causation order; four representations of one walk (Graph, Timeline, Audit trail, Register). Marked open in this table ever since, despite the v2.7 release note explicitly naming it delivered — found and fixed while scoping the next round of backlog work (2026-08-02).

- **BL-WEB-59** navigation findability — Display button now shows a non-colour-only badge when preferences are non-default, the sticky top bar carries a persistent page-name label, and the spider-metaphor legend moved from Home to Explore (compact variant beside the stage, full legend still there, "?" hint made visible to sighted users) (v3.4, 2026-08-02). First backlog item sourced directly from the product owner's own use.

- **BL-WEB-01** degraded-mode render — build emits every collection as semantic HTML in <noscript>; proven with JavaScript disabled (v3.0, 2026-08-02). Both doctrine failures now closed.

- **BL-WEB-36** KSL ladder retired — owner ruled KSL/KISL are abbreviations of KISIL; the inferred ladder rested on a misreading (v2.4, 2026-08-01)
- **BL-WEB-37** KIL collision dissolved — one layer with three spellings (KISIL/KISL/KSL) over one underpinning KIL data model, per owner ruling (v2.4, 2026-08-01)

- **BL-WEB-02** external font dependency removed — system serif/sans/mono stacks, nothing fetched at runtime (v2.1, 2026-08-01)

- **BL-WEB-05** version control — repository initialised at v2.0, first commit 3470350, tagged v2.0 (2026-08-01)
- **BL-WEB-06** shareable state — collection, page, selection, mode and stratification in the URL
- **BL-WEB-10** global search across the whole portal
- **BL-WEB-11** display preferences collapsed into one popover
