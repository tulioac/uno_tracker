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
    <AddCard />
    <Stats />
  </div>
);


export default App;
