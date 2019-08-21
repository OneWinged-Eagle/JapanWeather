<template>
  <v-navigation-drawer :value="drawer" app fixed>
    <v-list dense>
      <v-list-tile :to="{ name: 'Home' }" exact>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
	props: {
		drawer: { type: Boolean, required: true }
	}
})
export default class Drawer extends Vue {}
</script>
