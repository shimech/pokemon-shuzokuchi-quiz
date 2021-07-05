import * as React from 'react';
import { RegionCondition } from '@/components/atoms/Button';
import { REGION } from '@/constants/region';
import { RegionName } from '@/store/condition';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const RegionConditionPanel: React.VFC<Props> = () => {
  return (
    <>
      {Object.keys(REGION).map((region) => (
        <RegionCondition region={region as RegionName} key={region} />
      ))}
    </>
  );
};
