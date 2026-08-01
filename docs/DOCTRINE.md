# Doctrine — why the code is shaped this way

Read alongside `CLAUDE.md`. That file states the rules; this one explains them, so you
know when a rule is load-bearing and when it is convention.

## Why one file

Adopted from the delivery pattern already proven across the Data Sharing Observatory,
the CDA Estate dashboard and the Governance Command Centre. A single HTML file needs no
platform approval, survives an environment reset, opens on any government desktop, and
can be emailed. That is not elegance; it is the only distribution channel reliably
available.

The trade-off is real: single-file is right for what you **ship** and wrong for what you
**build**. Hence chunked source and a build step. Do not collapse the two.

## Why chunks, in numeric order

The bundle is ~317 KB. Editing it directly produced four defects across the build
history — an illegal invocation, a footer selector collision, a hashchange dropping
query state, and a mobile table overflow. Chunks keep each concern small enough to hold
in one head.

Ordering matters because later chunks **wrap** earlier functions. Notable chains:

- `selectNode` is defined in `41-selection`, wrapped in `43-movement` (dragline, bridge),
  wrapped again in `45-route-lighting` (crawl), and again in `49-strata-and-lens` (stoop).
- `loadCollection` is defined in `60-collections` and wrapped in `61-portal-pages`.
- `runQuery` is defined in `41-selection`, wrapped in `43-movement`, wrapped again in
  `44-reference-and-owl` for thesaurus expansion.

If you rewrite one of these instead of wrapping it, you silently drop every later
behaviour. **Wrap; don't rewrite.**

## Why declared gaps are mandatory

A collection without `repairs[]` is rejected by `verify.mjs`. Making absence visible —
torn strands, islands nothing reaches, a reasoner that says plainly when it inferred
nothing — is the distinctive claim of this system. Optional gap declaration would let it
degrade into another graph viewer, of which there are many.

## Why asserted, inferred and induced are kept apart

- **Asserted** — stated in a source. Plain treatment.
- **Inferred** — follows by entailment from asserted axioms. Amber, labelled, switchable.
- **Induced** — a regularity observed across the data but never asserted. Violet,
  labelled "observed", separated again.

Induction is not entailment. Presenting an observed regularity as an axiom would be a
category error with governance consequences downstream.

## Why shape carries ontology class, never colour

Colour-only encoding fails colour-blind users and fails in monochrome print — and
government documents still get printed. Shape is the only channel that survives both.
Hexagon = portal, square = artefact, diamond = standard or scoring model, triangle =
source, cross = method, circle = concept, broken outline = open.

## Why the governance record is decoupled

`docs/programme-authority.html` is a **sibling**, not a child. Reference, not derivation.
The prototype must carry no obligation to render its own backlog; embedding governance
couples release cadence to documentation cadence. The two also have different clocks —
the prototype changes per session, the authority per decision.

It is deliberately static HTML with no JavaScript and no external resource, so it passes
the degraded-mode test the prototype currently fails.

## Why there is no persistence

Decision ADR-W08. It avoids data-protection questions entirely at prototype stage and
keeps the artefact honestly stateless. `verify.mjs` fails the build if a storage API
appears. Revisit at `BL-WEB-28` (import/export JSON), not before.

## Why the build script counts tags outside script bodies

The retreat pop-out constructs an entire HTML document inside a JS template string.
A naive structural check flags three false positives on it. This was found on the first
run of the build script and is a good example of the general rule: **when a check fires,
work out whether the check or the code is wrong before changing either.**

## Typography conventions in source

UK English throughout. Literal `·` (U+00B7) and `—` (U+2014) in prose, but escaped
`\u00b7` and `\u2014` **inside JS template strings**. This is not stylistic — patch
operations anchor on literal file text, and mixing the two silently breaks anchors.
