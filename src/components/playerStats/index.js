import React, { Component } from 'react';
import './styles.css';

export default class PlayerStats extends Component {
  state = {
    cards: []
  }

  render() {
    return (
      <div className="playerStats">
        <div className="playerStats">
          {this.props.image}
          <div className="playerInfo">
            <p className="playerName">{this.props.name}</p>
            <p className="playerWins">
              <span className="primario">{this.props.wins}</span> vitórias
            </p>
          </div>
          <div className="playerCards">Cartas</div>
        </div>
      </div>
    );
  }
}