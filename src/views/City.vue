<template>
	<section>
		<h1>{{ name }}</h1>

		<template v-if="forecast">
			<div v-for="hourlyWeather in forecast.list" :key="hourlyWeather.dt">
				<h2>{{ new Date(hourlyWeather.dt * 1000) }}</h2>

				<p>
					Temperature:
					<b>{{ hourlyWeather.main.temp }}&#8451;</b>
				</p>

				<p>Humidity: {{ hourlyWeather.main.humidity }}%</p>

				<p>Weather: {{ hourlyWeather.weather[0].main }} ({{ hourlyWeather.weather[0].description }})</p>

				<p>Wind: {{ hourlyWeather.wind.speed }}m/s</p>

				<p v-if="hourlyWeather.rain && (hourlyWeather.rain['1h'] || hourlyWeather.rain['3h'])">
					Rain:
					<span v-if="hourlyWeather.rain['1h']">{{ hourlyWeather.rain['1h'] }}mm for the last 1h</span>
					<span v-if="hourlyWeather.rain['3h']">{{ hourlyWeather.rain['3h'] }}mm for the last 3h</span>
				</p>

				<p v-if="hourlyWeather.snow && (hourlyWeather.snow['1h'] || hourlyWeather.snow['3h'])">
					Snow:
					<span v-if="hourlyWeather.snow['1h']">{{ hourlyWeather.snow['1h'] }}mm for the last 1h</span>
					<span v-if="hourlyWeather.snow['3h']">{{ hourlyWeather.snow['3h'] }}mm for the last 3h</span>
				</p>
			</div>
		</template>
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
