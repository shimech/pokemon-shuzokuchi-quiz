import * as React from 'react';
import { css } from '@emotion/css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { Other, changeOther } from '@/store/condition';
import { BLACK, DARK_GRAY, GRAY, WHITE } from '@/constants/color';

type Props = {
  conditionName: Other;
  text: string;
};

export const OtherCondition: React.VFC<Props> = (props) => {
  const { conditionName, text } = props;

  const condition = useSelector((state: RootState) => state.condition);
  const isValid = condition[conditionName];
  const dispatch = useDispatch();

  const style = css`
    color: ${isValid ? WHITE : DARK_GRAY};
    background-color: ${isValid ? BLACK : GRAY};
  `;

  const handleClick = () => {
    dispatch(changeOther(conditionName));
  };

  return (
    <button className={style} onClick={handleClick}>
      {text}
    </button>
  );
};
