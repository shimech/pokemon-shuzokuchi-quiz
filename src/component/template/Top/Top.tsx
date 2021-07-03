import * as React from 'react';
import { GameStartButton } from '@/component/atom/Button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const Top: React.VFC<Props> = () => {
  const { quizIds } = useSelector((state: RootState) => state.quizIds);

  return (
    <>
      {quizIds.map((id) => (
        <div key={id}>
          {id}
          <br />
        </div>
      ))}
      <GameStartButton />
    </>
  );
};
