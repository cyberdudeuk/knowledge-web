# Security policy

## Scope

`the-web` is a static, single-file HTML artefact with no backend, no
storage APIs (`localStorage`/`sessionStorage` — see ADR-W08 in
`docs/programme-authority.html`), and no runtime network calls. The build
tooling (`scripts/*.mjs`, Node, Playwright) runs only at build/verify time,
never in the shipped artefact.

In scope:

- Anything that lets untrusted input reach the DOM unsanitised (e.g. an
  XSS path through a collection field, search query, or URL-state
  parameter)
- Anything in the build pipeline that could cause `dist/the-web.html` to
  differ from what `src/*.html` actually specifies
- Dependency vulnerabilities in `devDependencies` (currently just
  Playwright) that could affect anyone running `npm run check`

Out of scope (there is nothing here to exploit): authentication, session
handling, server-side logic, stored user data, third-party API calls.

## Automated checks

- **CodeQL** scans the JavaScript and the GitHub Actions workflows on every
  pull request, on `main` and weekly.
- **Dependency review** stops a pull request that adds a dependency with a
  known vulnerability of moderate severity or worse.
- **Dependabot** proposes updates to npm packages and pinned actions weekly.
- **OpenSSF Scorecard** checks how the repository is run, weekly.

## Reporting a vulnerability

Please **do not** open a public issue for a security concern. Instead, use
GitHub's private reporting:

1. Go to the repository's **Security** tab
2. Click **Report a vulnerability** to open a private advisory

If that's unavailable to you, open an issue asking to be pointed to an
alternative private contact — please don't include exploit details in it.

This is a personal project maintained by one person outside working hours,
so response times are best-effort, not SLA-backed.
