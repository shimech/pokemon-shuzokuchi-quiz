import React from "react";
import type { QuizCondition } from "@/types/quizCondition";
import type { Region } from "@/types/region";

export const initialValue: QuizCondition = {
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

const noRegionInclude = (includeRegion: { [key in Region]: boolean }) =>
  Object.values(includeRegion).every((isRegionInclude) => !isRegionInclude);

type Return = {
  quizCondition: QuizCondition;
  changeIncludeRegion: (region: Region) => void;
  changeIncludeMegaEvolution: VoidFunction;
  changeIncludeSameStatus: VoidFunction;
  changeIncludeBeforeEvolution: VoidFunction;
  reset: VoidFunction;
};

export const useQuizCondition = (): Return => {
  const [quizCondition, setQuizCondition] =
    React.useState<QuizCondition>(initialValue);

  const changeIncludeRegion = (region: Region) =>
    setQuizCondition((prevState) => {
      const newIncludeRegion = {
        ...prevState.includeRegion,
        [region]: !prevState.includeRegion[region],
      };

      if (noRegionInclude(newIncludeRegion)) {
        Object.keys(newIncludeRegion).forEach(
          (region) => (newIncludeRegion[region] = true),
        );
      }

      return {
        ...prevState,
        includeRegion: newIncludeRegion,
      };
    });

  const changeIncludeMegaEvolution = () =>
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeMegaEvolution: !prevState.includeMegaEvolution,
      };
    });

  const changeIncludeSameStatus = () =>
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeSameStatus: !prevState.includeSameStatus,
      };
    });

  const changeIncludeBeforeEvolution = () =>
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeBeforeEvolution: !prevState.includeBeforeEvolution,
      };
    });

  return {
    quizCondition,
    changeIncludeRegion,
    changeIncludeMegaEvolution,
    changeIncludeSameStatus,
    changeIncludeBeforeEvolution,
    reset: () => setQuizCondition({ ...initialValue }),
  };
};
