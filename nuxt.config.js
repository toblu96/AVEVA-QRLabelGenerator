export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PrinterLabelGenerator',
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

  localforage: {
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  privateRuntimeConfig: {
    dbHost: process.env.DB_HOST || 'avdb01',
    dbPort: process.env.DB_PORT || '1434',
    dbInstance: process.env.DB_INSTANCE || 'avmes_d',
    dbName: process.env.DB_NAME || 'MESDB',
    dbUser: process.env.DB_USER || 'sa',
    dbPassword: process.env.DB_PASSWORD,
  },

  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-qrcode.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/localforage',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  http: {
    baseURL: 'http://localhost:3000',
  }
}
