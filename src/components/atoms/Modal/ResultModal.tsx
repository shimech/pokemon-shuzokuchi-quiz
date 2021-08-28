import { css } from '@emotion/react';
import React, { Dispatch, SetStateAction } from 'react';
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

  const image = isCorrect ? '/images/correct.svg' : '/images/incorrect.svg';

  return (
    <div
      css={css`
        display: ${isDisplay ? 'block' : 'none'};
      `}
    >
      <div
        css={css`
          background-color: #000000;
          height: 100vh;
          left: 0;
          opacity: 0.7;
          position: fixed;
          top: 0;
          width: 100vw;
          z-index: 1;
        `}
      ></div>
      <div
        css={css`
          background-color: #ffffff;
          border-radius: 24px;
          height: 400px;
          left: calc((100vw - 400px) / 2);
          position: fixed;
          text-align: center;
          top: calc((100vh - 400px) / 2);
          width: 400px;
          z-index: 2;
          &::before {
            background-image: url(${image});
            background-repeat: no-repeat;
            background-size: 400px;
            content: '';
            display: block;
            height: 100%;
            left: 64px;
            opacity: 0.5;
            position: absolute;
            top: 64px;
            width: 100%;
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
