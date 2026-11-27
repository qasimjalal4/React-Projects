import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from '../src/components/SearchBar' 
import WeatherCard from '../src/components/WeatherCard'
import WeatherStats from "../src/components/WeatherStats"
import DailyForecast from "../src/components/DailyForecast"
import HourlyForecast from "./components/HourlyForecast"


function App() {
 
  const [query, setQuery] = useState('')
  const [city, setCity]  = useState('')

  const {weather, isLoading, error} = useWeather(city)



  function searchCity() {
     if(query.trim()) {
      setCity(query)
     }
  }




  return (
    <div className="min-h-screen max-md:p-8 p-16">
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        How's the sky looking today?
      </h1>
      <div className="mx-auto max-w-2xl mb-12">
        <SearchBar query={query} setQuery={setQuery} onSearch={searchCity}  />
      </div>

       {weather && (
         <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2 gap-y-4 lg:gap-y-6">
           <WeatherCard weather={weather} />
           <WeatherStats current={weather.current} />
           <DailyForecast days={weather.forecast.forecastday} />
          </div>
          <div>
            <HourlyForecast days={weather.forecast.forecastday} />
          </div>
         </div>
       )}
    </div> 

  )
}

export default App
