import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './reducers/products';
import categorys from './reducers/categories'
const reducers = combineReducers({ products, categorys});
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();