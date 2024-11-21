import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/PokemonCardDetail.css";
import { useDispatch } from "react-redux";
import {addCard} from "../Features/DeckSlice";

const PokemonCardDetail = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      fetchPokemonDetails();
    }
  }, [id]);

  const fetchPokemonDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.tcgdex.net/v2/fr/cards/${id}`);
      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du Pokémon :",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Chargement...</p>;

  
  return (
    <div className="pokemon-card-detail">
      {pokemonDetails ? (
        <div className="pokemon-details">
          <h2>{pokemonDetails.name || "Nom inconnu"}</h2>
          <img
            src={`${pokemonDetails.image || ""}/high.webp`}
            alt={pokemonDetails.name || "Pokemon"}
            className="pokemon-image"
          />
          <p>
            <strong>Illustrateur:</strong> {pokemonDetails.illustrator || "Non renseigné"}
          </p>
          <p>
            <strong>Rareté:</strong> {pokemonDetails.rarity || "Non renseignée"}
          </p>
          <p>
            <strong>Catégorie:</strong> {pokemonDetails.category || "Non renseignée"}
          </p>
          <p>
            <strong>Set:</strong> {pokemonDetails.set?.name || "Non renseigné"}
          </p>
          <p>
            <strong>Numéro dans le set:</strong>{" "}
            {pokemonDetails.set?.cardCount?.official || "?"}/
            {pokemonDetails.set?.cardCount?.total || "?"}
          </p>
          <p>
            <strong>Types:</strong>{" "}
            {pokemonDetails.types ? pokemonDetails.types.join(", ") : "Aucun type"}
          </p>
          <p>
            <strong>HP:</strong> {pokemonDetails.hp || "Non renseigné"}
          </p>
          <p>
            <strong>Stage:</strong> {pokemonDetails.stage || "Non renseigné"}
          </p>
  
          {pokemonDetails.abilities && pokemonDetails.abilities.length > 0 && (
            <>
              <h3>Capacité spéciale:</h3>
              {pokemonDetails.abilities.map((ability, index) => (
                <div key={index}>
                  <p>
                    <strong>{ability.name || "Nom inconnu"}</strong>: {ability.effect || "Effet non renseigné"}
                  </p>
                </div>
              ))}
            </>
          )}
  
          <h3>Attaque:</h3>
          {pokemonDetails.attacks && pokemonDetails.attacks.length > 0 ? (
            pokemonDetails.attacks.map((attack, index) => (
              <div key={index}>
                <p>
                  <strong>{attack.name || "Nom inconnu"}</strong>: {attack.effect || "Effet non renseigné"}
                </p>
              </div>
            ))
          ) : (
            <p>Aucune attaque disponible.</p>
          )}
  
          <h3>Faiblesses:</h3>
          {pokemonDetails.weaknesses && pokemonDetails.weaknesses.length > 0 ? (
            pokemonDetails.weaknesses.map((weakness, index) => (
              <div key={index}>
                <p>
                  <strong>{weakness.type || "Type inconnu"} :</strong> {weakness.value || "Valeur non renseignée"}
                </p>
              </div>
            ))
          ) : (
            <p>Aucune faiblesse disponible.</p>
          )}
  
          <p>
            <strong>Retraite:</strong> {pokemonDetails.retreat || "Non renseignée"}
          </p>
          <p>
            <strong>Mis à jour:</strong> {pokemonDetails.updated || "Non renseignée"}
          </p>
          <button onClick={() => dispatch(addCard(pokemonDetails))}>Ajouter au deck</button>
        </div>
      ) : (
        <p>Aucun détail disponible.</p>
      )}
    </div>
  );  
};

export default PokemonCardDetail;
