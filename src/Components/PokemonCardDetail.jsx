import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/PokemonCardDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {addCard} from "../Features/CardSlice";

const PokemonCardDetail = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [playerSelecting, setPlayerSelecting] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const {cards} = useSelector((state) => state.card);
  const {maxPokemon, phase: gamePhase} = useSelector((state) => state.game);

  const dispatch = useDispatch();

  console.log(cards)
    
  useEffect(() => {
    checkPlayer();
  }, [cards]);

  useEffect(() => {
    if (id) {
      fetchPokemonDetails();
    }
  }, [id]);

  function checkPlayer() {
    const cardOfFirstPlayer = cards.filter((card) => card.playerId === 0)
    if(cardOfFirstPlayer.length >= maxPokemon) {
      setPlayerSelecting(1);
    }
  }

  const fetchPokemonDetails = async () => {
    setLoading(true);
    setError(null); // Réinitialiser l'erreur à chaque nouvelle demande
    try {
      const response = await fetch(`https://api.tcgdex.net/v2/fr/cards/${id}`);
      if (!response.ok) {
        throw new Error('Détails du Pokémon introuvables.');
      }
      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Chargement...</p>;

  if (error) return <p>Erreur: {error}</p>;

  if (gamePhase !== 'card-selecting') {
    return (
      <>
        <h1>Veuillez démarrer la partie</h1>
        <Link to='/'>Démarrer</Link>
      </>
    );
  }

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
          <div className="pokemon-info">
            <p><strong>Illustrateur:</strong> {pokemonDetails.illustrator || "Non renseigné"}</p>
            <p><strong>Rareté:</strong> {pokemonDetails.rarity || "Non renseignée"}</p>
            <p><strong>Catégorie:</strong> {pokemonDetails.category || "Non renseignée"}</p>
            <p><strong>Set:</strong> {pokemonDetails.set?.name || "Non renseigné"}</p>
            <p><strong>Numéro dans le set:</strong> {pokemonDetails.set?.cardCount?.official || "?"}/{pokemonDetails.set?.cardCount?.total || "?"}</p>
            <p><strong>Types:</strong> {pokemonDetails.types ? pokemonDetails.types.join(", ") : "Aucun type"}</p>
            <p><strong>HP:</strong> {pokemonDetails.hp || "Non renseigné"}</p>
            <p><strong>Stage:</strong> {pokemonDetails.stage || "Non renseigné"}</p>
          </div>

          {pokemonDetails.abilities?.length > 0 && (
            <div className="abilities">
              <h3>Capacités spéciales:</h3>
              {pokemonDetails.abilities.map((ability, index) => (
                <p key={index}><strong>{ability.name}</strong>: {ability.effect || "Effet non renseigné"}</p>
              ))}
            </div>
          )}

          {pokemonDetails.attacks?.length > 0 ? (
            <div className="attacks">
              <h3>Attaques:</h3>
              {pokemonDetails.attacks.map((attack, index) => (
                <p key={index}><strong>{attack.name}</strong>: {attack.effect || "Effet non renseigné"}</p>
              ))}
            </div>
          ) : (
            <p>Aucune attaque disponible.</p>
          )}

          {pokemonDetails.weaknesses?.length > 0 ? (
            <div className="weaknesses">
              <h3>Faiblesses:</h3>
              {pokemonDetails.weaknesses.map((weakness, index) => (
                <p key={index}><strong>{weakness.type}:</strong> {weakness.value}</p>
              ))}
            </div>
          ) : (
            <p>Aucune faiblesse disponible.</p>
          )}
  
          <p>
            <strong>Retraite:</strong> {pokemonDetails.retreat || "Non renseignée"}
          </p>
          <p>
            <strong>Mis à jour:</strong> {pokemonDetails.updated || "Non renseignée"}
          </p>
          <button onClick={() => {
            checkPlayer();
            const cardToAdd = {
              ...pokemonDetails, // Copie toutes les propriétés de pokemonDetails
              playerId: playerSelecting, // Ajoute ou remplace la propriété playerId
            };
            cards.length >= maxPokemon * 2 ?
            null
            :  dispatch(addCard(cardToAdd))
          }}>
            Ajouter au Deck
          </button>
          {
        cards.length >= maxPokemon * 2 ? 
          <div className="error">
            Vos decks sont déjà remplis
          </div>
        : <></>
      }
        </div>
      ) : (
        <p>Aucun détail disponible.</p>
      )}
    </div>
  );
};

export default PokemonCardDetail;
