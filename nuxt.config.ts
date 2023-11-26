// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
    path: '~/components',
    pathPrefix: false
  }
  ],
  modules: [
    '@nuxtjs/prismic',
  ],
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT
    },

  css:['@/assets/scss/main.scss'],
  runtimeConfig: {
    public : {
      apiUrl: '', 
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: 
          `@import "@/assets/scss/foundations/variables.scss";
           @import "@/assets/scss/foundations/mixins.scss";`
        }
      }
    }
  }
})
