import "@babel/polyfill"

import Vue from "vue"
import "./plugins/vuetify"

import App from "./App.vue"
import "./registerServiceWorker"
import { router } from "./router"

import "material-design-icons-iconfont/dist/material-design-icons.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"

Vue.config.performance = process.env.NODE_ENV !== "production"
Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App)
}).$mount("#app")
