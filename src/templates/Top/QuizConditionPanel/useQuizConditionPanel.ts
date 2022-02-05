import React from "react";
import {
  QuizConditionContext,
  SetQuizConditionContext,
} from "@/contexts/QuizConditionContextProvider";
import { useDesktop } from "@/hooks/useDesktop";
import { Region } from "@/types/Region";

export const useQuizConditionPanel = () => {
  const isDesktop = useDesktop();
  const quizCondition = React.useContext(QuizConditionContext);
  const setQuizCondition = React.useContext(SetQuizConditionContext);

  const handleRegionClick = (region: Region) => () =>
    setQuizCondition.changeIncludeRegion(region);
  const handleMegaEvolutionClick = () =>
    setQuizCondition.changeIncludeMegaEvolution();
  const handleSameStatusClick = () =>
    setQuizCondition.changeIncludeSameStatus();
  const handleBeforeEvolutionClick = () =>
    setQuizCondition.changeIncludeBeforeEvolution();

  return {
    isDesktop,
    quizCondition,
    handleRegionClick,
    handleMegaEvolutionClick,
    handleSameStatusClick,
    handleBeforeEvolutionClick,
  };
};
