export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'practice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/app.scss',
  ],
  // styleResources: {
  //   scss: ['@/assets/style/app.scss']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  proxy: {
    '/api': {
      target: 'https://query1.finance.yahoo.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
}
