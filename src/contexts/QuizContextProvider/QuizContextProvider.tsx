import React from "react";
import { useQuizContextProvider } from "./useQuizContextProvider";
import type { Quiz } from "@/types/Quiz";
import type { WithChildren } from "@/types/WithChildren";

export const QuizContext = React.createContext<Quiz>([]);

type QuizContextProviderProps = WithChildren;

export const QuizContextProvider = (props: QuizContextProviderProps) => {
  const { quiz } = useQuizContextProvider();

  return (
    <QuizContext.Provider value={quiz}>{props.children}</QuizContext.Provider>
  );
};
