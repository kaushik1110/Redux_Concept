import { ADD_TO_CART, SHOW_CART } from "./types";

export const showCart = (direction) => ({
      type:SHOW_CART,
      payload: direction,
    });
export const addToCart = (product) => ({
      type:ADD_TO_CART,
      payload: product,
    });

    //Action Creators