import * as React from 'react';
import { GameStartButton } from '@/components/atoms/Button';
import { ConditionPanel } from '@/components/organisms/ConditionPanel';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const Top: React.VFC<Props> = () => (
  <>
    <ConditionPanel />
    <GameStartButton />
  </>
);
