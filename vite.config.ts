import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // If we are building for production (GitHub), use the sub-folder.
    // If we are developing locally, use the root.
    base: command === 'build' ? '/modern-bank-landing/' : '/',
  }
})