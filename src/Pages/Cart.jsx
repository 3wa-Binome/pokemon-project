import { useSelector } from "react-redux";
import Deck from "../Components/Deck";
import { Link } from "react-router-dom";

function Cart() {
  const { deck } = useSelector((state) => state.deck);
  const gamePhase = useSelector((state) => state.game.phase);

  if (gamePhase !== 'card-selecting') {
    return <><h1>Veuillez démarrer la partie</h1><Link to='/'>Démarrer</Link></>
  }

  return (
    <div>
      <div className="deck">
        {deck.map((card) => (
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
