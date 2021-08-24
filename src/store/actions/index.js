export const handleCategory = (category) => {
  console.log(category)
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  };
};


export const loadcategorys = (category) => {
  console.log(category)
  return {
    type: 'LOAD_CATEGORY',
    payload: category,
  };
};

export const addCart = (product) => {
  return {
    type: 'ADD_CART',
    payload: product,
  };
};

export const removeCart = (id) => {
  console.log(id)
  return {
    type: 'REMOVE_CART',
    payload: id
  };
};