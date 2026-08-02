import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MovieDetailsPage = () => {

  const navigate = useNavigate()

  const API_KEY = 'a4b6791bf6e7d9111aa36e1e14ce2675';
  const BACKDROP_BASE_URL =
    "https://image.tmdb.org/t/p/original";

  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    async function fetchMovieDetails() {

      setIsLoading(true)
      setError(null)

      try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

        if(!response.ok) {
          throw new Error('Failed to fetch Movie details!')
        }

        const data = await response.json()
        setMovie(data)

      } catch(err) {

        setError(err.message)

      } finally {

        setIsLoading(false)
      }
      
    }

    fetchMovieDetails()

  },[id])


  if(isLoading) {
    return (
        <p className="text-lg font-semibold mt-10 text-center">Loading...</p>
    )
  }

  if(error) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    )
  }


  return (
    <>
     {movie && (
         <div className="relative h-[825px]">
           <img src={`${BACKDROP_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
           />
           <button onClick={() => navigate(-1)}
            className="absolute top-6 left-6 z-10 bg-black/60 px-4 py-2 rounded-full
             cursor-pointer text-white transition hover:bg-red-500 backdrop-blur-sm "
            >← Back</button>
         </div>
      )}
    </>
  )
}

export default MovieDetailsPage