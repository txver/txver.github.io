import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url))},
      { find: '@styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url))},
    ],
    
  },
  base: '/txver.github.io/',
  build: {
    outDir: '../build',
  },
})
