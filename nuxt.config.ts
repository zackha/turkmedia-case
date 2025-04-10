// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/index.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preload', href: '/assets/fonts/PT_Sans-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/assets/fonts/PT_Sans-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/assets/fonts/Prompt-Black.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      ],
      script: [
        {
          src: 'https://www.aksam.com.tr/assets-aksam/js/min/scripts-min.js?v=atm1',
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  },

  modules: ['@nuxt/icon'],
});