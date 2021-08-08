import React from 'react';
import { css } from '@emotion/react';
import { GameStartButton } from '@/components/atoms/Button';
import { ConditionPanel } from '@/components/organisms/ConditionPanel';

export const Top: React.VFC = () => (
  <div
    css={css`
      text-align: center;
    `}
  >
    <ConditionPanel />
    <GameStartButton />
  </div>
);
