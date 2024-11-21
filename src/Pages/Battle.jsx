import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "../Components/Player"
import { WindowAction } from "../Components/WindowAction"
import '../css/Battle.css'

export function Battle() {
    const gamePhase = useSelector((state) => state.game.phase);
    // const dispatch = useDispatch();
    // const { players } = useSelector((state) => state.player);
    // const { turn, playerStarter, nbOfPlayerWhoPlayedOnTheTurn, nbOfPokemonsByPlayer, winner } = useSelector((state) => state.player);

    useEffect(() => {

    }, [])

    if (gamePhase !== 'battle') {
        return <><h1>Veuillez démarrer la partie</h1><Link to='/'>Démarrer</Link></>
    }

    return (
        <>
            <div className="battle-screen">
                <Player player={0} />
                <Player player={1} />
            </div>
            <WindowAction/>
        </>
    )
    
}