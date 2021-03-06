import {createStore, combineReducers, compose} from 'redux';
import TodoReducer from './ducks/todo';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReducer = combineReducers({
  todo: TodoReducer,
});

export type AppState = ReturnType<typeof rootReducer>; 

export default createStore(rootReducer, composeEnhancers());

