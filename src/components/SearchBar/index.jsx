import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
// Styles
import { Content, Wrapper } from './SearchBar.styles'

// Image
import searchIcon from '../../images/search-icon.svg'

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.currrent) {
      initial.currrent = false
      return undefined
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="search"
          placeholder="Search movie"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </Content>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
}

export default SearchBar
