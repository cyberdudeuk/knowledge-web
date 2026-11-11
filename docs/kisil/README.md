# KISIL: the specification record

KISIL is the **Knowledge Integration & Semantic Interoperability Layer**. Its data model, KIL, runs Workstream → Artefact → Insight → Signal → Decision. The canonical names are in [`../NAMING.md`](../NAMING.md); they are the owner's, not this repository's.

## Why this folder exists

The KISIL Technical Specification is the source this repository builds to. But on 11 November 2026 no copy of it, or of its companion documents, was found in any of the owner's 24 GitHub repositories, Google Drive or OneDrive. The copies the repositories cite are:
- an upload inside a Claude project;
- Confluence pages under the XDMH Jira epic (XDMH-195).

The Confluence pages could not be reached from the session that wrote this folder.

That leaves the authority behind this product as a single point of failure. This folder does two things about it, and no more:

1. [`SOURCES.md`](SOURCES.md) registers every original the repository cites, where it is held, and whether a copy is under version control here.
2. [`RECORD.md`](RECORD.md) lists what this repository already says the specification contains. Every line cites the file and line it comes from. **Nothing in it is new.** It is a finding aid, not the specification, and it gives way to the original wherever they differ.

## What the owner needs to do

Commit each original listed in `SOURCES.md` as `docs/kisil/originals/<file>` (as Markdown or PDF), then set its status to `committed`. `node scripts/check-kisil.mjs` fails if:
- a row marked `committed` has no file;
- a section cited in the backlog (`KISIL §n`) is missing from the record;
- the record states something without a source.

## Persistent identifier (proposed)

`https://w3id.org/kisil/` is proposed as the persistent namespace, alongside `w3id.org/dcat-ap-uk`. Neither is registered in the owner's `w3id.org` fork. The rule a registration would need is in [`w3id-proposal.md`](w3id-proposal.md). Registering it is the owner's decision, because the identifier is permanent once published.
