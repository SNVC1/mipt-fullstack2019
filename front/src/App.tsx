import React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from "./components/Main";
import Personal from "./components/Personal";
import Game from './components/Game'
import SignUp from './components/SignUp'
import initStore from './store'
import getIsAuth from './utils/getIsAuth'
import * as S from './styled'

const App: React.FC = () => {
  return (
    <Provider store={initStore()}>
      <S.GlobalStyle/>
      <Router>
        <S.Page className="page">
          <Header/>
          <Route exact path='/' component={Main}/>
          {getIsAuth() ? (<Route path='/personal' component={Personal}/>) : (<Route path='/signup' component={SignUp}/>)}
          <Route path='/game/:gameId' component={Game}/>
          <br/>
          <br/>
        </S.Page>
        <br/>
      </Router>
    </Provider>
  );
};

export default App;