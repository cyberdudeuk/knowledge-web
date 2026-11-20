---
artefact:id: P10-SAD-001
artefact:version: 1.0.0
artefact:as-of: 2026-11-20
artefact:review-date: 2027-02-20
project: P10 The Knowledge Web
grade: G3
profile: public sector > personal public good
---

# Solution architecture (SAD): The Knowledge Web

> **How to read this.** Facts marked V were read from this repository on 20 November 2026. Assumptions, measures and risks are proposals written for this kit, not findings. U means unconfirmed. Where another document in this repository already covers a topic, this one links to it rather than repeating it.

## Context
UK government data standards, governance and knowledge artefacts are hard to see as one connected body of work.

The solution is described in [03-prd.md](03-prd.md). It connects with: KISIL vocabulary.

## Architecturally significant decisions
These are the decisions already recorded in this repository (V):

- None recorded as ADR files. Decisions so far are in the README and commit history; record the next one as `docs/adr/0001-...md`.

## Quality attributes

| Attribute | How it is met |
|---|---|
| Security tests | Security tests (scripts/security.test.mjs) |
| Degraded mode | Degraded mode (scripts/degraded.mjs) |
| Contact | By form only; no email address anywhere (estate rule) |
| Documentation | This kit, checked in CI by `tools/artefact_check.py` |

## Constraints
- Personal project; one self-contained HTML file (V: README).
- No personal data unless a DPIA has been done first.
- Contact by form only.

## Risks (proposed ratings)

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Source spreadsheets go stale | High | Medium | Record source dates in each collection |
