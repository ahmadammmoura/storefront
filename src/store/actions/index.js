import axios from 'axios';

export const handleCategory = (category) => {
  console.log(category)
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    console.log("ssss",raw.data.results)
    dispatch(loadcategorys(raw.data.results));
  };
};

export const loadcategorys = (category) => {
  
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