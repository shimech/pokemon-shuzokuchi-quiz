import * as React from 'react';
import { GameStartButton } from '@/components/atoms/Button';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <h1>{pokemon.name}</h1>
      <GameStartButton />
    </>
  );
};
