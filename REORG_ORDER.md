# REORG_ORDER — LLazyEmail/documentation

Generated: **2026-11-03** (Europe/Kiev). Last status sync: **2026-11-04** (Europe/Kiev). Source of truth for the **documentation reorganization** draft PR track.

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

- [x] PR 01 — client-redirects scaffold ([#343](https://github.com/LLazyEmail/documentation/pull/343) merged)
- [x] PR 02 — AGENTS.md reorg conventions ([#344](https://github.com/LLazyEmail/documentation/pull/344) merged)

## Wave B — Renames (stack on / rebase after Wave A)

- [x] PR 03 — Email Templates → email-templates ([#345](https://github.com/LLazyEmail/documentation/pull/345) merged)
- [x] PR 04 — Project Diagram → project-diagram ([#346](https://github.com/LLazyEmail/documentation/pull/346) merged)
- [x] PR 05 — React-Design-System → react-design-system ([#347](https://github.com/LLazyEmail/documentation/pull/347) merged)
- [x] PR 06 — Awesome-email-marketing.md kebab ([#348](https://github.com/LLazyEmail/documentation/pull/348) merged)
- [x] PR 07 — Table repository.md kebab ([#349](https://github.com/LLazyEmail/documentation/pull/349) merged)
- [x] PR 08 — devops/DevOps.md → index.md ([#350](https://github.com/LLazyEmail/documentation/pull/350) merged)
- [x] PR 09 — React-Design-System.md → index.md ([#351](https://github.com/LLazyEmail/documentation/pull/351) merged)
- [x] PR 10 — tasks template.md → archive/ ([#352](https://github.com/LLazyEmail/documentation/pull/352) merged)
- [x] PR 11 — static img spaces → kebab ([#353](https://github.com/LLazyEmail/documentation/pull/353) merged)

## Wave C — Archive moves

- [x] PR 12 — archive project-diagram indx stub ([#354](https://github.com/LLazyEmail/documentation/pull/354) merged)
- [x] PR 13 — archive errror-handle stub ([#355](https://github.com/LLazyEmail/documentation/pull/355) merged)
- [x] PR 14 — archive entities overlap stub ([#356](https://github.com/LLazyEmail/documentation/pull/356) merged)
- [x] PR 15 — archive mte placeholders ([#357](https://github.com/LLazyEmail/documentation/pull/357) merged)
- [x] PR 16 — archive template code samples ([#358](https://github.com/LLazyEmail/documentation/pull/358) merged)
- [x] PR 17 — Modules-Index → docs/ ([#359](https://github.com/LLazyEmail/documentation/pull/359) merged)
- [ ] PR 18 — accesses.md → archive/ ([#360](https://github.com/LLazyEmail/documentation/pull/360) open)
- [x] PR 19 — archive modularity-issue ([#361](https://github.com/LLazyEmail/documentation/pull/361) merged)
- [x] PR 20 — archive website/future ([#362](https://github.com/LLazyEmail/documentation/pull/362) merged)

## Wave D — IA / sidebar / nav

- [ ] PR 21 — nested _category_.json ([#363](https://github.com/LLazyEmail/documentation/pull/363) open)
- [x] PR 22 — normalize category positions ([#364](https://github.com/LLazyEmail/documentation/pull/364) merged)
- [x] PR 23 — docs/archive hub ([#365](https://github.com/LLazyEmail/documentation/pull/365) merged)
- [ ] PR 24 — organization/ folder ([#366](https://github.com/LLazyEmail/documentation/pull/366) open)
- [ ] PR 25 — sidebars IA comments ([#367](https://github.com/LLazyEmail/documentation/pull/367) open)
- [ ] PR 26 — navbar/footer ([#368](https://github.com/LLazyEmail/documentation/pull/368) open)
- [ ] PR 27 — intro/getting-started/pages-index links ([#369](https://github.com/LLazyEmail/documentation/pull/369) open)
- [x] PR 28 — expand pages-index inventory ([#370](https://github.com/LLazyEmail/documentation/pull/370) merged)

## Wave E — Blog / FM / polish

- [ ] PR 29 — blog spaced filename ([#371](https://github.com/LLazyEmail/documentation/pull/371) open)
- [ ] PR 30 — blog Cyrillic filename ([#372](https://github.com/LLazyEmail/documentation/pull/372) open)
- [ ] PR 31 — blog Part 2 brackets filename ([#373](https://github.com/LLazyEmail/documentation/pull/373) open)
- [ ] PR 32–37 — front matter batches ([#374](https://github.com/LLazyEmail/documentation/pull/374)–[#379](https://github.com/LLazyEmail/documentation/pull/379) open)
- [ ] PR 38 — stabilize noisy ids ([#380](https://github.com/LLazyEmail/documentation/pull/380) open)
- [ ] PR 39 — this file (REORG_ORDER.md) ([#381](https://github.com/LLazyEmail/documentation/pull/381) open)
- [ ] PR 40 — consolidated redirects map ([#382](https://github.com/LLazyEmail/documentation/pull/382) open)

## Full plan

See issue #342 (full PLAN comment) for audit details and success criteria.
