import GamePreview from './GamePreview'
import {connect} from 'react-redux'

function mapStateToProps(state: IState, {gameId}: {gameId : number}) { // получение данных из store
  return {
    game: state.gamepreviews.upcoming.games[gameId] || state.gamepreviews.finished.games[gameId]
  }
}

export default connect(mapStateToProps)(GamePreview)