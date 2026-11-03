# REORG_ORDER — LLazyEmail/documentation

Generated: **2026-11-03** (Europe/Kiev). Source of truth for the **documentation reorganization** draft PR track.

Tracking issue: [#342 Documentation reorganization plan (40 PRs)](https://github.com/LLazyEmail/documentation/issues/342)

Do **not** merge Renovate dependency bumps (#198–#218). Do **not** merge reorg PRs without reading stacking notes. Prefer draft → CI green → human merge.

Companion file: [MERGE_ORDER.md](./MERGE_ORDER.md) (prior polish combine track — keep; do not delete).

## Hard rules

- Never delete docs bodies — `archive/` or legacy stubs.
- Keep root README content in place.
- ≤15 moved/deleted files per PR; one purpose.
- Redirects (`@docusaurus/plugin-client-redirects`) or stable `slug`/`id`.
- Commit trailer: `Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>`

## Wave A — Foundation (merge first)

- [ ] PR 01 — client-redirects scaffold
- [ ] PR 02 — AGENTS.md reorg conventions

## Wave B — Renames (stack on / rebase after Wave A)

- [ ] PR 03 — Email Templates → email-templates
- [ ] PR 04 — Project Diagram → project-diagram
- [ ] PR 05 — React-Design-System → react-design-system
- [ ] PR 06 — Awesome-email-marketing.md kebab
- [ ] PR 07 — Table repository.md kebab
- [ ] PR 08 — devops/DevOps.md → index.md
- [ ] PR 09 — React-Design-System.md → index.md
- [ ] PR 10 — tasks template.md → archive/
- [ ] PR 11 — static img spaces → kebab

## Wave C — Archive moves

- [ ] PR 12 — archive project-diagram indx stub
- [ ] PR 13 — archive errror-handle stub
- [ ] PR 14 — archive entities overlap stub
- [ ] PR 15 — archive mte placeholders
- [ ] PR 16 — archive template code samples
- [ ] PR 17 — Modules-Index → docs/
- [ ] PR 18 — accesses.md → archive/
- [ ] PR 19 — archive modularity-issue
- [ ] PR 20 — archive website/future

## Wave D — IA / sidebar / nav

- [ ] PR 21 — nested _category_.json
- [ ] PR 22 — normalize category positions
- [ ] PR 23 — docs/archive hub
- [ ] PR 24 — organization/ folder
- [ ] PR 25 — sidebars IA comments
- [ ] PR 26 — navbar/footer
- [ ] PR 27 — intro/getting-started/pages-index links
- [ ] PR 28 — expand pages-index inventory

## Wave E — Blog / FM / polish

- [ ] PR 29 — blog spaced filename
- [ ] PR 30 — blog Cyrillic filename
- [ ] PR 31 — blog Part 2 brackets filename
- [ ] PR 32–37 — front matter batches
- [ ] PR 38 — stabilize noisy ids
- [ ] PR 39 — this file (REORG_ORDER.md)
- [ ] PR 40 — consolidated redirects map

## Full plan

See issue #342 (full PLAN comment) for audit details and success criteria.
