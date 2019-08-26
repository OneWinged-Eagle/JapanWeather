interface Weather {
	main: string,
	description: string
}

interface HourlyForecast {
	dt: number,
	main: {
		temp: number,
		humidity: number
	},
	weather: Weather[],
	wind: {
		speed: number
	},
	rain?: {
		"1h"?: number,
		"3h"?: number
	},
	snow?: {
		"1h"?: number,
		"3h"?: number
	}
}
export interface Forecast {
	list: HourlyForecast[]
}
