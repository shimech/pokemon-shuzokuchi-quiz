import { css } from "@emotion/react";
import React from "react";
import { Button } from "@/components/Button";
import { useDesktop } from "@/hooks/useDesktop";

type RegionConditionButtonProps = {
  include: boolean;
  onClick?: VoidFunction;
};

export const RegionConditionButton: React.FunctionComponent<
  RegionConditionButtonProps
> = (props) => {
  const isDesktop = useDesktop();

  return (
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
            font-family: Kosugi Maru, sans-serif;
            font-size: 1.8rem;
          }
        `,
        !isDesktop &&
          css`
            height: 2.8rem;
            width: 80px;
            & > span {
              font-size: 1.2rem;
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
};
