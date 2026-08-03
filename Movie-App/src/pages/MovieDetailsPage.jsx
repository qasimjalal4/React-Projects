import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useMovieContext } from "../context/MovieContext";

const MovieDetailsPage = () => {

  const navigate = useNavigate()

  const API_KEY = 'a4b6791bf6e7d9111aa36e1e14ce2675';
  const BACKDROP_BASE_URL =
    "https://image.tmdb.org/t/p/original";

  const IMAGE_BASE_URL =
    "https://image.tmdb.org/t/p/w500";

  const {addFavourite, removeFavourite, isFavourite} = useMovieContext()  
    
  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const favourite = movie ? isFavourite(movie.id) : false

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
             cursor-pointer text-white transition hover:bg-red-500 backdrop-blur-sm"
            >← Back</button>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
             <div className="absolute flex inset-0 items-end">
              <div className="flex px-12 pb-12 gap-8">
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                 alt={movie.title}
                 className="h-[400px] w-[270px] object-cover shadow-2xl rounded-lg"
                />
                <div className="max-w-2xl self-end">
                  <h1 className="text-5xl font-bold">{movie.title}</h1>
                  <div className="flex mt-5 gap-4 items-center text-gray-300">
                   <span>⭐ {movie.vote_average.toFixed(1)}</span>
                   <span>{movie.release_date.split("-")[0]}</span>
                   <span>{movie.runtime} min</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                   {movie.genres.map((genre) => {
                    return (
                      <span key={genre.id} className="
                       border border-white/30 px-3 py-1 rounded-full text-sm
                      ">{genre.name}</span>
                    )
                   })}
                  </div>
                  <p
                   className="mt-5 text-gray-300 leading-7"
                  >{movie.overview}</p>
                  <button
                    onClick={() => {
                      if (favourite) {
                        removeFavourite(movie.id);
                      } else {
                        addFavourite(movie);
                      }
                    }}
                    className="mt-6 rounded-lg bg-red-500 px-5 py-3 font-semibold transition hover:bg-red-600"
                    >
                    {favourite
                      ? "❤️ Remove from Favorites"
                      : "🤍 Add to Favorites"}
                    </button>
                    <button className="ml-10 text-lg hover:border-b-2  hover:text-gray-300">
                      ▶ Watch Trailer  
                    </button>
                </div>
              </div>

             </div>
            </div>
         </div>
      )}
    </>
  )
}

export default MovieDetailsPage