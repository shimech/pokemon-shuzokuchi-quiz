import React from "react";
import { QuizConditionReducerContext } from "@/contexts/QuizConditionContextProvider";
import { ResultReducerContext } from "@/contexts/ResultContextProvider";

export const useTop = () => {
  const quizConditionReducer = React.useContext(QuizConditionReducerContext);
  const resultReducer = React.useContext(ResultReducerContext);

  React.useEffect(() => {
    quizConditionReducer.reset();
    resultReducer.reset();
  }, [quizConditionReducer, resultReducer]);
};
