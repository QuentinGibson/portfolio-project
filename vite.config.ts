import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePluginFonts({
    google: {
      families: ['Jost']
    }
  })]
})
