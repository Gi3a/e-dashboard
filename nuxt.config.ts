// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: ''
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      prefix: ''
    },
  ],
  supabase: {
    redirect: false,
  },
})
