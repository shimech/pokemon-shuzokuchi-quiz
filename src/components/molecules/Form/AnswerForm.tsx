import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/css';
import { AnswerInput } from '@/components/atoms/Input';
import { AnswerSubmit } from '@/components/atoms/Button';

import { Pokemon } from '@/domains/pokemon';

const formStyle = css`
  text-align: center;
  margin: 48px 0;
`;

type Props = {
  pokemon: Pokemon;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
};

export const AnswerForm: React.VFC<Props> = (props) => {
  const { pokemon, setIsDisplay } = props;
  const [answer, setAnswer] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(answer === pokemon.name);
    setIsDisplay(true);
  };

  return (
    <>
      <form className={formStyle} onSubmit={onSubmit}>
        <AnswerInput setAnswer={setAnswer} />
        <AnswerSubmit />
      </form>
    </>
  );
};
