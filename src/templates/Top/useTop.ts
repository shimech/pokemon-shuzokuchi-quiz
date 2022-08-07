import React from "react";
import { SetQuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import { SetResultContext } from "@/contexts/ResultContextProvider";

export const useTop = () => {
  const { reset: resetQuizCondition } = React.useContext(
    SetQuizConditionContext,
  );
  const { reset: resetResult } = React.useContext(SetResultContext);

  React.useEffect(() => {
    resetQuizCondition();
    resetResult();
  }, [resetQuizCondition, resetResult]);
};
