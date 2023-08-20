import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dressly',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'node_modules/react/index.js',
            'node_modules/react-dom/index.js',
          ]
        }
      }
    }
  }
})
