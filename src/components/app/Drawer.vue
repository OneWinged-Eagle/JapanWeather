<template>
	<v-navigation-drawer :value="drawer" @input="$emit('update:drawer', $event)" app>
		<v-list dense>
			<v-list-item :to="{ name: 'Home' }" exact>
				<v-list-item-icon>
					<v-icon>mdi-home</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Home</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
	name: "Drawer",
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Drawer extends Vue { }
</script>
