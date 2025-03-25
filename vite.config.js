import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true, // Minifica o HTML
      inject: {
        data: {
          cacheControl: '<meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate">', // Adiciona a tag meta
        },
      },
    }),
  ],
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff', // Adiciona o cabeçalho de segurança
    },
  },
});