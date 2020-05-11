import React, { Component } from 'react';
import './styles.css';

import andre from '../../img/players/andre.jfif';
import daniel from '../../img/players/daniel.jfif';
import dumbo from '../../img/players/dumbo.jfif';
import sara from '../../img/players/sara.jfif';
import malu from '../../img/players/malu.jfif';

export default class Winner extends Component {
  render() {
    return (
      <div id="winner">
        <img src={andre} alt="Jogador" className="circular playerPhoto"></img>
        <img src={daniel} alt="Jogador" className="circular playerPhoto"></img>
        <img src={dumbo} alt="Jogador" className="circular playerPhoto"></img>
        <img src={sara} alt="Jogador" className="circular playerPhoto"></img>
        <img src={malu} alt="Jogador" className="circular playerPhoto"></img>
      </div>
    );
  }
}