const initialState = {
  products: []
};

const productList = [
  {
    id: 1,
    name: 'T-SHIRT',
    category: 'men',
    img:'https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png',
    price: 50,
  },
  {
    id: 2,
    name: 'jeans',
    category: 'men',
    img:'https://i5.walmartimages.com/asr/584e7539-e3a6-48a0-9ff8-d4ddfd07c68f_1.c2e214783681dd9d39d7f757ef0f424f.jpeg',
    price: 80,
  },
  {
    id: 3,
    name: 'boots',
    category: 'women',
    img: 'https://cdn-images.farfetch-contents.com/17/10/10/29/17101029_34723199_1000.jpg',
    price: 25,
  },
  {
    id: 4,
    name: 'jacket',
    category: 'women',
    img: 'https://media2.s-nbcnews.com/j/newscms/2020_51/3436191/4166jf0x1gl-5fda4e8a0a921_68d0c3c0048450e05d8ad79c0c35e465.fit-720w.jpg',
    price: 25,
  },
  {
    id: 5,
    name: 'dress',
    category: 'women',
    img: 'https://ae01.alicdn.com/kf/HTB1dZ3XByOYBuNjSsD4q6zSkFXaf/V-Neck-Lace-Knee-Length-Women-s-Dresses-With-Short-Sleeves-Dress-For-Women-Dress-Female.jpg_Q90.jpg_.webp',
    price: 25,
  },
];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    
    case 'SELECT_CATEGORY':
      return {
        products: productList.filter((prod) => prod.category === payload),
      };

    default:
      return state;
  }
};

export const handleCategory = (category) => {
  console.log(category)
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  };
};

export default productReducer;