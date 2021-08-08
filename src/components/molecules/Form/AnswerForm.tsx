import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import { AnswerInput } from '@/components/atoms/Input';
import { AnswerSubmit } from '@/components/atoms/Button';

import { Pokemon } from '@/domains/pokemon';

type Props = {
  pokemon: Pokemon;
  setIsDisplayModal: Dispatch<SetStateAction<boolean>>;
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
};

export const AnswerForm: React.VFC<Props> = (props) => {
  const { pokemon, setIsDisplayModal, setIsCorrect } = props;
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsCorrect(answer === pokemon.name);
    setAnswer('');
    setIsDisplayModal(true);
  };

  return (
    <>
      <form
        css={css`
          text-align: center;
          margin: 48px 0;
        `}
        onSubmit={handleSubmit}
      >
        <AnswerInput answer={answer} setAnswer={setAnswer} />
        <AnswerSubmit />
      </form>
    </>
  );
};
