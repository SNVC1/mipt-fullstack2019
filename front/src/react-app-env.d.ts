/// <reference types="react-scripts" />

interface IBet {
  id: number
  player: number
  creation_date: Date
  game: IGamePreview
  type: string
  sum: number
  status: boolean
  cf: number
}

interface IGamePreview {
  id: number
  start_date: Date
  home_club: string
  guest_club: string
  home_score: string
  guest_score: string
  victory_cf: number
  defeat_cf: number
  draw_cf: number
  both_cf: number
  not_both: number
}

interface IState {
  gamepreviews: IGameState,
  betlines: IBetState
}

interface IBetState {
  betList: number[],
  bets: {[key: number]: IBet}
}

interface IGameState {
  upcoming: {
    games: {[key: number]: IGamePreview},
    gameList: number[]
  },
  finished: {
    games: {[key: number]: IGamePreview},
    gameList: number[]
  }
}