import type { Region } from "./region";

export type QuizCondition = {
  includeRegion: {
    [key in Region]: boolean;
  };
  includeMegaEvolution: boolean;
  includeSameStatus: boolean;
  includeBeforeEvolution: boolean;
};
