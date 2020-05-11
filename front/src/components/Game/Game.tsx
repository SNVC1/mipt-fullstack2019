import React from 'react'
import getIsAuth from '../../utils/getIsAuth'
import * as S from './styled'
import {URL} from '../../actions/games'

function logo(club_name: string) {
  switch (club_name) {
    case 'Ливерпуль':
      return 'https://st1.soccer365.ru/s1/logo/6V9tGK_79.png'
    case 'Лестер Сити':
      return 'https://st1.soccer365.ru/s1/logo/EJTE0S_77.png'
    case 'Ман Сити':
      return 'https://st1.soccer365.ru/s1/logo/2i273Kjon_90.png'
    case 'Челси':
      return 'https://st1.soccer365.ru/s1/logo/aJDhP_184.png'
    case 'Ман Юнайтед':
      return 'https://st1.soccer365.ru/s1/logo/ILvYkq4_92.png'
    case 'Вулверхэмптон':
      return 'https://st1.soccer365.ru/s1/logo/1KWoQ_41.png'
    case 'Тоттенхэм':
      return 'https://st1.soccer365.ru/s1/logo/WvG0V_163.png'
    case 'Шеффилд Ютд':
      return 'https://st1.soccer365.ru/s1/logo/lEegN3NFe_6992.png'
    case 'Арсенал':
      return 'https://st1.soccer365.ru/s1/logo/B6O1W_2.png'
    case 'Кристал Пэлас':
      return 'https://st1.soccer365.ru/s1/logo/uuHQkQS_67.png'
    case 'Ньюкасл':
      return 'https://st1.soccer365.ru/s1/logo/oOTC4RK_210.png'
    case 'Брайтон':
      return 'https://st1.soccer365.ru/s1/logo/W99fo32_265.png'
    case 'Бернли':
      return 'https://st1.soccer365.ru/s1/logo/eGItBJS_6983.png'
    case 'Эвертон':
      return 'https://st1.soccer365.ru/s1/logo/lwdt0c2fc_191.png'
    case 'Борнмут':
      return 'https://st1.soccer365.ru/s1/logo/IoPsayBOG_6998.png'
    case 'Вест Хэм':
      return 'https://st1.soccer365.ru/s1/logo/LU0pW_33.png'
    case 'Астон Вилла':
      return 'https://st1.soccer365.ru/s1/logo/TJoULs2_214.png'
    case 'Саутгемптон':
      return 'https://st1.soccer365.ru/s1/logo/30kHvtvb_759.png'
    case 'Норвич Сити':
      return 'https://st1.soccer365.ru/s1/logo/zhBqj_227.png'
    case 'Уотфорд':
      return 'https://st1.soccer365.ru/s1/logo/6L6eK_6978.png'
  }
}

export interface IGameStateProps {
  game: IGamePreview
}

export interface IGameOwnProps {
  history?: {
    push: (url: string) => void
  }
  match: {
    params: {
      gameId: number
    }
  }
}

export interface IGameDispatchProps {
  fetchGame: (gameId: number) => void
}

interface IGameProps extends IGameStateProps, IGameOwnProps, IGameDispatchProps {}

const Game: React.FC<IGameProps> = (props) => {
  const {fetchGame, match, game, history} = props

  const [sum, setSum] = React.useState<number>()
  const [type, setType] = React.useState<string>('')
  const [cf, setCf] = React.useState<number>()

  React.useEffect(() => {
    fetchGame(match.params.gameId)
  }, [])

  const Submit = React.useCallback(
    async (event) => {
      event.preventDefault()
      await fetch(`${URL}create_bet/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          game: match.params.gameId,
          type,
          sum,
          cf
        })
      })
      if (history) {
        history.push('/personal')
      }
    },
    [type, sum, cf]
  )

  if (!game) {
    return null
  }

  const { start_date, home_club, guest_club, home_score, guest_score, both_cf, defeat_cf, draw_cf, not_both, victory_cf } = game
  const game_date = new Date(start_date)
  const date = game_date.getDate()
  const month = game_date.getMonth()
  const year = game_date.getFullYear()
  const hours = game_date.getUTCHours()
  const minutes_ = game_date.getUTCMinutes()
  const minutes = minutes_ == 0 ? '00' : minutes_.toString()

  return (
    <div>
      <S.PageTime>
        {date + '.' + month + (hours == 0 ? '.' + year : '') + ' ' + (hours == 0 ? '' : hours + ':' + minutes)}
      </S.PageTime>

      <S.PageContainer>
        <S.PageHomeClub>
          <S.PageHomeClubInfo>
            <img src={logo(home_club)} alt={undefined} />
            <S.PageHomeClubName >{home_club}</S.PageHomeClubName>
          </S.PageHomeClubInfo>
          <S.PageHomeClubScore >{home_score}</S.PageHomeClubScore>
        </S.PageHomeClub>
        <S.PageGuestClub >
          <S.PageGuestClubScore >{guest_score}</S.PageGuestClubScore>
          <S.PageGuestClubInfo >
            <img src={logo(guest_club)} alt={undefined} />
            <S.PageGuestClubName >{guest_club}</S.PageGuestClubName>
          </S.PageGuestClubInfo>
        </S.PageGuestClub>
      </S.PageContainer>

      <form>
        <S.PageBetBlock>
          <input
            type="radio"
            name="bet"
            id="bet_1"
            onChange={() => {
              setType('1')
              setCf(victory_cf)
            }}
          />
          <label htmlFor="bet_1">П1 {victory_cf}</label>
          <input
            type="radio"
            name="bet"
            id="bet_2"
            onChange={() => {
              setType('2')
              setCf(draw_cf)
            }}
          />
          <label htmlFor="bet_2">X {draw_cf}</label>
          <input
            type="radio"
            name="bet"
            id="bet_3"
            onChange={() => {
              setType('3')
              setCf(defeat_cf)
            }}
          />
          <label htmlFor="bet_3">П2 {defeat_cf}</label>
          <input
            type="radio"
            name="bet"
            id="bet_4"
            onChange={() => {
              setType('4')
              setCf(both_cf)
            }}
          />
          <label htmlFor="bet_4">ОЗ да {both_cf}</label>
          <input
            type="radio"
            name="bet"
            id="bet_5"
            onChange={() => {
              setType('5')
              setCf(not_both)
            }}
          />
          <label htmlFor="bet_5">ОЗ нет {not_both}</label>
        </S.PageBetBlock>

        <S.PageBetValueBlock>
          <S.InputBetSum
            id="input_1"
            type="number"
            required
            onChange={(event) => {
              setSum(parseInt(event.target.value))
            }}
          />
          <label htmlFor="input_1">Сумма ставки</label>
          <S.PushBetButton
            id="push_bet"
            type={'submit'}
            onClick={Submit}
            disabled={
              home_score != '-' ||
              guest_score != '-' ||
              sum == undefined ||
              type == '' ||
              isNaN(sum) || !getIsAuth()
            }
          >
            OK
          </S.PushBetButton>
        </S.PageBetValueBlock>
      </form>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Game
