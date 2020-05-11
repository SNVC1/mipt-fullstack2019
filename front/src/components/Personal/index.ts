import Personal from './Personal'
import {fetchBets} from '../../actions/bets'
import {connect} from 'react-redux'

function mapStateToProps(state: IState) { // получение данных из store
  return {
    betList: state.betlines.betList
  }
}

const mapDispatchToProps = { // передача и вызов action из компоненты
  fetchBets
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)