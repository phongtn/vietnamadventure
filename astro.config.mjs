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
  output: 'static', // Static output for simpler development
  server: {
    host: '0.0.0.0', // Listen on all addresses
    port: 5000
  }
});
