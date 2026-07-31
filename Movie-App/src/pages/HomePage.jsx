 import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";

const HomePage = () => {
  const [query, setQuery] = useState("");

  const { movies, isLoading, error } = useMovies(query);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  if (isLoading) {
    return (
      <div className="pt-6 text-white">
        <SearchBar query={query} setQuery={setQuery} />

        <p className="mt-10 text-center text-lg font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-6 text-white">
        <SearchBar query={query} setQuery={setQuery} />

        <p className="mt-10 text-center text-lg font-semibold text-red-500">
          Failed to fetch movies.
        </p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="pt-6 text-white">
        <SearchBar query={query} setQuery={setQuery} />

        <p className="mt-10 text-center text-lg font-semibold">
          🎬 No movies found.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-6 text-white">
      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid grid-cols-6 gap-x-3 gap-y-4 px-8 py-12">
        {movies.map((movie) => (
          <div
            key={movie.id}
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
        ))}
      </div>
    </div>
  );
};

export default HomePage;