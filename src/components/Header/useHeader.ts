import React from "react";
import { SetQuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useHeader = () => {
  const isDesktop = useDesktop();
  const setQuizCondition = React.useContext(SetQuizConditionContext);
  const setResult = React.useContext(SetResultContext);

  const handleHomeLinkClick = () => {
    setQuizCondition.reset();
    setResult.reset();
  };

  return { isDesktop, handleHomeLinkClick };
};
