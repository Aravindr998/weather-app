export const WEATHER_BASE_URL = "http://api.weatherapi.com/v1"

export const endPoints = {
    currentWeather: (q: string) => `/current.json?q=${q}&aqi=yes&key=${process.env.WEATHER_API_KEY}`
}