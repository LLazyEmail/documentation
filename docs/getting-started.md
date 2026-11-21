---
title: Getting started
description: Run the docs site locally and find your way around the repository.
sidebar_label: Getting started
sidebar_position: 1
---

# Getting started

## Run locally

```bash
npm ci
npm start
```

Production build:

```bash
npm run build
npm run serve
```

Requires **Node 22+** (see `.nvmrc` and `package.json` engines).

## Where things live

| Path | Purpose |
| --- | --- |
| `docs/` | Documentation pages |
| `blog/` | Article archive |
| `src/` | Homepage, components, CSS |
| `docusaurus.config.js` | Site configuration |
| `.github/` | Templates; shared workflows via documentation-actions. `test-deploy.yml` and `build-images.yml` use the short aliases `reusable-test-deploy` and `reusable-image-check` (same inputs as the long names, pinned `@v2`). |

## Next

- [Overview](/docs/)
- [Contributing](/docs/contributing)
- [Community links](/docs/community-links)

## Content policy

Do not delete docs pages. Prefer `archive/` or legacy stubs — see `AGENTS.md` and issue #342.
