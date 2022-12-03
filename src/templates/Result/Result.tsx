import { css } from "@emotion/react";
import { TopLink } from "./TopLink";
import { useResult } from "./useResult";
import { Main } from "@/components/Main";
import { TwitterLink } from "@/components/TwitterLink";

export const Result = () => {
  const { isDesktop, hintCount, score, time, title } = useResult();

  return (
    <Main
      css={css`
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 24px 0 40px;
      `}
    >
      <p
        css={[
          css`
            margin-bottom: 24px;
            font-size: 3.2rem;
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
              margin: 0 8px;
              font-family: "Otomanopee One", sans-serif;
              font-size: 4rem;
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
            margin-bottom: 20px;
          `,
          !isDesktop &&
            css`
              margin-bottom: 16px;
            `,
        ]}
      >
        ヒント使用回数:
        <span
          css={css`
            margin: 0 4px;
            font-family: "Otomanopee One", sans-serif;
          `}
        >
          {hintCount}
        </span>
        回
      </p>
      {time && (
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
          解答時間:
          <span
            css={css`
              margin: 0 4px;
              font-family: "Otomanopee One", sans-serif;
            `}
          >
            {time.minute}
          </span>
          分
          <span
            css={css`
              margin: 4px;
              font-family: "Otomanopee One", sans-serif;
            `}
          >
            {time.second}
          </span>
          秒
        </p>
      )}
      <TwitterLink
        css={[
          css`
            height: 40px;
            margin-bottom: 48px;
            border-radius: 20px;

            & > span {
              margin: 0 16px 0 8px;
            }
          `,
          !isDesktop &&
            css`
              height: 24px;
              margin-bottom: 32px;
              border-radius: 12px;

              & > span {
                margin: 0 12px 0 6px;
                font-size: 1.6rem;
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
