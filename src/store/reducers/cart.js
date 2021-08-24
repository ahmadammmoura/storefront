const initialState = []


const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CART':
      return [...state, payload];
    case 'REMOVE_CART':
      return state.filter((cart) => cart.id !== payload);
    default:
      return state;
  }
};

export default cartReducer