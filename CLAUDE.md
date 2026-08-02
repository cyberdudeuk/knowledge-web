# The Web — operating rules

Read this first, every session. It is the contract, not a suggestion.

## What this is

A navigable, ontology-backed map of a body of work, delivered as one self-contained
HTML file. Built in ordered chunks under `src/`, assembled to `dist/the-web.html`.

Governance lives in `docs/programme-authority.html` — a **sibling**, not a child.
Reference it; never generate it from the code, and never make the code read it.

## Doctrine — the four tenets

1. **Augmentation, not dependency.** AI accelerates human work; it never becomes the
   only path to an outcome.
2. **Registered fallback.** No assisted capability ships without its manual counterpart
   logged in the Augmentation Register (Authority §6).
3. **Degraded-mode completeness.** With every service unavailable, the artefact still
   performs its core function end to end. *Currently failing — see BL-WEB-01, 02.*
4. **Human-in-the-loop on consequence.** Anything that drafts, decides or acts on the
   user's behalf surfaces for explicit human review.

## Non-negotiables

- **UK English only.** Artefact, behaviour, centre, organised, prioritise, licence (noun).
- **Single-file delivery.** One HTML file, no build-time dependency the user must install,
  no runtime dependency beyond what is already vendored.
- **Every collection declares its gaps.** A collection with no `repairs[]` is not trusted.
  Making absence visible is this system's distinctive claim.
- **Asserted ≠ inferred ≠ induced.** Never collapse the three. Asserted is stated in a
  source; inferred follows by entailment; induced is a regularity observed in the data.
  Each has its own visual treatment and its own label.
- **Never overwrite an owner's vocabulary with an inferred one.** If a term's meaning is
  unknown, flag it and ask. Do not guess and proceed. See `docs/NAMING.md`.
- **Nothing is colour-only.** Ontology class is a shape; open items have broken outlines;
  routes differ by dash pattern as well as hue.
- **Nothing is picture-only.** The text version must render the same content as headings
  and lists.
- **Nothing is audio-only.** Anything spoken is written on screen at the same moment and
  pushed to the live region.
- **No storage APIs.** `localStorage` and `sessionStorage` are not used. Decision ADR-W08.
- **Honest labelling is never obscured.** The prototype notice stays above the fold.

## How to work on this

Source is `src/*.html`, concatenated in filename order. Never edit `dist/` by hand.

```
npm run build     # assemble + node --check every inline script
npm run verify    # headless render, console errors, contrast, keyboard reach
npm run check     # both
```

Editing rules:

- Change chunks, not the bundle.
- Anchor `str_replace` edits on literal file text. The source uses literal `·` and `—`
  in prose but `\u00b7` / `\u2014` **inside JS template strings** — match what is there.
- New capability goes in a new numbered chunk rather than swelling an existing one.
- Wrapping an existing function is preferred over rewriting it. The build depends on
  several deliberate wrapper chains — see `docs/DOCTRINE.md`.

## Definition of done

A change is not done until all of these pass:

- [ ] `npm run build` — every inline script passes `node --check`
- [ ] `npm run verify` — zero console errors, zero page errors
- [ ] Every bead reachable by keyboard, with an accessible name
- [ ] AA contrast (4.5:1) verified in **both** themes against the painted background
- [ ] No horizontal overflow at 390px
- [ ] Works across all six collections, not just the one you were testing
- [ ] Any defect found during verification is **named in the release history**, not
      quietly fixed
- [ ] Committed, with the defect named in the commit message

## Commit convention

```
<area>: <what changed>

Defect found and fixed: <or "none">
Verified: build + verify pass, N collections, both themes
```

## What to raise with me unprompted

- A P1 open for more than three sessions. `BL-WEB-04` (user testing) and `BL-WEB-05`
  (this repo) have been the top two since v1.0.
- Any vocabulary or ownership decision. Those are mine, not yours.
- More than two substantial deliverables in one instruction — name them and ask which.
- Anything needing current facts. Search; do not infer.

## Current standing risks

- **R-01** Scope has outrun assurance. Verified by automation only, never by a user.
- **R-04** The ontology was authored by the tool, not agreed by a vocabulary owner.
- ~~**I-01** KSL is an unratified local scheme sitting alongside a canonical one.~~ Retired 2026-08-01: KSL was a backronym on a misread abbreviation, not a rival scheme; the ladder is gone. See `docs/NAMING.md`.
