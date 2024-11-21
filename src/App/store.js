import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../Features/PokemonCardSlice";
import gameSlice from "../Features/GameSlice";
import playerSlice from "../Features/PlayerSlice";
import pokemonSlice from "../Features/PokemonSlice";
import attackSlice from "../Features/AttackSlice";
import itemSlice from "../Features/ItemSlice";

export const store = configureStore({
  reducer: {
    pokemonCards: pokemonReducer,
    game: gameSlice,
    player: playerSlice,
    item: itemSlice,
    pokemon: pokemonSlice,
    attack: attackSlice,
  },
});

export default store;
