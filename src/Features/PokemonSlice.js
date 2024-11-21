import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [
      {pokemonId: 1, playerId: 0, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 2, playerId: 0, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 3, playerId: 0, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 4, playerId: 0, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 1, playerId: 1, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 2, playerId: 1, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 3, playerId: 1, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'},
      {pokemonId: 4, playerId: 1, isAlive: true, isFighting: true, name: 'Pikachu', image: 'https://assets.tcgdex.net/en/swsh/swsh3/136'}
    ], // [{ pokemonId: (valeur qui s'incrmente), playerId: 1 , isAlive: true, isFighting: true ,name: 'Pikachu', image: xx, stats: [hpInit: 100, hp: 50, type: 'normal', ...], apiTypes: [] }]
  },
  reducers: {
    addPokemon(state, action) {
      const { id: pokemonId, playerId, name, image, stats, apiTypes } = action.payload;
      const isAlive = true;
      const isFighting = false;
      const newPokemon = {pokemonId, playerId, name, isAlive, isFighting, image, stats, apiTypes}
      state.pokemons.push(newPokemon);
    },
    updateIsFighting(state, action) {
        const { id: pokemonId, playerId, isFighting } = action.payload;
        const pokemon = state.pokemons.find((pokemon) => pokemon.pokemonId === pokemonId && pokemon.playerId === playerId);

        if (pokemon) {
            pokemon.isFighting = isFighting;
        }
    },
    updateIsAlive(state, action) {
        const { id: pokemonId, playerId, isAlive } = action.payload;
        const pokemon = state.pokemons.find((pokemon) => pokemon.pokemonId === pokemonId && pokemon.playerId === playerId);

        if (pokemon) {
            pokemon.isAlive = isAlive;
        }
    },
    // updatePokemonHp(state, action) {
    //     const { id: pokemonId, playerId, hpChange } = action.payload;
    //     const pokemon = state.pokemons.find((pokemon) => pokemon.pokemonId === pokemonId && pokemon.playerId === playerId);

    //     if (pokemon) {
    //         pokemon.stats.hp += hpChange;
    //     }
    // },
  },
});

export const { addPokemon, updateIsAlive, updateIsFighting, updatePokemonHp } = pokemonSlice.actions;
export default pokemonSlice.reducer;