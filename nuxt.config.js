import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/input.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '~components': fileURLToPath(new URL('./components', import.meta.url)),
        '~composables': fileURLToPath(new URL('./composables', import.meta.url)),
        '~assets': fileURLToPath(new URL('./assets', import.meta.url)),
        '~layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
        '~pages': fileURLToPath(new URL('./pages', import.meta.url)),
        '~middleware': fileURLToPath(new URL('./middleware', import.meta.url)),
        '~utils': fileURLToPath(new URL('./utils', import.meta.url)),
      },
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL || 'http://localhost:8000/api',
    },
  },
})