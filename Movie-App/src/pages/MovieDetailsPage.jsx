import { useParams } from "react-router-dom"

const MovieDetailsPage = () => {

  const {id} = useParams()

  return (
    <div className="p-8 text-white">MovieDetailsPage</div>
  )
}

export default MovieDetailsPage