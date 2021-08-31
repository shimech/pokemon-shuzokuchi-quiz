import { css } from '@emotion/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      css={(theme) => css`
        background-color: ${isValid ? theme.colors.black : theme.colors.gray};
        color: ${isValid ? theme.colors.white : theme.colors.darkGray};
        font-family: 'Kosugi Maru';
        height: 40px;
        margin-bottom: 12px;
        width: 516px;
        &:hover {
          border: solid 4px ${theme.colors.red};
        }
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
