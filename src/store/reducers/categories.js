const initialState = {
  activeCategory: '',
  categoryList: [
    
  ],
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: payload,
      };

    case 'LOAD_CATEGORY':
      return {
        ...state,categoryList: payload
      };

    default:
      return state;
  }
};

export default categoryReducer;
