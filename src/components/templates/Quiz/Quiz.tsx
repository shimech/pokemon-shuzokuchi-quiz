import * as React from 'react';
import { css } from '@emotion/css';
import { NumQuestion } from '@/components/atoms/Card';
import { StatusChart } from '@/components/atoms/Chart/StatusChart';
import { HintPanel } from '@/components/molecules/HintPanel';

import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

const divStyle = css`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
`;

const rightStyle = css`
  width: 100%;
`;

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <NumQuestion />
      <div className={divStyle}>
        <StatusChart pokemon={pokemon} />
        <div className={rightStyle}>
          <HintPanel pokemon={pokemon} />
        </div>
      </div>
    </>
  );
};
