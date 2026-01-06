import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- 1. Importar el plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- 2. Activar el plugin
  ],
  // 3. Agregar el "base" para que las rutas funcionen en GitHub Pages
  base: "/jc-farm-reyes/", 
})
