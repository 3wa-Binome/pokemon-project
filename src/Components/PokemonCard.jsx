import React from 'react';
import '../css/PokemonCard.css';

function PokemonCard({ name, image, id }) {
  return (
    <div className="pokemon-card" id={`pokemon-${id}`}>
      <img src={`${image}/high.webp`} alt={name} />
    </div>
  );
}

export default PokemonCard;