 import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import NavBar from '../components/NavBar'

const HomePage = () => {
  const [query, setQuery] = useState("");

  const { movies, isLoading, error } = useMovies(query);

 

  if (isLoading) {
    return (
     <>
       <NavBar />
        <div className="pt-6 text-white">
         <SearchBar query={query} setQuery={setQuery} />

         <p className="mt-10 text-center text-lg font-semibold">
           Loading...
         </p>
        </div>
     </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <div className="pt-6 text-white">
         <SearchBar query={query} setQuery={setQuery} />

         <p className="mt-10 text-center text-lg font-semibold text-red-500">
           Failed to fetch movies.
         </p>
       </div>
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <NavBar />
        <div className="pt-6 text-white">
         <SearchBar query={query} setQuery={setQuery} />

         <p className="mt-10 text-center text-lg font-semibold">
           🎬 No movies found.
         </p>
        </div>
      </>
    );
  }

  return (
   <>
    <NavBar />
    <div className="pt-6 text-white">
      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid grid-cols-6 gap-x-3 gap-y-4 px-8 py-12">
        {movies.map((movie) => (
         
         <MovieCard key={movie.id} movie={movie} />

        ))}
      </div>
    </div>
   </>
  );
};

export default HomePage;