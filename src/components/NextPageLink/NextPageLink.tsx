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
  const { url, isValidUrl, handleLinkClick } = useNextPageLink();

  return (
    <Link passHref href={url}>
      <a
        className={props.className}
        css={[
          css`
            display: block;
          `,
          !isValidUrl &&
            css`
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
              transition: background-color ${theme.transition}ms;
              width: 100%;
              &:hover {
                background-color: ${theme.colors.blue};
              }
              & > span {
                color: ${theme.colors.white};
                font-family: Kosugi Maru, sans-serif;
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
