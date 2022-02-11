import { css } from "@emotion/react";
import React from "react";
import { use404 } from "./use404";
import { Main } from "@/components/Main";

export const _404: React.VoidFunctionComponent = () => {
  const count = use404();

  return (
    <Main
      css={(theme) => css`
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        padding: 24px 0 40px;
        p,
        strong {
          color: ${theme.colors.red};
        }
      `}
    >
      <p
        css={css`
          margin-bottom: 8px;
        `}
      >
        エラーが発生しました。
      </p>
      <p>
        <strong
          css={css`
            font-family: Otomanopee One, sans-serif;
            font-size: 2.4rem;
            margin-right: 8px;
          `}
        >
          {count}
        </strong>
        秒後にトップへ遷移します。
      </p>
    </Main>
  );
};
