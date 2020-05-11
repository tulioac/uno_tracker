import React, { Component } from 'react';
import './styles.css';

import { blue, red, yellow, green } from '../colors';

import fotos from '../fotos';

import cartas from '../cartas';

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

  validateSelection = () => {
    return (this.state.player !== "" && this.state.color !== "" && this.state.card !== "");
  }

  addCardToPlayer = () => {
    if (this.validateSelection()) {
      this.props.addCardToPlayer(this.state);
    }
    this.reset();
  }

  reset = () => {
    this.setState({
      player: "",
      color: "",
      card: ""
    })
  }
  // Trocar renderização das cartas para CardSvg
  render() {

    console.log(this.props.players);

    let playerPictures = this.props.players.map(({ name }) => (
      <img key={name} src={fotos[name]} alt={name} className={`circular ${this.state.player === name ? "selecionado" : ""}`} onClick={() => this.selectPlayer(name)} />
    ));

    return (
      <div className="card addCard" >
        <h1>Adicionar carta ausente</h1>
        <div id="jogadores" className="espacado">
          {playerPictures}
        </div>
        <div id="cores" className="espacado">
          <img src={blue} alt="Cor azul" className={`circular ${this.state.color === "blue" ? "selecionado" : ""}`} onClick={() => this.selectColor("blue")}></img>
          <img src={red} alt="Cor vermelha" className={`circular ${this.state.color === "red" ? "selecionado" : ""}`} onClick={() => this.selectColor("red")}></img>
          <img src={yellow} alt="Cor amarela" className={`circular ${this.state.color === "yellow" ? "selecionado" : ""}`} onClick={() => this.selectColor("yellow")}></img>
          <img src={green} alt="Cor verde" className={`circular ${this.state.color === "green" ? "selecionado" : ""}`} onClick={() => this.selectColor("green")}></img>
        </div>
        <div id="selectCard">
          <img src={cartas.semCor.zero} alt="Zero" className={`carta ${this.state.card === "zero" ? "selecionado" : ""}`} onClick={() => this.selectCard("zero")}></img>
          <img src={cartas.semCor.one} alt="Um" className={`carta ${this.state.card === "one" ? "selecionado" : ""}`} onClick={() => this.selectCard("one")}></img>
          <img src={cartas.semCor.two} alt="Dois" className={`carta ${this.state.card === "two" ? "selecionado" : ""}`} onClick={() => this.selectCard("two")}></img>
          <img src={cartas.semCor.three} alt="Três" className={`carta ${this.state.card === "three" ? "selecionado" : ""}`} onClick={() => this.selectCard("three")}></img>
          <img src={cartas.semCor.four} alt="Quatro" className={`carta ${this.state.card === "four" ? "selecionado" : ""}`} onClick={() => this.selectCard("four")}></img>
          <img src={cartas.semCor.five} alt="Cinco" className={`carta ${this.state.card === "five" ? "selecionado" : ""}`} onClick={() => this.selectCard("five")}></img>
          <img src={cartas.semCor.six} alt="Seis" className={`carta ${this.state.card === "six" ? "selecionado" : ""}`} onClick={() => this.selectCard("six")}></img>
          <img src={cartas.semCor.seven} alt="Sete" className={`carta ${this.state.card === "seven" ? "selecionado" : ""}`} onClick={() => this.selectCard("seven")}></img>
          <img src={cartas.semCor.eight} alt="Oito" className={`carta ${this.state.card === "eight" ? "selecionado" : ""}`} onClick={() => this.selectCard("eight")}></img>
          <img src={cartas.semCor.nine} alt="Nove" className={`carta ${this.state.card === "nine" ? "selecionado" : ""}`} onClick={() => this.selectCard("nine")}></img>
          <img src={cartas.semCor.plus} alt="Plus" className={`carta ${this.state.card === "plus" ? "selecionado" : ""}`} onClick={() => this.selectCard("plus")}></img>
          <img src={cartas.semCor.reverse} alt="Reverse" className={`carta ${this.state.card === "reverse" ? "selecionado" : ""}`} onClick={() => this.selectCard("reverse")}></img>
          <img src={cartas.semCor.skip} alt="Skip" className={`carta  vermelho ${this.state.card === "skip" ? "selecionado" : ""}`} onClick={() => this.selectCard("skip")}></img>
        </div>
        <button className={`preenchido ${this.validateSelection() ? "valido" : ""}`} onClick={this.addCardToPlayer}>Adicionar</button>
      </div>
    );
  }
}