import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    players: [], // [{ id: 1, name: 'Player 1',  averageForce: 800}]
  },
  reducers: {
    addPlayer(state, action) {
      const {id, name } = action.payload
      const averageForce = 0;
      state.players.push({id, name, averageForce}); // payload = { id, name, averageForce }
    },
    updateAverageForce(state, action) {
      const { id, averageForce } = action.payload;
      const player = state.players.find((player) => player.playerId === id);

      if (player) {
          player.averageForce = averageForce;
      }
    },
  },
});

export const { addPlayer, updateAverageForce } = playerSlice.actions;
export default playerSlice.reducer;