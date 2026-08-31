import { useState, useEffect } from "react";


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export function useWeather(query) {

  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {


    if(!query) return;

    const controller = new AbortController()

    async function fetchWeather() {

      setIsLoading(true)
      setError(null)

      try {

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5&aqi=no&alerts=no`,{
          signal: controller.signal
        })

        if(!response.ok) {
          throw new Error('City not found!')
        }

        const data = await response.json()

        setWeather(data)

      } catch(err) {
        
        if(err.message === 'AbortError') return;
        setError(err.message)

      } finally {

        setIsLoading(false)
      } 
      
    }


    fetchWeather()

    return () => controller.abort()

  },[query])

  return {weather, isLoading, error}
}