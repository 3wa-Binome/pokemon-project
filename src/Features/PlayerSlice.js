import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    players: [], // [{ id: 1, name: 'Player 1',  averageForce: 800}]
  },
  reducers: {
    addPlayer(state, action) {
      state.players.push(action.payload); // payload = { id, name, averageForce }
    },
  },
});

export const { addPlayer } = playerSlice.actions;
export default playerSlice.reducer;