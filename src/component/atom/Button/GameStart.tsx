import * as React from 'react';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';

type Props = { url: string };

export const GameStartButton: React.VFC<Props> = (props) => {
  const { url } = props;
  const dispatch = useDispatch();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  return (
    <Link href={url}>
      <a>
        <button onClick={incrementNumQuestion}>ゲームスタート！</button>
      </a>
    </Link>
  );
};
