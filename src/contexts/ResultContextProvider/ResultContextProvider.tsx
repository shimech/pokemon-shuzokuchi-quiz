import React from "react";
import { useResultContextProvider } from "./useResultContextProvider";
import type { PropsWithChildren } from "@/types/PropsWithChildren";
import type { Result } from "@/types/Result";

export type ResultReducer = {
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
};

const defaultValue: Result = {
  correctCount: 0,
  hintCount: 0,
  quizCount: 0,
};

export const ResultContext = React.createContext(defaultValue);

export const ResultReducerContext = React.createContext<ResultReducer>(null);

export const ResultContextProvider = (props: PropsWithChildren) => {
  const { result, resultReducer } = useResultContextProvider(defaultValue);

  return (
    <ResultContext.Provider value={result}>
      <ResultReducerContext.Provider value={resultReducer}>
        {props.children}
      </ResultReducerContext.Provider>
    </ResultContext.Provider>
  );
};
