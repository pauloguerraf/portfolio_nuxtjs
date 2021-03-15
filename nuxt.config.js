export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'paulo guerra f.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Creative Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      //{ src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js' },
      //{ src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
css: ['~/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "~/plugins/locomotive.js",
      mode: "client"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-social-meta',
        {
          url: "pauloguerraf.dev",
          title: "Paulo Guerra F.",
          site_name: "pauloguerraf.dev",
          description: "Creative Developer",
          img: "./og_social.jpg",
          locale: "en_US",
          twitter: "@pauloguerraf",
          twitter_card: "og_social.jpg",
          themeColor: "#0000fff",
        },],
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // GSAP module configuration (https://github.com/ivodolenc/nuxt-gsap-module)
  gsap: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300, 700, 800],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
}
