import React, { useEffect, useState } from 'react'

// API
import API from '../API'

// Config
// import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components

// Hooks

// Image
// import NoImage from '../images/no_image.jpg'

const Home = () => {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  console.log(state, loading, error)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))
    } catch (err) {
      setError(true)
    }

    setLoading(false)
  }

  // Initial render
  useEffect(() => {
    fetchMovies(1)
  }, [])

  return <div>Home Page</div>
}

export default Home
