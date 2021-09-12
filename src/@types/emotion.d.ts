import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    breakpoint: number;
    colors: {
      black: string;
      white: string;
      gray: string;
      darkGray: string;
      red: string;
      blue: string;
      purple: string;
    };
    header: {
      height: number;
    };
    footer: {
      height: number;
    };
  }
}
