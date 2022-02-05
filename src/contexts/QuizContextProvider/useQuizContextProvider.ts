import React from "react";
import { QuizConditionContext } from "../QuizConditionContextProvider";
import { useQuiz } from "@/hooks/useQuiz";

export const useQuizContextProvider = () => {
  const quizCondition = React.useContext(QuizConditionContext);
  const quiz = useQuiz(quizCondition);

  return { quiz };
};
