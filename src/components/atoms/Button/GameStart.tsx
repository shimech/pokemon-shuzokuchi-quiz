import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
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
        css={(theme) => css`
          background-color: ${theme.colors.black};
          border-radius: 20px;
          color: ${theme.colors.white};
          font-family: 'Kosugi Maru';
          height: 40px;
          margin-top: 24px;
          transition: all 0.5s;
          width: 516px;
          &:hover {
            background-color: ${theme.colors.blue};
          }
          &:disabled {
            background-color: ${theme.colors.black};
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
