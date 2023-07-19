import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    value: [],
  },

  reducers: {
    getQuestions(state, action) {
      state.value = action.payload;
    },
  },

});

export default questionsSlice.reducer;
export const { getQuestions } = questionsSlice.actions;
