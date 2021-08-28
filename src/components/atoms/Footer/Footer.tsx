import { css } from '@emotion/react';
import React from 'react';
import { BLACK, WHITE, BLUE } from '@/constants/color';

const year: number = new Date().getFullYear();

export const Footer: React.VFC = () => (
  <footer
    css={css`
      background-color: ${BLACK};
      bottom: 0;
      color: ${WHITE};
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
      css={css`
        color: ${WHITE};
        margin-left: 12px;
        transition: all 0.5s;
        &:hover {
          color: ${BLUE};
        }
      `}
      href="https://twitter.com/poke_kiyomaro"
    >
      @poke_kiyomaro
    </a>
  </footer>
);
