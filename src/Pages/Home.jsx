import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../Features/PlayerSlice";
import { Link } from "react-router-dom";
import { setPhase } from "../Features/GameSlice";
import "../css/Home.css";

const Home = () => {
  const dispatch = useDispatch()
  const [action, setAction] = useState('begin'); // or players, or cards
  const [errors, setErrors] = useState([]); // or players, or cards

  const savePlayers = (e) => {
    e.preventDefault()
    if(!e.target[0].value || !e.target[1].value) {
      setErrors((prevErrors) => [...prevErrors, "Veuillez saisir un pseudo pour chacun des joueurs"])
      return
    }
    const firstPlayer = {id: 0, name: e.target[0].value};
    const secondPlayer = {id: 0, name: e.target[1].value};
    
    dispatch(addPlayer(firstPlayer));
    dispatch(addPlayer(secondPlayer));
    dispatch(setPhase('card-selecting'))
    setErrors([]);
    setAction('cards');
  }
  {console.log("🚀 ~ Home ~ errors:", errors)}

  return (
    <div className="home-page">
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
                <input type='text' id='first-player' required/>
              </label>
              <label htmlFor='second-player'>
                Joueur 2: 
                <input type='text' id='second-player' required/>
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
      {
        errors.length != 0 ? 
          <div className="error">
            {errors.map((error) => {
              return <p key={error}>{error}</p>
            })}
          </div>
        : <></>
      }

    </div>
  );
};

export default Home;