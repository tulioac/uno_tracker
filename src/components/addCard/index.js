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

import zero from '../../svg/uncolored/0.svg';
import one from '../../svg/uncolored/1.svg';
import two from '../../svg/uncolored/2.svg';
import three from '../../svg/uncolored/3.svg';
import four from '../../svg/uncolored/4.svg';
import five from '../../svg/uncolored/5.svg';
import six from '../../svg/uncolored/6.svg';
import seven from '../../svg/uncolored/7.svg';
import eight from '../../svg/uncolored/8.svg';
import nine from '../../svg/uncolored/9.svg';
import plus from '../../svg/uncolored/plus.svg';
import reverse from '../../svg/uncolored/reverse.svg';
import skip from '../../svg/uncolored/skip.svg';

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