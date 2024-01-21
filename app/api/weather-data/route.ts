import { WEATHER_BASE_URL, endPoints } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams
    const lat = searchParams.get("lat")
    const lon = searchParams.get("lon")
    const url = `${WEATHER_BASE_URL}${endPoints.currentWeather(`${lat},${lon}`)}`
    const data = await fetch(url, { cache: "no-store" })
    if (data.ok) {
        const response = await data.json()
        return NextResponse.json(response, { status: 200 })
    } else {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}