import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['9043-60-243-135-212.ngrok-free.app']
  },
  plugins: [react()],
})
