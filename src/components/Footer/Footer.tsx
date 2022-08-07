import { css } from "@emotion/react";
import Link from "next/link";
import { useFooter } from "./useFooter";

export const Footer = () => {
  const { year } = useFooter();

  return (
    <footer
      css={(theme) =>
        css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${theme.footer.height}px;
          background-color: ${theme.colors.black};

          span,
          a {
            font-family: "Otomanopee One", sans-serif;
            font-size: 1.4rem;
            color: ${theme.colors.white};
          }
        `
      }
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-right: 14px;
        `}
      >
        <span>© {year}</span>
      </div>
      <Link passHref href="https://twitter.com/poke_kiyomaro">
        <a
          css={(theme) => css`
            transition: color ${theme.duration}ms;

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
