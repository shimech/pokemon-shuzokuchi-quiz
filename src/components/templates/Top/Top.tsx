import React from 'react';
import { css } from '@emotion/css';
import { GameStartButton } from '@/components/atoms/Button';
import { ConditionPanel } from '@/components/organisms/ConditionPanel';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const style = css`
  text-align: center;
`;

export const Top: React.VFC<Props> = () => (
  <div className={style}>
    <ConditionPanel />
    <GameStartButton />
  </div>
);
