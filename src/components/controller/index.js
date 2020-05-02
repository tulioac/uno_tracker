import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

export default class Controller extends Component {
  render() {
    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner />
        <div className="cards">
          <AddCard />
          <Stats />
        </div>
      </div>
    );
  }
}