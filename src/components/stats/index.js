import React, { Component } from 'react';
import './styles.css';

import PlayerStats from '../playerStats';

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
          <div className="body">
            <PlayerStats image={"Imagem"} name={"nome"} wins={"50"} />

          </div>
        </div>
      </div>
    );
  }
}