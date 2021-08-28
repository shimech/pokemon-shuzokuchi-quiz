import { css } from '@emotion/react';
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { BLUE } from '@/constants/color';
import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const StatusChart: React.VFC<Props> = (props) => {
  const { pokemon } = props;

  const data = [
    {
      name: `HP: ${pokemon.status.hitpoint}`,
      value: pokemon.status.hitpoint,
    },
    {
      name: `こうげき: ${pokemon.status.attack}`,
      value: pokemon.status.attack,
    },
    {
      name: `ぼうぎょ: ${pokemon.status.block}`,
      value: pokemon.status.block,
    },
    {
      name: `すばやさ: ${pokemon.status.speed}`,
      value: pokemon.status.speed,
    },
    {
      name: `とくぼう: ${pokemon.status.defense}`,
      value: pokemon.status.defense,
    },
    {
      name: `とくこう: ${pokemon.status.contact}`,
      value: pokemon.status.contact,
    },
  ];

  return (
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <span
        css={css`
          font-size: 32px;
          left: 175px;
          position: relative;
        `}
      >
        合計: {pokemon.status.total}
      </span>
      <div
        css={css`
          position: relative;
        `}
      >
        <RadarChart width={500} height={420} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis
            type="number"
            angle={90}
            domain={[0, 150]}
            tickCount={4}
            scale="linear"
            orientation="middle"
          />
          <Radar
            name={pokemon.name}
            dataKey="value"
            stroke={BLUE}
            fill={BLUE}
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};
