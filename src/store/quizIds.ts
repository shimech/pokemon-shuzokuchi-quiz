import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QuizIds = string[];

const initialState: QuizIds = [];

const quizIdsSlice = createSlice({
  name: 'quizIds',
  initialState,
  reducers: {
    setQuizIds: (state, action: PayloadAction<string[]>) => {
      state = action.payload;
    },
  },
});

export const { setQuizIds } = quizIdsSlice.actions;
export default quizIdsSlice.reducer;
