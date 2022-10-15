import React from 'react'
import { IPoke } from '../../apis/apis'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { PokeInfoContainer } from './PokeInfo.styles'

interface IPokeInfo {
  data: IPoke | undefined
  isError: boolean
}

const PokeInfo = ({ data, isError }: IPokeInfo) => {
  return (
    <PokeInfoContainer>
      {data?.id ? (
        <>
          <h4>#{data?.id}</h4>
          <img src={data?.sprites.other['official-artwork'].front_default} />
          <h1>{data?.name}</h1>
        </>
      ) : isError ? (
        <ErrorMessage />
      ) : null}
    </PokeInfoContainer>
  )
}

export default PokeInfo
