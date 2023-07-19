/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: null,
    loaded: false,
  },
  reducers: {
    addUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.loaded = action.payload.loaded;
    },

    removeUser(state) {
      state.name = null;
      state.loaded = false;
    },

  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
