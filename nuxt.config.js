import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: '台灣數位串流有限公司',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。' },
      { hid: 'og:title', property: 'og:title', content: '台灣數位串流有限公司' },
      { hid: 'og:description', property: 'og:description', content: '發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.twds.com.tw/' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.twds.com.tw/og.jpg' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', href: '/logo/twds.png' }
    ]
  },
  pwa: {
    meta: {
      name: '台灣數位串流有限公司',
      description: '台灣數位串流有限公司'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/index.sass'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
