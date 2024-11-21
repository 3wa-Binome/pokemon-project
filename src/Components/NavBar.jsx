import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/NavBar.css";

export const NavBar = () => {
  const stateOfGame = useSelector((state) => state.game.phase);

  return (
    <nav>
      <ul>
          {stateOfGame === 'name-selecting' ? 
            <li>
              <Link to="/">Accueil</Link>
            </li> 
          : null
          }
          {stateOfGame === 'card-selecting' ? 
            <>
              <li>
                <Link to="/pokemon-list">Choix des pokemons</Link>
              </li>
              <li>
                <Link to="/cart">Deck en cours</Link>
              </li>
            </>

          : null
          }
          {stateOfGame === 'battle' ? 
            <li>
              <Link to="/battle">Bataille</Link>
            </li> 
          : null
          }
      </ul>
    </nav>
  );
};

export default NavBar;
