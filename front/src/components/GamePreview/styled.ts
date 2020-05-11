import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageGame = styled.div `
  &:hover {
    background-color: green;
  }
`
export const GameRef = styled(Link) `
  text-decoration: none;
  cursor: pointer;
  border: #0b5010 solid 1px;
  width: 100%;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
`

export const GameDate = styled.div `
  margin-left: 5%;
  width: 11%;
  text-align: right;
`

export const HomeTeam = styled.div `
  margin-left: 15%;
  width: 16%;
  text-align: right;
`

export const HomeTeamGoals = styled.div `
  margin-left: 2%;
`
export const GuestTeamGoals = styled.div `
  margin-left: 1.5%;
`

export const GuestTeam = styled.div `
  margin-left: 2%;
`