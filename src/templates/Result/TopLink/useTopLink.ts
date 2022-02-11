import React from "react";
import { SetQuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useTopLink = () => {
  const isDesktop = useDesktop();
  const setQuizCondition = React.useContext(SetQuizConditionContext);
  const setResult = React.useContext(SetResultContext);

  const handleTopLinkClick = () => {
    setQuizCondition.reset();
    setResult.reset();
  };

  return { isDesktop, handleTopLinkClick };
};
