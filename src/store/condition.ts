import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Condition } from '@/domains/condition';

type RegionName =
  | 'kanto'
  | 'johto'
  | 'hoenn'
  | 'sinnoh'
  | 'unova'
  | 'kalos'
  | 'alola'
  | 'galar';

const initialState: Condition = {
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
      state.includeRegion[action.payload] =
        !state.includeRegion[action.payload];

      if (
        Object.values(state.includeRegion).every(
          (includeThisRegion) => !includeThisRegion,
        )
      ) {
        state.includeRegion = initialState.includeRegion;
      }
    },
    changeIncludeMegaEvolution: (state) => {
      state.includeBeforeEvolution = !state.includeBeforeEvolution;
    },
    changeIncludeSameStatus: (state) => {
      state.includeSameStatus = !state.includeSameStatus;
    },
    changeIncludeBeforeEvolution: (state) => {
      state.includeBeforeEvolution = !state.includeBeforeEvolution;
    },
    reset: () => initialState,
  },
});

export const {
  changeIncludeRegion,
  changeIncludeMegaEvolution,
  changeIncludeSameStatus,
  changeIncludeBeforeEvolution,
  reset,
} = conditionSlice.actions;
export default conditionSlice.reducer;
