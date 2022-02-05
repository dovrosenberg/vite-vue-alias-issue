
import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  
  server: {
    port: 8080
  },

  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      'vue': '@vue/compat',
    },
  },
})

