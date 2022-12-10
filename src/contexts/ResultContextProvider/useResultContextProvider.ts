import React from "react";
import type { ResultReducer } from "./ResultContextProvider";
import type { Result } from "@/types/Result";

export const useResultContextProvider = (defaultValue: Result) => {
  const [result, setResult] = React.useState(defaultValue);

  const increment = React.useCallback(
    (key: keyof Result) =>
      setResult((prevResult) => ({
        ...prevResult,
        [key]: prevResult[key] + 1,
      })),
    [setResult],
  );

  const reset = React.useCallback(
    () => setResult({ ...defaultValue }),
    [setResult, defaultValue],
  );

  const resultReducer: ResultReducer = React.useMemo(
    () => ({ increment, reset }),
    [increment, reset],
  );

  return { result, resultReducer };
};
