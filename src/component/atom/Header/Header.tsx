import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/css';

import { BLACK, BLUE, WHITE } from '@/constant/color';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const headerStyle = css`
  background-color: ${BLACK};
  width: 100vw;
  min-width: 1080px;
  height: 60px;
  position: relative;
`;

const imageStyle = css`
  display: inline-block;
  margin: 9px 0 0 24px;
`;

const titleStyle = css`
  display: inline-block;
  color: ${WHITE};
  font-family: 'pokemon-font';
  font-weight: bold;
  font-size: 24px;
  line-height: 60px;
  margin: 0 0 0 24px;
  position: absolute;
  top: -4px;
`;

const buttonStyle = css`
  float: right;
  height: 60px;
  width: 120px;
  font-family: 'pokemon-font';
  font-size: 24px;
  position: absolute;
  right: 36px;
  color: ${WHITE};
  background-color: ${BLUE};
  transition: all 0.5s;
  &:hover {
    color: ${BLACK};
    background-color: ${WHITE};
  }
`;

export const Header: React.VFC<Props> = () => {
  return (
    <header className={headerStyle}>
      <div className={imageStyle}>
        <Image
          src="/img/monster-ball.png"
          alt="Monster Ball Icon"
          width={40}
          height={40}
        />
      </div>
      <p className={titleStyle}>Pokémon Shuzokuchi Quiz</p>
      <Link href="/">
        <button className={buttonStyle}>HOME</button>
      </Link>
    </header>
  );
};
