<template>
	<section>
		<h1>{{ name }}</h1>

		<p v-if="forecast">{{ forecast }}</p>
	</section>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { ApiCore } from "@/services/api/ApiCore"
import { Forecast } from "@/utils/types"

@Component({
	name: "City"
})
export default class City extends Vue {
	private name = ""
	private forecast: Forecast | null = null
	private readonly apiCore = new ApiCore()

	created() {
		this.name = this.$route.params.name

		this.apiCore.getForecast(this.name).then((forecast) => {
			this.forecast = forecast ? forecast : null
		})
	}
}
</script>
