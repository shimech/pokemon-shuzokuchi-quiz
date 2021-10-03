export type QuizCondition = {
  includeRegion: {
    kanto: boolean;
    johto: boolean;
    hoenn: boolean;
    sinnoh: boolean;
    unova: boolean;
    kalos: boolean;
    alola: boolean;
    galar: boolean;
  };
  includeMegaEvolution: boolean;
  includeSameStatus: boolean;
  includeBeforeEvolution: boolean;
};
