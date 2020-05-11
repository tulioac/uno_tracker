import React from 'react';

import cartas from '../cartas';

export const CardSvg = ({ cardType, color }) => {
  let card = cartas[color][cardType];

  return (
    <img src={card} className="carta" alt={`${cardType} ${color}`} />
  );
}

export default CardSvg;