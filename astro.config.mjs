import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ??【待补充】上线前改成真实域名，影响 canonical / sitemap / OG
  site: 'https://dantfullogistics.com',
  integrations: [sitemap()],
  compressHTML: true,
});
