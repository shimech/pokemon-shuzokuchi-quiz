import React from "react";
import { initialValue, useQuizCondition } from "@/hooks/useQuizCondition";
import type { QuizCondition } from "@/types/quizCondition";
import type { Region } from "@/types/region";

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

export const QuizConditionContextProvider: React.FunctionComponent = (
  props,
) => {
  const { quizCondition, ...setQuizCondition } = useQuizCondition();

  return (
    <QuizConditionContext.Provider value={quizCondition}>
      <SetQuizConditionContext.Provider value={setQuizCondition}>
        {props.children}
      </SetQuizConditionContext.Provider>
    </QuizConditionContext.Provider>
  );
};
