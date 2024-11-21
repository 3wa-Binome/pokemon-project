import { useSelector } from 'react-redux'
import '../css/Player.css'
import Card from './Card';

export function Player({ player }) {
    const { pokemons } = useSelector((state) => state.pokemon);
    const pokemonsOfPlayer = pokemons.filter((pokemon) => pokemon.playerId === player);
    const urlBackCard = '/back-card.png';

    return (
        <div className='player'>
            {
                pokemonsOfPlayer && pokemonsOfPlayer.map((pokemon) => {
                    return (
                        <Card
                            key={pokemon.pokemonId}
                            id={pokemon.pokemonId}
                            name={pokemon.name}
                            image={pokemon.image}
                        />
                    )
                })
            }
        </div>
    )
}
