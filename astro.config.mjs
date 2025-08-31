import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rugshan.dev',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    assets: 'assets'
  },
  outDir: './dist',
  vite: {
    ssr: {
      noExternal: ['aos']
    }
  }
});
