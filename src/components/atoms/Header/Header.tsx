import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { reset as resetCondition } from '@/store/condition';
import { reset as resetResult } from '@/store/result';
import { reset as resetOpenedHint } from '@/store/openedHint';
import { BLACK, BLUE, WHITE } from '@/constants/color';

export const Header: React.VFC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetCondition());
    dispatch(resetResult());
    dispatch(resetOpenedHint());
  };

  return (
    <header
      css={css`
        background-color: ${BLACK};
        width: 100vw;
        min-width: 1080px;
        height: 72px;
        position: relative;
      `}
    >
      <img
        css={css`
          display: inline-block;
          margin: 16px 0 0 24px;
          width: 40px;
          height: 40px;
        `}
        src="/images/monster-ball.png"
        alt="Monster Ball Icon"
      />
      <p
        css={css`
          display: inline-block;
          color: ${WHITE};
          font-family: 'pokemon-font';
          font-weight: bold;
          font-size: 24px;
          line-height: 72px;
          margin: 0 0 0 24px;
          position: absolute;
          top: -4px;
        `}
      >
        Pokémon Shuzokuchi Quiz
      </p>
      <Link href="/">
        <button
          css={css`
            float: right;
            height: 72px;
            width: 144px;
            font-family: 'pokemon-font';
            font-size: 24px;
            text-align: center;
            position: absolute;
            right: 36px;
            color: ${WHITE};
            background-color: ${BLACK};
            transition: all 0.5s;
            &:hover {
              color: ${WHITE};
              background-color: ${BLUE};
            }
          `}
          onClick={handleClick}
        >
          HOME
        </button>
      </Link>
    </header>
  );
};
