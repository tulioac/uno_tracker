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
        </div>
        <div className="body">
          <PlayerStats image={"Imagem"} name={"Cláudio"} wins={"35"} />
          <PlayerStats image={"Imagem"} name={"Júnior"} wins={"12"} />
          <PlayerStats image={"Imagem"} name={"Claudete"} wins={"50"} />
          <PlayerStats image={"Imagem"} name={"Jarbas"} wins={"5"} />
        </div>
      </div>
    );
  }
}