export default {
  target: 'static',
  head: {
    title: 'voting-app',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    '~/plugins/graphcms.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  modules: [
     '@nuxtjs/markdownit'
  ],

  build: {
  },
   markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
  }
}
