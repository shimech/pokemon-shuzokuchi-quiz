import * as React from 'react';
import { css } from '@emotion/css';
import { RegionCondition } from '@/components/atoms/Button';
import { REGION } from '@/constants/region';
import { RegionName } from '@/store/condition';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const style = css`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 40px;
  grid-template-columns: 120px 120px 120px 120px;
  margin: 0 max(calc((100vw - 516px) / 2), 282px);
  margin-bottom: 12px;
`;

export const RegionConditionPanel: React.VFC<Props> = () => (
  <div className={style}>
    {Object.keys(REGION).map((region) => (
      <RegionCondition region={region as RegionName} key={region} />
    ))}
  </div>
);
