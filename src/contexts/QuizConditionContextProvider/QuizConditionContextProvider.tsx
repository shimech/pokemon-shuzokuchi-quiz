import React from "react";
import { useQuizConditionContextProvider } from "./useQuizConditionContextProvider";
import type { PropsWithChildren } from "@/types/PropsWithChildren";
import type { QuizCondition } from "@/types/QuizCondition";
import type { Region } from "@/types/Region";

export type QuizConditionReducer = {
  changeIncludeRegion: (region: Region) => void;
  changeIncludeMegaEvolution: VoidFunction;
  changeIncludeSameStatus: VoidFunction;
  changeIncludeBeforeEvolution: VoidFunction;
  reset: VoidFunction;
};

const defaultValue: QuizCondition = {
  includeBeforeEvolution: false,
  includeMegaEvolution: false,
  includeRegion: {
    alola: true,
    galar: true,
    hisui: true,
    hoenn: true,
    johto: true,
    kalos: true,
    kanto: true,
    paldea: true,
    sinnoh: true,
    unova: true,
  },
  includeSameStatus: false,
};

export const QuizConditionContext =
  React.createContext<QuizCondition>(defaultValue);
export const QuizConditionReducerContext =
  React.createContext<QuizConditionReducer>(null);

export const QuizConditionContextProvider = (props: PropsWithChildren) => {
  const { quizCondition, quizConditionReducer } =
    useQuizConditionContextProvider(defaultValue);

  return (
    <QuizConditionContext.Provider value={quizCondition}>
      <QuizConditionReducerContext.Provider value={quizConditionReducer}>
        {props.children}
      </QuizConditionReducerContext.Provider>
    </QuizConditionContext.Provider>
  );
};
