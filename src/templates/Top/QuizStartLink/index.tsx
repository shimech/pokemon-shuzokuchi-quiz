import { css } from "@emotion/react";
import React from "react";
import { NextPageLink } from "@/components/NextPageLink";
import { useDesktop } from "@/hooks/useDesktop";

export const QuizStartLink: React.VoidFunctionComponent = () => {
  const isDesktop = useDesktop();

  return (
    <NextPageLink
      css={[
        css`
          height: 4rem;
          & > button {
            border-radius: 2rem;
          }
          & > button > span {
            font-size: 2rem;
          }
        `,
        !isDesktop &&
          css`
            height: 3.2rem;
            & > button > span {
              font-size: 1.6rem;
            }
          `,
      ]}
    >
      クイズスタート
    </NextPageLink>
  );
};
