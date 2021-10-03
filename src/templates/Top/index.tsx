import { css } from "@emotion/react";
import React from "react";
import { QuizConditionPanel } from "./QuizConditionPanel";
import { Main } from "@/components/Main";
import { QuizConditionContextProvider } from "@/contexts/QuizConditionContextProvider";

export const Top: React.FC = () => (
  <Main
    css={css`
      margin-top: 20px;
    `}
  >
    <QuizConditionContextProvider>
      <QuizConditionPanel />
    </QuizConditionContextProvider>
  </Main>
);
