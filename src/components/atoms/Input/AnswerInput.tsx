import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/css';

import { DARK_GRAY, BLACK, BLUE } from '@/constants/color';

const style = css`
  width: 380px;
  height: 40px;
  margin-right: 28px;
  padding: 0;
  padding-left: 12px;
  font-size: 20px;
  font-family: 'Kosugi Maru';
  border: solid ${BLACK} 1px;
  border-radius: 4px;
  &::placeholder {
    color: ${DARK_GRAY};
  }
  &:focus {
    border: solid ${BLUE} 1px;
  }
`;

type Props = { setAnswer: Dispatch<SetStateAction<string>> };

export const AnswerInput: React.VFC<Props> = (props) => {
  const { setAnswer } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="ポケモンのなまえ"
      className={style}
      onChange={onChange}
    />
  );
};
