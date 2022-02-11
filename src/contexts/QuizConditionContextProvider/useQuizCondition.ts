import React from "react";
import type { QuizCondition } from "@/types/QuizCondition";
import type { Region } from "@/types/Region/Region";

const noRegionInclude = (includeRegion: { [key in Region]: boolean }) =>
  Object.values(includeRegion).every((isRegionInclude) => !isRegionInclude);

export const useQuizCondition = (initialValue: QuizCondition) => {
  const [quizCondition, setQuizCondition] = React.useState(initialValue);

  const changeIncludeRegion = (region: Region) =>
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
    });

  const changeIncludeMegaEvolution = () =>
    setQuizCondition((prevQuizCondition) => {
      return {
        ...prevQuizCondition,
        includeMegaEvolution: !prevQuizCondition.includeMegaEvolution,
      };
    });

  const changeIncludeSameStatus = () =>
    setQuizCondition((prevQuizCondition) => {
      return {
        ...prevQuizCondition,
        includeSameStatus: !prevQuizCondition.includeSameStatus,
      };
    });

  const changeIncludeBeforeEvolution = () =>
    setQuizCondition((prevQuizCondition) => {
      return {
        ...prevQuizCondition,
        includeBeforeEvolution: !prevQuizCondition.includeBeforeEvolution,
      };
    });

  return {
    quizCondition,
    changeIncludeRegion,
    changeIncludeMegaEvolution,
    changeIncludeSameStatus,
    changeIncludeBeforeEvolution,
    reset: () => setQuizCondition({ ...initialValue }),
  };
};
