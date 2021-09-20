import { css } from '@emotion/react';
import React from 'react';

export const Header: React.VFC = () => (
  <header
    css={(theme) => css`
      align-items: center;
      background-color: ${theme.colors.black};
      display: flex;
      height: 36px;
    `}
  >
    <img
      alt="モンスターボール アイコン"
      height={48}
      src="/images/monster-ball.png"
      width={48}
    />
    <p
      css={(theme) => css`
        color: ${theme.colors.white};
      `}
    >
      Pokémon Shuzokuchi Quiz
    </p>
  </header>
);
