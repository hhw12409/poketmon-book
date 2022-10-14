import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, BallImg } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Search your pokemon</h1>
      <Link to="myPokemon">
        <BallImg src={'ball.png'} alt="monster ball" />
      </Link>
    </HeaderContainer>
  )
}

export default Header
