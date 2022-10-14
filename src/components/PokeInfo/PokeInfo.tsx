import React from 'react'
import { IPoke } from '../../apis/apis'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { PokeInfoContainer } from './PokeInfo.styles'

interface IPokeInfo {
  data: IPoke | undefined
  pokeId: string
}

const PokeInfo = ({ data, pokeId }: IPokeInfo) => {
  return (
    <PokeInfoContainer>
      {data?.id ? (
        <>
          <h4>#{data?.id}</h4>
          <img src={data?.sprites.other['official-artwork'].front_default} />
          <h1>{data?.name}</h1>
        </>
      ) : !data?.id && Number(pokeId) >= 1000 ? (
        <ErrorMessage />
      ) : null}
    </PokeInfoContainer>
  )
}

export default PokeInfo
