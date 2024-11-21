import Card from "./Card";
import '../css/Deck.css';
import { useDispatch } from "react-redux";
import {removeCard} from "../Features/CardSlice";
const Deck = ({ id, image, name }) => {
    const dispatch = useDispatch(); 
    return (
    <div className="deck-card">
        <Card key={id} image={image} name={name} />
        <button onClick={() => dispatch(removeCard(id))}>Retirer du deck</button>
    </div>
  );
}
export default Deck;