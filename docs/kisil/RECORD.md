# KISIL: what this repository already says the specification contains

A finding aid, not the specification. Each line quotes or closely paraphrases this repository and names where. Where it and the original differ, the original wins.

## §1 The layer and its data model

- KISIL is the layer; KIL is the data model beneath it: Workstream → Artefact → Insight → Signal → Decision. (docs/NAMING.md:85, :90; owner ruling 2026-08-01)
- KISL and KSL are abbreviations of KISIL, not separate schemes. (docs/NAMING.md:86, :89)

## §2 Entities and quantified metadata

- The five KIL stages are first-class entities. (docs/BACKLOG.md:37, BL-WEB-30)
- Impact, confidence (1–5) and severity are quantified per item. (docs/BACKLOG.md:40, BL-WEB-33)
- An insight can be promoted to a signal with a severity. (docs/BACKLOG.md:42, BL-WEB-35)

## §3 Linking tables

- Five many-to-many tables: workstream_artefacts, artefact_insights, insight_signals, insight_decisions, artefact_decisions. (docs/BACKLOG.md:38, BL-WEB-31)
- Superseding or redacting an artefact flags every downstream insight and decision. (docs/BACKLOG.md:41, BL-WEB-34)

## §4 Decision traceability

- `GET /decisions/{id}/traceability` walks a decision back through insights to artefacts to workstream. (docs/BACKLOG.md:39, BL-WEB-32)

## §5 Write API

- A write API exists in the specification; not started here. (docs/BACKLOG.md:38)

## §6 Scaling path

- Persistence moves from Supabase to Azure. (docs/BACKLOG.md:54, BL-WEB-49)

## Implementation status here (11 November 2026)

| Section | State in this repository | Source |
|---|---|---|
| §2 entities | Classified live via `kilOf()`, read through ontology class, not authored natively | docs/BACKLOG.md:37 |
| §3 linking tables | Read-only substrate shipped in v3.1; 11 of 46 native relations classify | docs/BACKLOG.md:38 |
| §4 traceability | Done in v2.7 (Traceability walk) | docs/BACKLOG.md:39, :79 |
| §2 quantified metadata | Blocked: no node carries impact, confidence or severity | docs/BACKLOG.md:40 |
| §5 write API | Not started | docs/BACKLOG.md:38 |
| §6 scaling | Not started | docs/BACKLOG.md:54 |
