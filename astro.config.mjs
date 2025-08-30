import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rugshan.github.io',
  integrations: [
    tailwind(),
    sitemap()
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
