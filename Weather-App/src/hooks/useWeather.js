import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



export function useWeather(query) {

  const [weather, setWeather] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => clearTimeout(timer)

  },[query])


  useEffect(() => {

    if (!debouncedQuery) return;

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=7&aqi=no&alerts=no`;
    const controller = new AbortController();

    async function fetchWeather() {

      setIsLoading(true)
      setError(null)

      try {

        const response = await fetch(url, {
          signal: controller.signal
        });

        if(!response.ok) {
          throw new Error('City not found!')
        }

        const data = await response.json();

        setWeather(data)


      } catch(err) {

        if (err.name === 'AbortError') return;
        setError(err.message)

      } finally {
        
        setIsLoading(false)
      } 
      
    }

    fetchWeather()

    return () => controller.abort()

  },[debouncedQuery, query])


  return { weather,isLoading,error }

}



