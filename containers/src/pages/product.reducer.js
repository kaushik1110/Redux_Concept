import { ADD_PRODUCTS } from "./product.types";

export const productsInitialState = [];

const productReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...state, action.payload];
      default:
          return state;
  }
};

export default productReducer;
