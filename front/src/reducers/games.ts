import { FETCH_GAMES, FETCH_UPCOMING_GAME, FETCH_FINISHED_GAME } from '../actions/games'

const initialState = {
  upcoming: {
    gameList: Array(),
    games: {}
  },
  finished: {
    gameList: Array(),
    games: {}
  }
}

interface IGame {
  result: number[],
  entities: {
    game: {
      [key: number]: IGamePreview
    }
  }
}

interface IGameAction {
  type: string
  payload: {
    upcoming: IGame,
    finished: IGame
  }
}

export default function(state = initialState, action: IGameAction) {
  switch ((action.type)) {
    case FETCH_GAMES: {
      return {
        ...state,
        upcoming: {
          games: action.payload.upcoming.entities.game,
          gameList: action.payload.upcoming.result
        },
        finished: {
          games: action.payload.finished.entities.game,
          gameList: action.payload.finished.result
        }
      }
    }
    case FETCH_UPCOMING_GAME: {
      return {
        ...state,
        upcoming: {
          games: {
            ...state.upcoming.games,
            ...action.payload.upcoming.entities.game
          },
          gameList: [action.payload.upcoming.result],
        }
      }
    }
    case FETCH_FINISHED_GAME: {
      return {
        ...state,
        finished: {
          games: {
            ...state.finished.games,
            ...action.payload.finished.entities.game
          },
          gameList: [action.payload.finished.result],
        }
      }
    }
  }
  return state;
}