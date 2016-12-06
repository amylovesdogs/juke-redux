import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from './reducers/root-reducer';

const store = createStore(
  rootReducer
  // applyMiddleware(thunkMiddleware)
);

export default store;