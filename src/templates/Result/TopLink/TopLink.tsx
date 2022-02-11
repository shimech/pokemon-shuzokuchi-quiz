import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { useTopLink } from "./useTopLink";
import { Button } from "@/components/Button";

export const TopLink: React.VoidFunctionComponent = () => {
  const { isDesktop } = useTopLink();

  return (
    <Link passHref href="/">
      <a
        css={[
          css`
            display: block;
            height: 4rem;
            width: 320px;
          `,
          !isDesktop &&
            css`
              height: 3.2rem;
              width: 240px;
            `,
        ]}
      >
        <Button
          css={(theme) => [
            css`
              background-color: ${theme.colors.black};
              border-radius: 2rem;
              height: 100%;
              padding: 0;
              text-align: center;
              transition: background-color ${theme.duration}ms;
              width: 100%;
              &:hover {
                background-color: ${theme.colors.blue};
              }
              & > span.MuiButton-label {
                color: ${theme.colors.white};
                font-size: 2rem;
              }
            `,
            !isDesktop &&
              css`
                border-radius: 1.6rem;
                & > span.MuiButton-label {
                  font-size: 1.6rem;
                }
              `,
          ]}
        >
          もう一度挑戦する！
        </Button>
      </a>
    </Link>
  );
};
