import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonCards } from "../Features/PokemonSlice";
import PokemonCard from "../Components/PokemonCard";
import "../css/PokemonList.css";

function PokemonList() {
  const dispatch = useDispatch();
  const { cards, status, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemonCards());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Chargement des cartes Pokémon...</p>;
  }

  if (status === "failed") {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <div className="pokemon-list">
        {cards.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
