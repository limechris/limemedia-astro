// @ts-check
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkToc from './src/plugins/remark-toc.mjs';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  session: { driver: 'lruCache' },
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare({
    prerenderEnvironment: 'node',
    imageService: 'passthrough',
  }),
  site: process.env.SITE_URL || 'https://example.com',
  integrations: [
    // MDX support for blog posts, docs, and content
    mdx(),
    // Generate sitemap.xml
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkPlugins: [remarkGfm, remarkToc],
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
