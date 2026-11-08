# kmap — the Knowledge Map and its shared register

A sibling to The Web, not part of its build. Nothing in `src/` or `dist/` reads these files.

| File | What it is |
|---|---|
| `knowledge-map.html` | The Knowledge Map, v2.8 (27 Oct 2026). The same file as the published artifact. |
| `register.json` | The shared register: one row per Claude artifact (83 on 27 Oct), keyed on artifact id, with its map node and its Claude Work 360º row. Personal titles are withheld. |
| `verify.mjs` | Runs the map's 44 in-page self-checks in light and dark, checks for overflow at 390px, and proves five checks refuse deliberately broken copies. |

Run: `node kmap/verify.mjs` (uses the repo's Playwright).

The register is the join between the map and Claude Work 360º. A title join lost two
artefacts to renames; the artifact id did not.

Open for the owner (not decided here):
- whether `kmap/` belongs in this repository or its own;
- whether the map and The Web converge (see the evaluation in the project, 27 Oct).
