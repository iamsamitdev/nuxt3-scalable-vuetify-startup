// import createVuetify 
import { createVuetify } from "vuetify"

// create vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({

        // enable ssr for rendering
        ssr: true,
    })

    // add vuetify to nuxt app
    nuxtApp.vueApp.use(vuetify)
})