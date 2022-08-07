import { css } from "@emotion/react";
import { useMain } from "./useMain";
import type { WithChildren } from "@/types/WithChildren";

type MainProps = WithChildren<{
  className?: string;
}>;

export const Main = (props: MainProps) => {
  const { isDesktop } = useMain();

  return (
    <main
      className={props.className}
      css={(theme) => [
        css`
          display: flex;
          justify-content: center;
          max-width: 1280px;
          min-height: calc(
            100vh - ${theme.header.height}px - ${theme.footer.height}px
          );
          margin: 0 auto;
        `,
        !isDesktop &&
          css`
            max-width: 360px;
          `,
      ]}
    >
      {props.children}
    </main>
  );
};
