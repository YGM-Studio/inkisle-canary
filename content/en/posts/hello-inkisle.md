---
title: "InkIsle npm Canary"
date: 2026-07-12
updated: 2026-07-12
summary: "An independent InkIsle acceptance site installed, built, and deployed from the published npm package."
tags:
  - InkIsle
  - Canary
category: "Validation"
interactionId: "npm-canary"
published: true
---

This site does not reference the InkIsle source checkout. It installs a pinned release from npm like a real user, verifies the installed version on every build, and deploys through GitHub Actions to GitHub Pages.

## Current validation scope

- Content-only project initialization and dependency installation.
- Static Markdown, localization, RSS, search index, and `llms.txt` outputs.
- The `/inkisle-canary` GitHub Pages base path.
- The personal theme, color modes, and shared Giscus comments and reactions.

## Interaction data

The Chinese and English pages use the same `npm-canary` interaction key. Comments are stored in the main repository's `InkIsle Blog` Discussions category so this site can expose behavioral differences between the published package and the source mainline.
