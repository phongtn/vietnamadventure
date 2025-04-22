import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://vietnamadv.com',
  integrations: [
    tailwind(),
    alpinejs(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: true,
      strategy: 'prefix'
    },
    fallback: {
      'fr': 'en',
      'es': 'en'
    }
  },
});
