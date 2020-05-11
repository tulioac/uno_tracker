import React, { Component } from 'react';
import './styles.css';

import PlayerStats from '../playerStats';

export default class Stats extends Component {
  render() {
    const jogadores = this.props.players.jogadores.map(({ name, wins, cards, picture }) => (
      <PlayerStats key={name} name={name} wins={wins} cards={cards} image={picture} />
    ))

    return (
      <div className="card stats">
        <div className="title">
          <h1>
            Jogadores
          </h1>
          <h1>
            Cartas Ausentes
          </h1>
        </div>
        <div className="body">
          {jogadores}
        </div>
      </div>
    );
  }
}