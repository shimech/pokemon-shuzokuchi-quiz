import React from "react";
import {
  QuizConditionContext,
  QuizConditionReducerContext,
} from "@/contexts/QuizConditionContextProvider";
import { useDesktop } from "@/hooks/useDesktop";
import type { Region } from "@/types/Region";

export const useQuizConditionPanel = () => {
  const isDesktop = useDesktop();
  const quizCondition = React.useContext(QuizConditionContext);
  const quizConditionReducer = React.useContext(QuizConditionReducerContext);

  const handleRegionClick = (region: Region) => () =>
    quizConditionReducer.changeIncludeRegion(region);
  const handleMegaEvolutionClick = () =>
    quizConditionReducer.changeIncludeMegaEvolution();
  const handleSameStatusClick = () =>
    quizConditionReducer.changeIncludeSameStatus();
  const handleBeforeEvolutionClick = () =>
    quizConditionReducer.changeIncludeBeforeEvolution();

  return {
    handleBeforeEvolutionClick,
    handleMegaEvolutionClick,
    handleRegionClick,
    handleSameStatusClick,
    isDesktop,
    quizCondition,
  };
};
