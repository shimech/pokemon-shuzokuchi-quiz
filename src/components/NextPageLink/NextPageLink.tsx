import { css } from "@emotion/react";
import React from "react";
import { Button } from "../Button";
import { useNextPageLink } from "./useNextPageLink";

export type NextPageLinkProps = {
  className?: string;
  dependencies?: React.DependencyList;
  onClick?: VoidFunction;
};

export const NextPageLink: React.FunctionComponent<NextPageLinkProps> = (
  props,
) => {
  const { disabled, isValidUrl, handleClick } = useNextPageLink(
    props.dependencies || [],
    props.onClick,
  );

  return (
    <Button
      className={props.className}
      css={(theme) => [
        css`
          background-color: ${theme.colors.black};
          height: 100%;
          transition: background-color ${theme.duration}ms;
          width: 100%;
          &:hover,
          &:active {
            background-color: ${theme.colors.blue};
          }
          & > span.MuiButton-label {
            color: ${theme.colors.white};
            font-weight: bold;
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
