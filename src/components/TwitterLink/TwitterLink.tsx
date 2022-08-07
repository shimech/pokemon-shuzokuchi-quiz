import { css } from "@emotion/react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { HASHTAGS } from "@/constants/hashtags";
import { PRODUCTION_URL } from "@/constants/productionUrl";
import type { WithChildren } from "@/types/WithChildren";

export type TwitterLinkProps = WithChildren<{
  className?: string;
  iconSize: number;
  title: string;
}>;

export const TwitterLink = (props: TwitterLinkProps) => (
  <TwitterShareButton
    className={props.className}
    css={(theme) =>
      css`
        display: flex;
        align-items: center;
        transition: background-color ${theme.duration}ms;

        &:hover,
        &:active {
          background-color: rgb(0 0 0 / 4%) !important;
        }
      `
    }
    hashtags={HASHTAGS}
    title={props.title}
    url={PRODUCTION_URL}
  >
    <TwitterIcon size={props.iconSize} round />
    <span
      css={css`
        color: rgb(0 172 237);
      `}
    >
      {props.children}
    </span>
  </TwitterShareButton>
);
