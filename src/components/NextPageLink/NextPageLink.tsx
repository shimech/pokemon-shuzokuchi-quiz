import { css } from "@emotion/react";
import { Button } from "../Button";
import { useNextPageLink } from "./useNextPageLink";
import type { WithChildren } from "@/types/WithChildren";

export type NextPageLinkProps = WithChildren<{
  className?: string;
  beforeTransition?: VoidFunction;
  afterTransition?: VoidFunction;
}>;

export const NextPageLink = (props: NextPageLinkProps) => {
  const { disabled, isValidPath, handleClick } = useNextPageLink(
    props.beforeTransition,
    props.afterTransition,
  );

  return (
    <Button
      className={props.className}
      css={(theme) => [
        css`
          width: 100%;
          height: 100%;
          font-weight: bold;
          color: ${theme.colors.white};
          background-color: ${theme.colors.black};
          transition: background-color ${theme.duration}ms;

          &:hover,
          &:active {
            background-color: ${theme.colors.blue};
          }

          &:disabled {
            color: ${theme.colors.white};
          }
        `,
        (disabled || !isValidPath) &&
          css`
            cursor: wait;
            opacity: 0.7;
          `,
      ]}
      disabled={disabled}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
};
