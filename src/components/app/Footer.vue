<template>
	<v-footer app>
		<v-spacer></v-spacer>
		<div>&copy; {{ new Date().getFullYear() }}</div>
	</v-footer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class Footer extends Vue { }
</script>
