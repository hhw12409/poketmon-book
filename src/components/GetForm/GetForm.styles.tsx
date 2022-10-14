import styled from 'styled-components'

const GetFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  h1 {
    font-weight: 600;
  }
  input,
  button {
    border: none;
    border-radius: 5px;
    padding: 7px;
  }
  button {
    color: white;
    background-color: blue;
    cursor: pointer;
  }
`

export { GetFormContainer }
