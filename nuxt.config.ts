// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3055,
    host: '0.0.0.0',
  },
  devtools: { enabled: false },
  pages: true,
  // vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'wss',
  //       clientPort: 443,
  //       path: '/hmr/',
  //     },
  //     watch: { usePolling: true }
  //   },
  // },
  runtimeConfig: { 
    public: {
      nuxt3Url: 'API_URL', 
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      link:[  
        {
          rel: 'stylesheet',
          href: '/css/style.css'
        },
      ],
    }
  }
})