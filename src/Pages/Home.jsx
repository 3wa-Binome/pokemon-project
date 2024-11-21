import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../Features/PlayerSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch()
  const [action, setAction] = useState('begin'); // or players, or cards

  const savePlayers = (e) => {
    e.preventDefault()
    const firstPlayer = {id: 0, name: e.target[0].value};
    const secondPlayer = {id: 0, name: e.target[1].value};

    dispatch(addPlayer(firstPlayer));
    dispatch(addPlayer(secondPlayer));
    setAction('cards');
  }

  return (
    <div>
      {
        action === 'begin' ?
          <>
            <h1>Jeu de cartes pokémon!</h1>
            <button onClick={() => setAction('players')}>Commencer</button>
          </>
        : action === 'players' ?
          <>
            <h1>Nom des joueurs</h1>
            <form onSubmit={savePlayers}>
              <label htmlFor='first-player'>
                Joueur 1: 
                <input type='text' id='first-player'/>
              </label>
              <label htmlFor='second-player'>
                Joueur 2: 
                <input type='text' id='second-player'/>
              </label>
              <button>Continuer</button>
            </form>
          </>
        : action === 'cards' ?

          <>
            <h1>Il va maintenant falloir choisir vos pokemons!</h1>
            <Link to='/pokemon-list'>Suivant</Link>
          </>
        : <></>
      }

    </div>
  );
};

export default Home;