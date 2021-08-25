import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './reducers/products';
import categorys from './reducers/categories'
import cart from './reducers/cart'
import thunk from 'redux-thunk';

const reducers = combineReducers({ products, categorys,cart});


export default createStore(reducers,applyMiddleware(thunk));