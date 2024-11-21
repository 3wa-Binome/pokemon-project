import { Player } from "../Components/Player"
import { WindowAction } from "../Components/WindowAction"
import { useSelector, useDispatch } from "react-redux";
import '../css/Battle.css'
import { useEffect } from "react";

export function Battle() {
    // const dispatch = useDispatch();
    // const { players } = useSelector((state) => state.player);
    // const { turn, playerStarter, nbOfPlayerWhoPlayedOnTheTurn, nbOfPokemonsByPlayer, winner } = useSelector((state) => state.player);

    useEffect(() => {

    }, [])

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