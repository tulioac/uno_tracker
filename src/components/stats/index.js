import React, { Component } from 'react';
import './styles.css';

import PlayerStats from '../playerStats';

import andre from '../../img/players/andre.jfif';
import daniel from '../../img/players/daniel.jfif';
import dumbo from '../../img/players/dumbo.jfif';
import sara from '../../img/players/sara.jfif';

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
          <PlayerStats image={andre} name={"André"} wins={"19"} />
          <PlayerStats image={daniel} name={"Daniel"} wins={"11"} />
          <PlayerStats image={dumbo} name={"Dumbo"} wins={"31"} />
          <PlayerStats image={sara} name={"Sara"} wins={"25"} />
        </div>
      </div>
    );
  }
}