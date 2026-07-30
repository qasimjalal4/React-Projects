import { useState } from "react"
import SearchBar from "../components/SearchBar"

const HomePage = () => {

  const [query, setQuery] = useState('')

  return (
    <div className="pt-6 text-white">
     <SearchBar query={query} setQuery={setQuery} />
       HomePage
    </div>
  )
}

export default HomePage