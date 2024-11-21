import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/NavBar.css";

export const NavBar = () => {
  const stateOfGame = useSelector((state) => state.game.phase);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon-list">Pokémon List</Link>
          {stateOfGame === 'battle' ? <Link to="/battle">Bataille</Link> : null}
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
