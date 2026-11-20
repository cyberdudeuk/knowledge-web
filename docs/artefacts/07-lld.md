---
artefact:id: P10-LLD-001
artefact:version: 1.0.0
artefact:as-of: 2026-11-20
artefact:review-date: 2027-02-20
project: P10 The Knowledge Web
grade: G3
profile: public sector > personal public good
---

# Low-level design (LLD): The Knowledge Web

> **How to read this.** Facts marked V were read from this repository on 20 November 2026. Assumptions, measures and risks are proposals written for this kit, not findings. U means unconfirmed. Where another document in this repository already covers a topic, this one links to it rather than repeating it.

## Build and check commands (V: README)
```
node scripts/build.mjs
node scripts/verify.mjs
```

## Scripts (V: file tree)
- `scripts/build.mjs`
- `scripts/check-kisil.mjs`
- `scripts/check-kisil.test.mjs`
- `scripts/degraded.mjs`
- `scripts/lint-page.mjs`
- `scripts/lint.test.mjs`
- `scripts/publiccode.test.mjs`
- `scripts/security.test.mjs`
- `scripts/serve.mjs`
- `scripts/verify.mjs`

## Tests (V: file tree)
- `scripts/check-kisil.test.mjs`
- `scripts/lint.test.mjs`
- `scripts/publiccode.test.mjs`
- `scripts/security.test.mjs`

## Workflows (V: .github/workflows)
- `check.yml`
- `codeql.yml`
- `dependency-review.yml`
- `scorecard.yml`

## Repository size
93 files tracked on 20 November 2026.

## Documentation kit
- `docs/artefacts/manifest.yaml` lists every core document, where it is, and its review date.
- `tools/artefact_check.py` checks the kit (rules AC-01 to AC-08, each with a negative test). Run `python3 tools/artefact_check.py --self-test` then `python3 tools/artefact_check.py .`.

## Handover
Someone new can rebuild and verify with the commands above, then read [03-prd.md](03-prd.md) and [05-sad.md](05-sad.md).
