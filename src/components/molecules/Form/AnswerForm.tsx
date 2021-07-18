import React from 'react';
import { AnswerInput } from '@/components/atoms/Input';
import { AnswerSubmit } from '@/components/atoms/Button';
import { css } from '@emotion/css';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const formStyle = css`
  text-align: center;
  margin: 48px 0;
`;

export const AnswerForm: React.VFC<Props> = () => (
  <>
    <form className={formStyle}>
      <AnswerInput />
      <AnswerSubmit />
    </form>
  </>
);
