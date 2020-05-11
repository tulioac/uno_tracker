import React, { Component } from 'react';
import './styles.css';

import fotos from '../fotos';

export default class Winner extends Component {
  render() {
    return (
      <div id="winner">
        <img src={fotos.dumbo} alt="Jogador" className="circular playerPhoto"></img>
        <img src={fotos.sara} alt="Jogador" className="circular playerPhoto"></img>
        <img src={fotos.andré} alt="Jogador" className="circular playerPhoto"></img>
        <img src={fotos.daniel} alt="Jogador" className="circular playerPhoto"></img>
        <img src={fotos.malu} alt="Jogador" className="circular playerPhoto"></img>
      </div>
    );
  }
}