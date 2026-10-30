# LLazyEmail Documentation

[![Deploy to GitHub Pages](https://github.com/LLazyEmail/documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/LLazyEmail/documentation/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Docusaurus documentation site for LLazyEmail.

- **Live site:** https://docs.llazyemail.com (also https://llazyemail.github.io/documentation/)
- **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Agents:** [AGENTS.md](./AGENTS.md)

## Table of contents

- [Website](#website)
- [Sister repositories](#sister-repositories)
- [Arthur Tkachenko articles](#arthur-tkachenko-articles)
- [LinkedIn](#linkedin-page-of-llazyemail)

## Website

This website is built using [Docusaurus](https://docusaurus.io/) 3.x (shared foundation with sibling awesome-list sites).

### Installation

```
$ npm ci
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

> Legacy note: an old SES login URL previously listed here was removed from active docs guidance; do not commit credentials. See [SECURITY.md](./SECURITY.md).

## Sister repositories

- [Awesome Email Marketing](https://github.com/LLazyEmail/awesome-email-marketing)
- [Awesome Newsletters](https://github.com/LLazyEmail/awesome-newsletters)
- [documentation-actions](https://github.com/LLazyEmail/documentation-actions) — shared GitHub Actions for the docs sites

## Arthur Tkachenko articles

* [https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy](https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy)
* [https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template](https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template)
* [https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates](https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates)
* [https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates](https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates)
* [https://hackernoon.com/glossary-for-non-technies](https://hackernoon.com/glossary-for-non-technies)
* [https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter](https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter)
* [https://hackernoon.com/exploring-substack-for-building-your-newsletter](https://hackernoon.com/exploring-substack-for-building-your-newsletter)
* [https://hackernoon.com/building-a-design-system-for-email-templates-react](https://hackernoon.com/building-a-design-system-for-email-templates-react)
* [https://hackernoon.com/together4victory-list-of-email-marketing-tools](https://hackernoon.com/together4victory-list-of-email-marketing-tools)
* [https://hackernoon.com/cool-newsletters-for-developers-part-1](https://hackernoon.com/cool-newsletters-for-developers-part-1)
* [https://hackernoon.com/cool-resources-for-sending-emails](https://hackernoon.com/cool-resources-for-sending-emails)

## LinkedIn page of LLazyEmail

[LinkedIn company page](https://www.linkedin.com/company/llazyemail/)
