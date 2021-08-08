import React from 'react';
import { css } from '@emotion/react';
import { RegionCondition } from '@/components/atoms/Button';
import { RegionName } from '@/store/condition';
import { REGION } from '@/constants/region';

export const RegionConditionPanel: React.VFC = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
    `}
  >
    <div
      css={css`
        display: grid;
        grid-gap: 12px;
        grid-template-rows: 40px 40px;
        grid-template-columns: 120px 120px 120px 120px;
      `}
    >
      {Object.keys(REGION).map((region) => (
        <RegionCondition region={region as RegionName} key={region} />
      ))}
    </div>
  </div>
);
