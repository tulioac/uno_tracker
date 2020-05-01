import React from 'react';
import './styles.css';

import Logosvg from './svg/uno.svg';

import Winner from './components/winner';
import AddCard from './components/addCard';
import Stats from './components/stats';

const App = () => (
  <div id="game">
    <img src={Logosvg} id="logo"></img>
    <Winner />
    <div className="cards">
      <Stats />
    </div>
  </div>
);


export default App;
