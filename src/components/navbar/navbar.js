import React, { useContext, useState } from 'react'
import { SearchBar } from './search-bar'
import styled from 'styled-components'
import { searchPokemon } from '../../pokeapi'
import { ThemeContext } from "../contexts/theme-context"


export const Navbar = () => {
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  const [pokemon, setPokemon] = useState()
  const[notFound, setNotFound] = useState(false)

  const { theme } = useContext(ThemeContext)

  const onSearchHandler = async (pokemonName) => {
    if(pokemonName === ""){
      return setPokemon()
    }

    try {
      const result = await searchPokemon(pokemonName)
      setPokemon(result)
      setNotFound(false)
      
    } catch (error) {
      setNotFound(true)
    }
  }


  return (
   <>
    <Nav style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
      <img alt="logo" src={logoImg} />
      <SearchBar onSearch={onSearchHandler} />
    </Nav>

    {!notFound && pokemon ? (
      <Div>
        <h3>Nome: {pokemon?.name}</h3>
        <img src={pokemon?.sprites.front_default}/>
      </Div>
    ) : (<Div>
      {notFound ? (<p>não encontrado</p>): "" }
    </Div>)}
    </>
  )
}

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-around;
`

const Div = styled.div`
  text-align: center;
`