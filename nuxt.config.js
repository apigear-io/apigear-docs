import theme from "@nuxt/content-theme-docs";

export default theme({
  // https://nuxtjs.org/blog/going-full-static/
  target: 'static',
  components: true,

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/gtm'
  ],
  /*
   ** Google Tag Maanger configuration
   ** See https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: 'GTM-M336GFQ',
    pageTracking: true
  },
});
