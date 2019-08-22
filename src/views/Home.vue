<template>
	<svg viewBox="0 0 437.33432 516.01587">
		<a v-for="prefecture in prefectures" :key="prefecture.name" :href="`city/${prefecture.capital}`">
			<path v-bind="prefecture" />
		</a>
	</svg>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "Home"
})
export default class Home extends Vue {
	prefectures = prefectures
}
</script>
