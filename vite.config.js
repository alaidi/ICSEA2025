import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // base: '/alayenconference/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        committees: resolve(__dirname, 'committees.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.html' || assetInfo.name === 'committees.html') {
            return assetInfo.name;
          }
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|jpg|svg|gif|tiff|bmp|ico/i.test(ext)) {
            // Check if file is from public/assets/images
            if (assetInfo.name.includes('assets/images')) {
              return `assets/images/[name][extname]`;
            }
            // Otherwise treat as icon
            return `assets/icons/[name][extname]`;
          }
          return 'assets/[name].[hash].[ext]';
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js'
      }
    }
  },
  publicDir: 'public'
})