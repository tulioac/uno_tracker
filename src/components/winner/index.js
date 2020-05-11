import React, { Component } from 'react';
import './styles.css';

export default class Winner extends Component {
  render() {
    const playersPictures = this.props.players.jogadores.map(({ name, picture }) => (
      <img key={name} src={picture} alt={name} className="circular playerPhoto" />
    ));

    return (
      <div id="winner">
        {playersPictures}
      </div>
    );
  }
}