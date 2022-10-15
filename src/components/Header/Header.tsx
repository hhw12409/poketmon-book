import { HeaderContainer, BallImg } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Search your pokemon</h1>
      <BallImg src={'ball.png'} alt="monster ball" />
    </HeaderContainer>
  )
}

export default Header
