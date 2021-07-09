import * as React from 'react';
import { NumQuestion } from '@/components/atoms/Card';
import { StatusChart } from '@/components/atoms/Chart/StatusChart';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <NumQuestion />
      <StatusChart pokemon={pokemon} />
    </>
  );
};
