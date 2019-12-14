import React from 'react';
import {createStore, combineReducers, compose} from 'redux';
import TodoReducer from './ducks/todo';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
export default createStore(combineReducers({
    todo: TodoReducer,
}), composeEnhancers());

