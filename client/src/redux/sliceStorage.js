import { configureStore } from '@reduxjs/toolkit';

import userSlice from './user.reduce';
import questionsSlice from './questionsSlice';
import currentScoreSlice from './currentScore.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    questions: questionsSlice,
    currentScore: currentScoreSlice,
  },
});

export default store;
