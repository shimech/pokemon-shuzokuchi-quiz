import React from 'react';
import { css } from '@emotion/react';
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
          text-align: center;
          margin: 0;
          margin-bottom: 24px;
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
