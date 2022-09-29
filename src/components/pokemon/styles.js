import styled from 'styled-components'
import themes from '../contexts/default-theme'

export const Div = styled.div`
  text-align: center;
  color: ${themes.color};
  background-color: ${(props) => props.backgroundColor};
  `

export const styledDiv = styled.div`
  text-align: center;
  color: red;
  background-color: yellow;
  `

