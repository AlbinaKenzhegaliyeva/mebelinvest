export default defineNuxtConfig({
  // target: 'static',
  compatibilityDate: '2024-12-03',
  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    'swiper/css/scrollbar',
  ],
  devServer: {
    port: 3055,
    host: '0.0.0.0',
  },
  // nitro: {
  //   devProxy: {
  //     '/': {
  //       target: 'http://localhost:3055',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  devtools: { enabled: false },
  pages: true,
  vite: {
    optimizeDeps: {
      include: ['swiper', 'swiper/vue'],
    },
    server: {
      hmr: {
        protocol: 'wss', // или 'wss', если через HTTPS
        path: '/hmr/',
      },
      watch: { usePolling: true },
    },

  },
  runtimeConfig: {
    public: {
      nuxt3Url: process.env.NUXT_PUBLIC_NUXT3_URL || 'https://mebelinvest.kz/api',
    },
  },
  plugins: ['~/plugins/i18n.js'],
  i18n: {
    locale: 'RU', // Язык по умолчанию
  },
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      title: 'Мебель Инвест',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '/css/style.css',
        },
      ],
    },
  },
  // generate: {
  //   routes: async () => {
  //     // Пример получения данных из API для генерации маршрутов
  //     const categories = await fetch('https://mebelinvest.kz/api/categories')
  //       .then((res) => res.json());
  //     return categories.map((category) => `/category/${category.id}`);
  //   },
  // },

});
