import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { isStaging } from '@/utils';

export const useUrl = (): string => {
  const { quizIds } = useSelector((state: RootState) => state.quizIds);
  const { numQuestion } = useSelector((state: RootState) => state.result);

  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log(numQuestion);
    const id: string = quizIds[numQuestion - 1];
    const url: string = isStaging(location.hostname)
      ? `/pokemon-shuzokuchi-quiz-neo/quiz/${id}`
      : `/quiz/${id}`;
    setUrl(url);
  }, [quizIds, numQuestion]);

  return url;
};
