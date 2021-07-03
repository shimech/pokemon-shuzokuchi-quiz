import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import quizIdsReducer from './quizIds';

const reducer = combineReducers({
  quizIds: quizIdsReducer,
});

const store = configureStore({ reducer });

export default store;
