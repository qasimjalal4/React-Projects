import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from "./components/SearchBar"

 

function App() {
 
  const [query, setQuery] = useState('')
  const [city, setCity]  = useState('')

  const {weather, isLoading, error} = useWeather(city)


  function searchCity() {
     if(query.trim()) {
      searchCity(query)
     }
  }




  return (
    <div className="min-h-screen max-sm:p-8 p-16">
      
     <h1 className="text-white text-3xl font-bold text-center mb-10">
      How's the sky looking today?
    </h1> 

    <div className="max-w-xl mx-auto mb-12">
      <SearchBar query={query} setQuery={setQuery} onSearch={searchCity} />
    </div>


    
     </div>

  )
}

export default App
