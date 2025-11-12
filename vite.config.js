import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['laurinda-volitionary-senaida.ngrok-free.dev'], // 👈 add your ngrok URL here
  },
})