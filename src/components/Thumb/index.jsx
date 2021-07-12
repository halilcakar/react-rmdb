import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => {
  console.log({ image, movieId, clickable })

  return (
    <div>
      <Image src={image} alt="movie-thumb" />
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default Thumb
