import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MovieDetailsPage = () => {

  const API_KEY = 'a4b6791bf6e7d9111aa36e1e14ce2675';

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


  return (
    <div className="p-8 text-white">MovieDetailsPage</div>
  )
}

export default MovieDetailsPage