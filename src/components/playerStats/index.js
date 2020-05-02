import React, { Component } from 'react';
import './styles.css';

import carta from '../../svg/uncolored/0.svg';

export default class PlayerStats extends Component {
  state = {
    cards: []
  }

  render() {
    return (
      <div className="playerStats">
        <img src={this.props.image} alt="Jogador" className="circular playerPhoto"></img>
        <div className="playerInfo">
          <p className="playerName">{this.props.name}</p>
          <p className="playerWins">
            <span className="primario">{this.props.wins}</span> vitórias
            </p>
        </div>
        <div className="playerCards">
          <img src={carta} className="carta" alt="Carta"></img>
          <img src={carta} className="carta" alt="Carta"></img>
          <img src={carta} className="carta" alt="Carta"></img>
        </div>
      </div>
    );
  }
}