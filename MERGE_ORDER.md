# MERGE_ORDER — LLazyEmail/documentation

Generated: **2026-10-30** (Europe/Kiev). Source of truth for merging the open draft polish PRs after conflict combining.

Do **not** merge Renovate dependency bumps (#198–#218) until the site foundation below is in. Do **not** merge anything without reading the stacking notes.

## 1. CI fix first (must be green)

Merge this before any other site/package combine. Unblocks `npm ci` lock drift (since #225) and Node 16 vs Docusaurus ≥20.

- [ ] [#328 chore: combine Node 22 CI foundation (engines, lockfile, workflows)](https://github.com/LLazyEmail/documentation/pull/328) — engines ≥22 + package-lock sync + Node 22 in existing test-deploy/deploy + .nvmrc/.node-version. Replaces #241–#244.

**Competing note:** [#333](https://github.com/LLazyEmail/documentation/pull/333) also folds Node 22 + lockfile with documentation-actions adoption. Prefer **#328** for CI-only first; keep adoption in the Blocked section. If you choose #333 instead, skip #328 and reconcile #324/#326.

## 1b. Merge checklist (this file)

- [ ] [#334 docs: add MERGE_ORDER.md (merge checklist source of truth)](https://github.com/LLazyEmail/documentation/pull/334) — can merge anytime after or with #328 (shares CI foundation commits).

## 2. Package + config + homepage combines (stacked)

- [ ] [#329 chore: combine package.json deps — scripts, search-local, faster](https://github.com/LLazyEmail/documentation/pull/329) — package.json scripts + @easyops-cn/docusaurus-search-local + @docusaurus/faster. Replaces #303, #325, #327. Depends on #328 (shared commits).
- [ ] [#330 feat(website): combine docusaurus.config.js foundation changes](https://github.com/LLazyEmail/documentation/pull/330) — docusaurus.config.js foundation (i18n, future.v4, colorMode, fonts, SEO, sitemap, navbar/footer, search theme, blog warns). Replaces #246–#248, #250–#252, #255–#257, #270, #316. Depends on #328 + #329.
- [ ] [#331 feat(website): combine homepage components and wiring](https://github.com/LLazyEmail/documentation/pull/331) — homepage Features + MetricsStrip + sister CTA + Layout title. Replaces #258–#263, #304. Depends on #328.
- [ ] [#332 docs: combine errror-handle annotation and typo fixes](https://github.com/LLazyEmail/documentation/pull/332) — errror-handle annotation + alias + typo fixes. Replaces #271, #284. Depends on #328.

## 3. Independent baseline (any order within group)


- [ ] [#226 chore: add MIT LICENSE](https://github.com/LLazyEmail/documentation/pull/226)
- [ ] [#227 docs: add CONTRIBUTING.md](https://github.com/LLazyEmail/documentation/pull/227)
- [ ] [#228 docs: add AGENTS.md for AI agents](https://github.com/LLazyEmail/documentation/pull/228)
- [ ] [#229 docs: add CLAUDE.md for Claude-compatible agents](https://github.com/LLazyEmail/documentation/pull/229)
- [ ] [#230 chore: add CODEOWNERS for default review routing](https://github.com/LLazyEmail/documentation/pull/230)
- [ ] [#231 docs: add SECURITY.md with private reporting contact](https://github.com/LLazyEmail/documentation/pull/231)
- [ ] [#232 docs: add Contributor Covenant Code of Conduct](https://github.com/LLazyEmail/documentation/pull/232)
- [ ] [#233 chore: add .editorconfig for consistent formatting](https://github.com/LLazyEmail/documentation/pull/233)
- [ ] [#234 chore: extend .gitignore for OS, editor, and env artifacts](https://github.com/LLazyEmail/documentation/pull/234)
- [ ] [#235 chore: Renovate weekly Monday schedule + automerge devDeps patch/minor](https://github.com/LLazyEmail/documentation/pull/235)
- [ ] [#236 chore: add pull request template](https://github.com/LLazyEmail/documentation/pull/236)
- [ ] [#237 chore: add issue template config with sister-repo contact links](https://github.com/LLazyEmail/documentation/pull/237)
- [ ] [#238 chore: add issue form for docs improvements](https://github.com/LLazyEmail/documentation/pull/238)
- [ ] [#239 chore: add broken-link issue template](https://github.com/LLazyEmail/documentation/pull/239)
- [ ] [#240 chore: add FUNDING.yml for GitHub Sponsors](https://github.com/LLazyEmail/documentation/pull/240)
- [ ] [#315 chore: bump .gitpod.yml Node example toward 22](https://github.com/LLazyEmail/documentation/pull/315)
- [ ] [#323 chore: annotate CodeQL workflow with Node 22 foundation note](https://github.com/LLazyEmail/documentation/pull/323)

## 4. Independent site extras (single-purpose, little/no overlap)

- [ ] [#245 docs: add community & sister-repo links page](https://github.com/LLazyEmail/documentation/pull/245)
- [ ] [#249 feat(website): align CSS primary tokens and IBM Plex stacks](https://github.com/LLazyEmail/documentation/pull/249)
- [ ] [#253 feat(website): add robots.txt with sitemap pointer](https://github.com/LLazyEmail/documentation/pull/253)
- [ ] [#254 feat(website): add custom 404 page with docs links](https://github.com/LLazyEmail/documentation/pull/254)
- [ ] [#264 feat(docs): add intro/overview docs page](https://github.com/LLazyEmail/documentation/pull/264)
- [ ] [#265 feat(docs): add Contributing page linked from docs tree](https://github.com/LLazyEmail/documentation/pull/265)
- [ ] [#266 feat(docs): add top-level glossary page pointing at improvements glossary](https://github.com/LLazyEmail/documentation/pull/266)
- [ ] [#267 feat(website): add CHANGELOG.md scaffolding](https://github.com/LLazyEmail/documentation/pull/267)
- [ ] [#268 feat(docs): add Changelog docs page](https://github.com/LLazyEmail/documentation/pull/268)
- [ ] [#269 feat(docs): add pages-index stub for docs inventory](https://github.com/LLazyEmail/documentation/pull/269)
- [ ] [#295 feat(website): add blog/authors.yml for Arthur](https://github.com/LLazyEmail/documentation/pull/295)
- [ ] [#296 feat(website): add blog/tags.yml seed](https://github.com/LLazyEmail/documentation/pull/296)
- [ ] [#297 docs: restructure README with TOC and sister links](https://github.com/LLazyEmail/documentation/pull/297)
- [ ] [#298 chore: add .markdownlint.json config (no workflow)](https://github.com/LLazyEmail/documentation/pull/298)
- [ ] [#299 chore: add .lychee.toml config (no workflow)](https://github.com/LLazyEmail/documentation/pull/299)
- [ ] [#300 feat(website): add src/data/types.ts foundation stub](https://github.com/LLazyEmail/documentation/pull/300)
- [ ] [#301 feat(website): seed src/data/glossary.json](https://github.com/LLazyEmail/documentation/pull/301)
- [ ] [#302 feat(website): add RelatedResources component stub](https://github.com/LLazyEmail/documentation/pull/302)
- [ ] [#312 docs: annotate sidebars.js with foundation notes](https://github.com/LLazyEmail/documentation/pull/312)
- [ ] [#313 feat(website): add static/api/v1/.gitkeep placeholder](https://github.com/LLazyEmail/documentation/pull/313)
- [ ] [#314 feat(docs): add Getting Started guide page](https://github.com/LLazyEmail/documentation/pull/314)

## 5. Docs content — categories

- [ ] [#273 docs: add _category_.json for Email Templates](https://github.com/LLazyEmail/documentation/pull/273)
- [ ] [#274 docs: add _category_.json for Project Diagram](https://github.com/LLazyEmail/documentation/pull/274)
- [ ] [#275 docs: add _category_.json for business-development](https://github.com/LLazyEmail/documentation/pull/275)
- [ ] [#276 docs: add _category_.json for devops](https://github.com/LLazyEmail/documentation/pull/276)
- [ ] [#277 docs: add _category_.json for markdown-to-email](https://github.com/LLazyEmail/documentation/pull/277)
- [ ] [#278 docs: add _category_.json for research](https://github.com/LLazyEmail/documentation/pull/278)
- [ ] [#279 docs: add _category_.json for templates](https://github.com/LLazyEmail/documentation/pull/279)
- [ ] [#280 docs: add _category_.json for website notes](https://github.com/LLazyEmail/documentation/pull/280)

## 6. Docs content — annotations / legacy markers

- [ ] [#272 docs: annotate Project Diagram/indx.md as legacy duplicate](https://github.com/LLazyEmail/documentation/pull/272)
- [ ] [#281 docs: annotate accesses.md with secrets warning (keep content)](https://github.com/LLazyEmail/documentation/pull/281)
- [ ] [#282 docs: mark tasks template.md as legacy issue-form draft](https://github.com/LLazyEmail/documentation/pull/282)
- [ ] [#283 docs: polish Modules-Index.md frontmatter description](https://github.com/LLazyEmail/documentation/pull/283)
- [ ] [#291 docs: mark old-stretch-goals.md as legacy section](https://github.com/LLazyEmail/documentation/pull/291)
- [ ] [#292 docs: annotate blog post with space in filename](https://github.com/LLazyEmail/documentation/pull/292)
- [ ] [#293 docs: annotate blog post with Cyrillic 'с' in filename](https://github.com/LLazyEmail/documentation/pull/293)
- [ ] [#294 docs: annotate blog Part 2 filename with brackets](https://github.com/LLazyEmail/documentation/pull/294)
- [ ] [#321 docs: add archive/README explaining preserve-don't-delete policy](https://github.com/LLazyEmail/documentation/pull/321)
- [ ] [#322 docs: extend organization-readme-index with sister site links](https://github.com/LLazyEmail/documentation/pull/322)

## 7. Docs content — frontmatter on distinct files

- [ ] [#285 docs: add description frontmatter to React-Design-System.md](https://github.com/LLazyEmail/documentation/pull/285)
- [ ] [#286 docs: add description frontmatter to devops/DevOps.md](https://github.com/LLazyEmail/documentation/pull/286)
- [ ] [#287 docs: add description frontmatter to markdown-to-email index](https://github.com/LLazyEmail/documentation/pull/287)
- [ ] [#288 docs: add description frontmatter to website/readme.md](https://github.com/LLazyEmail/documentation/pull/288)
- [ ] [#289 docs: add description frontmatter to improvements.md](https://github.com/LLazyEmail/documentation/pull/289)
- [ ] [#290 docs: add description frontmatter to improvements/glossary.md](https://github.com/LLazyEmail/documentation/pull/290)
- [ ] [#305 docs: add frontmatter to Table repository.md](https://github.com/LLazyEmail/documentation/pull/305)
- [ ] [#306 docs: add frontmatter to email-typography.md](https://github.com/LLazyEmail/documentation/pull/306)
- [ ] [#307 docs: add frontmatter to all-components.md](https://github.com/LLazyEmail/documentation/pull/307)
- [ ] [#308 docs: add frontmatter to devops/pipeline.md](https://github.com/LLazyEmail/documentation/pull/308)
- [ ] [#309 docs: add frontmatter to business-development/content.md](https://github.com/LLazyEmail/documentation/pull/309)
- [ ] [#310 docs: add frontmatter to research/mdx-exploration.md](https://github.com/LLazyEmail/documentation/pull/310)
- [ ] [#311 docs: add frontmatter to Awesome-email-marketing.md](https://github.com/LLazyEmail/documentation/pull/311)
- [ ] [#317 docs: add frontmatter to improvements/bottlenecks.md](https://github.com/LLazyEmail/documentation/pull/317)
- [ ] [#318 docs: add frontmatter to company-goals.md](https://github.com/LLazyEmail/documentation/pull/318)
- [ ] [#319 docs: add frontmatter to future-steps.md](https://github.com/LLazyEmail/documentation/pull/319)
- [ ] [#320 docs: add frontmatter to improvements/entities.md](https://github.com/LLazyEmail/documentation/pull/320)

## Blocked or waiting

These wait on [LLazyEmail/documentation-actions](https://github.com/LLazyEmail/documentation-actions) being ready to consume. Keep them open; do not fold into #328.


- [ ] [#324 ci: adopt documentation-actions test-deploy](https://github.com/LLazyEmail/documentation/pull/324) — documentation-actions adoption — wait until the action repo is publishable; will conflict with #328 workflow bumps until rebased.
- [ ] [#326 ci: adopt documentation-actions Pages deploy (peaceiris)](https://github.com/LLazyEmail/documentation/pull/326) — documentation-actions adoption — wait until the action repo is publishable; will conflict with #328 workflow bumps until rebased.

## Settings to change

1. **Merge #328 first** (or explicitly choose #333) so Test deployment is green on main.
2. **Renovate** (#235): confirm the GitHub App is installed; allow automerge for the scheduled Monday Europe/Kyiv patch/minor devDependency rule (branch protection may need a Renovate bypass).
3. **GitHub Sponsors** for FUNDING.yml (#240) to surface a Sponsor button.
4. **CODEOWNERS** (#230): `@atherdon` needs write; enable required reviews only if you want CODEOWNERS enforcement.
5. **Pages**: keep GitHub Actions as the Pages source (existing deploy workflow / later #326).
6. After #328 merges, **rebase** #324/#326 (or #333) onto main before merging adoption.
7. Skip Renovate Docusaurus v2-era PRs (#198–#218) — superseded by the v3.10.2 mainline.

## Closed into combines (reference)

| Combined | Closed originals |
|---:|---|
| #328 | #241, #242, #243, #244 |
| #329 | #303, #325, #327 |
| #330 | #246, #247, #248, #250, #251, #252, #255, #256, #257, #270, #316 |
| #331 | #258, #259, #260, #261, #262, #263, #304 |
| #332 | #271, #284 |

