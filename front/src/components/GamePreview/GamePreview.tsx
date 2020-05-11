import React from 'react'
import * as S from './styled'

interface IGame {
  game: IGamePreview
}

const GamePreview: React.FC<IGame> = (props) => {
  const { game } = props
  if (!game) {
    return null
  }
  const { id, start_date, home_club, guest_club, home_score, guest_score } = game
  const game_date = new Date(start_date)
  const date = game_date.getDate()
  const month = game_date.getMonth()
  const year = game_date.getFullYear()
  const hours = game_date.getUTCHours()
  const minutes_ = game_date.getUTCMinutes()
  const minutes = minutes_ == 0 ? '00' : minutes_.toString()
  return (
    <S.PageGame>
      <S.GameRef to={'/game/' + id}>
        <S.GameDate>{date + '.' + month + (hours == 0 ? '.' + year : '') + ' ' + (hours == 0 ? '' : hours + ':' + minutes)}</S.GameDate>
        <S.HomeTeam>{home_club}</S.HomeTeam>
        <S.HomeTeamGoals>{home_score}</S.HomeTeamGoals>
        <S.GuestTeamGoals>{guest_score}</S.GuestTeamGoals>
        <S.GuestTeam>{guest_club}</S.GuestTeam>
      </S.GameRef>
    </S.PageGame>
  )
}

export default GamePreview
