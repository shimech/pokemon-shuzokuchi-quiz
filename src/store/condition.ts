import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Condition } from '@/domain/condition';

export type ConditionType = Condition;

export type RegionName =
  | 'kanto'
  | 'johto'
  | 'hoenn'
  | 'sinnoh'
  | 'unova'
  | 'kalos'
  | 'alola'
  | 'galar';

export type Other =
  | 'includeMegaEvolution'
  | 'includeSameStatus'
  | 'includeBeforeEvolution';

const initialState: ConditionType = {
  includeRegion: {
    kanto: true,
    johto: true,
    hoenn: true,
    sinnoh: true,
    unova: true,
    kalos: true,
    alola: true,
    galar: true,
  },
  includeMegaEvolution: false,
  includeSameStatus: false,
  includeBeforeEvolution: false,
};

const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    changeIncludeRegion: (state, action: PayloadAction<RegionName>) => {
      const newState = !state.includeRegion[action.payload];
      state.includeRegion[action.payload] = newState;

      if (Object.values(state.includeRegion).every((item) => !item)) {
        state.includeRegion = initialState.includeRegion;
      }
    },
    changeOther: (state, action: PayloadAction<Other>) => {
      const newState = !state[action.payload];
      state[action.payload] = newState;
    },
  },
});

export const { changeIncludeRegion, changeOther } = conditionSlice.actions;
export default conditionSlice.reducer;
