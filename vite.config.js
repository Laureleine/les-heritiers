import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

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
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    jsx: 'automatic',
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // pg est utilisé uniquement dans les scripts Node.js (scripts/), jamais dans src/
      external: ['pg'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**', '.claude/**'],
  },
  define: {
    // Compatibilité pour les libs qui lisent process.env.NODE_ENV
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  optimizeDeps: {
    exclude: ['@3d-dice/dice-box'],
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
});