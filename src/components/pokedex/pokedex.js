import {React, useContext } from 'react'
import { Pokemon } from '../pokemon/pokemon'
import styled from 'styled-components'
import { ThemeContext } from "../contexts/theme-context"

export const Pokedex = (props) => {
  const { pokemons } = props

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <H1>Pokédex</H1>

      <Div style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
        {pokemons.map((pokemon, index) => {
          return (
            <>
              <Pokemon key={index} pokemon={pokemon} />
            </>
          )
        })}
      </Div>

    </>
  )
}


const Div = styled.div`
  display: grid;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  width: 70%;
`

const H1 = styled.h1`
  margin: 2rem;
  text-align: center;
`
