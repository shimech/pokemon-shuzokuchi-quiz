import { css } from '@emotion/react';
import { Button as ButtonBase } from '@material-ui/core';
import React from 'react';

type ButtonProps = {
  className?: string;
};

export const Button: React.FC<ButtonProps> = (props) => (
  <ButtonBase
    className={props.className}
    css={(theme) => css`
      border-radius: 0;
      min-width: 0;
      padding: 0;
      text-align: center;
      span {
        color: ${theme.colors.white};
      }
    `}
  >
    {props.children}
  </ButtonBase>
);
