---
id: generate-template
title: generate-template
description: Configurable engine for rendering named email templates to HTML.
sidebar_position: 4
---

Source: [LLazyEmail/generate-template](https://github.com/LLazyEmail/generate-template)
(README, AGENTS.md, `docs/`, `package.json`,
[CHANGELOG.md](https://github.com/LLazyEmail/generate-template/blob/main/CHANGELOG.md)).
Facts below were checked against `main` on 16 November 2026 (Europe/Kyiv).
Version in `package.json` and latest tag then: `1.9.1`. The README's own
"Current version" line was older at that time; trust `package.json`, the
CHANGELOG and the
[GitHub Packages page](https://github.com/LLazyEmail/generate-template/pkgs/npm/generate-template).

## What it does

It is the **generation** layer. It owns catalog lookup, payload resolution, the
`run`/`writeAll` contract, and disk writes (through
[markup-generator](https://github.com/LLazyEmail/markup-generator)). It does
**not** ship templates: you pass a catalog and render functions (Lit SSR, React,
a Postmark document, [render-template](./render-template.md),
[template-runtime-display](./template-runtime-display.md), and so on).

Consumer projects should inject their own `render` functions into
`createGenerator` instead of reimplementing catalog, payload or write logic.

## Install

Published to GitHub Packages. Requires Node `>=22.18.0` (`engines`). Runtime
dependency: `markup-generator`. Installs need a `read:packages` token; see the
repo's `.npmrc.example`.

```bash
npm install @llazyemail/generate-template
```

## Library API

```ts
import { createGenerator, GenerateTemplateError } from '@llazyemail/generate-template';

const generate = createGenerator({
  catalog: [{ ids: ['welcome'], render: (p) => `<p>${(p as { name: string }).name}</p>` }],
  samplePayloads: { welcome: { name: 'Alex' } },
});

const html = await generate.render('welcome');
const result = await generate.run({ templateId: 'welcome', payload: { name: 'Alex' } });
```

- `run(request)` is the contract a future HTTP handler wraps. `run({ write })`
  renders once.
- `render` and `loadPayload` are async.
- File catalog entries need `allowFileTemplates: true` (prefer an injected
  `render`).
- Date revival is off unless `reviveDates: true`.

Failures are `GenerateTemplateError` with a `code`: `UNKNOWN_TEMPLATE`,
`NO_PAYLOAD`, `RENDER_FAILED`, `WRITE_FAILED`, `INVALID_CONFIG`,
`CONFIG_NOT_FOUND`, `CONFIG_IMPORT_FAILED`, `CONFIG_INVALID` (the three `CONFIG_*`
codes arrived in 1.7.0).

## CLI

Two bins: `generate-template` and `generate-template-assert`. The bin loads a
**project** catalog; it does not ship one.

```js
// generate-template.config.js
export { createProjectGenerator } from './scripts/create-project-generator.js';
```

Or set `"generateTemplate": "./scripts/create-project-generator.js"` in
`package.json`. `--config=` overrides the search.

```bash
generate-template --help
generate-template --list
```

`--all` (also the default when a config exists and `--template` is omitted)
calls `writeAll(outDir)`. A single `--template` calls `run()`, so `--data=`
loads through the same factory as the library. With no flags and no config the
bin prints usage and exits 1.

## Recent history (from CHANGELOG.md)

| Version | Change |
| --- | --- |
| 1.9.1 | Bump `markup-generator` to `^4.1.0` |
| 1.9.0 | Publishes the 1.8.x line |
| 1.7.1 | Internal simplification, no API change; the file-template renderer passes the payload over stdin |
| 1.7.0 | Config-loading failures typed as `GenerateTemplateError` with `CONFIG_*` codes |
| 1.6.1 | Keeps both bins in the published package |
| 1.6.0 | Requires Node `>=22.18`, adds `--help`, fails bad configs at load time |

Read the CHANGELOG for anything newer.

## Working on the repo

Scripts: `test`, `test:coverage`, `typecheck`, `lint`, `build`, `sandbox`
(renders package-owned fixtures to `sandbox/generated/`). Versions are bumped
with Changesets; publishing happens when a GitHub Release is published. More
docs in the repo: `docs/architecture.md`, `docs/recipes.md`,
`docs/organization-schema.md`, `docs/cascade-bumps.md`.
