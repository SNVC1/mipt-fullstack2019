import Main from './Main'
import {fetchGames} from '../../actions/games'
import {connect} from 'react-redux'

function mapStateToProps(state: IState) { // получение данных из store
  return {
    gameList: {
      upcoming: state.gamepreviews.upcoming.gameList,
      finished: state.gamepreviews.finished.gameList
    }
  }
}

const mapDispatchToProps = { // передача и вызов action из компоненты
  fetchGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)