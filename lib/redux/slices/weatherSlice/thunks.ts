import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk"
import { fetchWeatherData } from "./api"
import { ReduxThunkAction } from "@/lib/redux"

export const getWeatherData = createAppAsyncThunk(
    "weather/fetchWeatherData",
    async ({ lat, lon }: { lat: number, lon: number }) => {
        const response = await fetchWeatherData({ lat, lon })
        return response.data
    }
)