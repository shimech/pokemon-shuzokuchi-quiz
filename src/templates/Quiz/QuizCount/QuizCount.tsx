import { css } from "@emotion/react";
import React from "react";
import { useQuizCount } from "./useQuizCount";
import { ALL_QUIZ_COUNT } from "@/constants/allQuizCount";

export const QuizCount: React.VoidFunctionComponent = () => {
  const { isDesktop, quizCount } = useQuizCount();

  return (
    <div
      css={(theme) => [
        css`
          background-color: ${theme.colors.black};
          border-radius: 8px;
          color: ${theme.colors.white};
          font-family: Otomanopee One, sans-serif;
          line-height: 1;
          padding: 12px 24px;
          transition: box-shadow ${theme.duration}ms;
          &:hover {
            box-shadow: 4px 4px 4px ${theme.colors.blue};
          }
        `,
        !isDesktop &&
          css`
            font-size: 1.4rem;
            padding: 8px 16px;
            &:hover,
            &:active {
              box-shadow: 2px 2px 2px ${theme.colors.blue};
            }
          `,
      ]}
    >
      <strong
        css={[
          (theme) => css`
            color: ${theme.colors.white};
            font-family: inherit;
            font-size: 2.4rem;
            line-height: inherit;
            margin-right: 4px;
          `,
          !isDesktop &&
            css`
              font-size: 1.8rem;
            `,
        ]}
      >
        {quizCount}
      </strong>
      /{ALL_QUIZ_COUNT}
    </div>
  );
};
