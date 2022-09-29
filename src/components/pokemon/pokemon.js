import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { ThemeContext } from "../contexts/theme-context"

export const Pokemon = (props) => {
  const { pokemon } = props

  const { theme } = useContext(ThemeContext)

  return (
    <>

      <S.styledDiv>
        <Link to={`/poke/${pokemon?.id}`} >

          <h3>#{pokemon?.id} - {pokemon?.name}</h3>
          <img src={pokemon?.sprites.front_default} />

        </Link>

        {
          pokemon ? (
            pokemon.types.map((type, index) => {
              return (
                <div key={index}>
                  <p>{type.type.name}</p>
                </div>
              )
            })
          ) : ("")
        }

        <Link to="/" >
          <p>Voltar</p>
        </Link>

      </S.styledDiv>

    </>
  )
}

