import * as React from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';

type Props = { url: string };

export const GameStartButton: React.VFC<Props> = (props) => {
  const { url } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  const handleClick = () => {
    incrementNumQuestion();
    router.push(url);
  };

  return <button onClick={handleClick}>ゲームスタート！</button>;
};
