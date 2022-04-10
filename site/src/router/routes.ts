import Home from "../views/home.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/button', component: import("../docs/button.md") },
]

export default routes