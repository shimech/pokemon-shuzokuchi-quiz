import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ResultState = {
  numQuestion: number;
  numCorrect: number;
  numHint: number;
};

export type IncrementAction = 'question' | 'correct' | 'hint';

const initialState: ResultState = {
  numQuestion: 1,
  numCorrect: 0,
  numHint: 0,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IncrementAction>) => {
      switch (action.payload) {
        case 'question':
          state.numQuestion++;
          break;
        case 'correct':
          state.numCorrect++;
          break;
        case 'hint':
          state.numHint++;
          break;
      }
    },
  },
});

export const { increment } = resultSlice.actions;
export default resultSlice.reducer;
