import { css } from "@emotion/react";
import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { HASHTAGS } from "@/constants/hashtags";
import { PRODUCTION_URL } from "@/constants/productionUrl";

export type TwitterLinkProps = {
  className?: string;
  iconSize: number;
  title: string;
};

export const TwitterLink: React.FunctionComponent<TwitterLinkProps> = (
  props,
) => (
  <TwitterShareButton
    className={props.className}
    css={(theme) =>
      css`
        align-items: center;
        display: flex;
        transition: background-color ${theme.duration}ms;
        &:hover,
        &:active {
          background-color: rgba(0, 0, 0, 0.04) !important;
        }
      `
    }
    hashtags={HASHTAGS}
    title={props.title}
    url={PRODUCTION_URL}
  >
    <TwitterIcon round size={props.iconSize} />
    <span
      css={css`
        color: rgb(0, 172, 237);
      `}
    >
      {props.children}
    </span>
  </TwitterShareButton>
);
