import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';

import { useUrl } from '@/hooks/useUrl';

import { useDispatch } from 'react-redux';
import { increment } from '@/store/result';
import { reset as resetOpenedHint } from '@/store/openedHint';

import { BLACK, WHITE, BLUE } from '@/constants/color';

type Props = { setIsDisplay: Dispatch<SetStateAction<boolean>> };

export const NextQuizButton: React.VFC<Props> = (props) => {
  const { setIsDisplay } = props;
  const url = useUrl();
  const dispatch = useDispatch();

  const incrementNumQuestion = () => {
    dispatch(increment('question'));
  };

  const handleClick = () => {
    incrementNumQuestion();
    dispatch(resetOpenedHint());
    setIsDisplay(false);
  };

  const buttonStyle = css`
    font-family: 'Kosugi Maru';
    height: 40px;
    width: 300px;
    margin-top: 24px;
    border-radius: 20px;
    background-color: ${BLACK};
    color: ${WHITE};
    transition: all 0.5s;
    &:hover {
      background-color: ${BLUE};
    }
    &:disabled {
      opacity: 0.5;
      background-color: ${BLACK};
      cursor: not-allowed;
    }
  `;

  return (
    <Link href={url}>
      <button
        className={buttonStyle}
        onClick={handleClick}
        disabled={url.includes('undefined')}
      >
        次へ
      </button>
    </Link>
  );
};
