import axios, { AxiosRequestConfig, Method } from 'axios'
import { QueryFunction } from '@tanstack/react-query'

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

const request = async (config: AxiosRequestConfig) => {
  const response = await axios(config)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data
}

interface IArtwork {
  front_default: string
}

interface IOther {
  ['official-artwork']: IArtwork
}

interface ISprites {
  other: IOther
}

export interface IPoke {
  id: number
  name: string
  sprites: ISprites
}

interface PokeFetcher {
  getPokeMon: QueryFunction<IPoke>
}

const API: PokeFetcher = {
  getPokeMon: ({ queryKey }) => {
    return request({
      method: 'GET' as Method,
      url: `${API_URL}${String(queryKey[1])}`,
    })
  },
}

export default API
