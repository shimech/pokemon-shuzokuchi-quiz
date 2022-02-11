import { css } from "@emotion/react";
import React from "react";
import { useTwitterLink } from "./useTwitterLink";
import {
  TwitterLink as TwitterLinkBase,
  TwitterLinkProps as TwitterLinkPropsBase,
} from "@/components/TwitterLink";
import type { Status } from "@/types/Status";

type TwitterLinkProps = {
  status: Status;
} & Omit<TwitterLinkPropsBase, "title">;

export const TwitterLink: React.VoidFunctionComponent<TwitterLinkProps> = (
  props,
) => {
  const { status, ...twitterLinkProps } = props;
  const { isDesktop, title } = useTwitterLink(status);

  return (
    <TwitterLinkBase
      css={[
        css`
          border-radius: 18px;
          height: 36px;
          & > span {
            font-size: 1.6rem;
            margin: 0 12px 0 6px;
          }
        `,
        !isDesktop &&
          css`
            border-radius: 12px;
            height: 24px;
            & > span {
              font-size: 1.2rem;
              margin: 0 8px 0 4px;
            }
          `,
      ]}
      {...twitterLinkProps}
      title={title}
    >
      この問題をシェア
    </TwitterLinkBase>
  );
};
