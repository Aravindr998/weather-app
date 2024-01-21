import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getWeatherData } from "./thunks";

const initialState = {
    weather: {}
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherData.fulfilled, (state, action) => {
                state.weather = action.payload
            })
    }
})