// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // Global page headers
  head: {
    title: 'Nexos Tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nexos Tools - Empower Your Development' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Global CSS
  css: [
    '@/assets/styles/main.css'
  ],
  // Auto import components
  components: true,
  // Modules for dev and build
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  // Modules
  modules: [ ],
  // Build Configuration
  build: {}
})