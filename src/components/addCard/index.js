import React, { Component } from 'react';
import './styles.css';

import blue from '../../svg/colors/blue.svg';
import red from '../../svg/colors/red.svg';
import yellow from '../../svg/colors/yellow.svg';
import green from '../../svg/colors/green.svg';

import { andre, daniel, dumbo, sara } from '../fotos';

import { zero, one, two, three, four, five, six, seven, eight, nine, plus, reverse, skip } from '../cartas';

export default class AddCard extends Component {
  state = {
    player: "",
    color: "",
    card: ""
  }

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
          <img src={zero} alt="Zero" className="carta"></img>
          <img src={one} alt="Um" className="carta"></img>
          <img src={two} alt="Dois" className="carta"></img>
          <img src={three} alt="Três" className="carta"></img>
          <img src={four} alt="Quatro" className="carta"></img>
          <img src={five} alt="Cinco" className="carta"></img>
          <img src={six} alt="Seis" className="carta"></img>
          <img src={seven} alt="Sete" className="carta"></img>
          <img src={eight} alt="Oito" className="carta"></img>
          <img src={nine} alt="Nove" className="carta"></img>
          <img src={plus} alt="Plus" className="carta"></img>
          <img src={reverse} alt="Reverse" className="carta"></img>
          <img src={skip} alt="Skip" className="carta"></img>
        </div>
        <button className="preenchido">Adicionar</button>
      </div>
    );
  }
}