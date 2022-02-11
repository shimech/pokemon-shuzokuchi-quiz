import { css } from "@emotion/react";
import React from "react";
import { useQuizStartLink } from "./useQuizStartLink";
import { NextPageLink } from "@/components/NextPageLink/NextPageLink";

export const QuizStartLink: React.VoidFunctionComponent = () => {
  const { isDesktop } = useQuizStartLink();

  return (
    <NextPageLink
      css={[
        css`
          border-radius: 2rem;
          height: 4rem;
          & > span.MuiButton-label {
            font-size: 2rem;
          }
        `,
        !isDesktop &&
          css`
            height: 3.2rem;
            & > span.MuiButton-label {
              font-size: 1.6rem;
            }
          `,
      ]}
    >
      クイズスタート
    </NextPageLink>
  );
};
