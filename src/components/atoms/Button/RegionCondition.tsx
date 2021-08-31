import { css } from '@emotion/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REGION } from '@/constants/region';
import { RootState } from '@/store';
import { RegionName, changeIncludeRegion } from '@/store/condition';

type Props = { region: RegionName };

export const RegionCondition: React.VFC<Props> = (props) => {
  const { region } = props;
  const regionName: string = REGION[region];

  const { includeRegion } = useSelector((state: RootState) => state.condition);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeIncludeRegion(region));
  };

  return (
    <button
      css={(theme) => css`
        background-color: ${includeRegion[region]
          ? theme.colors.black
          : theme.colors.gray};
        color: ${includeRegion[region]
          ? theme.colors.white
          : theme.colors.darkGray};
        font-family: 'Kosugi Maru';
        &:hover {
          border: solid 4px ${theme.colors.red};
        }
      `}
      onClick={handleClick}
    >
      {regionName}
    </button>
  );
};
