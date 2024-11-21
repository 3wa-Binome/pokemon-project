import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonCards } from "../Features/PokemonCardSlice";
import AllPokemonCard from "../Components/AllPokemonCard";
import "../css/PokemonList.css";

function PokemonList() {
  const dispatch = useDispatch();
  const { cards, status, error } = useSelector((state) => state.pokemonCards);
  const { players } = useSelector((state) => state.player)

  console.log(players)

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
          <AllPokemonCard
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
