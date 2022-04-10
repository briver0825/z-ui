import { createApp } from "vue"
import App from "./App.vue"

import ZUI from "../../index"

import "./style/markdown.scss"

import Example from "./components/Example.vue"

// import "./../../dist/style.css"
// import ZUI from "../../dist/z-ui.es"

import router from "./router"

createApp(App)
    .use(router)
    .use(ZUI)
    .component(Example.name, Example)
    .mount("#app")
