import { createContext, useContext } from "react";


 export const MovieContext = createContext()

export function useMovieContext() {
  return useContext(MovieContext)
}