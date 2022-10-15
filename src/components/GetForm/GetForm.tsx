import React from 'react'
import { GetFormContainer } from './GetForm.styles'
import { useSetRecoilState } from 'recoil'
import isClick from '../../atoms/isClick'

interface IGetForm {
  pokeId: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const GetForm = ({ pokeId, onChange }: IGetForm) => {
  const setBtnClick = useSetRecoilState(isClick)

  const onSearchFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const onGetPokeMonInfo = () => {
    setBtnClick(prev => !prev)
  }

  return (
    <GetFormContainer onSubmit={onSearchFormSubmit}>
      <h1>poke-id:</h1>
      <input placeholder="id" value={pokeId} onChange={onChange} />
      <button onClick={onGetPokeMonInfo}>Get pokemon!!</button>
    </GetFormContainer>
  )
}

export default GetForm
