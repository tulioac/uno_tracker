import React, { Component } from 'react';
import './styles.css';

export default class Stats extends Component {
  render() {
    return (
      <div className="card stats">
        <div className="title">
          <h1>
            Jogadores
          </h1>
          <h1>
            Cartas Ausentes
          </h1>
          <div className="body">
            <div className="playerStats">
              {/* TODO: Criar um componente para playerStats */}
              Foto
              <div className="playerInfo">
                <p className="playerName">Nome</p>
                <p className="playerWins">
                  <span className="primario">50</span> vitórias
                </p>
              </div>
              <div className="playerCards">Cartas</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}