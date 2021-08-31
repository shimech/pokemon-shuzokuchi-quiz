import { css } from '@emotion/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from '@/domains/pokemon';
import { RootState } from '@/store';
import { openHint, Hint } from '@/store/openedHint';
import { increment } from '@/store/result';

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
    dispatch(increment('hint'));
    dispatch(openHint(hint));
  };

  return (
    <button
      css={(theme) => css`
        background-color: ${theme.colors.black};
        height: 200px;
        justify-self: center;
        min-width: 150px;
        width: 80%;
        p {
          color: ${theme.colors.white};
          font-size: 20px;
        }
        &:hover {
          background-color: ${theme.colors.blue};
          transition: background-color 0.5s;
        }
        &:disabled {
          background-color: ${theme.colors.gray};
          cursor: default;
        }
        &:disabled p {
          color: ${theme.colors.darkGray};
        }
      `}
      onClick={handleClick}
      disabled={opened}
    >
      {text}
    </button>
  );
};
