import '../css/PokemonCard.css';

function PokemonCard({ name, image, id }) {

  const urlBackCard = '/back-card.png'

  if(image === 'urlBackCard') {
    return (
      <div className="pokemon-card">
        <img src={urlBackCard} alt={name} />
      </div>
    );
  } else {
    return (
      <div className="pokemon-card" id={`pokemon-${id}`}>
        <img src={`${image}/high.webp`} alt={name} />
      </div>
    );
  }  
}

export default PokemonCard;