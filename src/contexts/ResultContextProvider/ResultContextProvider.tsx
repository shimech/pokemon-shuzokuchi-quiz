import React from "react";
import { useResultContextProvider } from "./useResultContextProvider";
import type { Result } from "@/types/Result";
import type { WithChildren } from "@/types/WithChildren";

const initialValue: Result = {
  correctCount: 0,
  hintCount: 0,
  quizCount: 0,
};

export const ResultContext = React.createContext(initialValue);

export const SetResultContext = React.createContext<{
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
}>({ increment: () => {}, reset: () => {} });

type ResultContextProviderProps = WithChildren;

export const ResultContextProvider = (props: ResultContextProviderProps) => {
  const { result, setResult } = useResultContextProvider(initialValue);

  return (
    <ResultContext.Provider value={result}>
      <SetResultContext.Provider value={setResult}>
        {props.children}
      </SetResultContext.Provider>
    </ResultContext.Provider>
  );
};
