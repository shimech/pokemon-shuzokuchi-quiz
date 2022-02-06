import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { useFooter } from "./useFooter";

export const Footer: React.VoidFunctionComponent = () => {
  const year = useFooter();

  return (
    <footer
      css={(theme) =>
        css`
          align-items: center;
          background-color: ${theme.colors.black};
          display: flex;
          height: ${theme.footer.height}px;
          justify-content: center;
          span,
          a {
            color: ${theme.colors.white};
            font-size: 1.4rem;
          }
        `
      }
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          margin-right: 14px;
        `}
      >
        <span>© {year}</span>
      </div>
      <Link passHref href="https://twitter.com/poke_kiyomaro">
        <a
          css={(theme) => css`
            transition: color ${theme.transition}ms;
            &:hover {
              color: ${theme.colors.blue};
            }
          `}
          rel="noreferrer"
          target="_blank"
        >
          @poke_kiyomaro
        </a>
      </Link>
    </footer>
  );
};
