import React, { Component } from 'react';
import './styles.css';

import { andre, daniel, dumbo, sara, malu } from '../fotos';

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