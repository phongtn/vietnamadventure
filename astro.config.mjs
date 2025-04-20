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
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443,
        port: 5000
      },
      strictPort: true,
      // Allow Replit domains to access the dev server
      cors: true,
      // Allow all hosts for Replit environment
      host: '0.0.0.0'
    }
  }
});
