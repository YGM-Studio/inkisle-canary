---
title: "InkIsle npm Canary"
date: 2026-07-12
updated: 2026-07-12
summary: "从 npm 正式版本安装、构建并部署的独立 InkIsle 验收站。"
tags:
  - InkIsle
  - Canary
category: "Validation"
interactionId: "npm-canary"
published: true
---

这个站点不引用 InkIsle 源码仓库，而是像真实用户一样从 npm 安装指定的正式版本。每次构建都会校验实际安装版本，并通过 GitHub Actions 部署到 GitHub Pages。

## 当前验证范围

- content-only 项目初始化与依赖安装。
- Markdown、多语言、RSS、搜索索引和 `llms.txt` 静态输出。
- GitHub Pages `/inkisle-canary` 子路径。
- personal 主题、明暗模式，以及由 Giscus 提供的共享点赞与留言。

## 互动数据

中英文页面使用同一个 `npm-canary` 互动标识。这里的留言保存在主仓库的 `InkIsle Blog` Discussions 分类，用于发现正式 npm 包与源码主线之间的行为差异。
