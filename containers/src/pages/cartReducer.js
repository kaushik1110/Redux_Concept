import { ADD_TO_CART } from "../pages/cart.action";

export const cartInitialState = [];

const cartReducer = (state= cartInitialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload];
            default:
                return state; 
    }
}  
export default cartReducer;