// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-particles', "@nuxtjs/leaflet"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nara - Technologist',
      meta: [
        { name: 'description', content: 'Nara - Empowering businesses through technology' }
      ],
    }
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  }
})