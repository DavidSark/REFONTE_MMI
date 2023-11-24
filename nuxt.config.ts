// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/prismic',
  ],
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT
    },

  css:['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        
        }
      }
    }
  }
})
