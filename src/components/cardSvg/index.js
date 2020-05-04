import React from 'react';

import blue from '../cartas/azul';
import yellow from '../cartas/amarela';
import green from '../cartas/verde';
import red from '../cartas/vermelha';

export const CardSvg = ({ cardType, color }) => {
  let card;

  switch (color) {
    case "blue":
      card = blue[cardType];
      break;
    case "yellow":
      card = yellow[cardType];
      break;
    case "green":
      card = green[cardType];
      break;
    case "red":
      card = red[cardType];
      break;
    default:
      break;
  }

  return (
    <img src={card} className="carta" alt={`${cardType} ${color}`} />
  );
}

export default CardSvg;