import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { useQuizIds } from '@/hooks/useQuizIds';

import { isStaging } from '@/utils';

export const useUrl = (): string => {
  const { numQuestion } = useSelector((state: RootState) => state.result);

  const quizIds = useQuizIds();

  const [url, setUrl] = useState('');

  useEffect(() => {
    const id: string = quizIds[numQuestion - 1];
    const url: string = isStaging(location.hostname)
      ? `/pokemon-shuzokuchi-quiz-neo/quiz/${id}`
      : `/quiz/${id}`;
    setUrl(url);
  }, [quizIds, numQuestion]);

  return url;
};
