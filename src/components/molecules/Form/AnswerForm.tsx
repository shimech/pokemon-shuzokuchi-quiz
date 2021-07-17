import React, { useState, FormEvent } from 'react';
import { css } from '@emotion/css';
import { AnswerInput } from '@/components/atoms/Input';
import { AnswerSubmit } from '@/components/atoms/Button';

import { Pokemon } from '@/domains/pokemon';

const formStyle = css`
  text-align: center;
  margin: 48px 0;
`;

type Props = { pokemon: Pokemon };

export const AnswerForm: React.VFC<Props> = (props) => {
  const { pokemon } = props;
  const [answer, setAnswer] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(answer === pokemon.name);
    e.preventDefault();
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
