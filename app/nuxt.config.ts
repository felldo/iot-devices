// https://nuxt.com/docs/api/configuration/nuxt-config
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module'
    ],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.my-app-dark'
                }
            }
        }
    }
})
