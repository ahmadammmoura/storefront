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