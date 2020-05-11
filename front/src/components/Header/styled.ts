import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderMenu = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const HeaderRef = styled(Link) `
  width: 32.99%;
  text-decoration: none;
  color: yellow;
`

export const HeaderItem = styled.div `
  background-color: darkolivegreen;
  text-align: center;
  padding-bottom: 4px;
`