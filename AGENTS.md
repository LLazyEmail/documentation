# Guidance for AI coding agents

This repository is the **LLazyEmail Documentation** Docusaurus site (docs live at the repo root, not under `website/`). Sister projects: [awesome-email-marketing](https://github.com/LLazyEmail/awesome-email-marketing) and [awesome-newsletters](https://github.com/LLazyEmail/awesome-newsletters). Long-term goal: all three sites share a common foundation.

## Do

- Prefer **small, single-purpose PRs** (one concern each).
- **Keep all existing content.** Restructure, fix formatting, or annotate — do not delete wholesale. Mark legacy sections or move into `archive/` instead of removing.
- Open PRs as **drafts** against `main` unless a human asks otherwise.
- Include the trailer `Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>` on commits when working for Arthur Tkachenko / petroved.
- Align with sibling Docusaurus repos for config shape, CSS tokens, search, SEO, footer, glossary, contributing pages.

## Don’t

- Don’t merge or close PRs unless explicitly asked.
- Don’t add duplicate copies of shared workflows (star-request, auto-rebase, changelog, docs-index, markdownlint, lychee, test-deploy, Pages deploy); those are extracted into [documentation-actions](https://github.com/LLazyEmail/documentation-actions).
- Don’t enable or guess at GitHub Pages / org secrets; note required settings for a human.
- Don’t commit secrets (passwords, tokens). Annotate `accesses.md`-style files with warnings instead of expanding them.
- Don’t run destructive git history rewrites on `main`.
- Deletion PRs (if ever needed) must touch at most 15 files and still prefer archive/annotate.

## Layout

- `docs/` — product and project documentation
- `blog/` — archived articles
- `src/` — homepage, components, CSS
- `docusaurus.config.js` — site config
- `.github/` — templates and (legacy) workflows pending documentation-actions adoption
