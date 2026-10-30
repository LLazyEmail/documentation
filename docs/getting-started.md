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
| `.github/` | Templates; shared workflows via documentation-actions |

## Next

- [Overview](/docs/)
- [Contributing](/docs/contributing)
- [Community links](/docs/community-links)
