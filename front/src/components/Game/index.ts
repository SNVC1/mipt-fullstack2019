import Game, { IGameStateProps } from './Game'
import {fetchGame} from '../../actions/games'
import {connect} from 'react-redux'
import {IGameOwnProps, IGameDispatchProps} from './Game'

function mapStateToProps(state: IState, props: IGameOwnProps): IGameStateProps { // получение данных из store
  return {
    game: state.gamepreviews.finished.games[Number(props.match.params.gameId)] || state.gamepreviews.upcoming.games[Number(props.match.params.gameId)]
  }
}

const mapDispatchToProps: IGameDispatchProps = { // передача и вызов action из компоненты
  fetchGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)