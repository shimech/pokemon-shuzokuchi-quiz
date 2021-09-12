import { css } from '@emotion/react';
import React from 'react';

type MainProps = {
  className?: string;
};

export const Main: React.FC<MainProps> = (props) => (
  <main
    className={props.className}
    css={(theme) =>
      css`
        min-height: calc(
          100vh - ${theme.header.height}px - ${theme.footer.height}px
        );
      `
    }
  >
    {props.children}
  </main>
);
