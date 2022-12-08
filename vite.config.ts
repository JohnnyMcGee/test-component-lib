import { resolve } from "path";
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
	  lib: {
		  entry: resolve(__dirname, 'src/index.ts'),
		  name: 'TestComponentLib',
		  fileName: 'test-component-lib'
	  },
	  rollupOptions: {
		  external: ['vue'],
		  output: {
			  globals: {
				  vue: 'Vue'
			  }
		  }
	  },
	  cssCodeSplit: false
  }
})
