
const MovieCard = ({movie}) => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
       <div
            className="group h-[420px] rounded-md border-[1.5px] border-white"
          >
            <div className="overflow-hidden">
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
                className="h-[335px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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