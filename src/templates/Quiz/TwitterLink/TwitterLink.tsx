import { css } from "@emotion/react";
import { useTwitterLink } from "./useTwitterLink";
import {
  TwitterLink as TwitterLinkBase,
  TwitterLinkProps as TwitterLinkPropsBase,
} from "@/components/TwitterLink";
import type { Status } from "@/types/Status";

type TwitterLinkProps = {
  status: Status;
} & Omit<TwitterLinkPropsBase, "title">;

export const TwitterLink = (props: TwitterLinkProps) => {
  const { status, ...twitterLinkProps } = props;
  const { isDesktop, title } = useTwitterLink(status);

  return (
    <TwitterLinkBase
      css={[
        css`
          height: 36px;
          border-radius: 18px;

          & > span {
            margin: 0 12px 0 6px;
            font-size: 1.6rem;
          }
        `,
        !isDesktop &&
          css`
            height: 24px;
            border-radius: 12px;

            & > span {
              margin: 0 8px 0 4px;
              font-size: 1.2rem;
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
