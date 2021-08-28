import { css } from '@emotion/react';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { DARK_GRAY, BLACK, BLUE } from '@/constants/color';

type Props = { answer: string; setAnswer: Dispatch<SetStateAction<string>> };

export const AnswerInput: React.VFC<Props> = (props) => {
  const { answer, setAnswer } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <input
      css={css`
        border: solid ${BLACK} 1px;
        border-radius: 4px;
        font-family: 'Kosugi Maru';
        font-size: 20px;
        height: 40px;
        margin-right: 28px;
        padding: 0;
        padding-left: 12px;
        width: 380px;
        &::placeholder {
          color: ${DARK_GRAY};
        }
        &:focus {
          border: solid ${BLUE} 1px;
        }
      `}
      type="text"
      placeholder="ポケモンのなまえ"
      onChange={onChange}
      value={answer}
    />
  );
};
