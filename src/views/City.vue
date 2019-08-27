<template>
	<section>
		<h1 class="display-3 font-weight-medium">
			{{ name }}
			<a v-if="wikipedia" :href="wikipedia" target="_blank">
				<v-icon x-large>mdi-wikipedia</v-icon>
			</a>
		</h1>

		<template v-if="forecast">
			<v-hover v-for="hourlyWeather in forecast.list" :key="hourlyWeather.dt">
				<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 12}`" color="primary">
					<v-card-title>
						<h2>{{ new Date(hourlyWeather.dt * 1000) }}</h2>
					</v-card-title>

					<v-card-text>
						<v-container grid-list-xs>
							<v-layout row wrap>
								<v-flex xs4>
									<v-icon x-large>mdi-thermometer-lines</v-icon>
									{{ hourlyWeather.main.temp }}&#8451;
								</v-flex>

								<v-flex xs4>
									<v-icon x-large>mdi-water-percent</v-icon>
									{{ hourlyWeather.main.humidity }}%
								</v-flex>

								<v-flex xs4 d-flex>
									<v-img
										:src="`http://openweathermap.org/img/wn/${hourlyWeather.weather[0].icon}@2x.png`"
										max-width="40"
										max-height="40"
									/>
									{{ hourlyWeather.weather[0].main }} ({{ hourlyWeather.weather[0].description }})
								</v-flex>

								<v-flex xs4>
									<v-icon x-large>mdi-cloud</v-icon>
									{{ hourlyWeather.clouds.all }}%
								</v-flex>

								<v-flex xs4>
									<v-icon x-large>mdi-weather-windy</v-icon>
									{{ hourlyWeather.wind.speed }}m/s ({{ hourlyWeather.wind.deg }} deg)
								</v-flex>

								<v-flex
									v-if="hourlyWeather.rain && (hourlyWeather.rain['1h'] || hourlyWeather.rain['3h'])"
									xs4
								>
									<v-icon x-large>mdi-water</v-icon>
									<span v-if="hourlyWeather.rain['3h']">{{ hourlyWeather.rain['3h'] }}mm for the last 3h</span>
								</v-flex>

								<v-flex
									v-if="hourlyWeather.snow && (hourlyWeather.snow['1h'] || hourlyWeather.snow['3h'])"
									xs4
								>
									<v-icon x-large>mdi-snowflake</v-icon>
									<span v-if="hourlyWeather.snow['3h']">{{ hourlyWeather.snow['3h'] }}mm for the last 3h</span>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card-text>
				</v-card>
			</v-hover>
		</template>
	</section>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { ApiCore } from "@/services/api/ApiCore"
import { Forecast } from "@/utils/types"
import { prefectures } from "@/utils/const/prefectures"

@Component({
	name: "City"
})
export default class City extends Vue {
	private name = ""
	private forecast: Forecast | null = null
	private readonly apiCore = new ApiCore()

	get wikipedia(): string {
		return prefectures.find((p) => p.capital === this.name)!.wikipedia
	}

	created() {
		this.name = this.$route.params.name

		this.apiCore.getForecast(this.name).then((forecast) => {
			this.forecast = forecast ? forecast : null
		})
	}
}
</script>
