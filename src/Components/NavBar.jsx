import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon-list">Pokémon List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
