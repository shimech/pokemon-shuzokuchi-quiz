import React from "react";
import type { Result } from "@/types/result";

export const initialValue: Result = {
  numQuiz: 0,
  numCorrect: 0,
  numHint: 0,
};

type Return = {
  result: Result;
  increment: (key: keyof Result) => void;
  reset: VoidFunction;
};

export const useResult = (): Return => {
  const [result, setResult] = React.useState<Result>(initialValue);

  const increment = (key: keyof Result) =>
    setResult((prevState) => {
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });

  return { result, increment, reset: () => setResult({ ...initialValue }) };
};
