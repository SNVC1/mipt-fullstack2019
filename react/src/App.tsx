import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from "./components/Main";
import Personal from "./components/Personal";
import Game from './components/Game'

const App: React.FC = () => {
  return (
      <Router>
          <div className="page">
            <Header/>
            <Route exact path='/' component={Main}/>
            <Route path='/signup' component={Personal}/>
            <Route path='/game' component={Game}/>
            <br/>
            <br/>
          </div>
          <br/>
      </Router>
  );
};

export default App;