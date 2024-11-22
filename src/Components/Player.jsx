import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "./Card";
import '../css/Player.css';

export function Player({ player }) {
  const { cards } = useSelector((state) => state.card);
  const { players } = useSelector((state) => state.player);

  const [checked, setChecked] = useState([false, false]); // Gestion de l'état de validation des decks
  const firstDeck = cards.filter((card) => card.playerId === 0);
  const secondDeck = cards.filter((card) => card.playerId === 1);

  // Fonction de gestion des états de validation
  const handleValidation = (index) => {
    setChecked((prev) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index]; // Inverse l'état de validation
      return newChecked;
    });
  };

  useEffect(() => {
    // Logique à exécuter lorsque les decks des deux joueurs sont validés
    if (checked[0] && checked[1]) {
      console.log("Les deux decks sont validés, vous pouvez passer à la phase suivante.");
      // Autres actions que vous souhaitez déclencher
    }
  }, [checked]);

  // Filtrage des cartes en fonction du joueur passé en prop
  const playerDeck = player === 0 ? firstDeck : secondDeck;
  const currentPlayer = players[player];

  return (
    <div className={`player player${player + 1}`}>
      <h2>{currentPlayer?.name}</h2>
      <div className="player-deck" >
        {playerDeck.length > 0 ? (
          playerDeck.map((pokemon) => (
            <Card
              key={pokemon.pokemonId}
              id={pokemon.pokemonId}
              name={pokemon.name}
              image={pokemon.image || '/back-card.png'}
            />
          ))
        ) : (
          <p>Pas de cartes disponibles</p>
        )}
      </div>
    </div>
  );
}
