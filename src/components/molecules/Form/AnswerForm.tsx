import React from 'react';
import { css } from '@emotion/css';
import { AnswerInput } from '@/components/atoms/Input';
import { AnswerSubmit } from '@/components/atoms/Button';

const formStyle = css`
  text-align: center;
  margin: 48px 0;
`;

export const AnswerForm: React.VFC = () => (
  <>
    <form className={formStyle}>
      <AnswerInput />
      <AnswerSubmit />
    </form>
  </>
);
