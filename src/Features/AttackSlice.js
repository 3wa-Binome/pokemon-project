import { createSlice } from '@reduxjs/toolkit';

const attackSlice = createSlice({
  name: 'attack',
  initialState: {
    attacks: [], // [{ id: 1 (valeur qui s'incrÃ©mente), pokemonId, playerId, name, isActive ,stats (type etc..)]
  },
  reducers: {
    addAttack(state, action) {
      const { id: attackId, pokemonId, playerId, name, stats } = action.payload;
      const isActive = true;
      const newAttack = {attackId, pokemonId, playerId, name, isActive, stats}
      state.attacks.push(newAttack);
    },
    updateIsActive(state, action) {
        const { id: attackId, isActive } = action.payload;
        const attack = state.attacks.find((attack) => attack.attackId === attackId);

        if (attack) {
            attack.isFighting = isActive;
        }
    },
  },
});

export const { addAttack, updateIsAlive } = attackSlice.actions;
export default attackSlice.reducer;