import React from "react";
import { useResultContextProvider } from "./useResultContextProvider";
import type { Result } from "@/types/Result";

const initialValue: Result = {
  numQuiz: 0,
  numCorrect: 0,
  numHint: 0,
};

export const ResultContext = React.createContext(initialValue);

export const SetResultContext = React.createContext<{
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
}>({ increment: () => {}, reset: () => {} });

export const ResultContextProvider: React.FunctionComponent = (props) => {
  const { result, setResult } = useResultContextProvider(initialValue);

  return (
    <ResultContext.Provider value={result}>
      <SetResultContext.Provider value={setResult}>
        {props.children}
      </SetResultContext.Provider>
    </ResultContext.Provider>
  );
};
