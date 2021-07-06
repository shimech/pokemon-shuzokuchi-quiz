import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';

import { BLACK, BLUE, WHITE } from '@/constants/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const headerStyle = css`
  background-color: ${BLACK};
  width: 100vw;
  min-width: 1080px;
  height: 72px;
  position: relative;
`;

const imageStyle = css`
  display: inline-block;
  margin: 16px 0 0 24px;
  width: 40px;
  height: 40px;
`;

const titleStyle = css`
  display: inline-block;
  color: ${WHITE};
  font-family: 'pokemon-font';
  font-weight: bold;
  font-size: 24px;
  line-height: 72px;
  margin: 0 0 0 24px;
  position: absolute;
  top: -4px;
`;

const buttonStyle = css`
  float: right;
  height: 72px;
  width: 144px;
  font-family: 'pokemon-font';
  font-size: 24px;
  text-align: center;
  position: absolute;
  right: 36px;
  color: ${WHITE};
  background-color: ${BLACK};
  transition: all 0.5s;
  &:hover {
    color: ${WHITE};
    background-color: ${BLUE};
  }
`;

export const Header: React.VFC<Props> = () => (
  <header className={headerStyle}>
    <img
      className={imageStyle}
      src="/images/monster-ball.png"
      alt="Monster Ball Icon"
    />
    <p className={titleStyle}>Pokémon Shuzokuchi Quiz</p>
    <Link href="/">
      <button className={buttonStyle}>HOME</button>
    </Link>
  </header>
);
