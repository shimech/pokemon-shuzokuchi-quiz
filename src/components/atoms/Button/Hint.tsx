import React from 'react';
import { css } from '@emotion/css';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { openHint, Hint } from '@/store/openedHint';

import { Pokemon } from '@/domains/pokemon';

import { WHITE, BLUE, BLACK, GRAY, DARK_GRAY } from '@/constants/color';

type Props = {
  pokemon: Pokemon;
  hint: Hint;
};

const defaultText = {
  type: 'タイプ',
  ability: 'とくせい',
  region: '地方',
};

export const HintButton: React.VFC<Props> = (props) => {
  const { pokemon, hint } = props;
  const openedHint = useSelector((state: RootState) => state.openedHint);
  const opened = openedHint[hint];
  const dispatch = useDispatch();

  const openedText = (): JSX.Element => {
    switch (hint) {
      case 'type':
        return (
          <>
            {pokemon.type.map((type) => (
              <p key={type}>{type}</p>
            ))}
          </>
        );
      case 'ability':
        return (
          <>
            {pokemon.ability.normal.map((ability) => (
              <p key={ability}>{ability || '-'}</p>
            ))}
            <p>{pokemon.ability.special || '-'}</p>
          </>
        );
      case 'region':
        return <p>{pokemon.region}</p>;
    }
  };

  const text = opened ? openedText() : <p>{defaultText[hint]}</p>;

  const handleClick = () => {
    dispatch(openHint(hint));
  };

  const style = css`
    background-color: ${BLACK};
    width: 80%;
    min-width: 150px;
    height: 200px;
    justify-self: center;
    & p {
      color: ${WHITE};
      font-size: 20px;
    }
    &:hover {
      transition: background-color 0.5s;
      background-color: ${BLUE};
    }
    &:disabled {
      background-color: ${GRAY};
      cursor: default;
    }
    &:disabled p {
      color: ${DARK_GRAY};
    }
  `;

  return (
    <button onClick={handleClick} disabled={opened} className={style}>
      {text}
    </button>
  );
};
