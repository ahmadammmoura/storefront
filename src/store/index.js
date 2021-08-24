import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './reducers/products';
import categorys from './reducers/categories'
import cart from './reducers/cart'
const reducers = combineReducers({ products, categorys,cart});


export default createStore(reducers, composeWithDevTools());