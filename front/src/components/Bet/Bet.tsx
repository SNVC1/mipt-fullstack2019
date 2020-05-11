import React from 'react'
import * as S from './styled'
import {URL} from '../../actions/games'

interface IBetLine {
  bet: IBet
}


const BetLine: React.FC<IBetLine> = (props) => {
  const { bet } = props
  if (!bet) {
    return null
  }
  const { creation_date, game, type, sum, cf, id } = bet
  const {status: oldStatus} = bet
  let status = oldStatus
  const { home_club, home_score, guest_club, guest_score } = game
  let result = '-'
  const bet_date = new Date(creation_date)
  const date = bet_date.getDate()
  const month = bet_date.getMonth()
  const year = bet_date.getFullYear()
  const hours = bet_date.getUTCHours()
  const minutes_ = bet_date.getUTCMinutes()
  const minutes = minutes_ == 0 ? '00' : minutes_.toString()
  if (home_score != '-' && guest_score != '-') {
    if (status == null) {
      // ставка еще не рассчитана, рассчитываем
      switch (type) {
        case '1':
          status = home_score > guest_score
          if (status) {
            result = (sum * cf).toString()
          }
          break;
        case '2':
          status = home_score == guest_score
          if (status) {
            result = (sum * cf).toString()
          }
          break;
        case '3':
          status = home_score < guest_score
          if (status) {
            result = (sum * cf).toString()
          }
          break;
        case '4':
          status = parseInt(home_score) > 0 && parseInt(guest_score) > 0
          if (status) {
            result = (sum * cf).toString()
          }
          break;
        case '5':
          status = parseInt(home_score) == 0 || parseInt(guest_score) == 0
          if (status) {
            result = (sum * cf).toString()
          }
          break;
      }
      //push changes
      fetch(`${URL}update_bet/${id}/`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status
        })
      })
    } else {
      // ставка уже была рассчитана
      if (!status) {
        result = '0'
      } else {
        result = (cf * sum).toString()
      }
    }
  }

  let type_str = 'П1'
  switch(type) {
    case '1':
      type_str = 'П1'
      break;
    case '2':
      type_str = 'X'
      break;
    case '3':
      type_str = 'П2'
      break;
    case '4':
      type_str = 'ОЗ - да'
      break;
    case '5':
      type_str = 'ОЗ - нет'
      break;
  }

  return (
    <S.TrDecorator>
      <S.TdDecorator>{date + '.' + month + '.' + year + ' ' + hours + ':' + minutes}</S.TdDecorator>
      <S.TdDecorator>{home_club + ' ' + home_score + ':' + guest_score + ' ' + guest_club}</S.TdDecorator>
      <S.TdDecorator>{type_str}</S.TdDecorator>
      <S.TdDecorator>{sum}</S.TdDecorator>
      <S.TdDecorator>{result}</S.TdDecorator>
    </S.TrDecorator>
  )
}

export default BetLine
