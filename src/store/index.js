import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products';
const reducers = combineReducers({ product: productReducer });
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();