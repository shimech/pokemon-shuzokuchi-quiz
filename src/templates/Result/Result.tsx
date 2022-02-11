import { css } from "@emotion/react";
import React from "react";
import { TopLink } from "./TopLink";
import { useResult } from "./useResult";
import { Main } from "@/components/Main";
import { TwitterLink } from "@/components/TwitterLink";

export const Result: React.VoidFunctionComponent = () => {
  const { isDesktop, hintCount, score, title } = useResult();

  return (
    <Main
      css={css`
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        padding: 24px 0 40px;
      `}
    >
      <p
        css={[
          css`
            font-size: 3.2rem;
            margin-bottom: 24px;
          `,
          !isDesktop &&
            css`
              font-size: 2.4rem;
            `,
        ]}
      >
        あなたの点数は...
        <strong
          css={[
            css`
              font-family: Otomanopee One, sans-serif;
              font-size: 4rem;
              margin: 0 8px;
            `,
            !isDesktop &&
              css`
                font-size: 2.8rem;
              `,
          ]}
        >
          {score}
        </strong>
        点！
      </p>
      <p
        css={[
          css`
            margin-bottom: 40px;
          `,
          !isDesktop &&
            css`
              margin-bottom: 32px;
            `,
        ]}
      >
        ヒント使用回数:
        <span
          css={css`
            font-family: Otomanopee One, sans-serif;
            margin-right: 4px;
          `}
        >
          {hintCount}
        </span>
        回
      </p>
      <TwitterLink
        css={[
          css`
            border-radius: 20px;
            height: 40px;
            margin-bottom: 48px;
            & > span {
              margin: 0 16px 0 8px;
            }
          `,
          !isDesktop &&
            css`
              border-radius: 12px;
              height: 24px;
              margin-bottom: 32px;
              & > span {
                font-size: 1.6rem;
                margin: 0 12px 0 6px;
              }
            `,
        ]}
        iconSize={isDesktop ? 40 : 24}
        title={title}
      >
        結果をシェアする
      </TwitterLink>
      <TopLink />
    </Main>
  );
};
