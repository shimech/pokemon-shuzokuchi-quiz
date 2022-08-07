import { css } from "@emotion/react";
import { useConditionButton } from "./useConditionButton";
import { Button } from "@/components/Button";
import type { WithChildren } from "@/types/WithChildren";

type ConditionButtonProps = WithChildren<{
  include: boolean;
  onClick?: VoidFunction;
}>;

export const ConditionButton = (props: ConditionButtonProps) => {
  const { isDesktop } = useConditionButton();

  return (
    <Button
      css={(theme) => [
        css`
          width: 100%;
          height: 4rem;
          font-size: 1.8rem;
          color: ${theme.colors.white};
          background-color: ${theme.colors.black};

          &:hover {
            background-color: ${theme.colors.black};
            opacity: 0.8;
          }
        `,
        !isDesktop &&
          css`
            height: 3.2rem;
            font-size: 1.2rem;
          `,
        !props.include &&
          css`
            color: ${theme.colors.darkGray};
            background-color: ${theme.colors.gray};

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
