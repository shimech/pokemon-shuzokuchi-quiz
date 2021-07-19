import React from 'react';
import { css } from '@emotion/css';
import { HintButton } from '@/components/atoms/Button';

import { Pokemon } from '@/domains/pokemon';

type Props = {
  pokemon: Pokemon;
};

const wrapperStyle = css`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const pStyle = css`
  font-size: 32px;
  text-align: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const HintPanel: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <p className={pStyle}>ヒント</p>
      <div className={wrapperStyle}>
        <HintButton pokemon={pokemon} hint={'type'} />
        <HintButton pokemon={pokemon} hint={'ability'} />
        <HintButton pokemon={pokemon} hint={'region'} />
      </div>
    </>
  );
};
