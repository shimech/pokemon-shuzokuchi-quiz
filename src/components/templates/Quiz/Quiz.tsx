import * as React from 'react';
import { GameStartButton } from '@/components/atoms/Button';

import { useUrl } from '@/hooks/useUrl';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;
  const url = useUrl();

  return (
    <>
      <h1>{pokemon.name}</h1>
      <GameStartButton url={url} />
    </>
  );
};
