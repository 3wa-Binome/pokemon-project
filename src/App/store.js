import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../Features/PokemonCardSlice';

export const store = configureStore({
  reducer: {
    pokemonCards: pokemonReducer,
  },
});

export default store;
