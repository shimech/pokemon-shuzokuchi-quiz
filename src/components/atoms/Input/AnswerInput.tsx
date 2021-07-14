import React from 'react';
import { css } from '@emotion/css';
import { DARK_GRAY, BLACK, BLUE } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const style = css`
  width: 380px;
  height: 40px;
  margin-right: 28px;
  padding: 0;
  padding-left: 12px;
  font-size: 20px;
  border: solid ${BLACK} 1px;
  border-radius: 4px;
  &::placeholder {
    color: ${DARK_GRAY};
  }
  &:focus {
    border: solid ${BLUE} 1px;
  }
`;

export const AnswerInput: React.VFC<Props> = () => (
  <input type="text" placeholder="ポケモンのなまえ" className={style} />
);
