---
id: template-runtime-display
title: template-runtime-display
description: Render a whole HTML email from named parts, see which part broke, and inspect it live.
sidebar_position: 3
---

Source: [LLazyEmail/template-runtime-display](https://github.com/LLazyEmail/template-runtime-display)
(README, AGENTS.md, `docs/inspector.md`, `package.json`). Facts below were
checked against `main` on 16 November 2026 (Europe/Kyiv). Version in
`package.json` then: `1.2.1` (latest GitHub Release, 26 October 2026). Check
[Releases](https://github.com/LLazyEmail/template-runtime-display/releases) for
newer ones.

## What it does

It renders a whole HTML email from named parts and shows **exactly which part
broke**. The email shell (head, main, footer) is a preset built on
[render-template](./render-template.md); any other document is a `Template` you
define yourself. A live inspector shows every part's output, timing and error,
previews the document at three widths, and diffs each edit against the last
render.

## Install

Published to GitHub Packages. Requires Node `>=24` (`engines`). Copy the repo's
`.npmrc.example` into the consuming project and provide a `read:packages` token.

```bash
npm install @llazyemail/template-runtime-display
```

Runtime dependencies listed in `package.json`: `@llazyemail/render-template`
and `markup-generator`. How render-template is pinned is being changed from a
git ref to the published package
([template-runtime-display#81](https://github.com/LLazyEmail/template-runtime-display/issues/81)),
and whether `markup-generator` belongs in `dependencies` is
[template-runtime-display#78](https://github.com/LLazyEmail/template-runtime-display/pull/78).
Read `package.json` for the current state.

ESM, CommonJS and a script-tag build (`dist/index.global.js`, global
`TemplateRuntimeDisplay`) are published. Subpath exports: `/escape`, `/head`,
`/body`, `/main`, `/document`, `/quality`.

## CLI

The package ships a `template-runtime-display` bin:

```bash
npx template-runtime-display dev ./letter.mjs      # live inspector, reloads on save
npx template-runtime-display inspect ./letter.mjs  # one-shot HTML report, exit 1 if a part broke
npx template-runtime-display inspect ./letter.mjs --fail-on error  # also exit 1 on email-check errors
```

- `dev` binds to `127.0.0.1`, renders each change in a fresh child process (10
  second limit), serves the finished document at `/email` and the trace at
  `/trace.json`. Its default error mode is `collect`.
- `inspect` writes the report in every case and exits `0` (all parts rendered),
  `1` (a part broke) or `2` (the module could not be rendered). `--json
  trace.json` also writes the trace as data.

The report has no scripts and makes no network requests; part HTML only appears
inside sandboxed frames and escaped blocks. Full guide:
[docs/inspector.md](https://github.com/LLazyEmail/template-runtime-display/blob/main/docs/inspector.md).

## Library API (main entry points)

| Export | Purpose |
| --- | --- |
| `renderEmail(templateOrInput, props, options?)` | Render the email shell plus your parts. Output starts with `<!DOCTYPE html>` and `<html lang="en">` |
| `defineEmailTemplate(input)` | Keep an email template to render more than once |
| `defineTemplate` / `renderTemplate` / `renderMany` / `RenderError` | Same runtime without the email shell (re-exported from render-template) |
| `explain(resultOrError)` | Print the trace for a render or a thrown `RenderError` |
| `inspect(result, { title?, compareTo? })` | Return the inspector page as a string |
| `diffRenders(before, after)` / `formatDiff(diff)` | Per-part and whole-document line diff |
| `head`, `main`, `footer`, `body`, `content`, `document`, `escapeHtml` | Public fragments the shell uses |
| `measureSize`, `toText` (from `/quality`) | Gmail clip check (about 102 KB, UTF-8 bytes) and the text/plain version |

Custom parts sit inside `<body>` after `main` and before `footer`. A slot named
`head`, `main` or `footer` replaces that region. Parts must return **strings**;
Lit consumers convert to a string first.

## What is planned

The Email Quality Toolkit
([docs/email-quality-toolkit.md](https://github.com/LLazyEmail/template-runtime-display/blob/main/docs/email-quality-toolkit.md))
has shipped the size check, plain-text version and Light / Dark preview. The
client-compatibility linter, dark-mode contrast rules and `result.quality` are
listed as next.

## Working on the repo

`npm run check` runs format, lint, typecheck, build, tests, smoke and publint.
`npm run demo` serves the inspector on a demo with a broken part on purpose.
Publishing happens from a GitHub Release (or a manual `publish.yml` run) to
GitHub Packages. Agent rules:
[AGENTS.md](https://github.com/LLazyEmail/template-runtime-display/blob/main/AGENTS.md).
