import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type QuizIdsState = string[];

const initialState: QuizIdsState = [];

const quizIdsSlice = createSlice({
  name: 'quizIds',
  initialState,
  reducers: {
    setQuizIds: (state, action: PayloadAction<QuizIdsState>) => {
      state = action.payload;
    },
  },
});

export const { setQuizIds } = quizIdsSlice.actions;
export default quizIdsSlice.reducer;
