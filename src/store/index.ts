import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import quizIdsReducer from './quizIds';
import resultReducer from './result';

const reducer = combineReducers({
  quizIds: quizIdsReducer,
  result: resultReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export default store;
