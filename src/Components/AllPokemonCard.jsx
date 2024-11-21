import { Link } from "react-router-dom";
import React from 'react';
import '../css/AllPokemonCard.css';

function AllPokemonCard({ name, image, id }) {
  return (
    <div className="pokemon-card" id={`pokemon-${id}`}>
      <Link to={`/pokemon-list/${id}`}><img src={`${image}/high.webp`} alt={name} /></Link>
    </div>
  );
}

export default AllPokemonCard;