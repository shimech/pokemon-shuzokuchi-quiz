import { css } from "@emotion/react";
import React from "react";
import { QuizConditionPanel } from "./QuizConditionPanel";
import { QuizStartLink } from "./QuizStartLink";
import { Main } from "@/components/Main";

export const Top: React.VoidFunctionComponent = () => (
  <Main
    css={css`
      padding: 20px 0;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          margin-bottom: 16px;
        `}
      >
        <QuizConditionPanel />
      </div>
      <QuizStartLink />
    </div>
  </Main>
);
