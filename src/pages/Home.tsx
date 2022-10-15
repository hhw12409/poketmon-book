import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import API from '../apis/apis'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import GetForm from '../components/GetForm/GetForm'
import PokeInfo from '../components/PokeInfo/PokeInfo'
import Loading from '../components/Loading/Loading'
import { useRecoilState } from 'recoil'
import isClick from '../atoms/isClick'

const Home = () => {
  const [pokeId, setPokeId] = useState('')
  const [isBtnClick, setIsBtnClick] = useRecoilState(isClick)
  const { isLoading, data } = useQuery(['pokemon', pokeId], API.getPokeMon, {
    enabled: isBtnClick,
    onSuccess: () => {
      setIsBtnClick(false)
    },
    onError: e => {
      console.log(e)
    },
  })

  const onChangePokeIdValue = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setPokeId(value)
  }

  return (
    <Container>
      <Header />
      <GetForm pokeId={pokeId} onChange={onChangePokeIdValue} />
      {isLoading && isBtnClick ? (
        <Loading />
      ) : (
        <PokeInfo data={data} pokeId={pokeId} />
      )}
    </Container>
  )
}

export default Home

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #ffdc00;
`
