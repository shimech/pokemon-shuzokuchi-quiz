import React from "react";
import { useQuizContextProvider } from "./useQuizContextProvider";
import type { PropsWithChildren } from "@/types/PropsWithChildren";
import type { Quiz } from "@/types/Quiz";

export const QuizContext = React.createContext<Quiz>([]);

export const QuizContextProvider = (props: PropsWithChildren) => {
  const { quiz } = useQuizContextProvider();

  return (
    <QuizContext.Provider value={quiz}>{props.children}</QuizContext.Provider>
  );
};
