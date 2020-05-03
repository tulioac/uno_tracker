import React, { Component } from 'react';
import './styles.css';

import blue from '../../svg/colors/blue.svg';
import red from '../../svg/colors/red.svg';
import yellow from '../../svg/colors/yellow.svg';
import green from '../../svg/colors/green.svg';

import { andre, daniel, dumbo, sara } from '../fotos';

import { zero, one, two, three, four, five, six, seven, eight, nine, plus, reverse, skip } from '../cartas/semCor';

export default class AddCard extends Component {
  state = {
    player: "",
    color: "",
    card: ""
  }

  selectPlayer = (player) => {
    this.setState({ player });
  }

  selectColor = (color) => {
    this.setState({ color });
  }

  selectCard = (card) => {
    this.setState({ card });
  }

  addCardToPlayer = () => {
    this.props.addCardToPlayer(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      player: "",
      color: "",
      card: ""
    })
  }

  render() {
    return (
      <div className="card addCard">
        <h1>Adicionar carta ausente</h1>
        <div id="jogadores" className="espacado">
          <img src={andre} alt="Andre" className={`circular ${this.state.player === "andre" ? "selecionado" : ""}`} onClick={() => this.selectPlayer("andre")}></img>
          <img src={daniel} alt="Daniel" className={`circular ${this.state.player === "daniel" ? "selecionado" : ""}`} onClick={() => this.selectPlayer("daniel")}></img>
          <img src={dumbo} alt="Dumbo" className={`circular ${this.state.player === "dumbo" ? "selecionado" : ""}`} onClick={() => this.selectPlayer("dumbo")}></img>
          <img src={sara} alt="Sara" className={`circular ${this.state.player === "sara" ? "selecionado" : ""}`} onClick={() => this.selectPlayer("sara")}></img>
        </div>
        <div id="cores" className="espacado">
          <img src={blue} alt="Cor azul" className={`circular ${this.state.color === "blue" ? "selecionado" : ""}`} onClick={() => this.selectColor("blue")}></img>
          <img src={red} alt="Cor vermelha" className={`circular ${this.state.color === "red" ? "selecionado" : ""}`} onClick={() => this.selectColor("red")}></img>
          <img src={yellow} alt="Cor amarela" className={`circular ${this.state.color === "yellow" ? "selecionado" : ""}`} onClick={() => this.selectColor("yellow")}></img>
          <img src={green} alt="Cor verde" className={`circular ${this.state.color === "green" ? "selecionado" : ""}`} onClick={() => this.selectColor("green")}></img>
        </div>
        <div id="selectCard">
          <img src={zero} alt="Zero" className={`carta ${this.state.card === "zero" ? "selecionado" : ""}`} onClick={() => this.selectCard("zero")}></img>
          <img src={one} alt="Um" className={`carta ${this.state.card === "one" ? "selecionado" : ""}`} onClick={() => this.selectCard("one")}></img>
          <img src={two} alt="Dois" className={`carta ${this.state.card === "two" ? "selecionado" : ""}`} onClick={() => this.selectCard("two")}></img>
          <img src={three} alt="Três" className={`carta ${this.state.card === "three" ? "selecionado" : ""}`} onClick={() => this.selectCard("three")}></img>
          <img src={four} alt="Quatro" className={`carta ${this.state.card === "four" ? "selecionado" : ""}`} onClick={() => this.selectCard("four")}></img>
          <img src={five} alt="Cinco" className={`carta ${this.state.card === "five" ? "selecionado" : ""}`} onClick={() => this.selectCard("five")}></img>
          <img src={six} alt="Seis" className={`carta ${this.state.card === "six" ? "selecionado" : ""}`} onClick={() => this.selectCard("six")}></img>
          <img src={seven} alt="Sete" className={`carta ${this.state.card === "seven" ? "selecionado" : ""}`} onClick={() => this.selectCard("seven")}></img>
          <img src={eight} alt="Oito" className={`carta ${this.state.card === "eight" ? "selecionado" : ""}`} onClick={() => this.selectCard("eight")}></img>
          <img src={nine} alt="Nove" className={`carta ${this.state.card === "nine" ? "selecionado" : ""}`} onClick={() => this.selectCard("nine")}></img>
          <img src={plus} alt="Plus" className={`carta ${this.state.card === "plus" ? "selecionado" : ""}`} onClick={() => this.selectCard("plus")}></img>
          <img src={reverse} alt="Reverse" className={`carta ${this.state.card === "reverse" ? "selecionado" : ""}`} onClick={() => this.selectCard("reverse")}></img>
          <img src={skip} alt="Skip" className={`carta  vermelho ${this.state.card === "skip" ? "selecionado" : ""}`} onClick={() => this.selectCard("skip")}></img>
        </div>
        <button className="preenchido" onClick={this.addCardToPlayer}>Adicionar</button>
      </div>
    );
  }
}