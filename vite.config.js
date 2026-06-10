import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // CRA permettait JSX dans les fichiers .js — ce plugin conserve ce comportement
    // pour Vite (build) et Vitest (SSR transform)
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        // Normalise les backslashes Windows avant de tester
        const normalized = id.replace(/\\/g, '/');
        if (!normalized.match(/\/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
      },
    },
    react(),
  ],
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
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**'],
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
