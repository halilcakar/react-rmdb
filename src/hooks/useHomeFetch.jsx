import { useState, useEffect } from 'react'

// API
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log(searchTerm)

  const fetchMovies = async (page, searchTermText = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTermText, page)

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
  useEffect(() => fetchMovies(1), [])

  return { state, loading, error, setSearchTerm }
}
