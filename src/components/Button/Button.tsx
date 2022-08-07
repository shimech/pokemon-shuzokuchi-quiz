import { css } from "@emotion/react";
import {
  Button as ButtonBase,
  type ButtonProps as ButtonPropsBase,
} from "@mui/material";

type ButtonProps = ButtonPropsBase;

export const Button = (props: ButtonProps) => (
  <ButtonBase
    {...props}
    css={css`
      min-width: 0;
      padding: 0;
      text-align: center;
      border-radius: 0;
    `}
  >
    {props.children}
  </ButtonBase>
);
