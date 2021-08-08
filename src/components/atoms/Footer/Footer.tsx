import React from 'react';
import { css } from '@emotion/react';
import { BLACK, WHITE, BLUE } from '@/constants/color';

const year: number = new Date().getFullYear();

export const Footer: React.VFC = () => (
  <footer
    css={css`
      background-color: ${BLACK};
      color: ${WHITE};
      text-align: center;
      font-size: 16px;
      height: 36px;
      width: 100vw;
      min-width: 1080px;
      padding-top: 8px;
      position: absolute;
      bottom: 0;
    `}
  >
    ©︎ {year}
    <a
      css={css`
        margin-left: 12px;
        color: ${WHITE};
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
