import { configureStore } from "@reduxjs/toolkit";
import pokemonCardSlice from "../Features/PokemonCardSlice";
import gameSlice from "../Features/GameSlice";
import playerSlice from "../Features/PlayerSlice";
import pokemonSlice from "../Features/PokemonSlice";
import attackSlice from "../Features/AttackSlice";
import itemSlice from "../Features/ItemSlice";
import deckSlice from "../Features/DeckSlice";

export const store = configureStore({
  reducer: {
    pokemonCards: pokemonCardSlice,
    game: gameSlice,
    player: playerSlice,
    deck: deckSlice,
    item: itemSlice,
    pokemon: pokemonSlice,
    attack: attackSlice,
  },
});

export default store;
