import { css } from "@emotion/react";
import React from "react";
import { QuizConditionPanel } from "./QuizConditionPanel";
import { QuizStartLink } from "./QuizStartLink";
import { Main } from "@/components/Main";

export const Top: React.VoidFunctionComponent = () => (
  <Main
    css={css`
      padding: 24px 0 40px;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <QuizConditionPanel
        css={css`
          margin-bottom: 24px;
        `}
      />
      <QuizStartLink />
    </div>
  </Main>
);
