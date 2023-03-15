import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/nasa14119/Portafolio_proyectos/blob/master/portal_familias/"
})
