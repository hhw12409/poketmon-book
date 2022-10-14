import styled from 'styled-components'

const PokeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  h4,
  h1 {
    font-weight: 800;
  }
  img {
    width: 250px;
    height: 250px;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  h2 {
    color: red;
    font-size: 1rem;
    font-weight: 500;
  }
`

export { PokeInfoContainer }
