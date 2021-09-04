import React from 'react';
import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => <>{props.pokemon}</>;
