import React, { Component } from 'react';
import './styles.css';

import CardSvg from '../cardSvg';

export default class PlayerStats extends Component {

  showCards = () => {
    console.log(this.props.cards);
  }

  render() {
    return (
      <div className="playerStats">
        <img src={this.props.image} alt="Jogador" className="circular playerPhoto" onClick={this.showCards}></img>
        <div className="playerInfo">
          <p className="playerName">{this.props.name}</p>
          <p className="playerWins">
            <span className="primario">{this.props.wins}</span> vitórias
            </p>
        </div>
        <div className="playerCards">
          {this.props.cards.map((carta, i) => (
            <CardSvg key={i} cardType={carta.card} color={carta.color} />
          ))}
        </div>
      </div >
    );
  }
}