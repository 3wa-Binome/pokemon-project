import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../Features/PokemonCardSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
