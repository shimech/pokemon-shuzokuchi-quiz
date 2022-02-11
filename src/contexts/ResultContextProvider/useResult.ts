import React from "react";
import type { Result } from "@/types/Result";

export const useResult = (initialValue: Result) => {
  const [result, setResult] = React.useState(initialValue);

  const increment = (key: keyof Result) =>
    setResult((prevResult) => {
      return {
        ...prevResult,
        [key]: prevResult[key] + 1,
      };
    });

  return { result, increment, reset: () => setResult({ ...initialValue }) };
};
