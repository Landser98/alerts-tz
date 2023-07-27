// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: "http://code.jquery.com/jquery-1.11.0.min.js" },
        { src: "http://code.jquery.com/jquery-migrate-1.2.1.min.js" },
        { src: "/js/slick.min.js" },
      ],
    },
  },
  plugins: ["plugins/axios.js"],
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/main.css", "bootstrap/dist/css/bootstrap.css"],
});
