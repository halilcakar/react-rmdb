import { useEffect, useState } from 'react'

// API
import API from '../API'

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setError(false)
        setLoading(true)

        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        // Get Directorys only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        )

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        })

        setLoading(false)
      } catch (err) {
        setError(true)
      }
    })()
  }, [movieId])

  return { state, loading, error }
}
