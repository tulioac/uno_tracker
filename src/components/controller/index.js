import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

import players from '../../data';

export default class Controller extends Component {
  state = { jogadores: players };

  addCardToPlayer = (cardInfo) => {
    const { player, card, color } = cardInfo;

    this.setState(prevState => ({
      jogadores: prevState.jogadores.map(
        (jogador) => jogador.name === player ? { ...jogador, cards: [{ card, color }, ...jogador.cards] } : jogador
      )
    }));
  }

  render() {
    const teste = {
      player: "dumbo",
      card: "blue",
      color: "zero",
    }

    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo" onClick={() => this.addCardToPlayer(teste)}></img>
        <Winner players={this.state} />
        <div className="cards">
          <AddCard players={this.state} addCardToPlayer={this.addCardToPlayer.bind(this)} />
          <Stats players={this.state} />
        </div>
      </div>
    );
  }
}