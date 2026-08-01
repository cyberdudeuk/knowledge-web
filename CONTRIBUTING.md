# Working on this

## The intake block

Paste at the top of any substantial request:

```
CONTEXT:
SURFACE:    chat | code | cowork | design    (or "route me")
ASK:        one thing
DONE WHEN:
EVIDENCE:   files / sources / "none — say so"
UNKNOWNS:   what to flag rather than guess
```

`DONE WHEN` is the line that matters most.

## Routing

| Job | Surface |
|---|---|
| Any change to this repo | **Claude Code** |
| Workbook analysis, document production, multi-source research | **Cowork** |
| Thinking, routing, "is this the right approach" | **Chat** |
| Consultation front-ends, briefing packs, slides | **Claude Design** |
| Register cleanup, entity resolution, DQ rules | **Claude in Excel** |

## The loop

```
1. state the change, with a done-condition
2. read the diff before approving
3. npm run build
4. npm run verify
5. git commit, naming any defect found
```

## Adding a collection

Every collection must supply `strands[]`, `themes[]`, `enrich{}` and `repairs[]`.
`repairs[]` is not optional — `verify.mjs` fails the build without it. A collection
that declares no gaps is not trusted by this system.

## Adding a capability

New numbered chunk in `src/`, not a bigger existing one. Wrap existing functions
rather than rewriting them — see `docs/DOCTRINE.md` for the wrapper chains.

## Release

Update the release history in `docs/programme-authority.html`, naming any defect found
during verification. Then tag:

```bash
git tag -a v2.1 -m "v2.1: <summary>"
```
