import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    turn: 1,
    phase: 'name-selecting', // name-selecting, card-selecting, battle or finished
    playerStarter: Math.round(Math.random()),
    maxPokemon: 4,
    winner: null,
  },
  reducers: {
    nextTurn(state) {
      state.turn += 1;
      state.playerStarter = Math.round(Math.random());
      state.nbOfPlayerWhoPlayedOnTheTurn = 0;
    },
    setPhase(state, action) {
      state.phase = action.payload;
    },
    setMaxPokemon(state, action) {
      state.maxPokemon = action.payload;
    },
    setWinner(state, action) {
      state.winner = action.payload;
    },
    nextPlayer(state) {
      state.nbOfPlayerWhoPlayedOnTheTurn += 1;
    },
    resetBattle(state) {
      state.phase = 'name-selecting';
    },
  },
});

export const { nextTurn, setPhase, setMaxPokemon, setWinner, nextPlayer, resetBattle } = gameSlice.actions;
export default gameSlice.reducer;