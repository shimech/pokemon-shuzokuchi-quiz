import React from "react";
import type { Result } from "@/types/result";

const initialValue: Result = {
  numQuiz: 1,
  numCorrect: 0,
  numHint: 0,
};

export const ResultContext = React.createContext<{
  value: Result;
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
}>({ value: initialValue, increment: () => {}, reset: () => {} });

export const ResultContextProvider: React.FunctionComponent = (props) => {
  const [result, setResult] = React.useState<Result>(initialValue);

  const increment = (key: keyof Result) => {
    setResult((prevState) => {
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });
  };

  const reset = () => {
    setResult(initialValue);
  };

  const value = { value: result, increment, reset };

  return (
    <ResultContext.Provider value={value}>
      {props.children}
    </ResultContext.Provider>
  );
};
