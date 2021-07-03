import * as React from 'react';
import { GameStartButton } from '@/component/atom/Button';

import { useUrl } from '@/hooks/useUrl';
import { useQuizIds } from '@/hooks/useQuizIds';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const Top: React.VFC<Props> = () => {
  const quizIds = useQuizIds();
  const url = useUrl();

  return (
    <>
      {quizIds.map((id) => (
        <div key={id}>
          {id}
          <br />
        </div>
      ))}
      <GameStartButton url={url} />
    </>
  );
};
