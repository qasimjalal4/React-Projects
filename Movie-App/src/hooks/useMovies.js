import { useState, useEffect } from "react";

const API_KEY = 'a4b6791bf6e7d9111aa36e1e14ce2675';
const BASE_URL = 'https://api.themoviedb.org/3';


export function useMovies(query) {

  const [movies, setMovies] = useState([]);
  const [debounceQuery, setDebounceQuery] = useState(query)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

      const timer = setTimeout(() => {
        setDebounceQuery(query)
      }, 500)

      return () => clearTimeout(timer)

    }, [query])


  useEffect(() => {

    const controller = new AbortController();

    async function fetchMovies() {

      setIsLoading(true)
      setError(null)

      try {

        const trimmedQuery = debounceQuery.trim();

        const url = trimmedQuery ?
         `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(trimmedQuery)}`:
         `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`

        
         const response = await fetch(url, {
          signal: controller.signal
         });

         if(!response.ok) {
          throw new Error('Failed to fetch data')
         }

         const data = await response.json()
         setMovies(data.results || []) 

      } catch(err) {

        if(err.name === 'AbortError') return

        setError(err.message)

      } finally {
  
       if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }    
  }

    fetchMovies()


    return () => controller.abort()

  }, [debounceQuery])


  return {movies, isLoading, error}
}