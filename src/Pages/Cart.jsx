import { useSelector } from "react-redux";
import Deck from "../Components/Player";

function Cart() {
  const { deck } = useSelector((state) => state.deck);

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
