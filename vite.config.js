import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['ef5b-60-243-135-212.ngrok-free.app']
  },
  plugins: [react()],
})
