 import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

const FavouritesPage = () => {
  const { favourites } = useMovieContext();

  if (favourites.length === 0) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-xl font-semibold text-gray-400">
          ❤️ No favorite movies yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 gap-x-3 gap-y-4 px-8 py-12 text-white">
      {favourites.map((favouriteMovie) => (
        <MovieCard key={favouriteMovie.id} movie={favouriteMovie} />
      ))}
    </div>
  );
};

export default FavouritesPage;