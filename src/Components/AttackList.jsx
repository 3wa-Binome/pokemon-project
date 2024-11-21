export function AttackList({ attacks, onSelect }) {
    return (
        <div className="attack-list">
        <h3>Choisir une attack:</h3>
        <ul>
            {attacks.map((attack) => (
            <li key={attack.id}>
                <button onClick={() => onSelect(attack)}>{attack.name}</button>
            </li>
            ))}
        </ul>
        </div>
    );
}
