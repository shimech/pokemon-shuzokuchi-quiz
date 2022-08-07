import React from "react";
import { useQuizConditionContextProvider } from "./useQuizConditionContextProvider";
import type { QuizCondition } from "@/types/QuizCondition";
import type { Region } from "@/types/Region";
import type { WithChildren } from "@/types/WithChildren";

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

export const QuizConditionContext =
  React.createContext<QuizCondition>(initialValue);
export const SetQuizConditionContext = React.createContext<{
  changeIncludeRegion: (region: Region) => void;
  changeIncludeMegaEvolution: VoidFunction;
  changeIncludeSameStatus: VoidFunction;
  changeIncludeBeforeEvolution: VoidFunction;
  reset: VoidFunction;
}>({
  changeIncludeRegion: () => {},
  changeIncludeMegaEvolution: () => {},
  changeIncludeSameStatus: () => {},
  changeIncludeBeforeEvolution: () => {},
  reset: () => {},
});

type QuizConditionContextProviderProps = WithChildren;

export const QuizConditionContextProvider = (
  props: QuizConditionContextProviderProps,
) => {
  const { quizCondition, setQuizCondition } =
    useQuizConditionContextProvider(initialValue);

  return (
    <QuizConditionContext.Provider value={quizCondition}>
      <SetQuizConditionContext.Provider value={setQuizCondition}>
        {props.children}
      </SetQuizConditionContext.Provider>
    </QuizConditionContext.Provider>
  );
};
