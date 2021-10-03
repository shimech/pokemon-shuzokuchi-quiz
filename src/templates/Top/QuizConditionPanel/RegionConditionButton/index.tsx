import { css } from "@emotion/react";
import React from "react";
import { Button } from "@/components/Button";

type RegionConditionButtonProps = {
  include: boolean;
  onClick?: VoidFunction;
};

export const RegionConditionButton: React.FC<RegionConditionButtonProps> = (
  props,
) => (
  <Button
    css={(theme) => [
      css`
        background-color: ${theme.colors.black};
        height: 4rem;
        width: 120px;
        &:hover {
          background-color: ${theme.colors.black};
          opacity: 0.8;
        }
        & > span {
          color: ${theme.colors.white};
          font-size: 2rem;
        }
      `,
      !props.include &&
        css`
          background-color: ${theme.colors.gray};
          & > span {
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
