import React, { useState } from 'react'
import styled from 'styled-components'

export const SearchBar = ({onSearch}) => {

  const [search, setSearch] = useState()

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <>
      <div>
        <Input placeholder='digite o nome do pokémon' onChange={(e) => setSearch(e.target.value)} onKeyPress={onKeyPressHandler} />
        <Button onClick={() => onSearch(search)}>Buscar</Button>
      </div>
    </>
  )
}


const Input = styled.input`
  border: 1px solid grey;
  border-radius: 1px;
  margin-right: 0.3rem;
`

const Button = styled.button`
  width: 4rem;
`


