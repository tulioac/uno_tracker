import React, { Component } from 'react';
import './styles.css';

import colors from '../colors';
import fotos from '../fotos';
import cartas from '../cartas';

export default class AddCard extends Component {
  state = {
    player: "",
    color: "",
    card: ""
  }

  selectPlayer = (player) => {
    console.log(this.state);
    this.setState({ player });
  }

  selectColor = (color) => {
    console.log(this.state);
    this.setState({ color });
  }

  selectCard = (card) => {
    console.log(this.state);
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
    const playerPictures = this.props.players.map(({ name }) => (
      <img key={name} src={fotos[name]} alt={name} className={`circular ${this.state.player === name ? "selecionado" : ""}`} onClick={() => this.selectPlayer(name)} />
    ));

    const colorsOptions = colors.map(({ name, svg }) => (
      <img key={name} src={svg} alt={`${name} color`} className={`circular ${this.state.color === name ? "selecionado" : ""}`} onClick={() => this.selectColor(name)} />
    ));

    const cardOptions = cartas.semCor.map(({ name, svg }) => (
      <img key={`$name`} src={svg} alt={name} className={`carta ${this.state.card === name ? "selecionado" : ""}`} onClick={() => this.selectCard(name)} />
    ));

    return (
      <div className="card addCard" >
        <h1>Adicionar carta ausente</h1>
        <div id="jogadores" className="espacado">
          {playerPictures}
        </div>
        <div id="cores" className="espacado">
          {colorsOptions}
        </div>
        <div id="selectCard">
          {cardOptions}
        </div>
        <button className={`preenchido ${this.validateSelection() ? "valido" : ""}`} onClick={this.addCardToPlayer}>Adicionar</button>
      </div>
    );
  }
}