# Naming register

Read this before using or changing any of these terms. A term with more than one
referent inside one directorate will eventually cause a real misunderstanding in a
real decision.

## The three-way KIL collision

**KIL** currently denotes at least three different things across DSIT/GDS artefacts:

| Use | Meaning | Source |
|---|---|---|
| Canonical here | **Knowledge Integration Layer** — the data architecture within KISIL | KISIL Technical Specification §1–4 |
| Whitehall Connect | **Keystone Up the Chain** | GOV-2.8 relocated working views |
| Data Sharing Observatory | A named view in the portal | Observatory v6 |

This prototype adopts the KISIL definition. The wider collision is carried as
**BL-WEB-37** and is a governance matter, not a UI one.

## Adopted meanings

| Term | Meaning here | Authority | Status |
|---|---|---|---|
| **KISIL** | Knowledge Integration & Semantic Interoperability Layer. **The layer. Never a ladder.** | Technical Specification | Canonical |
| **KIL** | Knowledge Integration Layer — Workstream → Artefact → Insight → Signal → Decision | KISIL spec §1–4 | Canonical. Default stratification. |
| **KSL** | Knowledge State Ladder — Knowledge, Information, Skills, Insight, Learning | This prototype | **Local. Unratified.** Renamed to avoid collision. Confirm or retire — BL-WEB-36. |
| **Memory Grid** | Working short name for the DSIT/GDS Organisational Memory and Change Intelligence Platform | PRD v0.2 §1.1 | Canonical |
| **DCAT-UK-AP** | UK application profile of DCAT v3, the mandated base metadata standard under the DAM Policy | Purview mapping spec §1 | Canonical |
| **SDR** | State of Digital Government Review, published 21 January 2025 alongside the blueprint | DSIT / GDS | Canonical |
| **Kickstarter** | One of the National Data Library early-delivery projects announced January 2026 | DSIT NDL progress update | Canonical. Not a crowdfunding term. |

## The rule

**Never overwrite an owner's vocabulary with an inferred one.**

This prototype originally inferred KISIL as a five-band ladder. It was wrong, and it
was wrong in a way that looked plausible enough to survive four build cycles. If a
term's meaning is unknown: flag it, mark it unratified, and ask. Do not guess and
proceed.

Where a scheme is unconfirmed it must say so at every point it appears — in the
interface, in the tours, in the manual and here.

---

## Audit addendum — 2026-08-01 (findings, not decisions)

A corpus survey across local workspaces and Confluence found, **pending owner
confirmation** (tracked as XDMH-198 and on the Confluence page "KIL vocabulary
reconciliation"):

1. Whitehall Connect's KIL expands in the artefact as "Knowledge & semantic
   Interoperability Layer" (also abbreviated **KISL**); "Keystone · Up the
   Chain" is a view name, not an expansion. This register's entry records it
   otherwise.
2. The Observatory "KIL view" referent could not be evidenced in any current
   Observatory artefact.
3. The Confluence WC Production Roadmap records an owner-confirmed expansion
   of KIL as "Knowledge (and Semantic) Interoperability Layer" — materially
   the same layer as KISIL/KISL, suggesting one layer with three spellings
   rather than three distinct KILs.
4. C5 (this repo's `const KISIL` holding the KSL bands) was fixed in v2.3;
   the data key `kisil` is retained for URL-state compatibility.
