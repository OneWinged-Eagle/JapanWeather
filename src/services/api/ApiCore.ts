import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import { actions } from "@/stores/snackbar"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { Forecast } from "@/utils/types"

const key = "92904f6f97dcc4b468154f1fb1ce0cf3"
const params = `&appid=${key}&units=metric`

/** A class countaining all base http operations used to communicate with the API. */
export class ApiCore {
	axiosInstance: AxiosInstance

	loading: boolean = false

	constructor() {
		this.axiosInstance = axios.create({ baseURL: "https://api.openweathermap.org/data/2.5/" })

		this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
			this.loading = true
			return config
		},
			(error: AxiosError) => {
				this.loading = false
				console.error("Error during request:", error)
				return Promise.reject(getErrorMessage(error))
			})

		this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
			this.loading = false
			return response.data
		},
			(error: AxiosError) => {
				this.loading = false
				console.error("Error during response:", error)
				return Promise.reject(getErrorMessage(error))
			})
	}

	async getForecast(city: string): Promise<Forecast | undefined> {
		console.info(`Fetching forecast for ${city} city...`)

		return this.axiosInstance
			.get<undefined, Forecast>(`/forecast/?q=${city}${params}`)
			.then((forecast: Forecast) => {
				console.info(`${city} forecast fetched!`)
				return forecast
			})
			.catch((error: string) => {
				actions.show({ colour: "warning", text: `Getting forecast failed: ${error}`, timeout: 0 })
				return undefined
			})
	}
}
