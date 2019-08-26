<template>
	<v-app-bar app fixed>
		<v-app-bar-nav-icon @click.native.stop="$emit('update:drawer', !drawer)" />

		<v-toolbar-title>Japan Weather</v-toolbar-title>

		<v-spacer />

		<v-autocomplete label="Search Japanese city" :items="capitals" hide-details single-line />

		<v-spacer />
	</v-app-bar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Toolbar",
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Toolbar extends Vue {
	private readonly prefectures = prefectures

	get capitals(): string[] {
		return this.prefectures.map((p) => p.capital)
	}
}
</script>
