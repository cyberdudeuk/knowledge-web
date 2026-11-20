---
artefact:id: P10-FTIR-001
artefact:version: 1.0.0
artefact:as-of: 2026-11-20
artefact:review-date: 2027-02-20
project: P10 The Knowledge Web
grade: G3
profile: public sector > personal public good
---

# Functional, technical and integration requirements (FTIR): The Knowledge Web

> **How to read this.** Facts marked V were read from this repository on 20 November 2026. Assumptions, measures and risks are proposals written for this kit, not findings. U means unconfirmed. Where another document in this repository already covers a topic, this one links to it rather than repeating it.

Requirements are stated once, in [03-prd.md](03-prd.md). This document says how each is met and checked.

## Functional

| ID | Requirement | Priority | Verified by | State |
|---|---|---|---|---|
| F01 | One self-contained offline HTML file | Must | scripts/verify.mjs | Has a check |
| F02 | Class encoded by shape, never colour alone | Must | scripts/lint-page.mjs (U) | Check named; coverage unconfirmed (U) |
| F03 | Reasoner shows entailments and says when nothing follows | Should | scripts/verify.mjs (U) | Check named; coverage unconfirmed (U) |
| F04 | Vocabulary decisions never made silently (docs/NAMING.md) | Must | scripts/check-kisil.mjs | Has a check |

## Technical

| ID | Requirement | State |
|---|---|---|
| T01 | Code scanning | Present (V: .github/workflows) |
| T02 | Dependency review on pull requests | Present (V: .github/workflows) |
| T03 | OpenSSF Scorecard | Present (V: .github/workflows) |
| T04 | Automated release | Not present |
| T05 | Published by workflow (Pages) | Not present |
| T06 | Documentation kit checked in CI | Present (V: .github/workflows) |

Workflows present (V): `check.yml`, `codeql.yml`, `dependency-review.yml`, `scorecard.yml`.

Tests present (V): `check-kisil.test.mjs`, `lint.test.mjs`, `publiccode.test.mjs`, `security.test.mjs`.

## Integration

| ID | Integration | Direction | State |
|---|---|---|---|
| I01 | KISIL vocabulary | Proposed w3id namespace | Proposed |
