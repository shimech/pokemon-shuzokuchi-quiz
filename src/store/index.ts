import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import quizIdsReducer from './quizIds';
import resultReducer from './result';
import conditionReducer from './condition';

const reducer = combineReducers({
  quizIds: quizIdsReducer,
  result: resultReducer,
  condition: conditionReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export default store;
