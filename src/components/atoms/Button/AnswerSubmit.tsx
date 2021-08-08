import React from 'react';
import { css } from '@emotion/react';
import { BLUE, WHITE } from '@/constants/color';

export const AnswerSubmit: React.VFC = () => (
  <button
    css={css`
      min-width: 80px;
      height: 42px;
      font-size: 20px;
      font-family: 'Kosugi Maru';
      padding: 0;
      color: ${WHITE};
      background-color: ${BLUE};
      border: none;
      transition: all 0.5s;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    `}
  >
    解答
  </button>
);
