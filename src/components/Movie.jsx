import React from 'react'
import { useParams } from 'react-router-dom'

// Config
import {} from '../config'

// Components
// import Grid from './Grid'
import Spinner from './Spinner'

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// Images
// import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId } = useParams()

  const { state: movie, loading, error } = useMovieFetch(movieId)

  console.log(movie)

  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <>
      {loading && <Spinner />}
      <div>Movie</div>
    </>
  )
}

export default Movie
