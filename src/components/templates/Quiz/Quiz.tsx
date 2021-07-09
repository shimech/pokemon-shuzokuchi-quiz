import * as React from 'react';
import { NumQuestion } from '@/components/atoms/Card';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <NumQuestion />
      <h1>{pokemon.name}</h1>
    </>
  );
};
