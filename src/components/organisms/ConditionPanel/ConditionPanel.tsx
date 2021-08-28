import { css } from '@emotion/react';
import React from 'react';
import { OtherCondition } from '@/components/atoms/Button';
import { RegionConditionPanel } from '@/components/molecules/RegionConditionPanel';
import { BLACK } from '@/constants/color';

export const ConditionPanel: React.VFC = () => (
  <div
    css={css`
      text-align: center;
    `}
  >
    <p
      css={css`
        border-left: solid 4px ${BLACK};
        border-right: solid 4px ${BLACK};
        color: ${BLACK};
        font-family: 'Kosugi Maru';
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        margin: 36px auto;
        width: 180px;
      `}
    >
      出題範囲
    </p>
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
