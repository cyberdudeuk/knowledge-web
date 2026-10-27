# The Web and the Knowledge Map: evaluation, 27 Oct 2026

**Sources:**
- the knowledge-web repository at v3.8. I cloned it today and reran `npm run check`, which passed.
- the project's copies of `the_web.html` (pre-v3) and `the_web_programme_authority.html` (WEB-2.1).
- the Knowledge Map v2.8.

## Measured against the original brief

The brief was "a spider web of all the content, data, information and knowledge I've created or chatted about… navigate it like a spider does".

| | The Web (v3.8) | Knowledge Map (v2.8) |
|---|---|---|
| Covers *your* body of work in Claude | Partly. It has six collections, and only one is your work in Claude. The other five are domain data (CDA, classification, alignment and so on). | Yes. That is its whole scope: 83 artefacts in the register, every project swept. |
| Spider-like navigation | Strong. It has beads, strands, routes, a keyboard walk and an audio walk. | Good, with six views. It is less tactile. |
| Ontology rigour | Strong. Asserted, inferred and induced are kept apart, and every collection declares its gaps in `repairs[]`. | Moderate. It separates stated from inferred, but has no "induced" class. |
| Assurance | CI, a degraded mode, AA contrast and a definition of done. Its own risk R-01 says it has never been tested by a user. | 44 in-page checks with negative tests, and five scheduled tasks. It has never been tested by a user either. |
| Stays current | No. It is read-only (BL-WEB-27 is open), and it was last released on 3 Aug. | Yes, through the register and the weekly and monthly tasks. |

**Verdict:** The Web is the better *instrument*, and the map is the better *answer to your brief*. The Web drifted from "map of my work" towards "a platform for mapping any body of work". BL-WEB-03 says this outright: it is "the single item that turns a demonstrator into a platform". That is a legitimate product, but it is a different one from the brief.

## Strengths worth keeping
- The doctrine: augmentation, a registered fallback, degraded-mode completeness, and a human in the loop. Its accessibility discipline (nothing colour-only, picture-only or audio-only) goes further than the map's.
- The honesty mechanics. Three items are blocked rather than faked: BL-WEB-15, 33 and 53. The backlog entries say exactly why the data isn't there.
- The working practice: you rule on naming (the KIL ruling of 1 Aug) and the tool follows.

## Weaknesses
1. **The scope has outrun assurance (R-01).** There are 14 P1s open. BL-WEB-04 (testing with five users) has been open since v1.0, and the repo's contract says to raise it unprompted.
2. **The authority has forked.** The project holds WEB-2.1, which has a canon conformance section with 3 criteria not met (A3, B1, B3) and the 25 Jan 2027 promotion gate. The repo holds WEB-2.0, which has neither. The contract says governance lives in `docs/programme-authority.html`, so the copy that counts is currently the weaker one.
3. **The contract is stale.** `CLAUDE.md` tenet 3 still says "Currently failing — see BL-WEB-01, 02". Both were closed in v3.0 (2 Aug).
4. **The data dependencies are not in the repo.** BL-WEB-53 needs the real CDA register (`CDA_Live_Dashboard_Template.xlsx`). BL-WEB-57 needs mission and priority fields in the source registers. Neither can be unblocked by code.
5. **No change since 3 Aug.** At this pace, the promotion gate on 25 Jan 2027 is the risk.

## Recommendation: converge, don't merge
- **Keep both, with a clear division of work.** The map is the live, personal index of your work. The Web is the governed instrument for domain collections.
- **Make the register the bridge.** Export `kmap/register.json` as a seventh Web collection, which is effectively BL-WEB-03 with a real source. That would give The Web a live collection and give the map The Web's navigation and accessibility.
- **Before 25 Jan 2027:**
  - reconcile the authority: bring WEB-2.1 into the repo, or record why not;
  - fix the stale tenet-3 line;
  - run BL-WEB-04 with five users, which would also retire R-01 for both artefacts;
  - obtain the CDA source register for BL-WEB-53.

## Decisions for you (ownership and vocabulary, not mine)
- Should `kmap/` live in knowledge-web (PR #1) or in its own repository?
- Which authority is canonical: WEB-2.1 (in the project) or WEB-2.0 (in the repo)?
- Is a seventh collection in The Web, built from the register, in scope?
