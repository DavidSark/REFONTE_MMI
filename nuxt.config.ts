// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/icon-mmi-white.svg' }, 
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  plugins: [
    { src: '~/plugins/locomotive-scroll.js', mode: 'client' }
  ],
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
