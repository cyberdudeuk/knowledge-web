# User testing plan — BL-WEB-04

**Trace:** BL-WEB-04 · MG-NFR-002 · Risk R-01 (scope has outrun assurance)
**Status:** Draft for owner review. Not yet scheduled.
**Artefact under test:** `dist/the-web.html` v2.0, self-contained single file.

BL-WEB-04 has been P1 since v1.0. Everything in this build has been verified by
automation only; this plan is the first step to verification by a person.

---

## UNKNOWNS — resolve before recruiting

1. **"The conformance page."** The instruction asked the script to cover the core
   web, the ontology explorer and *the conformance page*. No page named
   Conformance exists in the build, in `docs/`, or in the programme authority.
   The nearest match is the **User manual** page ("every control, every key, the
   doctrine it follows and the things it deliberately does not claim"), and Part C
   below is drafted against it. **Owner to confirm or correct** — vocabulary
   decisions are the owner's, and this one is inferred, not asserted.
2. **Population.** Participants should come from the artefact's intended audience
   (governance, data standards, knowledge management roles). Owner to confirm
   whether internal colleagues are acceptable or arm's-length recruitment is required.

---

## Part 1 — Recruitment brief

**We are looking for five people** to spend 45–60 minutes trying out a prototype:
an interactive, navigable map of a body of work on data standards and governance,
delivered as a single web page. No installation, no account — a moderator sends
one HTML file or a link, you open it in a browser you already use.

**Who we need:**

| # | Profile | Must have |
|---|---------|-----------|
| P1 | Screen-reader user | Daily use of JAWS, NVDA or VoiceOver (**required** — do not substitute) |
| P2 | Keyboard-only user | Navigates without a pointer, by preference or necessity (**required**) |
| P3 | Governance / assurance role | Reads or writes governance packs; no prior exposure to this artefact |
| P4 | Data standards practitioner | Works with taxonomies, vocabularies or metadata |
| P5 | General knowledge-work user | No specialist background — the "cold reader" |

One person may satisfy two rows (e.g. a screen-reader user in a governance role);
five distinct people are still required.

**Format:** one-to-one moderated session, remote or in person. Think-aloud
protocol. Screen and audio recorded **with consent**; recordings kept only until
findings are written up, then destroyed. Participants may stop at any time.

**What it is not:** a test of the participant. Every failure is a finding about
the artefact. This is stated aloud at the start of each session.

**Incentive and consent:** to owner's policy — flagged, not assumed.

---

## Part 2 — Test script

Moderator reads the brief aloud, confirms consent and recording, then: *"I'll ask
you to try some tasks. Please think aloud — say what you expect before you act,
and what surprises you. I won't help unless you're fully stuck, because where you
get stuck is exactly what we need to learn."*

For P1 and P2, every task below is attempted with their own assistive setup —
no pointer rescue by the moderator. Note each point where speech output, focus
order or a keyboard path breaks down.

**Warm-up (5 min).** Open the file. First impressions, unprompted: *"What is this?
What would you use it for? What does the notice at the top tell you?"*
(Checks the honest-labelling doctrine actually lands.)

### Part A — the core web (15 min)

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| A1. "Find your way to the map of the work — the web itself." | Reaches Explore the web from home | Is the navigation label meaningful cold? |
| A2. "Pick any bead and tell me what it is." | Opens a bead, reads its details, articulates what it represents | Are shape/outline encodings understood without the legend? |
| A3. "This map claims to show what's *missing*, not just what's there. Find a gap." | Locates a declared gap / repair | The distinctive claim — do users see it unaided? |
| A4. "Switch to a different collection and tell me what changed." | Uses the collection switcher; orients in the new collection | Disorientation on switch; does state visibly reset? |
| A5. (P1/P2) "Walk the beads without the mouse." | Every bead reachable, each announced with a usable name | Order sensible? Names meaningful, not just present? |

### Part B — the ontology explorer (15 min)

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| B1. "Find the part that explains how things here are classified." | Reaches Ontology explorer | Does 'Ontology' mean anything to non-specialists (P5)? |
| B2. "Pick a class and tell me what belongs to it." | Opens a class, reads members | |
| B3. "Some statements here are stated in a source, some are worked out by the tool. Find one of each and tell me how you knew." | Distinguishes asserted from inferred (and induced if met) by label, not colour | **Core doctrine.** If they can't tell, the three-way distinction has collapsed in practice |
| B4. "Do you trust what the reasoner tells you? Why or why not?" | Open discussion | Feeds BL-WEB-21 (explanation of inference) |

### Part C — the User manual page *(stand-in for "the conformance page" — see UNKNOWNS)* (10 min)

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| C1. "Find out what this tool promises it does *not* do." | Reaches the manual's claims/doctrine section | Is honest labelling discoverable, or buried? |
| C2. "You're offline with no network at all. What would still work? Where does the page tell you?" | Articulates degraded-mode behaviour from what the page states | Known doctrine failure (BL-WEB-01/02) — does the manual admit it? |
| C3. "Find the keyboard controls for the web view and use one." | Locates the key reference; applies it | Manual-to-behaviour round trip |

**Wrap (5 min).** *"What would you use this for tomorrow? What would stop you?
If you could fix one thing, what?"*

---

## Part 3 — Capture and reporting

- Per task: outcome (completed / completed with difficulty / failed / abandoned),
  time, quotes, and observed breakdowns.
- Severity per finding: **S1** blocks the task · **S2** significant difficulty ·
  **S3** friction · **S4** cosmetic. Any S1 for P1 or P2 is a P1 backlog item.
- Findings are written up per session within 48 hours, then consolidated into
  backlog items with trace `BL-WEB-04`. Defects found are **named**, per the
  operating rules — none are quietly fixed.
- BL-WEB-04 closes when five sessions are complete and findings are on the
  backlog — not when the findings are fixed.
