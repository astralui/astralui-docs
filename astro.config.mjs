// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});