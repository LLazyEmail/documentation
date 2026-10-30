# CLAUDE.md

Project notes for Claude (and compatible agents). See also [`AGENTS.md`](./AGENTS.md).

## Project

**LLazyEmail/documentation** — Docusaurus documentation site for LLazyEmail. Sister projects: **awesome-email-marketing** and **awesome-newsletters**. Shared workflow extraction lives in **documentation-actions**.

## Working agreements

- Small draft PRs; never wholesale-delete docs content.
- Commit trailer when applicable: `Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>`
- Default branch: `main`
- Node ≥ 22 for local builds and CI.
- Do not re-add shared workflow copies; adopt documentation-actions instead.

## Useful commands

```bash
npm ci
npm start
npm run build
npm run typecheck
```
