import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  optimizeDeps: {
    // CJS packages with exports.__esModule need explicit pre-bundling
    // for correct default-export interop under Vite 8 / rolldown
    include: ['react-slick', 'react-countup'],
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules\/(react|react-dom|react-router|scheduler)\//,
            },
            {
              name: 'mui-vendor',
              test: /node_modules\/(@mui|@emotion|@popperjs)\//,
            },
            {
              name: 'vendor',
              test: /node_modules\//,
            },
          ],
        },
      },
    },
  },
})
