import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

const year = new Date().getFullYear();

export const Footer: React.VFC = () => (
  <footer
    css={(theme) => css`
      align-items: center;
      background-color: ${theme.colors.black};
      display: flex;
      height: ${theme.footer.height}px;
      justify-content: center;
      width: 100vw;
      span,
      a {
        color: ${theme.colors.white};
      }
    `}
  >
    <div
      css={css`
        margin-right: 14px;
      `}
    >
      <span>© {year}</span>
    </div>
    <Link passHref href="https://twitter.com/poke_kiyomaro">
      <a
        css={(theme) => css`
          transition: color 500ms;
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
