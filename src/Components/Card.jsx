import '../css/Card.css';
const Card = ({ image, name }) => {
    return (
      <div className="card">
        <img src={`${image}/high.webp`} alt={`Image de la carte pokémon ${name}`} />
      </div>
    );
  };
  
  export default Card;
  