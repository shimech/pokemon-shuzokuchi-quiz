import React from 'react';
import { css } from '@emotion/css';
import { OtherCondition } from '@/components/atoms/Button';
import { RegionConditionPanel } from '@/components/molecules/RegionConditionPanel';

import { BLACK } from '@/constants/color';

const divStyle = css`
  text-align: center;
`;

const pStyle = css`
  color: ${BLACK};
  font-size: 32px;
  font-weight: bold;
  font-family: 'Kosugi Maru';
  line-height: 40px;
  border-left: solid 4px ${BLACK};
  border-right: solid 4px ${BLACK};
  width: 180px;
  margin: 36px auto;
`;

export const ConditionPanel: React.VFC = () => (
  <div className={divStyle}>
    <p className={pStyle}>出題範囲</p>
    <div>
      <RegionConditionPanel />
    </div>
    <div>
      <OtherCondition
        conditionName={'includeMegaEvolution'}
        text={'メガシンカ・ゲンシカイキを含む'}
      />
    </div>
    <div>
      <OtherCondition
        conditionName={'includeSameStatus'}
        text={'同一種族値のポケモンを含む'}
      />
    </div>
    <div>
      <OtherCondition
        conditionName={'includeBeforeEvolution'}
        text={'進化前のポケモンを含む'}
      />
    </div>
  </div>
);
