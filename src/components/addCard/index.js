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

  selectPlayer = (player) => {
    this.setState({ player });
    console.log(this.state.player);
  }

  selectColor = (color) => {
    this.setState({ color });
    console.log(this.state.color);
  }

  selectCard = (card) => {
    this.setState({ card });
    console.log(this.state.card);
  }

  render() {
    return (
      <div className="card addCard">
        <h1>Adicionar carta ausente</h1>
        <div id="jogadores" className="espacado">
          <img src={andre} alt="Andre" className="circular" onClick={() => this.selectPlayer("andre")}></img>
          <img src={daniel} alt="Daniel" className="circular" onClick={() => this.selectPlayer("daniel")}></img>
          <img src={dumbo} alt="Dumbo" className="circular" onClick={() => this.selectPlayer("dumbo")}></img>
          <img src={sara} alt="Sara" className="circular" onClick={() => this.selectPlayer("sara")}></img>
        </div>
        <div id="cores" className="espacado">
          <img src={blue} alt="Cor azul" className="circular" onClick={() => this.selectColor("blue")}></img>
          <img src={red} alt="Cor vermelha" className="circular" onClick={() => this.selectColor("red")}></img>
          <img src={yellow} alt="Cor amarela" className="circular" onClick={() => this.selectColor("yellow")}></img>
          <img src={green} alt="Cor verde" className="circular" onClick={() => this.selectColor("green")}></img>
        </div>
        <div id="selectCard">
          <img src={zero} alt="Zero" className="carta" onClick={() => this.selectCard("zero")}></img>
          <img src={one} alt="Um" className="carta" onClick={() => this.selectCard("one")}></img>
          <img src={two} alt="Dois" className="carta" onClick={() => this.selectCard("two")}></img>
          <img src={three} alt="Três" className="carta" onClick={() => this.selectCard("three")}></img>
          <img src={four} alt="Quatro" className="carta" onClick={() => this.selectCard("four")}></img>
          <img src={five} alt="Cinco" className="carta" onClick={() => this.selectCard("five")}></img>
          <img src={six} alt="Seis" className="carta" onClick={() => this.selectCard("six")}></img>
          <img src={seven} alt="Sete" className="carta" onClick={() => this.selectCard("seven")}></img>
          <img src={eight} alt="Oito" className="carta" onClick={() => this.selectCard("eight")}></img>
          <img src={nine} alt="Nove" className="carta" onClick={() => this.selectCard("nine")}></img>
          <img src={plus} alt="Plus" className="carta" onClick={() => this.selectCard("plus")}></img>
          <img src={reverse} alt="Reverse" className="carta" onClick={() => this.selectCard("reverse")}></img>
          <img src={skip} alt="Skip" className="carta" onClick={() => this.selectCard("skip")}></img>
        </div>
        <button className="preenchido">Adicionar</button>
      </div>
    );
  }
}