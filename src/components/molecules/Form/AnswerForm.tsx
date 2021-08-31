import { css } from '@emotion/react';
import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { AnswerSubmit } from '@/components/atoms/Button';
import { AnswerInput } from '@/components/atoms/Input';
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
          margin: 48px 0;
          text-align: center;
        `}
        onSubmit={handleSubmit}
      >
        <AnswerInput answer={answer} setAnswer={setAnswer} />
        <AnswerSubmit />
      </form>
    </>
  );
};
