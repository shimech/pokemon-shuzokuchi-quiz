import { css } from '@emotion/react';
import React from 'react';

export const Main: React.FC = (props) => (
  <main
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
