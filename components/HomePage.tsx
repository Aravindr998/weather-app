"use client"

import React, { useEffect, useState } from 'react'
import ContentBox from './ContentBox'
import { useDispatch, useSelector, selectWeather, getWeatherData } from '@/lib/redux'

const HomePage = () => {
    const [location, setLocation] = useState<Location>({ lat: 0, lon: 0 })
    const weather = useSelector(selectWeather)
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
            lon: GeolocationPosition.coords.longitude
        })
    }
    return (
        <>
            <section className="flex justify-center m-20">
                <h1 className="font-primary font-extralight text-white text-8xl">21 C</h1>
            </section>
            <section>
                <div className="flex justify-center">
                    <ContentBox title="Content Box">
                        <p className="font-primary text-white">Some text</p>
                    </ContentBox>
                </div>
            </section>
        </>
    )
}

type Location = {
    lat: number,
    lon: number
}
export default HomePage