import React from 'react';
import { css } from '@emotion/css';
import { BLUE, WHITE } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const style = css`
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
`;

export const AnswerSubmit: React.VFC<Props> = () => (
  <button className={style}>解答</button>
);
