import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Navbar } from '../components/navbar/navbar'
import { Pokedex } from '../components/pokedex/pokedex'
import { getPokemonData, getPokemons } from '../pokeapi'
import { ThemeTogglerButton } from '../components/theme-toggler-button/theme-toggler-button'


function Home() {
  const [pokemons, setPokemons] = useState([])
  const [offSet, setOffSet] = useState(1)

  const fetchPokemons = async () => {
    const data = await getPokemons({ page: offSet })
    const promises = data.results.map(async (pokemon) => {
      return getPokemonData(pokemon.url)
    })

    const results = await Promise.all(promises)
    if (offSet !== 1) {
      return setPokemons(prevState => [...prevState, ...results])
    }

    return setPokemons(results)

  }

  useEffect(() => {
    fetchPokemons()
  }, [offSet])


  return (
    <>
        <Navbar />
        <ThemeTogglerButton />
        <Pokedex pokemons={pokemons} />
        <Button onClick={() => setOffSet(offSet + 1)}>carregar mais</Button>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const Button = styled.button`
  margin: 5rem 45%;
  
`

export default Home
