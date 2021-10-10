import React from "react";
import type { QuizCondition } from "@/types/quizCondition";
import type { Region } from "@/types/region";

const initialValue: QuizCondition = {
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

export const QuizConditionContext = React.createContext<{
  value: QuizCondition;
  changeIncludeRegion: (region: Region) => void;
  changeIncludeMegaEvolution: VoidFunction;
  changeIncludeSameStatus: VoidFunction;
  changeIncludeBeforeEvolution: VoidFunction;
  reset: VoidFunction;
}>({
  value: initialValue,
  changeIncludeRegion: () => {},
  changeIncludeMegaEvolution: () => {},
  changeIncludeSameStatus: () => {},
  changeIncludeBeforeEvolution: () => {},
  reset: () => {},
});

const noRegionInclude = (includeRegion: { [key in Region]: boolean }) =>
  Object.values(includeRegion).every((isRegionInclude) => !isRegionInclude);

export const QuizConditionContextProvider: React.FunctionComponent = (
  props,
) => {
  const [quizCondition, setQuizCondition] =
    React.useState<QuizCondition>(initialValue);

  const changeIncludeRegion = (region: Region) => {
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
  };

  const changeIncludeMegaEvolution = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeMegaEvolution: !prevState.includeMegaEvolution,
      };
    });
  };

  const changeIncludeSameStatus = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeSameStatus: !prevState.includeSameStatus,
      };
    });
  };

  const changeIncludeBeforeEvolution = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeBeforeEvolution: !prevState.includeBeforeEvolution,
      };
    });
  };

  const value = {
    value: quizCondition,
    changeIncludeRegion,
    changeIncludeMegaEvolution,
    changeIncludeSameStatus,
    changeIncludeBeforeEvolution,
    reset: () => setQuizCondition(initialValue),
  };

  return (
    <QuizConditionContext.Provider value={value}>
      {props.children}
    </QuizConditionContext.Provider>
  );
};
