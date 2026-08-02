# Getting started with Claude Code

Written for someone who has not used Claude Code before. Follow it in order.
Every command is meant to be copied and pasted.

---

## Before you start

You need:

- **A Claude Pro, Max, Team, Enterprise or Console account.** The free plan does not
  include Claude Code.
- **Git.** Check with `git --version`. If missing: <https://git-scm.com/downloads>
- **Node.js 18+**, only for the build and verify scripts. Check with `node --version`.
  Claude Code itself does not need Node.
- **A terminal.** Terminal on macOS, PowerShell on Windows.

You do **not** need to know how to code. You need to be able to read what Claude
proposes and say yes or no.

---

## Step 1 — Install Claude Code

**macOS, Linux, or WSL:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**

```powershell
irm https://claude.ai/install.ps1 | iex
```

On native Windows, also install [Git for Windows](https://git-scm.com/downloads/win).
It lets Claude Code use bash rather than PowerShell, which makes the scripts here work
without modification.

> Prefer not to use a terminal at all? The **Claude Desktop app** runs Claude Code with a
> graphical interface. Download it from <https://claude.com/download> and skip to Step 3.

## Step 2 — Check it worked

```bash
claude --version     # should print something like 2.1.211 (Claude Code)
claude doctor        # fuller diagnostic if anything looks wrong
```

## Step 3 — Put this folder somewhere sensible

Not Downloads. Somewhere you would keep work.

```bash
# macOS / Linux
mkdir -p ~/projects && mv ~/Downloads/the-web ~/projects/
cd ~/projects/the-web
```

```powershell
# Windows PowerShell
mkdir $HOME\projects -Force; Move-Item $HOME\Downloads\the-web $HOME\projects\
cd $HOME\projects\the-web
```

## Step 4 — Make it a repository. This is the important one.

This single step closes **R-02**, which has been the largest unhedged risk in this work
since the beginning: every artefact existing only as a download.

```bash
git init
git add .
git commit -m "Initial commit: The Knowledge Web v2.0 portal, authority and build harness"
```

That's it. You now have history, diffs and rollback. Everything after this is recoverable.

**Optional but recommended** — push it somewhere. If you have a GitHub or internal
GitLab account, create an empty private repository and then:

```bash
git remote add origin <the URL they give you>
git push -u origin main
```

## Step 5 — Install the test dependencies

```bash
npm install
npx playwright install chromium
```

The second command downloads a headless browser, about 115 MB. It is what runs the
accessibility and contrast checks.

## Step 6 — Prove the harness works before you change anything

```bash
npm run build     # assembles 22 chunks, syntax-checks 17 inline scripts
npm run verify    # loads it in a real browser and runs the definition of done
```

You should see `✓ Build OK` and then `✓ All checks passed`. If both pass, your setup is
correct and you can trust the loop.

To look at the artefact:

```bash
npm run serve     # then open http://localhost:8080
```

## Step 7 — Start Claude Code

```bash
claude
```

First run opens a browser to log in. After that you get a prompt in your terminal.

Claude Code reads `CLAUDE.md` automatically — you do not need to paste the doctrine.

---

## Your first session, script included

Paste these one at a time. Read what comes back before approving anything.

**1. Orientation — read-only, nothing changes:**

```
Read CLAUDE.md and docs/BACKLOG.md. Summarise in ten lines what this repo is,
how the build works, and what the top three open P1 items are. Change nothing.
```

**2. A tiny first change, to prove the loop:**

```
CONTEXT:  first change, proving the build and verify loop
SURFACE:  code
ASK:      in src/13-portal-shell.html, change the prototype badge text in the top bar
          from "Prototype" to "Prototype · v2.0"
DONE WHEN: npm run check passes and the change is committed
EVIDENCE: the file is in this repo
UNKNOWNS: none
```

Watch what it does: edits the chunk, runs `npm run build`, runs `npm run verify`,
then commits. That loop is the whole method.

**3. Then the real work:**

```
CONTEXT:  BL-WEB-02, degraded-mode completeness, tenet T-03
SURFACE:  code
ASK:      remove the Google Fonts dependency. Replace with a system font stack that
          keeps the display/body/mono distinction. Nothing may be fetched at runtime.
DONE WHEN: npm run check passes, no external URL remains in the bundle, and the
          release history in docs/programme-authority.html records the change
EVIDENCE: src/10-tokens-and-base.html holds the font links and the type scale
UNKNOWNS: if any weight cannot be matched, tell me rather than substituting silently
```

---

## The loop, every time

```
1. Say what you want, in the six-line block below
2. Claude proposes; you read the diff
3. npm run build      →  syntax + structure
4. npm run verify     →  the definition of done
5. git commit         →  with the defect named, if one was found
```

Never skip 3 and 4. They are why the defect rate has been survivable.

## The six-line intake block

Paste this at the top of any substantial request, in Claude Code or in chat:

```
CONTEXT:
SURFACE:    chat | code | cowork | design    (or "route me")
ASK:        one thing
DONE WHEN:
EVIDENCE:   files / sources / "none — say so"
UNKNOWNS:   what to flag rather than guess
```

`DONE WHEN` is the line that matters most. Every correction in this project so far
happened on a turn without one.

---

## Commands worth knowing

| In Claude Code | What it does |
|---|---|
| `/help` | list everything available |
| `/clear` | clear the conversation, keep the session |
| `/undo` | revert the last change Claude made |
| `/model` | switch model — Opus for design work, Sonnet for mechanical edits |
| `/config` | settings, including auto-update channel |
| `Esc` | interrupt Claude mid-action |
| `Ctrl+C` | quit |

| In your terminal | What it does |
|---|---|
| `git diff` | what changed since the last commit |
| `git log --oneline` | history |
| `git checkout -- <file>` | throw away changes to one file |
| `git reset --hard HEAD` | throw away *everything* uncommitted — careful |
| `npm run check` | build + verify in one |

---

## When it goes wrong

**`claude: command not found`** — the installer put it in `~/.local/bin`, which may not
be on your PATH. Close and reopen the terminal first. Still failing: `claude doctor`.

**`npm run verify` fails at browser launch** — you missed `npx playwright install chromium`.

**Claude wants to edit `dist/the-web.html`** — stop it. `dist/` is generated. Say:
*"dist is a build artefact, edit the chunk in src/ instead."*

**A change breaks something and you don't know what** — `git diff` to see it,
`git checkout -- <file>` to undo it. This is exactly what the repo is for.

**Claude does five things when you asked for one** — say so. It is in `CLAUDE.md` that
it should name them and ask; hold it to that.

---

## Do these three first

1. **Steps 1–6.** Half an hour, and R-02 is closed permanently.
2. **BL-WEB-04 — five users.** Not the portal; whichever artefact has real users
   waiting. At least one screen-reader user. This has been P1 since v1.0 and no amount
   of building substitutes for it.
3. **Then** work the P1 list, one item per session.

## Official documentation

- Claude Code: <https://code.claude.com/docs/en/overview>
- Quickstart: <https://code.claude.com/docs/en/quickstart>
- Terminal guide, if terminals are new: <https://code.claude.com/docs/en/terminal-guide>
- Troubleshooting: <https://code.claude.com/docs/en/troubleshoot-install>
