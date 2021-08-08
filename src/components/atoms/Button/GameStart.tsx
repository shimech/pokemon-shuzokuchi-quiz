import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useUrl } from '@/hooks/useUrl';
import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';
import { BLACK, WHITE, BLUE } from '@/constants/color';

export const GameStartButton: React.VFC = () => {
  const url = useUrl();
  const dispatch = useDispatch();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  const handleClick = () => {
    incrementNumQuestion();
  };

  return (
    <Link href={url}>
      <button
        css={css`
          font-family: 'Kosugi Maru';
          height: 40px;
          width: 516px;
          margin-top: 24px;
          border-radius: 20px;
          background-color: ${BLACK};
          color: ${WHITE};
          transition: all 0.5s;
          &:hover {
            background-color: ${BLUE};
          }
          &:disabled {
            opacity: 0.5;
            background-color: ${BLACK};
            cursor: not-allowed;
          }
        `}
        onClick={handleClick}
        disabled={url.includes('undefined')}
      >
        ゲームスタート！
      </button>
    </Link>
  );
};
