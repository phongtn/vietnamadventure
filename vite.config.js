import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: false,
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
    watch: {
      usePolling: true
    },
    fs: {
      allow: ['.']
    },
    // Explicitly allow Replit domain
    cors: {
      origin: "*"
    },
    // Allow any host to connect including Replit domains
    origin: "*",
    // Allow specific Replit domains and any host
    allowedHosts: [
      'localhost',
      '0.0.0.0',
      '127.0.0.1',
      'd13458da-7c79-4269-8f19-6bc6aa6250cf-00-1xbp5z1zonm25.riker.replit.dev',
      '.replit.dev',
      '.repl.co',
      'all',
      'all.net'
    ]
  }
});