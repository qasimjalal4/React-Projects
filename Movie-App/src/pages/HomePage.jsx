import { useState } from "react"
import SearchBar from "../components/SearchBar"
import {useMovies} from '../hooks/useMovies'

const HomePage = () => {

  const [query, setQuery] = useState('')

  const {movies, isLoading, error} = useMovies(query)

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="pt-6 text-white">
     <SearchBar query={query} setQuery={setQuery} />
     <div className="py-12 px-8 grid grid-cols-6 gap-x-3 gap-y-4">

      {isLoading && (
        <p className="col-span-6 text-center text-lg font-semibold">
          Loading...
        </p>
       )}

       {error && (
        <p className="col-span-6 text-center text-lg font-semibold text-red-500">
          Failed to fetch movies.
        </p>
       )}

      {movies.map((movie) => {
        return (
          <div
           key={movie.id}
           className="border-[1.5px] border-white h-[420px]  rounded-md  group
           ">
           <div className="overflow-hidden"> 
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}
            className="w-full h-[335px] object-cover  group-hover:scale-105 duration-300 transition-transform"
            />
           </div> 
            <p className="mt-2 text-sm pl-2
            group-hover:text-red-500
            ">{movie.title}</p>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-400 pl-[6px] pr-[10px]">
             <span>⭐ {movie.vote_average.toFixed(1)}</span>
             <span>{movie.release_date.split("-")[0]}</span>
            </div>
          </div>
        )
      })}

     </div>
    </div>
  )
}

export default HomePage