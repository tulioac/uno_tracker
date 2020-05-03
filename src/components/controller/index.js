import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

import players from '../../data/data.json';

export default class Controller extends Component {

  addCardToPlayer = (cardInfo) => {
    console.log("Pai");
    console.log(cardInfo);
  }

  render() {
    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner />
        <div className="cards">
          <AddCard players={players} addCardToPlayer={this.addCardToPlayer.bind(this)} />
          <Stats players={players} />
        </div>
      </div>
    );
  }
}