# Security Policy

## Supported versions

This repository is a static Docusaurus documentation site. There is no production application runtime to patch beyond the published Pages build and repository automation.

## Reporting a vulnerability

If you discover a security issue in repository automation or the published documentation site, please **do not** open a public issue with exploit details.

Instead, email **arthur.tkachenko.netweight@gmail.com** with:

1. A short description of the issue
2. Steps to reproduce (or a proof-of-concept)
3. Any suggested fix

We will acknowledge within a few business days and coordinate a fix + disclosure.

## Secrets in this repository

Do not commit passwords, API keys, or private credentials. Files that historically listed access contacts should be treated as legacy notes — rotate anything that was ever real, and keep secrets out of git.

## Dependency updates

Website dependencies are intended to be kept current via Renovate (see `renovate.json`). Prefer opening a PR for dependency bumps rather than filing a security advisory for routine upgrades.
