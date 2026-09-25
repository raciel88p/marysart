import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: './dist/astro',
  publicDir: './public',
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
