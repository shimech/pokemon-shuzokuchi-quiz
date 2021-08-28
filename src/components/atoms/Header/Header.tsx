import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BLACK, BLUE, WHITE } from '@/constants/color';
import { reset as resetCondition } from '@/store/condition';
import { reset as resetOpenedHint } from '@/store/openedHint';
import { reset as resetResult } from '@/store/result';

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
        height: 72px;
        min-width: 1080px;
        position: relative;
        width: 100vw;
      `}
    >
      <img
        css={css`
          display: inline-block;
          height: 40px;
          margin: 16px 0 0 24px;
          width: 40px;
        `}
        src="/images/monster-ball.png"
        alt="Monster Ball Icon"
      />
      <p
        css={css`
          color: ${WHITE};
          display: inline-block;
          font-family: 'pokemon-font';
          font-size: 24px;
          font-weight: bold;
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
            background-color: ${BLACK};
            color: ${WHITE};
            float: right;
            font-family: 'pokemon-font';
            font-size: 24px;
            height: 72px;
            position: absolute;
            right: 36px;
            text-align: center;
            transition: all 0.5s;
            width: 144px;
            &:hover {
              background-color: ${BLUE};
              color: ${WHITE};
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
