import React, { Component } from 'react';

import Logosvg from '../../svg/uno.svg';

import Winner from '../winner';
import AddCard from '../addCard';
import Stats from '../stats';

import players from '../../data';

export default class Controller extends Component {
  state = { players };

  addCardToPlayer = (cardInfo) => {
    const { player, card, color } = cardInfo;

    this.setState({
      [player]: [{ card, color }, ...this.state[player]]
    })
  }

  render() {

    console.log(this.state);

    /*  
    const winner = <Winner />;
    const addCard = <AddCard players={players} addCardToPlayer={this.addCardToPlayer.bind(this)} />
    const stats = <Stats players={players} playersCards={this.state} /> 
    */

    return (
      <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner players={players} />
        <div className="cards">
          <AddCard players={players} />
        </div>
      </div>
    );
  }
}

{/* <div id="game">
        <img src={Logosvg} id="logo" alt="Logo"></img>
        <Winner />
        <div className="cards">
          <AddCard players={players} addCardToPlayer={this.addCardToPlayer.bind(this)} />
          <Stats players={players} playersCards={this.state} />
        </div>
</div> */}