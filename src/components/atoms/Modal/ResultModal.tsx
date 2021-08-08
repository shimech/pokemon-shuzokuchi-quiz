import React, { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import { NextQuizButton } from '../Button';
import { Pokemon } from '@/domains/pokemon';

type Props = {
  pokemon: Pokemon;
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
  isCorrect: boolean;
};

export const ResultModal: React.VFC<Props> = (props) => {
  const { pokemon, isDisplay, setIsDisplay, isCorrect } = props;

  const image = isCorrect ? '/images/correct.png' : '/images/incorrect.png';

  return (
    <div
      css={css`
        display: ${isDisplay ? 'block' : 'none'};
      `}
    >
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          background-color: #000000;
          z-index: 1;
          opacity: 0.7;
          position: fixed;
          top: 0;
          left: 0;
        `}
      ></div>
      <div
        css={css`
          width: 400px;
          height: 400px;
          background-color: #ffffff;
          z-index: 2;
          position: fixed;
          top: calc((100vh - 400px) / 2);
          left: calc((100vw - 400px) / 2);
          border-radius: 24px;
          text-align: center;
          &::before {
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url(${image});
            background-repeat: no-repeat;
            background-size: 256px;
            background-position: center center;
            opacity: 0.5;
            z-index: -1;
          }
        `}
      >
        <p
          css={css`
            font-size: 28px;
          `}
        >
          {pokemon.name}
        </p>
        <div
          css={css`
            height: 200px;
          `}
        ></div>
        <NextQuizButton setIsDisplay={setIsDisplay} />
      </div>
    </div>
  );
};
