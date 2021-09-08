import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import conditionReducer from './condition';
import hintOpenReducer from './hintOpen';
import quizIdsReducer from './quizIds';
import resultReducer from './result';

const reducer = combineReducers({
  quizIds: quizIdsReducer,
  result: resultReducer,
  condition: conditionReducer,
  hintOpen: hintOpenReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export default store;
