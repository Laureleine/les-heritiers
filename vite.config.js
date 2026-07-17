import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',
      transform(code, id) {
        const normalized = id.replace(/\\/g, '/');
        if (/\/src\/.*\.[jt]sx?$/.test(normalized)) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
        }
      },
    },
    react(),
    VitePWA({
      registerType: 'prompt',
      filename: 'pwa-sw.js',
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/[^/]*\.supabase\.co\/rest\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-api',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    jsx: 'automatic',
  },
  server: { port: 3000, open: false },
  build: {
    outDir: 'dist',
    rollupOptions: { external: ['pg'] },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**', '.claude/**'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  optimizeDeps: {
    exclude: ['@3d-dice/dice-box'],
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
});
