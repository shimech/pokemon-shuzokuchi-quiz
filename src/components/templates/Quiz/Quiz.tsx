import * as React from 'react';
import { css } from '@emotion/css';
import { NumQuestion } from '@/components/atoms/Card';
import { StatusChart } from '@/components/atoms/Chart/StatusChart';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

const divStyle = css`
  display: grid;
  grid-template-columns: 50vw 50vw;
`;

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <NumQuestion />
      <div className={divStyle}>
        <StatusChart pokemon={pokemon} />
      </div>
    </>
  );
};
