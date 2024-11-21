import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    lastId: 0
  },
  reducers: {
    addCard(state, action) {
      const {playerId, name, image, hp, types, abilities = [], attacks = [], weaknesses = [], retreat } = action.payload;
      const isAlive = true;
      const isFighting = false;
      const id = state.lastId;
      const newCard = { id, playerId, name, isAlive, isFighting, image, hp, types, abilities, attacks, weaknesses, retreat};
      state.cards.push(newCard);
      state.lastId += 1;
    },
    removeCard(state, action) {
      // On filtre les cartes pour supprimer celle qui correspond à l'ID fourni
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateIsFighting(state, action) {
      const { id: pokemonId, playerId, isFighting } = action.payload;
      const pokemon = state.pokemons.find(
        (pokemon) =>
          pokemon.pokemonId === pokemonId && pokemon.playerId === playerId
      );

      if (pokemon) {
        pokemon.isFighting = isFighting;
      }
    },
    // updateIsAlive(state, action) {
    //   const { id: pokemonId, playerId, isAlive } = action.payload;
    //   const pokemon = state.pokemons.find(
    //     (pokemon) =>
    //       pokemon.pokemonId === pokemonId && pokemon.playerId === playerId
    //   );

    //   if (pokemon) {
    //     pokemon.isAlive = isAlive;
    //   }
    // },
  },
});

export const { addCard, removeCard, updateIsFighting, updateIsAlive } = cardSlice.actions;
export default cardSlice.reducer;