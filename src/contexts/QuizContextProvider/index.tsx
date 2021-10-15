import React from "react";
import { QuizConditionContext } from "../QuizConditionContextProvider";
import { Quiz, useQuiz } from "@/hooks/useQuiz";

export const QuizContext = React.createContext<Quiz>([]);

export const QuizContextProvider: React.FunctionComponent = (props) => {
  const quizCondition = React.useContext(QuizConditionContext);
  const quiz = useQuiz(quizCondition);

  return (
    <QuizContext.Provider value={quiz}>{props.children}</QuizContext.Provider>
  );
};
