import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/space-tourism/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
