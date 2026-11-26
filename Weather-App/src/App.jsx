import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from '../src/components/SearchBar' 

function App() {
 
  const [query, setQuery] = useState('')
  const [city, setCity]  = useState('')

  const {weather, isLoading, error} = useWeather(city)

  console.log(weather)

  function searchCity() {
     if(query.trim()) {
      setCity(query)
     }
  }




  return (
    <div className="min-h-screen max-md:p-8 p-16">
      <h1 className="text-white text-3xl font-bold text-center mb-12">
        How's the sky looking today?
      </h1>
      <div className="mx-auto max-w-3xl">
        <SearchBar />
      </div>
    </div> 

  )
}

export default App
