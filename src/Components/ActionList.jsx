export function ActionList({ actions, onSelect }) {
    return (
      <div className="action-list">
        <h3>Choisir une action:</h3>
        <ul>
          {actions.map((action) => (
            <li key={action.name}>
              <button onClick={() => onSelect(action.name)}>{action.description}</button>
            </li>
          ))}
        </ul>
      </div>
    );
}