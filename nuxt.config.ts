// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-svgo', "@nuxt/image", 'nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'scss',
    // modules: ['navigation', 'pagination', 'autoplay', 'effectcreative'], // all modules are imported by default
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/const/style.sass" as *\n',
          sourceMap: false
        }
      }
    }
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Icon',
    svgoConfig: {
    //   // multipass: true,
    //   // plugins: [
    //   //   {
    //   //     name: 'preset-default',
    //   //     params: {
    //   //       overrides: {
    //   //         removeDoctype: false,
    //   //         removeViewBox: false
    //   //       }
    //   //     }
    //   //   }
    //   // ]
    }
  },

  app:{
    head: {
      title: 'CreateX',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap' },
      ]
    },
  },

  compatibilityDate: '2024-07-05'
})