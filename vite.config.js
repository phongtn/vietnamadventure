import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      clientPort: 443
    },
    // Explicitly allow the Replit domain
    allowedHosts: [
      'd13458da-7c79-4269-8f19-6bc6aa6250cf-00-1xbp5z1zonm25.riker.replit.dev',
      '.replit.dev',
      '.repl.co',
      'all'
    ]
  }
});