import React from "react";
import { initialValue, useResult } from "@/hooks/useResult";
import type { Result } from "@/types/result";

export const ResultContext = React.createContext<Result>(initialValue);

export const SetResultContext = React.createContext<{
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
}>({ increment: () => {}, reset: () => {} });

export const ResultContextProvider: React.FunctionComponent = (props) => {
  const { result, ...setResult } = useResult();
  return (
    <ResultContext.Provider value={result}>
      <SetResultContext.Provider value={setResult}>
        {props.children}
      </SetResultContext.Provider>
    </ResultContext.Provider>
  );
};
