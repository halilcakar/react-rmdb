import React from 'react'

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// Components
import HeroImage from './HeroImage'
// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
// Image
// import NoImage from '../images/no_image.jpg'

const Home = () => {
  const { error, loading, state } = useHomeFetch()

  console.log({ error, loading, state })

  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
    </>
  )
}

export default Home
