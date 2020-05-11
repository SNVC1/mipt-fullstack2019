import BetLine from './Bet'
import {connect} from 'react-redux'

function mapStateToProps(state: IState, {betId}: {betId : number}) { // получение данных из store
  return {
    bet: state.betlines.bets[betId]
  }
}

export default connect(mapStateToProps)(BetLine)