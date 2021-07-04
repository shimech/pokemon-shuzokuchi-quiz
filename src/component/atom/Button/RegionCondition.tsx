import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RegionName } from '@/store/condition';
import { changeIncludeRegion } from '@/store/condition';
import { REGION } from '@/constant/region';

type Props = { region: RegionName };

export const RegionCondition: React.VFC<Props> = (props) => {
  const { region } = props;
  const regionName: string = REGION[region];
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeIncludeRegion(region));
  };

  return <button onClick={handleClick}>{regionName}</button>;
};
