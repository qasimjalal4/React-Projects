import { useMovieContext } from "../context/MovieContext";

const MovieCard = ({movie}) => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const {addFavourite, removeFavourite, isFavourite} = useMovieContext()

    const favorite = isFavourite(movie.id)

  return (
    <>
       <div
            className="group h-[420px] rounded-md border-[1.5px] border-white"
          >
            <div className="relative overflow-hidden">
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
                className="h-[335px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

                 <button
                 className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center
                 rounded-full bg-black/60 text-xl text-white transition hover:scale-110"
                 onClick={() => {
                  if (favorite) {
                    removeFavourite(movie.id)
                  } else {
                    addFavourite(movie)
                  }
                 }}
                 >
                  {favorite ? "❤️" : "🤍"}
                </button>
              
            </div>

            <p className="mt-2 pl-2 text-sm transition-colors duration-300 group-hover:text-red-500">
              {movie.title}
            </p>

            <div className="mt-2 flex items-center justify-between px-[10px] text-sm text-gray-400">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>

              <span>
                {movie.release_date
                  ? movie.release_date.split("-")[0]
                  : "N/A"}
              </span>
            </div>
          </div>
    </>
  )
}

export default MovieCard