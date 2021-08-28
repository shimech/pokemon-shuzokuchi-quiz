import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BLACK, WHITE, BLUE } from '@/constants/color';
import { useUrl } from '@/hooks/useUrl';
import { increment } from '@/store/result';

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
          background-color: ${BLACK};
          border-radius: 20px;
          color: ${WHITE};
          font-family: 'Kosugi Maru';
          height: 40px;
          margin-top: 24px;
          transition: all 0.5s;
          width: 516px;
          &:hover {
            background-color: ${BLUE};
          }
          &:disabled {
            background-color: ${BLACK};
            cursor: not-allowed;
            opacity: 0.5;
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
