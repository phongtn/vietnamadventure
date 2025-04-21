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
  output: 'static', // Changed to static for simpler development
  server: {
    host: '0.0.0.0',
    port: 5000
  }
});
