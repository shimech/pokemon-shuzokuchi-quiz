import { css } from "@emotion/react";
import Link from "next/link";
import { useTopLink } from "./useTopLink";
import { Button } from "@/components/Button";

export const TopLink = () => {
  const { isDesktop } = useTopLink();

  return (
    <Link href="/" passHref>
      <a
        css={[
          css`
            display: block;
            width: 320px;
            height: 4rem;
          `,
          !isDesktop &&
            css`
              width: 240px;
              height: 3.2rem;
            `,
        ]}
      >
        <Button
          css={(theme) => [
            css`
              width: 100%;
              height: 100%;
              padding: 0;
              font-size: 2rem;
              color: ${theme.colors.white};
              text-align: center;
              background-color: ${theme.colors.black};
              border-radius: 2rem;
              transition: background-color ${theme.duration}ms;

              &:hover {
                background-color: ${theme.colors.blue};
              }
            `,
            !isDesktop &&
              css`
                font-size: 1.6rem;
                border-radius: 1.6rem;
              `,
          ]}
        >
          もう一度挑戦する！
        </Button>
      </a>
    </Link>
  );
};
