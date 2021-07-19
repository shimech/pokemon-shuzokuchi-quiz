import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OpenedHint = {
  type: boolean;
  ability: boolean;
  region: boolean;
};

export type Hint = 'type' | 'ability' | 'region';

export const defaultOpenedHint: OpenedHint = {
  type: false,
  ability: false,
  region: false,
};

const openedHintSlice = createSlice({
  name: 'openedHint',
  initialState: defaultOpenedHint,
  reducers: {
    openHint: (state, action: PayloadAction<Hint>) => {
      state[action.payload] = true;
    },
    reset: () => defaultOpenedHint,
  },
});

export const { openHint, reset } = openedHintSlice.actions;
export default openedHintSlice.reducer;
