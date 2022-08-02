export default {
  target: 'static',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Hypercolor`
        : 'Gradients for Tailwind CSS | Hypercolor'
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hypercolor.dev/' },
      {
        property: 'og:title',
        content: 'Gradients for Tailwind CSS | Hypercolor',
      },
      {
        property: 'og:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.',
      },
      { property: 'og:image', content: 'https://hypercolor.dev/social.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://hypercolor.dev/' },
      {
        property: 'twitter:title',
        content: 'Gradients for Tailwind CSS | Hypercolor',
      },
      {
        property: 'twitter:description',
        content:
          'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.',
      },
      {
        property: 'twitter:image',
        content: 'https://hypercolor.dev/social.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  css: ['@/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/postcss8', '@nuxtjs/toast'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  sitemap: {
    hostname: 'https://hypercolor.dev',
  },
  toast: {
    position: 'bottom-center',
    duration: 2000,
    className: 'notification',
    containerClass: 'notification-container',
  },
  robots: {
    UserAgent: '*',
  },
}
