import { css } from '@emotion/react';
import React from 'react';
import { BLUE, WHITE } from '@/constants/color';

export const AnswerSubmit: React.VFC = () => (
  <button
    css={css`
      background-color: ${BLUE};
      border: none;
      border-radius: 4px;
      color: ${WHITE};
      cursor: pointer;
      font-family: 'Kosugi Maru';
      font-size: 20px;
      height: 42px;
      min-width: 80px;
      padding: 0;
      transition: all 0.5s;
      &:hover {
        opacity: 0.7;
      }
    `}
  >
    解答
  </button>
);
