import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [], // [{ id: 1 (valeur qui s'incrémente), playerId, name, isActive , stats (type etc..)]
  },
  reducers: {
    addItem(state, action) {
      const { id: itemId, playerId, name, stats } = action.payload;
      const isActive = true;
      const newItem = {itemId, playerId, isActive, name, stats}
      state.items.push(newItem);
    },
    updateIsActive(state, action) {
        const { id: itemId, isActive } = action.payload;
        const item = state.items.find((item) => item.itemId === itemId);

        if (item) {
            item.isFighting = isActive;
        }
    },
  },
});

export const { additem, updateIsAlive } = itemSlice.actions;
export default itemSlice.reducer;