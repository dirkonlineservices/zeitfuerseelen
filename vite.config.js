import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-dev-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/dev.html';
          }
          next();
        });
      },
      closeBundle() {
        if (fs.existsSync('dist/dev.html')) {
          fs.copyFileSync('dist/dev.html', 'index.html');
        }
        if (fs.existsSync('dist/assets')) {
          fs.cpSync('dist/assets', 'assets', { recursive: true });
        }
        if (fs.existsSync('public/images')) {
          fs.cpSync('public/images', 'images', { recursive: true });
        }
        if (fs.existsSync('public/.htaccess')) {
          fs.copyFileSync('public/.htaccess', '.htaccess');
        }
        if (fs.existsSync('public/_redirects')) {
          fs.copyFileSync('public/_redirects', '_redirects');
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './dev.html'
      }
    }
  }
});
