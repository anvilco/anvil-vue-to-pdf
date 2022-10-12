import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    minify: false,
    // Do not empty out the dir since we need the resulting `.css` files from
    // a previous build.
    emptyOutDir: false,
    rollupOptions: {
      output: {
        // Do not prefix compiled js and asset files.
        // This helps with grabbing the css files directly with known filenames.
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
})
