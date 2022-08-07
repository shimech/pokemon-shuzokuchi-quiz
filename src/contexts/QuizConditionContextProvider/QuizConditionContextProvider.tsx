import React from "react";
import { useQuizConditionContextProvider } from "./useQuizConditionContextProvider";
import type { QuizCondition } from "@/types/QuizCondition";
import type { Region } from "@/types/Region";
import type { WithChildren } from "@/types/WithChildren";

const initialValue: QuizCondition = {
  includeBeforeEvolution: false,
  includeMegaEvolution: false,
  includeRegion: {
    alola: true,
    galar: true,
    hoenn: true,
    johto: true,
    kalos: true,
    kanto: true,
    sinnoh: true,
    unova: true,
  },
  includeSameStatus: false,
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
  changeIncludeBeforeEvolution: () => {},
  changeIncludeMegaEvolution: () => {},
  changeIncludeRegion: () => {},
  changeIncludeSameStatus: () => {},
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
