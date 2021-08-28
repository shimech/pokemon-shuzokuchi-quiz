import { css } from '@emotion/react';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { BLACK, WHITE, BLUE } from '@/constants/color';
import { useUrl } from '@/hooks/useUrl';
import { reset as resetOpenedHint } from '@/store/openedHint';
import { increment } from '@/store/result';

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

  return (
    <Link href={url}>
      <button
        css={css`
          background-color: ${BLACK};
          border-radius: 20px;
          color: ${WHITE};
          font-family: 'Kosugi Maru';
          height: 40px;
          margin-top: 24px;
          transition: all 0.5s;
          width: 300px;
          &:hover {
            background-color: ${BLUE};
          }
          &:disabled {
            background-color: ${BLACK};
            cursor: not-allowed;
            opacity: 0.5;
          }
        `}
        onClick={handleClick}
        disabled={url.includes('undefined')}
      >
        次へ
      </button>
    </Link>
  );
};
