# Naming register

Read this before using or changing any of these terms. A term with more than one
referent inside one directorate will eventually cause a real misunderstanding in a
real decision.

## The KIL collision — dissolved

**Owner ruling, 1 August 2026:** the KIL data model underpins KISIL, and KISL
and KSL were only ever abbreviations meaning the same thing as KISIL. What the
earlier editions of this register recorded as a three-way collision was in fact
**one layer with three spellings, and one data model beneath it**:

- The Whitehall Connect "KIL" expands in the artefact as *Knowledge & semantic
  Interoperability Layer* (also abbreviated KISL); "Keystone · Up the Chain" is
  a view name, not an expansion. Same layer.
- The Observatory "KIL view" referent recorded here previously could not be
  evidenced in any current Observatory artefact and is withdrawn.
- The five-band "Knowledge State Ladder" this prototype carried under the KSL
  name rested on a misreading of that abbreviation. **Retired in v2.4.**
  Its per-node `kisil` data keys remain in the build as dormant history.

This closes **BL-WEB-36** and **BL-WEB-37**, and retires risk **I-01**.
The remaining open question is C1 in the Confluence Body of Work Index: how the
KISIL five-entity chain and KIL-DMS-001 relate *within* the underpinning data
model — layered per this ruling, but the two documents do not yet cite each
other.

## Adopted meanings

| Term | Meaning here | Authority | Status |
|---|---|---|---|
| **KISIL** | Knowledge Integration & Semantic Interoperability Layer. **The layer. Never a ladder.** | Technical Specification · owner ruling 2026-08-01 | Canonical |
| **KISL** | Abbreviation of KISIL — the same layer (Whitehall Connect's spelling) | Owner ruling 2026-08-01 | Recorded alias |
| **KSL** | Abbreviation of KISIL — the same layer. *Not* a ladder; the ladder once carried under this name is retired | Owner ruling 2026-08-01 | Recorded alias |
| **KIL** | The data model underpinning KISIL — Workstream → Artefact → Insight → Signal → Decision | KISIL spec §1–4 · owner ruling 2026-08-01 | Canonical. Default stratification. |
| **Memory Grid** | Working short name for the DSIT/GDS Organisational Memory and Change Intelligence Platform | PRD v0.2 §1.1 | Canonical |
| **DCAT-UK-AP** | UK application profile of DCAT v3, the mandated base metadata standard under the DAM Policy | Purview mapping spec §1 | Canonical |
| **SDR** | State of Digital Government Review, published 21 January 2025 alongside the blueprint | DSIT / GDS | Canonical |
| **Kickstarter** | One of the National Data Library early-delivery projects announced January 2026 | DSIT NDL progress update | Canonical. Not a crowdfunding term. |

## The rule

**Never overwrite an owner's vocabulary with an inferred one.**

This prototype originally inferred KISIL as a five-band ladder. It was wrong, and
it was wrong in a way that looked plausible enough to survive four build cycles —
it even backronymed "Knowledge State Ladder" onto an abbreviation that simply
meant the layer. If a term's meaning is unknown: flag it, mark it unratified,
and ask. Do not guess and proceed.

Where a scheme is unconfirmed it must say so at every point it appears — in the
interface, in the tours, in the manual and here.

## Record of the resolution

- 2026-08-01 · corpus survey finds four forms in live use and files findings
  C1–C7 (Confluence: "KIL / KISIL — Body of Work Index"; Jira: XDMH-195…202).
- 2026-08-01 · v2.3 fixes C5 (`const KISIL` misnaming in this build).
- 2026-08-01 · **owner rules:** KIL data model underpins KISIL; KISL/KSL are
  abbreviations of KISIL. v2.4 applies the ruling: ladder retired, register
  rewritten, interface/tours/manual corrected.
