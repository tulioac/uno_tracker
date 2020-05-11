import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

import players from '../../data/data.json';

export default class Controller extends Component {

  // TODO: Receber informações do JSON

  state = {
    "andré": [],
    "daniel": [],
    "dumbo": [],
    "sara": [],
    "malu": [],
  }

  addCardToPlayer = (cardInfo) => {
    const { player, card, color } = cardInfo;

    this.setState({
      [player]: [{ card, color }, ...this.state[player]]
    })
  }

  render() {
    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner />
        <div className="cards">
          <AddCard players={players} addCardToPlayer={this.addCardToPlayer.bind(this)} />
          <Stats players={players} playersCards={this.state} />
        </div>
      </div>
    );
  }
}