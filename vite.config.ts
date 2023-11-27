import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// ty for vite deploy https://github.com/ErickKS/vite-react-router
export default defineConfig({
  plugins: [react()],
  base: "/resume/"
})
