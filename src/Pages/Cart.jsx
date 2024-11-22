import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPhase } from "../Features/GameSlice";
import Deck from "../Components/Deck";
import { Link } from "react-router-dom";
import '../css/Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([false, false]);
  const { cards } = useSelector((state) => state.card);
  const { players } = useSelector((state) => state.player);
  const gamePhase = useSelector((state) => state.game.phase);
  const firstDeck = cards.filter((card) => card.playerId === 0);
  const secondDeck = cards.filter((card) => card.playerId === 1);

  useEffect(() => {
    if (checked[0] && checked[1]) {
      dispatch(setPhase('battle'))
    }
  }, [checked]);

  if (gamePhase !== 'card-selecting') {
    if (checked[0] && checked[1]) {
      return (
        <div className="cart-container">
          <h1 className="title">Prêt pour la bataille?</h1>
          <Link className="start-battle" to='/battle'>Place au combat!</Link>
        </div>
      )
    }
    return (
      <div className="cart-container">
        <h1 className="title">Veuillez démarrer la partie</h1>
        <Link className="start-game" to='/'>Démarrer</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="deck-container">
        <h2 className="deck-title">Deck de {players[0].name}</h2>
        <button 
          className="deck-button" 
          onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[0] = !newChecked[0];
            return newChecked;
          })}
        >
          {checked[0] ? 'Annuler' : 'Valider'}
        </button>
        <div className="deck">
          {firstDeck.map((card) => (
            <Deck key={card.id} id={card.id} image={card.image} name={card.name} />
          ))}
        </div>
      </div>

      <div className="deck-container">
        <h2 className="deck-title">Deck de {players[1].name}</h2>
        <button 
          className="deck-button" 
          onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[1] = !newChecked[1];
            return newChecked;
          })}
        >
          {checked[1] ? 'Annuler' : 'Valider'}
        </button>
        <div className="deck">
          {secondDeck.map((card) => (
            <Deck key={card.id} id={card.id} image={card.image} name={card.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
