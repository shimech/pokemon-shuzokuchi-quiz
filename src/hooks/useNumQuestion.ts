import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useNumQuestion = (): number => {
  const result = useSelector((state: RootState) => state.result);
  return result.filter((item) => item.isCorrect !== null).length;
};
