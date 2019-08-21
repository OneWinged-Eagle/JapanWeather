<template>
  <v-toolbar app fixed>
    <v-toolbar-side-icon @click.stop="$emit('update:drawer', !drawer)"/>

    <v-toolbar-title>Japan Weather</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Toolbar extends Vue {}
</script>
