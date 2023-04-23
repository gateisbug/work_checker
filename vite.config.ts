import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: 'src/', },
      { find: '@view', replacement: 'src/components/', },
      { find: '@style', replacement: 'src/styles/', },
      { find: '@store', replacement: 'src/stores/', },
      { find: '@page', replacement: 'src/pages/,' },
    ]
  },
  server: {
    cors: true
  },
  build: {
    outDir: 'build'
  }
})
