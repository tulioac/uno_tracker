import React, { Component } from 'react';
import './styles.css';

import PlayerStats from '../playerStats';

import fotos from '../fotos';

export default class Stats extends Component {
  render() {
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
          <PlayerStats image={fotos.dumbo} name={"Dumbo"} wins={"38"} cards={this.props.playersCards.dumbo} />
          <PlayerStats image={fotos.sara} name={"Sara"} wins={"36"} cards={this.props.playersCards.sara} />
          <PlayerStats image={fotos.andré} name={"André"} wins={"22"} cards={this.props.playersCards.andre} />
          <PlayerStats image={fotos.daniel} name={"Daniel"} wins={"21"} cards={this.props.playersCards.daniel} />
          <PlayerStats image={fotos.malu} name={"Malu"} wins={"4"} cards={this.props.playersCards.malu} />
        </div>
      </div>
    );
  }
}