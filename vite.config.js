// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-Portfolio/',  // 👈 EXACTLY this, matching your repo name
  plugins: [react()],
});
