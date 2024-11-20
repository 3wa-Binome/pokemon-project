import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../Features/PokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
