import { css } from "@emotion/react";
import React from "react";

type MainProps = {
  className?: string;
};

export const Main: React.FunctionComponent<MainProps> = (props) => (
  <main
    className={props.className}
    css={(theme) =>
      css`
        display: flex;
        justify-content: center;
        min-height: calc(
          99.9vh - ${theme.header.height}px - ${theme.footer.height}px
        );
      `
    }
  >
    {props.children}
  </main>
);
