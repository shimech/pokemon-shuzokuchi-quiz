import { css } from "@emotion/react";
import { useQuizStartLink } from "./useQuizStartLink";
import { NextPageLink } from "@/components/NextPageLink";

export const QuizStartLink = () => {
  const { isDesktop, start } = useQuizStartLink();

  return (
    <NextPageLink
      afterTransition={start}
      css={[
        css`
          height: 4rem;
          font-size: 2rem;
          border-radius: 2rem;
        `,
        !isDesktop &&
          css`
            height: 3.2rem;
            font-size: 1.6rem;
          `,
      ]}
    >
      クイズスタート
    </NextPageLink>
  );
};
