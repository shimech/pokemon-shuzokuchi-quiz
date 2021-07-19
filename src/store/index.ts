import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import quizIdsReducer from './quizIds';
import resultReducer from './result';
import conditionReducer from './condition';
import openedHintReducer from './openedHint';

const reducer = combineReducers({
  quizIds: quizIdsReducer,
  result: resultReducer,
  condition: conditionReducer,
  openedHint: openedHintReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export default store;
