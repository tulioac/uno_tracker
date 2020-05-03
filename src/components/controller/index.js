import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

import players from '../../data/data.json';

export default class Controller extends Component {
  state = {
    "andre": [],
    "daniel": [],
    "dumbo": [],
    "sara": []
  }

  addCardToPlayer = (cardInfo) => {
    const { player, card, color } = cardInfo;

    this.setState({
      [player]: [{ card, color }, ...this.state[player]]
    })
  }

  // TODO: Passar via props cardInfo para Stats adicionar no Jogador

  render() {
    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner />
        <div className="cards">
          <AddCard players={players} addCardToPlayer={this.addCardToPlayer.bind(this)} />
          <Stats players={players} passCardtoPlayer={this.passCardtoPlayer} />
        </div>
      </div>
    );
  }
}