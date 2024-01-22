"use client"

import React, { useEffect, useState } from "react"
import ContentBox from "./ContentBox"
import {
  useDispatch,
  useSelector,
  selectWeather,
  getWeatherData,
} from "@/lib/redux"
import Image from "next/image"

const HomePage = () => {
  const [location, setLocation] = useState<Location>({ lat: 0, lon: 0 })
  const { weather }: any = useSelector(selectWeather)
  const dispatch = useDispatch()
  useEffect(() => {
    const Geolocation = navigator.geolocation
    Geolocation.getCurrentPosition(successCallback)
  }, [])
  useEffect(() => {
    if (location.lat && location.lon) {
      dispatch(getWeatherData(location))
    }
  }, [location])
  const successCallback = async (GeolocationPosition: GeolocationPosition) => {
    setLocation({
      lat: GeolocationPosition.coords.latitude,
      lon: GeolocationPosition.coords.longitude,
    })
  }

  const direction = {
    E: "East",
    W: "West",
    N: "North",
    S: "South",
  }
  return (
    <>
      <section className="flex justify-center m-20">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-start items-center">
            <Image
              src={"/assets/pin.png"}
              alt="Location icon"
              width={12}
              height={12}
              className="mr-1"
            />
            <p className="font-primary font-extralight text-white">
              {weather?.location?.name}, {weather?.location?.country}
            </p>
          </div>
          <h1 className="font-primary font-extralight text-white text-8xl">
            {weather?.current?.temp_c}°C
          </h1>
          <div className="w-full flex justify-end">
            <p className="font-primary font-extralight text-white">
              {weather?.current?.condition?.text}
            </p>
          </div>
          <p className="font-primary font-normal text-white">
            Feels Like {weather?.current?.feelslike_c}°C
          </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center gap-5">
          <ContentBox title="Wind Data">
            <div>
              <table className="text-white font-primary w-52">
                <tr>
                  <td>Speed (kmph)</td>
                  <td>{weather?.current?.wind_kph} km/h</td>
                </tr>
                <tr>
                  <td>Speed (mph)</td>
                  <td>{weather?.current?.wind_mph} m/h</td>
                </tr>
                <tr>
                  <td>Direction:</td>
                  <td>
                    {direction[
                      weather?.current?.wind_dir as keyof typeof direction
                    ]
                      ? direction[
                          weather?.current?.wind_dir as keyof typeof direction
                        ]
                      : weather?.current?.wind_dir}
                  </td>
                </tr>
                <tr>
                  <td>Wind Degree</td>
                  <td>{weather?.current?.wind_degree}°</td>
                </tr>
              </table>
            </div>
          </ContentBox>
          <ContentBox title="Humidity Data">
            <div></div>
          </ContentBox>
        </div>
      </section>
    </>
  )
}

type Location = {
  lat: number
  lon: number
}
export default HomePage
