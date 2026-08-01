# User testing plan — BL-WEB-04

**Trace:** BL-WEB-04 · MG-NFR-002 · Risk R-01 (scope has outrun assurance)
**Status:** Staged. This is a personal project first; formal testing is the gate
for any move to internal use, not a precondition for continuing to build.

MG-NFR-002 says tested, not designed-to. Automation has verified this build;
no person has. The stages below scale that obligation to what the project
actually is at each point in its life, without quietly dropping it.

---

## Stage 0 — self-audit with real assistive technology (now, no other people)

Run the test script in Part 2 on yourself, but under the conditions the
requirement cares about, not your defaults:

- **Keyboard-only pass.** Unplug or ignore the pointer entirely. Every task,
  A1–C3, keyboard only.
- **VoiceOver pass.** macOS ships it: `Cmd+F5` to toggle, `Ctrl+Option` as the
  VO modifier, `Ctrl+Option+A` to read from the top. Do tasks A1–A5 and B1–B3
  with the screen curtained (`Ctrl+Option+Shift+F11`) or eyes closed — listening
  only. Where you cheat by looking, that is a finding.
- **390 px + zoom pass.** Narrow viewport, then 200% browser zoom, tasks A1–A4.

Log findings with the same severity scale as Part 3. Self-testing finds real
defects but cannot close BL-WEB-04: you built it, so you know where everything
is. It bounds the item; it does not discharge it.

## Stage 1 — informal cold readers (when convenient, 1–3 people)

Anyone available — household, friends, former colleagues. No recruitment, no
formality: one session each, think-aloud, the same script. The cold-reader
tasks (A1–A3, B1, B3, C1) matter most here, because these are the tasks a
builder is structurally unable to test alone.

## Stage 2 — the formal protocol (gate for internal adoption)

If this moves into an internal project, the original five-participant protocol
applies **before** it is put in front of an internal audience as a working
tool: five distinct participants, at least one daily screen-reader user and one
keyboard-only user, moderated think-aloud, findings to the backlog. The
recruitment profile and consent terms from the earlier draft of this document
are in the repo history (commit 3470350) and can be restored when needed.

**BL-WEB-04 closes at Stage 2, and only at Stage 2.** Stages 0 and 1 are
recorded progress against it, not substitutes for it.

---

## UNKNOWNS — resolve before Stage 2

1. **"The conformance page."** Part C below is drafted against the **User
   manual** page ("every control, every key, the doctrine it follows and the
   things it deliberately does not claim") — the nearest match in the build,
   inferred, not asserted. Owner to confirm or correct before the script is
   used with anyone else.

---

## Part 2 — Test script

For moderated sessions (Stage 1–2), read aloud: *"I'll ask you to try some
tasks. Please think aloud — say what you expect before you act, and what
surprises you. I won't help unless you're fully stuck, because where you get
stuck is exactly what we need to learn. This is a test of the artefact, never
of you."*

**Warm-up.** Open the file. First impressions, unprompted: *"What is this?
What would you use it for? What does the notice at the top tell you?"*
(Checks the honest-labelling doctrine actually lands.)

### Part A — the core web

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| A1. "Find your way to the map of the work — the web itself." | Reaches Explore the web from home | Is the navigation label meaningful cold? |
| A2. "Pick any bead and tell me what it is." | Opens a bead, reads its details, articulates what it represents | Are shape/outline encodings understood without the legend? |
| A3. "This map claims to show what's *missing*, not just what's there. Find a gap." | Locates a declared gap / repair | The distinctive claim — do users see it unaided? |
| A4. "Switch to a different collection and tell me what changed." | Uses the collection switcher; orients in the new collection | Disorientation on switch; does state visibly reset? |
| A5. (keyboard / screen reader) "Walk the beads without the mouse." | Every bead reachable, each announced with a usable name | Order sensible? Names meaningful, not just present? |

### Part B — the ontology explorer

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| B1. "Find the part that explains how things here are classified." | Reaches Ontology explorer | Does 'Ontology' mean anything to non-specialists? |
| B2. "Pick a class and tell me what belongs to it." | Opens a class, reads members | |
| B3. "Some statements here are stated in a source, some are worked out by the tool. Find one of each and tell me how you knew." | Distinguishes asserted from inferred (and induced if met) by label, not colour | **Core doctrine.** If they can't tell, the three-way distinction has collapsed in practice |
| B4. "Do you trust what the reasoner tells you? Why or why not?" | Open discussion | Feeds BL-WEB-21 (explanation of inference) |

### Part C — the User manual page *(stand-in for "the conformance page" — see UNKNOWNS)*

| Task | Success looks like | Watch for |
|------|--------------------|-----------|
| C1. "Find out what this tool promises it does *not* do." | Reaches the manual's claims/doctrine section | Is honest labelling discoverable, or buried? |
| C2. "You're offline with no network at all. What would still work? Where does the page tell you?" | Articulates degraded-mode behaviour from what the page states | Known doctrine failure (BL-WEB-01/02) — does the manual admit it? |
| C3. "Find the keyboard controls for the web view and use one." | Locates the key reference; applies it | Manual-to-behaviour round trip |

**Wrap.** *"What would you use this for tomorrow? What would stop you? If you
could fix one thing, what?"*

---

## Part 3 — Capture

- Per task: outcome (completed / completed with difficulty / failed /
  abandoned), quotes, observed breakdowns.
- Severity per finding: **S1** blocks the task · **S2** significant difficulty ·
  **S3** friction · **S4** cosmetic. Any S1 found under assistive technology is
  a P1 backlog item regardless of stage.
- Findings become backlog items with trace `BL-WEB-04`. Defects found are
  **named**, per the operating rules — none are quietly fixed.
