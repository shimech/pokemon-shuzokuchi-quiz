import * as React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

import { Pokemon } from '@/domains/pokemon';

import { BLUE } from '@/constants/color';

type Props = { pokemon: Pokemon };

export const StatusChart: React.VFC<Props> = (props) => {
  const { pokemon } = props;
  const FULL_MARK = 150;

  const data = [
    {
      name: `HP: ${pokemon.status.hitpoint}`,
      value: pokemon.status.hitpoint,
      fullMark: FULL_MARK,
    },
    {
      name: `こうげき: ${pokemon.status.attack}`,
      value: pokemon.status.attack,
      fullMark: FULL_MARK,
    },
    {
      name: `ぼうぎょ: ${pokemon.status.block}`,
      value: pokemon.status.block,
      fullMark: FULL_MARK,
    },
    {
      name: `すばやさ: ${pokemon.status.speed}`,
      value: pokemon.status.speed,
      fullMark: FULL_MARK,
    },
    {
      name: `とくぼう: ${pokemon.status.defense}`,
      value: pokemon.status.defense,
      fullMark: FULL_MARK,
    },
    {
      name: `とくこう: ${pokemon.status.contact}`,
      value: pokemon.status.contact,
      fullMark: FULL_MARK,
    },
  ];

  //   return <>{pokemon.name}</>;
  return (
    <>
      <p>合計: {pokemon.status.total}</p>
      <RadarChart outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={90} domain={[0, 150]} tickCount={4} />
        <Radar
          name={pokemon.name}
          dataKey="value"
          stroke={BLUE}
          fill={BLUE}
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
};
