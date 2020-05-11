import { FETCH_BETS } from '../actions/bets'

const initialState = {
  betList: Array(),
  bets: {}
}

interface IBetAction {
  type: string
  payload: {
    result: number[],
    entities: {
      bet: {
        [key: number]: IBet
      }
    }
  }
}

export default function(state = initialState, action: IBetAction) {
  switch ((action.type)) {
    case FETCH_BETS:
      return {
        ...state,
        betList: action.payload.result,
        bets: action.payload.entities.bet
      }
  }
  return state;
}