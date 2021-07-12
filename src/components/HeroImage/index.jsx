import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { Content, Wrapper, Text } from './HeroImage.styles'

const HeroImage = ({ title, text, image }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
)

HeroImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default HeroImage
