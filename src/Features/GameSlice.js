import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    turn: 1,
    phase: 'selecting', // or battle or finished
    playerStarter: Math.round.random(),
    nbOfPokemonsByPlayer: 4,
    winner: null,
  },
  reducers: {
    nextTurn(state) {
      state.turn += 1;
      state.playerStarter = Math.round.random();
    },
    setPhase(state, action) {
      state.phase = action.payload;
    },
    setNbOfPokemonsByPlayer(state, action) {
      state.nbOfPokemonsByPlayer = action.payload;
    },
    setWinner(state, action) {
      state.winner = action.payload;
    },
  },
});

export const { nextTurn, setPhase, setNbOfPokemonsByPlayer, setWinner } = gameSlice.actions;
export default gameSlice.reducer;