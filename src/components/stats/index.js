import React, { Component } from 'react';
import './styles.css';

import PlayerStats from '../playerStats';

import { andre, daniel, dumbo, sara, malu } from '../fotos';

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
          <PlayerStats image={dumbo} name={"Dumbo"} wins={"38"} cards={this.props.playersCards.dumbo} />
          <PlayerStats image={sara} name={"Sara"} wins={"36"} cards={this.props.playersCards.sara} />
          <PlayerStats image={andre} name={"André"} wins={"22"} cards={this.props.playersCards.andre} />
          <PlayerStats image={daniel} name={"Daniel"} wins={"21"} cards={this.props.playersCards.daniel} />
          <PlayerStats image={malu} name={"Malu"} wins={"4"} cards={this.props.playersCards.malu} />
        </div>
      </div>
    );
  }
}