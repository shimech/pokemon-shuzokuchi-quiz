import { css } from '@emotion/react';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = { answer: string; setAnswer: Dispatch<SetStateAction<string>> };

export const AnswerInput: React.VFC<Props> = (props) => {
  const { answer, setAnswer } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <input
      css={(theme) => css`
        border: 1px solid ${theme.colors.black};
        border-radius: 4px;
        font-family: 'Kosugi Maru';
        font-size: 20px;
        height: 40px;
        margin-right: 28px;
        padding: 0;
        padding-left: 12px;
        width: 380px;
        &::placeholder {
          color: ${theme.colors.darkGray};
        }
        &:focus {
          border: 1px solid ${theme.colors.blue};
        }
      `}
      type="text"
      placeholder="ポケモンのなまえ"
      onChange={onChange}
      value={answer}
    />
  );
};
