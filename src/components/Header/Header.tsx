import { css } from "@emotion/react";
import Link from "next/link";
import { Button } from "../Button";
import { useHeader } from "./useHeader";

export const Header = () => {
  const { isDesktop } = useHeader();

  return (
    <header
      css={[
        (theme) => css`
          display: flex;
          align-items: center;
          height: ${theme.header.height}px;
          padding: 0 48px;
          background-color: ${theme.colors.black};
        `,
        !isDesktop &&
          css`
            padding: 0 12px;
          `,
      ]}
    >
      <div
        css={[
          css`
            display: flex;
            align-items: center;
            width: 32px;
            height: 100%;
            margin-right: 20px;
          `,
          !isDesktop &&
            css`
              margin-right: auto;
            `,
        ]}
      >
        <img alt="" height={32} src="/images/monster-ball.png" width={32} />
      </div>
      <h1
        css={[
          (theme) => css`
            margin-right: auto;
            font-family: pokemon-font;
            font-size: 2rem;
            color: ${theme.colors.white};
          `,
          !isDesktop &&
            css`
              font-size: 1.1rem;
            `,
        ]}
      >
        Pokémon Shuzokuchi Quiz
      </h1>
      <div
        css={[
          css`
            width: 120px;
            height: 100%;
          `,
          !isDesktop &&
            css`
              width: 48px;
            `,
        ]}
      >
        <Link href="/" passHref>
          <a
            css={css`
              display: block;
              width: 100%;
              height: 100%;
            `}
          >
            <Button
              css={(theme) => css`
                width: 100%;
                min-width: 48px;
                height: 100%;
                padding: 0;
                font-family: pokemon-font;
                font-size: 2rem;
                color: ${theme.colors.white};
                text-align: center;
                transition: background-color ${theme.duration}ms;

                &:hover {
                  background-color: ${theme.colors.blue};
                }
              `}
            >
              {isDesktop ? (
                "HOME"
              ) : (
                <img
                  alt="TOPへ"
                  height={32}
                  src="/images/home.svg"
                  width={32}
                />
              )}
            </Button>
          </a>
        </Link>
      </div>
    </header>
  );
};
