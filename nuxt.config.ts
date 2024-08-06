// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles',
    '@nuxt/fonts',
    '@nuxt/icon',
    'nuxt-gtag'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nara - Technologist',
      meta: [
        { name: 'description', content: 'Nara - Technologist' }
      ],
    }
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        fontFamily: {
          sans: ['Lato','sans-serif']
        },
        extend: {
          colors: {
            accent: '#00BFBF',
            bg: {
              DEFAULT: '#000000',
              secondary: '#111111'
            },
            text: {
              DEFAULT: '#FFFFFF',
              secondary: '#CCCCCC'
            }
          }
        }
      }
    }
  },
  gtag: {
    id: ''
  }
})