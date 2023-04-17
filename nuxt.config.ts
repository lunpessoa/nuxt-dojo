// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
    configPath: "tailwind.config",
  },
});
