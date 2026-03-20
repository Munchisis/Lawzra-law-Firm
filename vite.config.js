import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
    visualizer({
      open: true, // Automatically opens the report in your browser after build
      filename: 'stats.html', // Name of the generated file
      gzipSize: true, // Show gzipped size (what users actually download)
      brotliSize: true,
 }) ],

 build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
})
