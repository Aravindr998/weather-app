export const fetchWeatherData = async ({ lat, lon }: { lat: number, lon: number }): Promise<{ data: any }> => {
    const response = await fetch(`/api/weather-data?lat=${lat}&lon=${lon}`)
    const result = await response.json()
    return result
}