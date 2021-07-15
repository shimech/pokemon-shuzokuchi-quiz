import React from 'react';
import { css } from '@emotion/css';
import { BLACK, WHITE, BLUE } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const footerStyle = css`
  background-color: ${BLACK};
  color: ${WHITE};
  text-align: center;
  font-size: 16px;
  height: 36px;
  width: 100vw;
  min-width: 1080px;
  padding-top: 8px;
  position: absolute;
  bottom: 0;
`;

const aStyle = css`
  margin-left: 12px;
  color: ${WHITE};
  transition: all 0.5s;
  &:hover {
    color: ${BLUE};
  }
`;

const year: number = new Date().getFullYear();

export const Footer: React.VFC<Props> = () => (
  <footer className={footerStyle}>
    ©︎ {year}
    <a className={aStyle} href="https://twitter.com/poke_kiyomaro">
      @poke_kiyomaro
    </a>
  </footer>
);
