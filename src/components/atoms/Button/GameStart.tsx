import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';

import { useUrl } from '@/hooks/useUrl';

import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';

import { BLACK, WHITE, BLUE } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const GameStartButton: React.VFC<Props> = () => {
  const url = useUrl();
  const dispatch = useDispatch();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  const handleClick = () => {
    incrementNumQuestion();
  };

  const style = css`
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
  `;

  return (
    <Link href={url}>
      <button
        className={style}
        onClick={handleClick}
        disabled={url.includes('undefined')}
      >
        ゲームスタート！
      </button>
    </Link>
  );
};
