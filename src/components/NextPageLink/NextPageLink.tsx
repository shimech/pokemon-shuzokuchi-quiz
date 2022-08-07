import { css } from "@emotion/react";
import { Button } from "../Button";
import { useNextPageLink } from "./useNextPageLink";
import type { WithChildren } from "@/types/WithChildren";

export type NextPageLinkProps = WithChildren<{
  className?: string;
  dependencies?: boolean[];
  onClick?: VoidFunction;
}>;

export const NextPageLink = (props: NextPageLinkProps) => {
  const { disabled, isValidUrl, handleClick } = useNextPageLink(
    props.dependencies || [],
    props.onClick,
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
        (disabled || !isValidUrl) &&
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
