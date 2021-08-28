import { css } from '@emotion/react';
import React from 'react';
import { HintButton } from '@/components/atoms/Button';
import { Pokemon } from '@/domains/pokemon';

type Props = {
  pokemon: Pokemon;
};

export const HintPanel: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  return (
    <>
      <p
        css={css`
          font-size: 32px;
          margin-bottom: 24px;
          text-align: center;
        `}
      >
        ヒント
      </p>
      <div
        css={css`
          display: grid;
          grid-template-columns: 33% 33% 33%;
        `}
      >
        <HintButton pokemon={pokemon} hint={'type'} />
        <HintButton pokemon={pokemon} hint={'ability'} />
        <HintButton pokemon={pokemon} hint={'region'} />
      </div>
    </>
  );
};
