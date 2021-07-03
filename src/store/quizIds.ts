import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type QuizIdsState = {
  quizIds: string[];
};

const initialState: QuizIdsState = {
  quizIds: [],
};

const quizIdsSlice = createSlice({
  name: 'quizIds',
  initialState,
  reducers: {
    setQuizIds: (state, action: PayloadAction<string[]>) => {
      state.quizIds = action.payload;
    },
  },
});

export const { setQuizIds } = quizIdsSlice.actions;
export default quizIdsSlice.reducer;
