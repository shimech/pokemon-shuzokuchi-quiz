import { css } from "@emotion/react";
import React from "react";
import { useRegionConditionButton } from "./useConditionButton";
import { Button } from "@/components/Button";

type ConditionButtonProps = {
  include: boolean;
  onClick?: VoidFunction;
};

export const ConditionButton: React.FunctionComponent<ConditionButtonProps> = (
  props,
) => {
  const { isDesktop } = useRegionConditionButton();

  return (
    <Button
      css={(theme) => [
        css`
          background-color: ${theme.colors.black};
          height: 4rem;
          width: 100%;
          &:hover {
            background-color: ${theme.colors.black};
            opacity: 0.8;
          }
          & > span.MuiButton-label {
            color: ${theme.colors.white};
            font-size: 1.8rem;
          }
        `,
        !isDesktop &&
          css`
            height: 3.2rem;
            & > span.MuiButton-label {
              font-size: 1.2rem;
            }
          `,
        !props.include &&
          css`
            background-color: ${theme.colors.gray};
            & > span.MuiButton-label {
              color: ${theme.colors.darkGray};
            }
            &:hover {
              background-color: ${theme.colors.gray};
            }
          `,
      ]}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
