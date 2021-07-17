import React from 'react';
import { css } from '@emotion/css';
import { GameStartButton } from '@/components/atoms/Button';
import { ConditionPanel } from '@/components/organisms/ConditionPanel';

const style = css`
  text-align: center;
`;

export const Top: React.VFC = () => (
  <div className={style}>
    <ConditionPanel />
    <GameStartButton />
  </div>
);
