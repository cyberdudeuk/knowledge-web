---
artefact:id: P10-TOC-001
artefact:version: 1.0.0
artefact:as-of: 2026-11-20
artefact:review-date: 2027-02-20
project: P10 The Knowledge Web
grade: G3
profile: public sector > personal public good
---

# Theory of change: The Knowledge Web

> **How to read this.** Facts marked V were read from this repository on 20 November 2026. Assumptions, measures and risks are proposals written for this kit, not findings. U means unconfirmed. Where another document in this repository already covers a topic, this one links to it rather than repeating it.

## Problem
UK government data standards, governance and knowledge artefacts are hard to see as one connected body of work.

## Long-term outcome
Users understand how artefacts relate and what follows from them, offline, in one file.

## Chain

| Inputs | Activities | Outputs | Short-term outcomes | Medium-term outcomes |
|---|---|---|---|---|
| Six collections (this build, CDA live register, classification v5.0, GDS catalogue 2026, standards crosswalks, mission alignment) | Render collections as orb webs; add an ontology layer with a reasoner; add a controlled-vocabulary layer; stratified views | dist/the-web.html, assembled by scripts/build.mjs and verified by scripts/verify.mjs | Users trace a standard to its related artefacts | The vocabulary register (KISIL) is reused by other projects |

## Assumptions (proposed; each one testable)

| # | Assumption | How to test it | Evidence today |
|---|---|---|---|
| A1 | A web metaphor is navigable without training | Staged usability testing (docs/USER-TESTING-PLAN.md) | Planned |

## Measures (proposed)
- verify.mjs passes (definition of done)
- Backlog items traced (docs/BACKLOG.md)

No target is set before a baseline exists.

## What would prove this wrong
If testers can't navigate the web, ship the vocabulary layer as tables and keep the web as an optional view.

## Status
Personal project; one self-contained HTML file (V: README). Live site: https://github.com/cyberdudeuk/knowledge-web
