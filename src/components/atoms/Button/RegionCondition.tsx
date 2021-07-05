import * as React from 'react';
import { css } from '@emotion/css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { RegionName, changeIncludeRegion } from '@/store/condition';

import { BLACK, WHITE, GRAY, DARK_GRAY } from '@/constants/color';
import { REGION } from '@/constants/region';

type Props = { region: RegionName };

export const RegionCondition: React.VFC<Props> = (props) => {
  const { region } = props;
  const regionName: string = REGION[region];

  const { includeRegion } = useSelector((state: RootState) => state.condition);
  const dispatch = useDispatch();

  const style = css`
    color: ${includeRegion[region] ? WHITE : DARK_GRAY};
    background-color: ${includeRegion[region] ? BLACK : GRAY};
  `;

  const handleClick = () => {
    dispatch(changeIncludeRegion(region));
  };

  return (
    <button className={style} onClick={handleClick}>
      {regionName}
    </button>
  );
};
