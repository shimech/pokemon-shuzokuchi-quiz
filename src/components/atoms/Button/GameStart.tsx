import * as React from 'react';
import { css } from '@emotion/css';
import { useRouter } from 'next/router';

import { useUrl } from '@/hooks/useUrl';

import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';

import { BLACK } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const GameStartButton: React.VFC<Props> = () => {
  const url = useUrl();
  const dispatch = useDispatch();
  const router = useRouter();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  const handleClick = () => {
    incrementNumQuestion();
    router.push(url);
  };

  const style = css`
    &:disabled {
      background-color: ${BLACK};
      cursor: not-allowed;
    }
  `;

  return (
    <button
      className={style}
      onClick={handleClick}
      disabled={url.includes('undefined')}
    >
      ゲームスタート！
    </button>
  );
};
