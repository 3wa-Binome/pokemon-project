import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Player } from "../Components/Player";
import { WindowAction } from "../Components/WindowAction";
import '../css/Battle.css';

export function Battle() {
    const { cards } = useSelector((state) => state.card);
    const gamePhase = useSelector((state) => state.game.phase);

    // Si la phase de jeu n'est pas "battle", afficher un message
    if (gamePhase !== 'battle') {
        return <><h1>Veuillez démarrer la partie</h1><Link to='/'>Démarrer</Link></>
    }

    return (
        <>
            <div className="battle-screen">
                {/* Passer 0 et 1 pour afficher les decks des deux joueurs */}
                <Player player={0} />
                <Player player={1} />
            </div>
            <WindowAction />
        </>
    );
}