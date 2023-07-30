import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.scss', '.ts', '.vue'],
  },
  assetsDir: './src',
  build: {
    outDir: './docs/',
  },
  base: './',
});
