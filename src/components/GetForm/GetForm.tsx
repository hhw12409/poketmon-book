import React from 'react'
import { GetFormContainer } from './GetForm.styles'

interface IGetForm {
  pokeId: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const GetForm = ({ pokeId, onChange }: IGetForm) => {
  const onSearchFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <GetFormContainer onSubmit={onSearchFormSubmit}>
      <h1>poke-id:</h1>
      <input placeholder="id" value={pokeId} onChange={onChange} />
      <button>Get pokemon!!</button>
    </GetFormContainer>
  )
}

export default GetForm
