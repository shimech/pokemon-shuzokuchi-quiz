import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

export const Header: React.VFC = () => (
  <header
    css={(theme) => css`
      align-items: center;
      background-color: ${theme.colors.black};
      display: flex;
      height: 48px;
      width: 100vw;
    `}
  >
    <img
      alt="モンスターボール アイコン"
      css={css`
        margin: 0 10px;
      `}
      height={32}
      src="/images/monster-ball.png"
      width={32}
    />
    <p
      css={(theme) => css`
        color: ${theme.colors.white};
        font-family: 'pokemon-font';
        margin-right: auto;
      `}
    >
      Pokémon Shuzokuchi Quiz
    </p>
    <Link passHref href="/">
      <a
        css={css`
          height: 100%;
          margin-right: 60px;
          width: 120px;
        `}
      >
        <Button
          css={(theme) => css`
            border-radius: 0;
            height: 100%;
            padding: 0;
            text-align: center;
            transition: background-color 1s;
            width: 100%;
            &:hover {
              background-color: ${theme.colors.blue};
            }
            span {
              color: ${theme.colors.white};
              font-family: 'pokemon-font';
              font-size: 2rem;
            }
          `}
        >
          HOME
        </Button>
      </a>
    </Link>
  </header>
);
