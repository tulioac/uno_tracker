import React, { Component } from 'react';
import './styles.css';

import blue from '../../svg/colors/blue.svg';
import red from '../../svg/colors/red.svg';
import yellow from '../../svg/colors/yellow.svg';
import green from '../../svg/colors/green.svg';

import andre from '../../img/players/andre.jfif';
import daniel from '../../img/players/daniel.jfif';
import dumbo from '../../img/players/dumbo.jfif';
import sara from '../../img/players/sara.jfif';

export default class AddCard extends Component {
  render() {
    return (
      <div className="card addCard">
        <h1>Adicionar carta ausente</h1>
        <div id="jogadores" className="espacado">
          <img src={andre} alt="Andre" className="circular"></img>
          <img src={daniel} alt="Daniel" className="circular"></img>
          <img src={dumbo} alt="Dumbo" className="circular"></img>
          <img src={sara} alt="Sara" className="circular"></img>
        </div>
        <div id="cores" className="espacado">
          <img src={blue} alt="Cor azul" className="circular"></img>
          <img src={red} alt="Cor vermelha" className="circular"></img>
          <img src={yellow} alt="Cor amarela" className="circular"></img>
          <img src={green} alt="Cor verde" className="circular"></img>
        </div>
        <div id="selectCard">
          Selecionar carta
        </div>
        <button className="preenchido">Adicionar</button>
      </div>
    );
  }
}