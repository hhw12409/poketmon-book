import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <h1>Sorry, PAGE NOT FOUND</h1>
      <Link to="/">
        <h1>GO BACK Home</h1>
      </Link>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #ffdc00;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
  h1:first-child {
    font-weight: 800;
  }
  a {
    text-decoration: underline;
  }
`
