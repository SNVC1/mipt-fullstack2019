import { gameNormalize, gamesNormalize } from '../schemas/games'
import {Dispatch} from 'redux'
export const FETCH_GAMES = 'FETCH_GAMES'
export const FETCH_UPCOMING_GAME = 'FETCH_UPCOMING_GAME'
export const FETCH_FINISHED_GAME = 'FETCH_FINISHED_GAME'
export const URL = "http://localhost:8000/api/"

export function fetchGames() {
  return async (dispatch: Dispatch) => {
    const response_1 = await fetch(`${URL}upcoming_games/`)
    const response_2 = await fetch(`${URL}finished_games/`)
    const upcoming = await response_1.json()
    const finished = await response_2.json()
    dispatch({
      type: FETCH_GAMES,
      payload: {
        upcoming: gamesNormalize(upcoming),
        finished: gamesNormalize(finished)
      }
    })
  }
}

export function fetchGame(gameId: number) {
  return async (dispatch: Dispatch, getStore: any) => {
    const state = getStore()
    let response = await fetch(`${URL}games/${gameId}/`)
    const game = await response.json()
    dispatch({
      type: FETCH_UPCOMING_GAME,
      payload: {
        upcoming: gameNormalize(game),
      }
    })
  }
}