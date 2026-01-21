// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AstralUI Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
        de: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/introduction' }/* ,
            { label: 'Installation', slug: 'documentation/installation' },
            { label: 'Usage', slug: 'documentation/usage' } */
          ],
        }/* ,
        {
          label: 'Components',
          items: [
            { label: 'Button', slug: 'button' },
          ],
        }, */
      ],
    }),
    mdx(),
  ],
});