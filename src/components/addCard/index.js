import React, { Component } from 'react';
import './styles.css';

export default class AddCard extends Component {
  render() {
    return (
      <div className="card addCard">
        <h1>Adicionar carta ausente</h1>
        <div id="cores">Selecionar cor</div>
        <div id="selectCard">Selecionar carta</div>
        <button className="preenchido">Adicionar</button>
      </div>
    );
  }
}