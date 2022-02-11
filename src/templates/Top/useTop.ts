import React from "react";
import { SetQuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import { SetResultContext } from "@/contexts/ResultContextProvider";

export const useTop = () => {
  const setQuizCondition = React.useContext(SetQuizConditionContext);
  const setResult = React.useContext(SetResultContext);

  React.useEffect(() => {
    setQuizCondition.reset();
    setResult.reset();
  }, []);
};
