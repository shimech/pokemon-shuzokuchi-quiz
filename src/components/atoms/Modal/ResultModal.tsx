import React, { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/css';
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

  const wrapperStyle = css`
    display: ${isDisplay ? 'block' : 'none'};
  `;

  const overlayStyle = css`
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    z-index: 1;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
  `;

  const modalStyle = css`
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    z-index: 2;
    position: fixed;
    top: calc((100vh - 400px) / 2);
    left: calc((100vw - 400px) / 2);
    border-radius: 24px;
    text-align: center;
  `;

  return (
    <div className={wrapperStyle}>
      <div className={overlayStyle}></div>
      <div className={modalStyle}>
        <p>{pokemon.name}</p>
        <p>{isCorrect}</p>
        <NextQuizButton setIsDisplay={setIsDisplay} />
      </div>
    </div>
  );
};
