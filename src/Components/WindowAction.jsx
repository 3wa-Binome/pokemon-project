import '../css/WindowAction.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextTurn } from '../Features/GameSlice';
import { ActionList } from './ActionList';
import { GameLog } from './GameLog';
import { AttackList } from './AttackList';

export function WindowAction() {
    const dispatch = useDispatch();
    const [step, setStep] = useState('start'); // 'start', 'actions', 'attacks', 'log'
    const [selectedAction, setSelectedAction] = useState(null);
    const [log, setLog] = useState([]);
    const [nbPlayerOftheTurn, setNbPlayerOftheTurn] = useState(0);
    const starter = useSelector((state) => state.game.playerStarter)
    const player = 0;
    const actions = [
        { name: 'attack', description: 'attaquer' },
        { name: 'pass', description: 'passer son tour' },
        { name: 'surrender', description: 'abandonner' }
    ]
    const attacks = [
        { id: 1, name: 'attack1', effect: 'attack1' },
        { id: 2, name: 'attack2', effect: 'attack2' },
        { id: 3, name: 'attack3', effect: 'attack3' }
    ]

    useEffect(() => {
        if (step === 'start') {
            dispatch(nextTurn())
        }
    }, [step])

    const handleActionSelect = (action) => {
        setSelectedAction(action);

        if (action === 'attack') {
            setStep('attacks');
        } else {
            const currentAction = actions.find((item) => item.name === action)
            const newLogEntry = `Joueur ${player} a choisi de ${currentAction.description}.`; // -> Insérer à la place de player le bon joueur
            setLog((prevLog) => [...prevLog, newLogEntry]);
            setStep('log');
        }
    };

    const handleAttackSelect = (attack) => {
        const damage = calculateDamage() // -> Fonction à réaliser
        const newLogEntry = `${player} utilise ${attack.name} et inflige ${damage} dommage !`;
        setLog((prevLog) => [...prevLog, newLogEntry]);
        setStep('log');
    };

    const calculateDamage = () => {
        return 10;
    }

    const handleNextStep = () => {
        setNbPlayerOftheTurn((prev) => prev + 1)
        if ((nbPlayerOftheTurn + 1) === 2) {
            handleNextTurn()
        } else {
            handleNextPlayer();
        }
    }

    const handleNextPlayer = () => {
        setStep('actions');

    };

    const handleNextTurn = () => {
        setNbPlayerOftheTurn(0)
        setStep('start');
    }


    return (
        <div className="windows-action">

            {step === 'start' && (
                <GameLog log={log} onNext={setStep('actions')} />
            )}

            {step === 'actions' && (
                <ActionList actions={actions} onSelect={handleActionSelect} />
            )}

            {step === 'attacks' && (
                <AttackList attacks={attacks} onSelect={handleAttackSelect} />
            )}

            {step === 'log' && (
                <GameLog log={log} onNext={handleNextStep} />
            )}
        </div>
    )
}