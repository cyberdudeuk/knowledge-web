## What changed, and why

## Done when

<!-- The done-condition, per CONTRIBUTING.md's intake block. -->

## Checklist (see CLAUDE.md "Definition of done")

- [ ] Changed `src/*.html` chunks, not `dist/the-web.html` by hand
- [ ] `npm run build` — every inline script passes `node --check`
- [ ] `npm run verify` — zero console errors, zero page errors
- [ ] Every new/changed interactive element is keyboard-reachable with an
      accessible name
- [ ] AA contrast (4.5:1) holds in **all** themes (dark, light, ocdo)
      against the painted background
- [ ] No horizontal overflow at 390px
- [ ] Works across all six collections, not just the one you tested with
- [ ] Nothing colour-only, picture-only, or audio-only (see `CLAUDE.md`
      non-negotiables)
- [ ] Any defect found during verification is named below, not quietly
      fixed
- [ ] `docs/BACKLOG.md` / `docs/programme-authority.html` updated if this
      closes or advances a tracked item

## Defect found and fixed

<!-- Or "none". This project names defects rather than silently fixing them
     — see the commit convention in CLAUDE.md. -->

## Verified

<!-- e.g. "Build + verify pass, 6 collections, dark/light/ocdo" -->
