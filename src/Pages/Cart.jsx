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
  }, [checked])

  if (gamePhase !== 'card-selecting') {

    if(checked[0] && checked[1]) {
      return (
        <>
          <h1>Prêt pour la bataille?</h1>
          <Link to='/battle'>Place au combat!</Link>
        </>
      )
    }
    return <><h1>Veuillez démarrer la partie</h1><Link to='/'>Démarrer</Link></>
  }

  return (
    <div>
      <h2>Deck de {players[0].name}</h2>
      {
        checked[0] ?
          <button onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[0] = false;
            return newChecked;
          })}>
            Annuler
          </button>
          : <button onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[0] = true;
            return newChecked;
          })}>
            Valider
          </button>
      }
      <div className="deck">
        {firstDeck.map((card) => (
          <Deck
            key={card.id}
            id={card.id}
            image={card.image}
            name={card.name}
          />
        ))}
      </div>
      <h2>Deck de {players[1].name}</h2>
      {
        checked[1] ?
          <button onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[1] = false;
            return newChecked;
          })}>
            Annuler
          </button>
          : <button onClick={() => setChecked((prev) => {
            const newChecked = [...prev];
            newChecked[1] = true;
            return newChecked;
          })}>
            Valider
          </button>
      }
      <div className="deck">
        {secondDeck.map((card) => (
          <Deck
            key={card.id}
            id={card.id}
            image={card.image}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
