---
id: render-template
title: render-template
description: Deterministic HTML template renderer with traceable parts and pluggable error modes.
sidebar_position: 2
---

Source: [LLazyEmail/render-template](https://github.com/LLazyEmail/render-template)
(README, AGENTS.md, `package.json`). Facts below were checked against `main` on
16 November 2026 (Europe/Kyiv). Latest release then: `0.3.0` (GitHub Release of
8 October 2026). Check
[Releases](https://github.com/LLazyEmail/render-template/releases) for newer ones.

## What it does

You define a template as an ordered list of **parts** plus a `compose` step.
The renderer runs each part, records a trace row per part, and returns the final
HTML. From the README:

- **Deterministic**: the same template and props always produce the same HTML.
- **Stateless**: nothing is remembered between calls.
- **Traceable**: every part gets a row with `status`, `chars`, `ms`, and an
  optional `error`.
- **Two error modes**: fail fast (`'throw'`, the default) or collect and
  continue (`'collect'`).
- **String parts only**: a part must return a string. Lit `TemplateResult`s,
  Promises or other non-strings are errors.

It is the bottom layer: template-runtime-display builds on it, and
generate-template can call it from a catalog entry's `render`.

## Install

Published to GitHub Packages (`publishConfig.registry` is
`https://npm.pkg.github.com`). Requires Node `>=22` (`engines`). No runtime
dependencies.

```sh
npm install @llazyemail/render-template
```

See the [overview](./index.md#installing-any-of-them) for the `.npmrc` scope line.

## Usage

```ts
import { renderMany, renderTemplate, type RenderJob, type Template } from '@llazyemail/render-template';

interface Props {
  name: string;
}

const welcome: Template<Props> = {
  id: 'welcome',
  parts: [
    { id: 'greeting', render: (ctx) => `<h1>Hello, ${ctx.props.name}</h1>` },
    { id: 'body', render: () => `<p>Welcome aboard.</p>` },
  ],
  compose: (r) => r.greeting + r.body,
};

renderTemplate(welcome, { name: 'Ada' }).html;
// <h1>Hello, Ada</h1><p>Welcome aboard.</p>

const jobs: RenderJob<Props>[] = [{ template: welcome, props: { name: 'Ada' } }];
renderMany(jobs, { onError: 'collect' });
```

## Public API

| Export | Purpose |
| --- | --- |
| `renderTemplate(template, props, options?)` | Render one template, return a frozen `RenderResult` |
| `renderMany(jobs, options?)` | Batch helper. `throw` skips later jobs, `collect` keeps going |
| `defineTemplate(template)` | Validate once (non-empty ids, no duplicate part ids, `compose` present, `compose` reserved), then copy and freeze |
| `slot(ctx, id)` / `hasSlot(ctx, id)` | Read caller-supplied fragments (missing slot is `''`) |
| `RenderError` | Thrown in `throw` mode; carries `partId`, `trace` and `cause` |
| `assertTemplate`, `createContext`, `normalizeHtml`, `finish`, `okTrace`, `skippedTrace`, `describeError`, `publish` | Lower-level helpers for wrappers such as template-runtime-display |

Types exported from the root: `Template`, `TemplatePart`, `RenderContext`,
`RenderOptions`, `RenderResult`, `PartTrace`, `PartFailure`, `SlotValue`,
`RenderJob`, `ErrorMode`, `PartStatus`.

## Trace rows

Each `PartTrace` row is `{ id, status, html, chars, ms, error? }`:

| Status | When |
| --- | --- |
| `ok` | Part returned a non-empty string |
| `empty` | Part returned `''`, `null` or `undefined` |
| `error` | Part threw or returned a non-string |
| `skipped` | `throw` mode only: parts after the first failure |

In `collect` mode a failed part contributes `''` to `compose`, later parts still
run, and `result.ok` is `false`. `RenderError` also covers invalid templates
(`partId: 'template'`) and compose failures (`partId: 'compose'`).

## Working on the repo

Scripts from `package.json`: `build` (tsup + declaration emit), `test`
(Vitest), `test:coverage`, `typecheck`, `sandbox` (renders
`sandbox/generated/*.html`). `prepare` runs the build, which is why installing
from a git ref compiles TypeScript; installing the published package does not.
Agent rules are in
[AGENTS.md](https://github.com/LLazyEmail/render-template/blob/main/AGENTS.md).
