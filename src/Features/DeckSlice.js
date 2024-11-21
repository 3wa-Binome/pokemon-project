import { createSlice } from '@reduxjs/toolkit';

const deckSlice = createSlice({
  name: 'deck',
  initialState: {
    deck: [],
  },
  reducers: {
    addCard(state, action) {
      state.deck.push(action.payload);
    }, 
    removeCard(state, action) {
      // On filtre les cartes pour supprimer celle qui correspond à l'ID fourni
      state.deck = state.deck.filter(card => card.id !== action.payload);
    },   
  },
});

export const { addCard, removeCard } = deckSlice.actions;
export default deckSlice.reducer;