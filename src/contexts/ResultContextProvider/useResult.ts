import React from "react";
import type { Result } from "@/types/Result";

export const useResult = (initialValue: Result) => {
  const [result, setResult] = React.useState(initialValue);

  const increment = React.useCallback(
    (key: keyof Result) =>
      setResult((prevResult) => ({
        ...prevResult,
        [key]: prevResult[key] + 1,
      })),
    [setResult],
  );

  const reset = React.useCallback(
    () => setResult({ ...initialValue }),
    [setResult, initialValue],
  );

  return { increment, reset, result };
};
