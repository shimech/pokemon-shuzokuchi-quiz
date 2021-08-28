import { css } from '@emotion/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BLACK, DARK_GRAY, GRAY, RED, WHITE } from '@/constants/color';
import { RootState } from '@/store';
import { Other, changeOther } from '@/store/condition';

type Props = {
  conditionName: Other;
  text: string;
};

export const OtherCondition: React.VFC<Props> = (props) => {
  const { conditionName, text } = props;

  const condition = useSelector((state: RootState) => state.condition);
  const isValid = condition[conditionName];
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeOther(conditionName));
  };

  return (
    <button
      css={css`
        background-color: ${isValid ? BLACK : GRAY};
        color: ${isValid ? WHITE : DARK_GRAY};
        font-family: 'Kosugi Maru';
        height: 40px;
        margin-bottom: 12px;
        width: 516px;
        &:hover {
          border: solid 4px ${RED};
        }
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
