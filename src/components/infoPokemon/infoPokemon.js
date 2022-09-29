import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Pokemon} from '../pokemon/pokemon'
import {searchPokemon} from '../../pokeapi'
import * as S from '../pokemon/styles' 

export const InfoPokemon = () => {
  const [pokemon, setPokemon] = useState()

  let {id} = useParams()

  const getPoke = async () => {
    const poke = await searchPokemon(id)
    return setPokemon(poke)
  }

  useEffect( () => {
    getPoke()
  }, [id])

  return(
    <S.Div>
      <Pokemon pokemon={pokemon} />
    </S.Div>
  )
}