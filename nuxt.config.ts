import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // enable ssr for rendering
    ssr: true,

    // import vuetify css
    css: ["@/assets/scss/style.scss"],

    // build vuetify
    build: {
        transpile: ["vuetify"]
    },

    // config vite with vuetify
    vite: {
        ssr: {
            noExternal: ["vuetify"],
        },
        define: {
            "process.env.DEBUG": false,
        },
    },

    // modules
    modules: [
        "nuxt-icon",
        // [
        //     "@nuxtjs/robots",
        //     {
        //         UserAgent: "*",
        //         Disallow: "/",
        //     },
        // ],
        
        // this adds the vuetify vite plugin
		// also produces type errors in the current beta release
        async (options, nuxt) => {
            // @ts-ignore
            nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()))
        }
    ],

    // app config
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            bodyAttrs: {
                class: "demo"
            },
            charset: "utf-8",
            titleTemplate: '%s - Nuxt 3 Vuetify',
            meta: [
                { 
                  name: 'viewport', 
                  content: 'width=device-width, initial-scale=1, maximum-scale=5'
                },
                {
                  name: 'author',
                  content: "IT Genius Engineering Ltd., Thailand"
                },
              ]
        },
    },

})
