import { css } from '@emotion/react';
import React from 'react';
import { OtherCondition } from '@/components/atoms/Button';
import { RegionConditionPanel } from '@/components/molecules/RegionConditionPanel';

export const ConditionPanel: React.VFC = () => (
  <div
    css={css`
      text-align: center;
    `}
  >
    <p
      css={(theme) => css`
        border-left: 4px solid ${theme.colors.black};
        border-right: 4px solid ${theme.colors.black};
        color: ${theme.colors.black};
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
