import { css } from "@emotion/react";
import React from "react";
import { useMain } from "./useMain";

type MainProps = {
  className?: string;
};

export const Main: React.FunctionComponent<MainProps> = (props) => {
  const { isDesktop } = useMain();

  return (
    <main
      className={props.className}
      css={(theme) => [
        css`
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 1280px;
          min-height: calc(
            100vh - ${theme.header.height}px - ${theme.footer.height}px
          );
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
