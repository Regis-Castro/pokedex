export const searchPokemon = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  const response = await fetch(url).catch( err => err)
  console.log("Resposta:",response)
  return await response.json()
}

export const getPokemons = async ({limit = 10, page = 1}) => {
  const offSet = limit * (page - 1)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`
  const response = await fetch(url)
  return await response.json()
}

export const getPokemonData = async (url) => {
  const response = await fetch(url)
  return await response.json()
}
