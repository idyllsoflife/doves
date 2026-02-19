import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// When building for GitHub Pages project sites, we need /doves as the base.
// When using a custom domain at the root, we want /.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // Used by sitemap + canonical URLs.
  // You can override in Actions with SITE_URL.
  site: process.env.SITE_URL || "https://dovesnestchicago.com",

  // /doves on GitHub Pages, / on custom domain root
  base: isGitHubPages ? "/doves" : "/",

  // GitHub Pages requires static output
  output: "static",

  trailingSlash: "ignore",
  prefetch: { prefetchAll: true },

  integrations: [
    react(),
    sitemap(),
    tailwind({ config: { applyBaseStyles: false } }),
    AutoImport({
      imports: [
        "@components/common/Button.astro",
        "@shortcodes/Accordion",
        "@shortcodes/Notice",
        "@shortcodes/Youtube",
        "@shortcodes/Tabs",
        "@shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
      remarkMath,
    ],
    rehypePlugins: [[rehypeKatex, {}]],
    shikiConfig: {
      themes: { light: "light-plus", dark: "dark-plus" },
    },
    extendDefaultPlugins: true,
  },
});
