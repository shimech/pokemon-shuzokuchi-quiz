import { css } from "@emotion/react";
import React from "react";
import { QuizConditionPanel } from "./QuizConditionPanel";
import { Main } from "@/components/Main";
import { QuizConditionContextProvider } from "@/contexts/QuizConditionContextProvider";

export const Top: React.VoidFunctionComponent = () => (
  <Main
    css={css`
      padding-top: 20px;
    `}
  >
    <QuizConditionContextProvider>
      <QuizConditionPanel />
    </QuizConditionContextProvider>
  </Main>
);
