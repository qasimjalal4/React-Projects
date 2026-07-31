import { useState } from "react";
import { MovieContext } from "./MovieContext";


export function MovieProvider({children}) {

  const [favourites, setFavourites] = useState([]);

  function addFavourite(movie) {

    setFavourites(prev => [...prev, movie])
  }

  function removeFavourite(id) {

    setFavourites(prev => prev.filter(movie => movie.id !== id ))
  }

  function isFavourite(id) {

    return favourites.some(movie => movie.id === id)
  }

  return (
    <MovieContext.Provider value={{
      favourites,
      addFavourite,
      removeFavourite,
      isFavourite,
    }}>
      {children}
    </MovieContext.Provider>
  )
}