import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/anettpapp/bluesprint/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
});
