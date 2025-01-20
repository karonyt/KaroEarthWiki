import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from 'astro-sitemap';

export default defineConfig({
  integrations: [tailwind(),sitemap()],

  server: { port: 31250, host: true }
});