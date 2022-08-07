import React from "react";
import type { QuizCondition } from "@/types/QuizCondition";
import type { Region } from "@/types/Region/Region";

const noRegionInclude = (includeRegion: { [key in Region]: boolean }) =>
  Object.values(includeRegion).every((isRegionInclude) => !isRegionInclude);

export const useQuizCondition = (initialValue: QuizCondition) => {
  const [quizCondition, setQuizCondition] = React.useState(initialValue);

  const changeIncludeRegion = React.useCallback(
    (region: Region) =>
      setQuizCondition((prevQuizCondition) => {
        const nextIncludeRegion = {
          ...prevQuizCondition.includeRegion,
          [region]: !prevQuizCondition.includeRegion[region],
        };

        if (noRegionInclude(nextIncludeRegion)) {
          Object.keys(nextIncludeRegion).forEach(
            (region) => (nextIncludeRegion[region] = true),
          );
        }

        return {
          ...prevQuizCondition,
          includeRegion: nextIncludeRegion,
        };
      }),
    [setQuizCondition],
  );

  const changeIncludeMegaEvolution = React.useCallback(
    () =>
      setQuizCondition((prevQuizCondition) => ({
        ...prevQuizCondition,
        includeMegaEvolution: !prevQuizCondition.includeMegaEvolution,
      })),
    [setQuizCondition],
  );

  const changeIncludeSameStatus = React.useCallback(
    () =>
      setQuizCondition((prevQuizCondition) => ({
        ...prevQuizCondition,
        includeSameStatus: !prevQuizCondition.includeSameStatus,
      })),
    [setQuizCondition],
  );

  const changeIncludeBeforeEvolution = React.useCallback(
    () =>
      setQuizCondition((prevQuizCondition) => ({
        ...prevQuizCondition,
        includeBeforeEvolution: !prevQuizCondition.includeBeforeEvolution,
      })),
    [setQuizCondition],
  );

  const reset = React.useCallback(
    () => setQuizCondition({ ...initialValue }),
    [setQuizCondition, initialValue],
  );

  return {
    changeIncludeBeforeEvolution,
    changeIncludeMegaEvolution,
    changeIncludeRegion,
    changeIncludeSameStatus,
    quizCondition,
    reset,
  };
};
