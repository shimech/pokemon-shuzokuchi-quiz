import { css } from '@emotion/react';
import React from 'react';

const year = new Date().getFullYear();

export const Footer: React.VFC = () => (
  <footer
    css={(theme) => css`
      background-color: ${theme.colors.black};
      bottom: 0;
      color: ${theme.colors.white};
      font-size: 16px;
      height: 36px;
      min-width: 1080px;
      padding-top: 8px;
      position: absolute;
      text-align: center;
      width: 100vw;
    `}
  >
    ©︎ {year}
    <a
      css={(theme) => css`
        color: ${theme.colors.white};
        margin-left: 12px;
        transition: all 0.5s;
        &:hover {
          color: ${theme.colors.blue};
        }
      `}
      href="https://twitter.com/poke_kiyomaro"
    >
      @poke_kiyomaro
    </a>
  </footer>
);
