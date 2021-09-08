import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HintOpen = {
  type: boolean;
  ability: boolean;
  region: boolean;
};

type Hint = 'type' | 'ability' | 'region';

const initialState: HintOpen = {
  type: false,
  ability: false,
  region: false,
};

const hintOpenSlice = createSlice({
  name: 'hintOpen',
  initialState,
  reducers: {
    openHint: (state, action: PayloadAction<Hint>) => {
      state[action.payload] = true;
    },
    reset: () => initialState,
  },
});

export const { openHint, reset } = hintOpenSlice.actions;
export default hintOpenSlice.reducer;
