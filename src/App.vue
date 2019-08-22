<template>
	<v-app>
		<app-drawer :drawer.sync="drawer" />

		<app-toolbar :drawer.sync="drawer" />

		<v-content>
			<v-container fill-height fluid>
				<v-fade-transition mode="out-in">
					<router-view :key="$route.fullPath" />
				</v-fade-transition>
			</v-container>
		</v-content>

		<app-footer />
	</v-app>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import AppDrawer from "./components/app/Drawer.vue"
import AppToolbar from "./components/app/Toolbar.vue"
import AppFooter from "./components/app/Footer.vue"

@Component({
	components: { AppDrawer, AppToolbar, AppFooter },
	name: "App"
})
export default class App extends Vue {
	drawer = false

	beforeCreate() {
		this.$vuetify.theme.dark = true
	}
}
</script>
