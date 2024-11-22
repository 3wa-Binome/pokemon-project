export function GameLog({ log, onNext }) {
    const lastLog = log.findLast(element => element)

    return (
      <div className="game-log">
        <div className="log-entries">
            <p>{lastLog}</p>
        </div>
        <button onClick={onNext}>Suivant</button>
      </div>
    );
}