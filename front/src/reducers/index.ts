import {combineReducers} from 'redux'
import gamesReducer from './games'
import betsReducer from './bets'


export default combineReducers({gamepreviews: gamesReducer, betlines: betsReducer})