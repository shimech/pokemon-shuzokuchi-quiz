import React from 'react';
import { useNumQuestion } from './useNumQuestion';
import { useQuizIds } from './useQuizIds';

export const useUrl = (): string => {
  const quizIds = useQuizIds();
  const numQuestion = useNumQuestion();
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    const id: string = quizIds[numQuestion];
    const url = id ? `/quiz/${id}` : '/result';
    setUrl(url);
  }, [quizIds, numQuestion]);

  return url;
};
