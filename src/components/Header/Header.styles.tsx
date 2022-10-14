import styled, { keyframes } from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0px;
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    margin-right: 10px;
  }
`

const ballRotation = keyframes`
  0% {
    rotate: calc(0deg);
  }
  25% {
    rotate: calc(90deg);
  }
  50% {
    rotate: calc(180deg);
  }
  75% {
    rotate: calc(270deg);
  }
  100% {
    rotate: calc(360deg);
  }
`

const BallImg = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  &:hover {
    animation: ${ballRotation} 0.5s infinite;
  }
`

export { HeaderContainer, BallImg }
