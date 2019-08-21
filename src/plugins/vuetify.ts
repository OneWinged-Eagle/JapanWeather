import Vue from "vue"
import Vuetify from "vuetify"

import "vuetify/dist/vuetify.min.css"
import colours from "vuetify/es5/util/colors"

Vue.use(Vuetify, {
	theme: {
		error: colours.red.darken1,
		primary: colours.purple.darken1,
		secondary: colours.indigo.darken1,
		info: colours.cyan.darken1,
		success: colours.green.darken1,
		accent: colours.yellow.darken1,
		warning: colours.orange.darken1
	},
	options: {
		customProperties: true
	},
	iconfont: "md"
})
