import {betsNormalize} from '../schemas/bets'
import {URL} from './games'

export const FETCH_BETS = 'FETCH_BETS'

export function fetchBets() {
  return async (dispatch: any) => {
    const response = await fetch(`${URL}bets/`)
    const data = await response.json()
    dispatch({
      type: FETCH_BETS,
      payload: betsNormalize(data)
    })
  }
}