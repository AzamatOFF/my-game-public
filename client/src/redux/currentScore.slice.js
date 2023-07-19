import { createSlice } from '@reduxjs/toolkit';

const currentScoreSlice = createSlice({
  name: 'currentScore',
  initialState: {
    value: 0,
  },
  reducers: {
    addPoints(state, action) {
      state.value += action.payload;
    },
    removePoints(state, action) {
      state.value -= action.payload;
    },

  },
});

export default currentScoreSlice.reducer;
export const { addPoints, removePoints } = currentScoreSlice.actions;
