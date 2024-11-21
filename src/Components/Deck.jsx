import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'
import '../css/Deck.css'

export function Deck({ player }) {
    const { pokemons } = useSelector((state) => state.pokemon);
    const pokemonsOfPlayer = pokemons.filter((pokemon) => pokemon.playerId === player);
    const urlBackCard = '/back-card.png';

    return (
        <div className='deck'>
            {
                pokemonsOfPlayer && pokemonsOfPlayer.map((pokemon) => {
                    return (
                        <PokemonCard
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