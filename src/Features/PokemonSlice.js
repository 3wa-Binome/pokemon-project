import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [], // [{ pokemonId: (valeur qui s'incrÃ©mente), playerId: 1 , isAlive: true, isFighting: true ,name: 'Pikachu', image: xx, stats: [hpInit: 100, hp: 50, type: 'normal', ...], apiTypes: [] }]
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