interface Weather {
	main: string,
	description: string,
	icon: string
}

interface HourlyForecast {
	dt: number,
	main: {
		temp: number,
		humidity: number
	},
	weather: Weather[],
	clouds: { all: number },
	wind: {
		speed: number,
		deg: number
	},
	rain?: {
		"3h"?: number
	},
	snow?: {
		"3h"?: number
	}
}
export interface Forecast {
	list: HourlyForecast[]
}
