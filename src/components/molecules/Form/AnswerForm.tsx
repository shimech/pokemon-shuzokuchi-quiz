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
  setIsDisplayModal: Dispatch<SetStateAction<boolean>>;
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
};

export const AnswerForm: React.VFC<Props> = (props) => {
  const { pokemon, setIsDisplayModal, setIsCorrect } = props;
  const [answer, setAnswer] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCorrect(answer === pokemon.name);
    setAnswer('');
    setIsDisplayModal(true);
  };

  return (
    <>
      <form className={formStyle} onSubmit={onSubmit}>
        <AnswerInput answer={answer} setAnswer={setAnswer} />
        <AnswerSubmit />
      </form>
    </>
  );
};
