import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { useRouter } from 'next/dist/client/router';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { NUM_QUIZ } from '@/constants/numQuiz';
import { BLACK, BLUE, WHITE } from '@/constants/color';

const divStyle = css`
  display: inline-block;
  font-size: 24px;
  width: 144px;
  height: 72px;
  color: ${WHITE};
  background-color: ${BLUE};
  text-align: center;
  line-height: 72px;
  border-radius: 12px;
  transition: all 0.5s;
  box-shadow: 4px 4px 8px ${BLACK};
  position: relative;
  top: 24px;
  left: 24px;
  &:hover {
    box-shadow: 8px 8px 8px ${BLACK};
  }
`;

const spanStyle = css`
  font-size: 48px;
  color: ${WHITE};
`;

export const NumQuestion: React.VFC = () => {
  const { numQuestion } = useSelector((state: RootState) => state.result);
  const router = useRouter();

  useEffect(() => {
    if (numQuestion < 1 || numQuestion > 10) {
      router.push('/error');
    }
  }, []);

  return (
    <div className={divStyle}>
      <span className={spanStyle}>{numQuestion}</span> / {NUM_QUIZ}
    </div>
  );
};
