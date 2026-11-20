---
artefact:id: P10-PRD-001
artefact:version: 1.0.0
artefact:as-of: 2026-11-20
artefact:review-date: 2027-02-20
project: P10 The Knowledge Web
grade: G3
profile: public sector > personal public good
---

# Product requirements (PRD): The Knowledge Web

> **How to read this.** Facts marked V were read from this repository on 20 November 2026. Assumptions, measures and risks are proposals written for this kit, not findings. U means unconfirmed. Where another document in this repository already covers a topic, this one links to it rather than repeating it.

## Problem and outcome
UK government data standards, governance and knowledge artefacts are hard to see as one connected body of work.

Outcome sought: Users understand how artefacts relate and what follows from them, offline, in one file. See [01-theory-of-change.md](01-theory-of-change.md).

## Users
- People mapping data standards and governance artefacts
- Knowledge managers
- Architects

User evidence: [docs/USER-TESTING-PLAN.md](../../docs/USER-TESTING-PLAN.md).

## Scope
**In:**
- Six collections
- Ontology layer and reasoner
- Vocabulary layer
- Stratified views

**Out:**
- Runtime dependencies
- Network access

## Requirements
Derived from what this repository says it does (V: README and ADRs). The last column is the check that proves each one, where one exists. U means no check was found that clearly covers it; that is a gap to close, not a pass.

| ID | Requirement | Priority | Verified by |
|---|---|---|---|
| P10-R01 | One self-contained offline HTML file | Must | scripts/verify.mjs |
| P10-R02 | Class encoded by shape, never colour alone | Must | scripts/lint-page.mjs (U) |
| P10-R03 | Reasoner shows entailments and says when nothing follows | Should | scripts/verify.mjs (U) |
| P10-R04 | Vocabulary decisions never made silently (docs/NAMING.md) | Must | scripts/check-kisil.mjs |

## Non-functional requirements
- Security tests (scripts/security.test.mjs)
- Degraded mode (scripts/degraded.mjs)

## Status
Personal project; one self-contained HTML file (V: README)
