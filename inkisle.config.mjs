export default {
  title: "InkIsle Canary",
  description: {
    zh: "使用 npm 正式版本构建的 InkIsle 外部验收站。",
    en: "An external acceptance site built from the published InkIsle npm package."
  },
  site: "https://ygm-studio.github.io",
  base: "/inkisle-canary",
  brand: {
    mark: "Canary",
    subtitle: "Published package acceptance",
    favicon: "/favicon.svg"
  },
  author: {
    name: "YGM Studio",
    url: "https://github.com/YGM-Studio"
  },
  interactions: {
    provider: "giscus",
    localeScope: "shared",
    giscus: {
      repo: "YGM-Studio/inkisle",
      repoId: "R_kgDOSSLLLg",
      category: "InkIsle Blog",
      categoryId: "DIC_kwDOSSLLLs4DBBG_"
    }
  },
  theme: {
    name: "personal",
    defaultMode: "system",
    allowUserToggle: true,
    storageKey: "inkisle-canary-theme"
  }
};
