import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/cart.scss';
import {removeCart} from '../store/actions/'


function SimpleCart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const condition = state.length ? true : false
  console.log(state)
  return (
    <>
      {condition && <ul className="hList">
        <li>
          <a href={()=>false} className="menu">
            <h2 className="menu-title">cart({state.length})</h2>
            <ul className="menu-dropdown">
              {state.map(item => <li key={item.id} onClick={()=>dispatch(removeCart(item.id))}>{item.name}</li>)}
            </ul>
          </a>
        </li>
      </ul>}
    </>
  );
}

export default SimpleCart;
