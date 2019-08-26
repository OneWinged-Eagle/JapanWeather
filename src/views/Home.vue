<template>
	<section>
		<svg viewBox="0 0 437.33432 516.01587">
			<router-link
				v-for="prefecture in prefectures"
				:key="prefecture.name"
				:to="{ name: 'City', params: { name: prefecture.capital } }"
			>
				<path v-bind="prefecture" />
			</router-link>
		</svg>
	</section>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Home"
})
export default class Home extends Vue {
	private readonly prefectures = prefectures
}
</script>

<style scoped>
path {
	fill: var(--v-secondary-darken2);
	stroke: var(--v-primary-darken2);
}

path:hover {
	fill: var(--v-accent-darken4);
}
</style>
