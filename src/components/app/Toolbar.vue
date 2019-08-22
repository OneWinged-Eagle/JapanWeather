<template>
	<v-app-bar app fixed>
		<v-app-bar-nav-icon @click.native.stop="$emit('update:drawer', !drawer)" />

		<v-toolbar-title>Japan Weather</v-toolbar-title>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
	name: "Toolbar",
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Toolbar extends Vue { }
</script>
