const initialState = {
  activeCategory: '',
  categoryList: [
    {
      id: 1,
      name: 'men',
      displayName: "Men's Fashion",
      description: 'The biggest Spring/Summer 2021 trends for men',
    },
    {
      id: 2,
      name: 'women',
      displayName: "women's Fashion",
      description: 'The biggest Spring/Summer 2021 trends for women',
    },
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
        ...state
      };

    default:
      return state;
  }
};

export default categoryReducer;
