import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { useNextPageLink } from "./useNextPageLink";

type NextPageLinkProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const NextPageLink: React.FunctionComponent<NextPageLinkProps> = (
  props,
) => {
  const { disabled, url, isValidUrl, handleLinkClick } = useNextPageLink(
    props.onClick,
  );

  return (
    <Link passHref href={url}>
      <a
        className={props.className}
        css={[
          css`
            display: block;
          `,
          (disabled || !isValidUrl) &&
            css`
              cursor: wait;
              opacity: 0.7;
              pointer-events: none;
            `,
        ]}
        onClick={handleLinkClick}
      >
        <Button
          css={(theme) =>
            css`
              background-color: ${theme.colors.black};
              height: 100%;
              transition: background-color ${theme.duration}ms;
              width: 100%;
              &:hover,
              &:active {
                background-color: ${theme.colors.blue};
              }
              & > span {
                color: ${theme.colors.white};
                font-weight: bold;
              }
            `
          }
        >
          {props.children}
        </Button>
      </a>
    </Link>
  );
};
