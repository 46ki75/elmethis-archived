import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path'
import dts from 'vite-plugin-dts'
import dynamicImport from 'vite-plugin-dynamic-import'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), dynamicImport()],
  base: '/elmethis',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'elmethis',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})
