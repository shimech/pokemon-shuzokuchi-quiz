import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { useHeader } from "./useHeader";

export const Header: React.VoidFunctionComponent = () => {
  const { isDesktop, handleHomeLinkClick } = useHeader();

  return (
    <header
      css={[
        (theme) => css`
          align-items: center;
          background-color: ${theme.colors.black};
          display: flex;
          height: ${theme.header.height}px;
          padding: 0 48px;
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
            align-items: center;
            display: flex;
            height: 100%;
            margin-right: 20px;
            width: 32px;
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
            color: ${theme.colors.white};
            font-family: pokemon-font;
            font-size: 2rem;
            margin-right: auto;
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
            height: 100%;
            width: 120px;
          `,
          !isDesktop &&
            css`
              width: 48px;
            `,
        ]}
      >
        <Link passHref href="/">
          <a
            css={css`
              display: block;
              height: 100%;
              width: 100%;
            `}
            onClick={handleHomeLinkClick}
          >
            <Button
              css={(theme) => css`
                height: 100%;
                min-width: 48px;
                padding: 0;
                text-align: center;
                transition: background-color ${theme.transition}ms;
                width: 100%;
                &:hover {
                  background-color: ${theme.colors.blue};
                }
                & > span {
                  color: ${theme.colors.white};
                  font-family: pokemon-font;
                  font-size: 2rem;
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
