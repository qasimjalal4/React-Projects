import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"

 

function App() {
 
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')

  const {weather, isLoading, error} = useWeather(city)

  const theme = 'foggy' 

  useEffect(() => {

   document.body.className = theme

  })



  return (
    <div className="flex justify-center">
     <div className="w-1/2 px-20 py-10"> 
     <div className="flex justify-center items-center gap-4">
      <input
      className="flex-1 px-4 py-2 rounded-md font-semibold outline-none border-2 border-gray-400"
      placeholder="Enter your city..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && setCity(query)}
      />
      <button
       className="bg-blue-600 px-6 py-2 rounded-md text-white font-semibold cursor-pointer hover:opacity-90"
      onClick={() => setCity(query)}

      >Search</button>
     </div>


      {!city && (
        <div className="text-center mt-20">
          <p className="text-2xl font-bold text-gray-700">Search a city</p>
          <p className="text-gray-400 mt-2">Get real-time weather for any city</p>
        </div>
      )}

      
      {isLoading && <p className="text-center mt-10 text-lg">Loading...</p>}

      {error && <p className="text-center mt-10 text-red-500">{error}</p>}
     </div>
    </div>
  )
}

export default App
