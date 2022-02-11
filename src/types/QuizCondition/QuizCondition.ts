import type { Region } from "../Region";

export type QuizCondition = {
  includeRegion: {
    [key in Region]: boolean;
  };
  includeMegaEvolution: boolean;
  includeSameStatus: boolean;
  includeBeforeEvolution: boolean;
};
